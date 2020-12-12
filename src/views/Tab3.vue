<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>BoekenZoeker - Boekenplank</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Mijn boekenplank</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-card
          shape="round"
          v-for="(items, id) in list"
          :key="id"
          @itemadded="this.getItems"
        >
          <span v-if="!items.title">No authors to display</span>

          <h4 style="margin:10px;">Boek {{ id + 1 }}</h4>
          <ion-card-header>
            <ion-card-title>
              {{ items.title }}
            </ion-card-title>
            <span v-if="!items.authors">No authors to display</span>
            <span v-else>
              Door
              <span v-for="author in items.authors" :key="author">
                <em>
                  {{
                    index + 1 !== items.authors.length &&
                    index + 1 !== items.authors.length - 1
                      ? author
                      : index + 1 == book.items.authors.length &&
                        index + 1 !== 1
                      ? " and " + author
                      : author
                  }}
                </em>
              </span>
            </span>
            <ion-card-subtitle>
              Pagina's: {{ items.pageCount }}
            </ion-card-subtitle>
            <ion-card-subtitle> Taal: {{ items.language }} </ion-card-subtitle>

            <ion-card-subtitle>
              Book/E-book: {{ items.printType }}
            </ion-card-subtitle>
          </ion-card-header>
          <ion-button shape="round" fill="outline"
            >Meer informatie en preview</ion-button
            >
          <ion-button style="margin: 10px; padding:1px;" color="danger" shape="round">Delete</ion-button>


          <br />
        </ion-card>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonContent,
} from "@ionic/vue";

export default {
  data() {
    return {
      list: [],
      showDefault: true,
      interval: null,
      imageUrl: "",
    };
  },
  created() {
    this.interval = setInterval(this.getItems, 3000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  mounted() {
    this.getItems();
  },
  methods: {
    getItems() {
      const storedData = localStorage.getItem(["items"]);
      console.log("storedData: ", JSON.parse(storedData));
      if (storedData) {
        const ArrayData = JSON.parse(storedData);
        this.list = ArrayData;
        console.log("JA");
      } else {
        this.list = [];
      }
    },
  },

  name: "tab3",
  components: {
    IonHeader,
    IonToolbar,
    IonList,
    IonTitle,
    IonContent,
    IonPage,
  },
};
</script>
