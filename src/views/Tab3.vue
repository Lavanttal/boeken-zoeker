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
          <span v-if="!items.title">Geen auteur(s) bekend</span>

          <h4 style="margin:10px;">Boek {{ id + 1 }}</h4>
          <ion-card-header>
            <ion-card-title>
              {{ items.title }}
            </ion-card-title>
            <span v-if="!items.authors">Geen auteur(s) bekend</span>
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
          <a :href="items.previewLink">
            <ion-button style="margin: 10px" shape="round" fill="outline"
              >Koop / meer informatie</ion-button
            >
          </a>

          <ion-item>
            <ion-label>Status</ion-label>
            <ion-select
              @ionChange="store"
              v-model="options"
              :placeholder="this.myArray[id]"
            >
              <ion-select-option value="Gelezen">Gelezen</ion-select-option>
              <ion-select-option value="Nog niet gelezen"
                >Nog niet gelezen</ion-select-option
              >
              <ion-select-option value="Momenteel aan het lezen"
                >Aan het lezen</ion-select-option
              >
            </ion-select>
          </ion-item>
          <div class="trash">
            <ion-icon
              :icon="trashOutline"
              @click="removeItem"
              style="margin-top: 9px; margin-right: 10px;position: absolute; top: 0px; right: 0px;font-size: 30px;"
            />
          </div>

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
import { trashOutline } from "ionicons/icons";
export default {
  data() {
    return {
      selected: "",
      list: [],
      id: "",
      listTwo: [],
      savedName: [],
      showDefault: true,
      interval: null,
      imageUrl: "",
      trashOutline,
      indexOfItem: [],
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
    if (localStorage.options) {
      this.savedName = localStorage.options;
    }
    this.myArray = [];
    const storedData2 = localStorage.getItem(["options"]);
    if (storedData2) {
      const ArrayData2 = JSON.parse(storedData2);
      this.myArray = ArrayData2;
    }
  },
  methods: {
    store(event) {
      const name = event.detail.value;
      // console.log("name" + name);
      // const selected = localStorage.setItem(["options"], name);

      console.log(this.myArray);
      console.log("hallo");
      // `this` inside methods point to the Vue instance
      //this.myArray.push(name);
      this.myArray.splice(this.indexOfItem, this.id, name);
      //  this.myArray.push(name);

      localStorage.setItem("options", JSON.stringify(this.myArray));
      console.log("test" + this.myArray);
    },
    removeItem(id) {
      const listStorage = localStorage.getItem("items");
      const listStorage2 = localStorage.getItem("options");

      const newList = JSON.parse(listStorage);
      const newList2 = JSON.parse(listStorage2);

      newList.splice(id, 1);
      newList2.splice(id, 1);

      localStorage.setItem("items", JSON.stringify(newList));
      localStorage.setItem("options", JSON.stringify(newList2));

      this.getItems();
    },
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
      const storedData2 = localStorage.getItem("options");
      console.log("storedData2: ", JSON.parse(storedData2));
      if (storedData2) {
        const ArrayData2 = JSON.parse(storedData);
        this.listTwo = ArrayData2;
        console.log("JA status" + this.listTwo);
      } else {
        this.listTwo = [];
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
