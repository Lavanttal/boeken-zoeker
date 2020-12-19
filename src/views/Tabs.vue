<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="search"/>
          <ion-label>Zoeken</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="book" />
          <ion-label>Boekenplank</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="path1" href="/tabs/tab1"
          v-on:click="changeColor"
          color="primary"
          shape="round"
          style="height: 35px;width: 35px;"
        >
          <ion-icon :icon="moon"></ion-icon>

        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { ellipse, square, triangle, search, home, book, moon, } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, },
  setup() {
    return {
      moon,
      ellipse, 
      square, 
      triangle,
      search,
      home,
      book,
    }
  },
  methods: {
    changeColor(event) {
      console.log("switched theme");
      const darkToggler = document.getElementById("darkToggler");
      darkToggler.classList.toggle("dark");
    },
  }
}
</script>