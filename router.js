
import Vue from 'vue'
import Router from 'vue-router'
import { scrollBehavior } from '~/utilities'

Vue.use(Router)

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m)

const routes = [
  { path: "/", name: "home", component: page("home.vue") },

  { path: "/dev/atoms", name: "atoms", component: page("dev/atoms.vue") },

  { path: "/signin", name: "signin", component: page("auth/signin.vue") },
  { path: "/signup", name: "signup", component: page("auth/signup.vue") },
  {
    path: "/password/reset",
    name: "password.request",
    component: page("auth/password/email.vue")
  },
  {
    path: "/password/reset/:token",
    name: "password.reset",
    component: page("auth/password/reset.vue")
  },
  {
    path: "/email/verify/:id",
    name: "verification.verify",
    component: page("auth/verification/verify.vue")
  },
  {
    path: "/email/resend",
    name: "verification.resend",
    component: page("auth/verification/resend.vue")
  },
  {
    path: "/me/dashboard",
    name: "dashboard",
    component: page("me/settings.vue")
  },

  {
    path: "/settings",
    component: page("settings/index.vue"),
    children: [
      { path: "", redirect: { name: "settings.profile" } },
      {
        path: "profile",
        name: "settings.profile",
        component: page("settings/profile.vue")
      },
      {
        path: "password",
        name: "settings.password",
        component: page("settings/password.vue")
      },
      {
        path: "addresses",
        name: "settings.addresses",
        component: page("settings/addresses.vue")
      },
      {
        path: "payments",
        name: "settings.payments",
        component: page("settings/payments.vue")
      }
    ]
  }
];

export function createRouter() {
  return new Router({
    routes,
    scrollBehavior,
    mode: 'history'
  })
}
