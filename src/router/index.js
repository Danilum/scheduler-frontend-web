import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/LoginPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
        import("../views/LoginPage.vue"),
  },
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
      import("../views/ListofCoursesView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
