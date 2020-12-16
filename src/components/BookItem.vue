<template>
  <ion-card class="carditem">
    <template v-if="volumeInfo.imageLinks">
      <a :href="volumeInfo.previewLink" target="_blank">
        <ion-img
          :src="volumeInfo.imageLinks.thumbnail"
          :alt="volumeInfo.title"
        />
      </a>
    </template>
    <template v-else>
      <img
        src="https://islandpress.org/sites/default/files/400px%20x%20600px-r01BookNotPictured.jpg"
        :alt="volumeInfo.title"
        width="128"
      />
    </template>
    <ion-card-content>
      <ion-card-title>{{ volumeInfo.title }}</ion-card-title>
      <ion-label>{{ volumeInfo.description }}</ion-label>
      <span v-if="!volumeInfo.authors">Geen auteur(s) bekend</span>
      <span v-else>
        Door
        <span v-for="(author, index) in volumeInfo.authors" :key="index">
          <em>
            {{
              index + 1 !== volumeInfo.authors.length &&
              index + 1 !== book.volumeInfo.authors.length - 1
                ? author + ", "
                : index + 1 == book.volumeInfo.authors.length && index + 1 !== 1
                ? " and " + author
                : author
            }}
          </em>
        </span>
      </span>
      <br />
      <ion-label>Rating: {{ volumeInfo.maturityRating }}</ion-label>
      <br />
      <ion-button
        v-on:click="greet"
        position="center"
        color="primary"
        shape="round"
        size="default"
        >Toevoegen aan plank</ion-button
      >
    </ion-card-content>
  </ion-card>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      myArray: [],
    };
  },
  mounted() {
    this.myArray = [];
    const storedData = localStorage.getItem(["items"]);
    if (storedData) {
      const ArrayData = JSON.parse(storedData);
      this.myArray = ArrayData;
    }
  },
  computed: {
    volumeInfo() {
      return this.book.volumeInfo;
    },
  },
  methods: {
    greet(e) {
      console.log(this.myArray);
      console.log("hallo");
      // `this` inside methods point to the Vue instance
      const bookInfo = this.volumeInfo;
      this.myArray.push(bookInfo);
      localStorage.setItem(["items"], JSON.stringify(this.myArray));
      console.log("doing a thing");
      this.$emit("itemadded");
    },
  },
};
</script>

<style scoped>
ul {
  padding: 0;
}

ul li {
  display: inline-block;
}

ul li:first-child {
  list-style: none;
}

.carditem {
  box-shadow: 0 1px 1px 1px #0e0e0e78;
}

ion-img {
  width: 100%;
  height: 350px;
}
</style>
