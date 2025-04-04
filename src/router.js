import { createWebHistory, createRouter } from "vue-router";
import CoachDetail from "./pages/coaches/CoachDetail.vue";
import CoachList from "./pages/coaches/CoachesList.vue";
import CoachRegistration from "./pages/coaches/CoachRegistration.vue";
import ContactCoach from "./pages/requests/ContactCoach.vue";
import RequestsReceived from "./pages/requests/RequestReceived.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachList },
    {
      path: "/coaches/:id",
      component: CoachDetail,
      props: true, // pass route params as props to the component
      children: [
        { path: "contact", component: ContactCoach }, // nested: /coaches/:id/contact
      ],
    },
    { path: "/register", component: CoachRegistration },
    { path: "/request", component: RequestsReceived },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
