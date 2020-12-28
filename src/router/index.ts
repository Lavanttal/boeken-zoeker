import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Tabs from "../views/Tabs.vue";
import useFirebaseAuth from "../hooks/firebase-auth";
import firebase from "firebase";
const state = useFirebaseAuth();

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "tab1",
    redirect: "/tabs/tab1",
  },
  {
    path: "/tabs/",
    component: Tabs,
    children: [
      {
        path: "",
        redirect: "tab1",
      },
      {
        path: "tab1",
        component: () => import("@/views/Tab1.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "tab2",
        component: () => import("@/views/Tab2.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "tab3",
        component: () => import("@/views/Tab3.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/login",
        name: "login",
        component: () => import("@/views/LoginPage.vue"),
      },
      {
        path: "/signup",
        name: "SignUp",
        component: () => import("@/views/SignUp.vue"),
      },
      {
        path: "/forgot-password",
        name: "forgot-password",
        component: () => import("@/views/ForgotPassword.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("login");
  else if (!requiresAuth && currentUser) next("");
  else next();
});
export default router;
