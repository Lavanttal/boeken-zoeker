<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Login op BoekenZoeker</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-label>Gebruikersnaam</ion-label>
        <ion-input name="username" type="text" placeholder="Username" @ionChange="handleChange" />
      </ion-item>
      <ion-item>
        <ion-label>Wachtwoord</ion-label>
        <ion-input
          name="password"
          type="password"
          placeholder="Password"
          @ionChange="handleChange"
        />
      </ion-item>
      <ion-button @click="doLogin">LOGIN</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import useFirebaseAuth from "../hooks/firebase-auth";
import { defineComponent, ref } from "vue";
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
import { useRouter } from "vue-router";
export default defineComponent({
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
  setup() {
    const state = useFirebaseAuth();
    const router = useRouter();
    const { login } = useFirebaseAuth();
    const credentials = ref<{ [key: string]: string }>({
      username: "",
      password: "",
    });

    const handleChange = (e: CustomEvent) => {
      console.log(e);
      const name: string = (e?.target as any)?.name;
      credentials.value[name as string] = e.detail.value;
    };

    /**
     *
     */
    const handleAlert = (message: string, isError = false) => {
      alertController
        .create({
          header: isError ? "Foutmelding" : "Notice",
          message: message,
          buttons: ["OK"],
        })
        .then((t) => t.present());
    };

    /**
     *
     *
     */
    const doLogin = async () => {
      try {
        const { username, password } = credentials.value;
        await state.login(username, password);
        router.push({name : "tab1", replace: true });
      } catch (error) {
        console.log(error);
        handleAlert(error.message, true);
      }
    };
    return {
      ...state,
      credentials,
      doLogin,
      handleChange,
    };
  },
});
</script>

<style scoped>
ion-item {
  --padding-start: 0px;
}
</style>