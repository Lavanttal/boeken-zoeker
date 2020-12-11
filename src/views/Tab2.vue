<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>BoekenZoeker</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-searchbar
        animated
        @keyup.enter="search"
        debounce="100"
        type="text"
        v-model="keyword"
        value="READY PLAYER TWO"
      ></ion-searchbar>
      <div class="content">
        <div class="query">
          <div>
            <ion-item>
              <ion-label position="stacked" color="primary" for="order"
                >Sorteren op basis van</ion-label
              >&nbsp;
              <ion-select name="order" v-model="orderBy" @change="search">
                <ion-select-option value="newest">Publicatiedatum</ion-select-option>
                <ion-select-option value="relevance"
                  >Relevantie</ion-select-option
                >
              </ion-select>
            </ion-item>
          </div>
        </div>
        <div class="content">
          <div class="loading" v-if="loadState == 'loading'"></div>
          <BookList v-if="loadState == 'success'" :books="books" />
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import axios from "axios";
import BookList from "@/components/BookList";
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";

export default defineComponent({
    beforeMount() {
    this.bestSeller();
  },
  data() {
    return {
      books: [],
      keyword: "",
      orderBy: "newest",
      maxResults: "20",
      loadState: "",
    };
  },
  methods: {
    bestSeller() {
      axios
        .get(
          `https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=Y6JSCmMtdMzP8yqnqX0mL5C324Ec3jHY`
        )
        .then((response) => {
          console.log(response.data.results[0]);
          this.bestSellers = response.data.results[0].book_details[0].title;
          this.bestSellersISBN = response.data.results[0].isbns[1].isbn13;
          console.log(this.bestSellers);
          axios
            .get(
              `https://www.googleapis.com/books/v1/volumes?q=isbn:${this.bestSellersISBN}`
            )
            .then((response) => {
              this.bestSellersImage =
                response.data.items[0].volumeInfo.imageLinks.thumbnail;
              console.log(this.bestSellersImage);
            });
        });
    },

    search() {
      this.loadState = "loading";
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=intitle:${this.keyword}&orderBy=${this.orderBy}&maxResults=${this.maxResults}`
        )
        .then((response) => {
          console.log(response.data.items);
          this.books = response.data.items;
          this.loadState = "success";
        });
    },
  },

  name: "tab2",
  components: {
    BookList,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonSearchbar,
    IonSelect,
    IonSelectOption,
  },
});
</script>
