import { RouteConfig } from 'vue-router/types/router';
export const EmallRoutes: RouteConfig[] = [
  {
    path: '/emall/home',
    name: 'emallhome',
    component: () => import(/* webpackChunkName: "form" */ './home/home.vue').then((m: any) => m.default),
  },
];
