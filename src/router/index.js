import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/LoginPage.vue";
import {isLoggedIn} from "../views/LoginPage";
const routes = [
  {
    path: "/",
    name:"Home",
    component: () => import("../views/Home.vue"),
    children:[
      {
        path: "/about",
        name: "about",
        component: () =>
            import("../views/AboutView.vue"),
      },
      {
        path: "/addcourse",
        name: "addcourse",
        component: () =>
            import("../views/AddCourseView.vue"),
        // import(/* webpackChunkName: "about" */ "../views/AddCourseView.vue"),
      },
      {
        path: "/generator",
        name: "generator",
        component: () =>
            import("../views/timetable/Timetable.vue"),
      },
      {
        path: "/listofcourses",
        name: "listofcourses",
        component: () =>
            import("../views/ListofCoursesView"),
      },
    ],
    beforeEnter: (to, from) => {
      // reject the navigation
      if (!isLoggedIn){
        return "/login"
      }
      return true
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
        import("../views/LoginPage.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
