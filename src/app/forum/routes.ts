import { RouteConfig } from 'vue-router/types/router';
export const ForumRoutes: RouteConfig[] = [
  {
    path: '/forum/home',
    name: 'forumhome',
    component: () => import(/* webpackChunkName: "form" */ './home/home.vue').then((m: any) => m.default),
  },
];
