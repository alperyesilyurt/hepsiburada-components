import Vue from "vue";
import VueRouter from "vue-router";
import ButtonPage from "./pages/ButtonPage";
import CalendarPage from "./pages/CalendarPage";
import PaginationPage from "./pages/PaginationPage";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: ButtonPage,
    },

    {
      path: "/buttonpage",
      component: ButtonPage,
    },

    {
      path: "/calendarpage",
      component: CalendarPage,
    },

    {
      path: "/paginationpage",
      component: PaginationPage,
    },
  ],

  mode: "history",
});
