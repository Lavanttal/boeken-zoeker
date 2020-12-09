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
      <ion-card>
        <ion-card-content>
          <ion-card-header>
            <h1>Most sold today:</h1>
            <h1>{{ bestSellers }}</h1>
            <p>ISBN: {{ bestSellersISBN }}</p>
            <img :src="bestSellersImage" />
          </ion-card-header>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import axios from "axios";
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

export default defineComponent({
  beforeMount() {
    this.bestSeller();
  },
  data() {
    return {};
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
  },

  name: "tab1",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
});
</script>
