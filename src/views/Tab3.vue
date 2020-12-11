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
        
        <ion-card v-for="(items, id) in list" :key="id">
          <span>Boek #{{ id + 1 }}</span>
          <ion-card-header>
            <ion-card-title>
              {{ items.title }}
            </ion-card-title>
            <ion-card-subtitle>
              {{ items.authors }}
            </ion-card-subtitle>
          </ion-card-header>
        </ion-card>
      </ion-list>
      <h1>hoi</h1>
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
    };
  },
  beforeMount() {
    this.getItems();
  },
  methods: {
    getItems() {
      const storedData = localStorage.getItem("items");
      console.log("storedData: ", JSON.parse(storedData));
      if (storedData) {
        const ArrayData = JSON.parse(storedData);
        this.list = ArrayData;
        console.log("JA");
      } else {
        this.list = [];
        alert("NEE");
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
