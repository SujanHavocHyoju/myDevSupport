import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index';
import HomeView from '@/views/HomeView.vue'
import SupportsList from '@/views/supports/SupportsList'

const SupportDetail = () => import('@/views/supports/SupportDetail');
const SupportRegistration = () => import('@/views/supports/SupportRegistration');
const ContactSupport = () => import('@/views/requests/ContactSupport');
const RequestsReceived = () => import('@/views/requests/RequestsReceived');
const Posts = () => import('@/views/posts/PostsList');

const UserAuth = () => import('@/views/auth/UserAuth');

const routes = [
  {
    path: '/', name: 'home', component: HomeView
  },
  {
    path: '/about', name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/supports', component: SupportsList
  },
  {
    path: '/supports/:id',
    component: SupportDetail,
    props: true,
    children: [
      { path: 'contact', component: ContactSupport }
    ]
  },
  {
    path: '/register', component: SupportRegistration,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/requests', component: RequestsReceived,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/posts', component: Posts, meta: {
      requiresAuth: true
    }
  },
  {
    path: '/auth', component: UserAuth, meta: {
      requiresUnauth: true
    }
  },
  {
    path: '/:notFound(.*)', component: () => import('@/views/NotFound')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(function (to, from, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/supports');
  } else {
    next();
  }
});

export default router
