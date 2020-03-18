import { RouteConfig } from 'vue-router/types/router';
export const DocumentRoutes: RouteConfig[] = [
  {
    path: '/document/home',
    name: 'documenthome',
    component: () => import(/* webpackChunkName: "form" */ './home/home.vue').then((m: any) => m.default),
  },
];
