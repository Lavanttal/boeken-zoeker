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
            <ion-card-title>Meest verkochte boek vandaag:</ion-card-title>
            <ion-card-title>{{ bestSellers }}</ion-card-title>
            <br />
            <img :src="bestSellersImage" />
            <h2>Auteur: {{ bestSellersAuthor }}</h2>
            <p>ISBN: {{ bestSellersISBN }}</p>
            <br />
            <a :href="bestSellersBuy">
              <ion-button style="margin:-5px" color="success" shape="round"
                >Koop</ion-button
              >
            </a>
            <br />
            <br />
            <a
              :href="
                'http://twitter.com/share?text=Vandaag is het meest verkochte boek: ' +
                  this.bestSellers +
                  ' via BoekenZoeker'
              "
            >
              <ion-button style="margin:-5px" color="secondary" shape="round"
                >Deel op Twitter</ion-button
              >
            </a>
          </ion-card-header>
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Quote van de dag</ion-card-title>
          <p>"{{ quote }}"</p>
          <p>Door: {{ quoteAuthor }}</p>
          <p>Geleverd door: They Said So</p>
          <a
            :href="
              'http://twitter.com/share?text=Quote van de dag: ' + 
              quote +
                ' via BoekenZoeker'
            "
          >
            <ion-button style="margin:-5px" color="secondary" shape="round"
              >Deel op Twitter</ion-button
            >
          </a>
        </ion-card-header>
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
          >Dark theme toggle</ion-text
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
      darkToggler.classList.toggle("dark");
    },
    bestSeller() {
      const TwitterURL = "http://twitter.com/share?text=textgoeshere";
      console.log(TwitterURL);
      axios
        .get(
          `https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=Y6JSCmMtdMzP8yqnqX0mL5C324Ec3jHY`
        )
        .then((response) => {
          console.log(response.data.results[0]);
          this.bestSellers = response.data.results[0].book_details[0].title;
          this.bestSellersBuy = response.data.results[0].amazon_product_url;
          this.bestSellersAuthor =
            response.data.results[0].book_details[0].author;
          this.bestSellersISBN = response.data.results[0].isbns[1].isbn13;
          console.log(response.data.results[1]);
          console.log(this.bestSellers);

          axios
            .get(
              `https://www.googleapis.com/books/v1/volumes?q=isbn:${this.bestSellersISBN}`
            )
            .then((response) => {
              this.bestSellersImage =
                response.data.items[0].volumeInfo.imageLinks.thumbnail;
              this.bestSellersImage2 =
                response.data.items[1].volumeInfo.imageLinks.thumbnail;
              console.log(this.bestSellersImage);
            });
          axios.get(`https://quotes.rest/qod?language=en`).then((response) => {
            console.log(response);
            this.quote = response.data.contents.quotes[0].quote;
            this.quoteAuthor = response.data.contents.quotes[0].author;

            console.log(this.quote);
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
