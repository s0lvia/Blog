import { createRouter, createWebHistory } from "vue-router";
import BlogList from '../views/BlogList.vue'
import PostDetails from '../views/PostDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "blog",
      component: BlogList,
    },
    {
      path: "/post/:id",
      name: "post",
      props: true,
      component: () => import("../views/PostDetails.vue"),
    },
  ],
});

export default router;
