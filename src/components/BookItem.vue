<template>
  <ion-card 
    class="carditem"
  >
    <a :href="volumeInfo.previewLink" target="_blank">
      <template v-if="volumeInfo.imageLinks">
        <img :src="volumeInfo.imageLinks.thumbnail" :alt="volumeInfo.title" />
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

        <span v-if="!volumeInfo.authors">No authors to display</span>
        <span v-else>
          By
          <span v-for="(author, index) in volumeInfo.authors" :key="index">
            <em>
              {{
                index + 1 !== volumeInfo.authors.length &&
                index + 1 !== book.volumeInfo.authors.length - 1
                  ? author + ", "
                  : index + 1 == book.volumeInfo.authors.length &&
                    index + 1 !== 1
                  ? " and " + author
                  : author
              }}
            </em>
          </span>
        </span>
      </ion-card-content>
    </a>
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
  computed: {
    volumeInfo() {
      return this.book.volumeInfo;
    },
  },
      getColor() {
      const colorsArray = [
        "primary",
        "secondary",
        "danger",
        "warning",
        "success"
      ];
      const random = colorsArray[Math.floor(Math.random() * colorsArray.length)];
      return random;
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

</style>
