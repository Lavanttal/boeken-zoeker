<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Wachtwoord reset</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <p>
          Vul hieronder het e-mail adres in dat bij je account hoort. Hiermee
          kun je je wachtwoord opnieuw instellen!
        </p>
      </ion-item>

      <br />
      <ion-item>
        <form @submit.prevent="forgetPassword">
          <div class="form-group">
            <ion-label>Email</ion-label>
            <ion-input type="email" v-model="user.email" />
          </div>
          <ion-button type="submit">Wachtwoord opnieuw instellen</ion-button>
        </form>
      </ion-item>
      <br />
              <ion-button color="primary" href="/login">
          Ga terug
        </ion-button>
            </ion-content>
  </ion-page>
</template>

<script>
import firebase from "firebase";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  alertController,
  IonLabel,
  IonInput,
  IonButton,
  IonItem,
} from "@ionic/vue";
export default {
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonInput,
    IonButton,
    IonItem,
  },
  data() {
    return {
      user: {
        email: "",
      },
    };
  },
  methods: {
    forgetPassword() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
          alertController
            .create({
              header: "Fantastisch!",
              message: "Check je e-mail om je wachtwoord opnieuw in te stellen",
              buttons: ["OK"],
            })
            .then((t) => t.present());
          this.user = {
            email: "",
          };
        })
        .catch((error) => {
          alertController
            .create({
              header: error ? "Foutmelding" : "Notice",
              message: error,
              buttons: ["OK"],
            })
            .then((t) => t.present());
        });
    },
  },
};
</script>
