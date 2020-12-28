<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Registreren op BoekenZoeker</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <ion-item>
        <ion-input
          v-model="email"
          type="text"
          class="input"
          placeholder="Email"
          required
        />
        <br />
        </ion-item>
        <ion-item>
        <ion-input
          v-model="password"
          type="password"
          class="input"
          placeholder="Password"
          required
        />
        </ion-item>
        <br />
        <ion-button v-on:click="signUp" class="button">Aanmelden</ion-button>
        <ion-button class="button">
          <ion-router-link color="light" href="/login">
            Ga terug
          </ion-router-link>
        </ion-button>
    </ion-content>
  </ion-page>
</template>
<script>
import firebase from "firebase";
import useFirebaseAuth from "../hooks/firebase-auth";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  alertController,
  IonInput,
  IonButton,
  IonItem,
} from "@ionic/vue";
export default {
  components: {
    IonContent,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonButton,
    IonItem,
  },
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          this.$router.replace("/login");
        })
        .catch((err) => {
            alertController
        .create({
          header: err ? "Foutmelding" : "Notice",
          message: err.message,
          buttons: ["OK"],
        })
        .then((t) => t.present());
        });
    },
  },
};
</script>
