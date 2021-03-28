import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import ContactUs from "../views/ContactUs";
import OurTeam from "../views/OurTeam"
import Issues from "../views/Issues";
import Opportunities from "../views/Opportunities";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs
  },
  {
    path: "/our-team",
    name: "OurTeam",
    component: OurTeam
  },
  {
    path: "/issues",
    name: "Issues",
    component: Issues,
  },
  {
    path: "/opportunities",
    name: "Opportunities",
    component: Opportunities,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
