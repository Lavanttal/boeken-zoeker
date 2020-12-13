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
            <h1>Meest verkochte boek vandaag:</h1>
            <h2>{{ bestSellers }}</h2>
            <h2>Auteur: {{ bestSellersAuthor }}</h2>
            <p>ISBN: {{ bestSellersISBN }}</p>
            <img :src="bestSellersImage" />
          </ion-card-header>
        </ion-card-content>
      </ion-card>
      <ion-item>
        <ion-button
          v-on:click="changeColor"
          color="primary"
          shape="round"
          style="height: 35px;width: 35px;"
        >
          <ion-icon :icon="moon"></ion-icon>
        </ion-button>
        <ion-text style="font-size: 20px;margin-left:10px;text-align: center;"
          >Dark Modus</ion-text
        >
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script>
import axios from "axios";
import { defineComponent } from "vue";
import { moon } from "ionicons/icons";
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
    return {
      moon,
    };
  },

  methods: {
    changeColor(event) {
      console.log("switched theme");
      const darkToggler = document.getElementById("darkToggler");
      darkToggler.classList.toggle("light");
    },
    bestSeller() {
      axios
        .get(
          `https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=Y6JSCmMtdMzP8yqnqX0mL5C324Ec3jHY`
        )
        .then((response) => {
          console.log(response.data.results[0]);
          this.bestSellers = response.data.results[0].book_details[0].title;
          this.bestSellersAuthor =
            response.data.results[0].book_details[0].author;
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
