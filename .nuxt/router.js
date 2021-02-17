import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _74fc7a6d = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _75706713 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _aae4094e = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _491e29b6 = () => interopDefault(import('..\\pages\\how-to.vue' /* webpackChunkName: "pages/how-to" */))
const _1ac7ea02 = () => interopDefault(import('..\\pages\\location.vue' /* webpackChunkName: "pages/location" */))
const _35006679 = () => interopDefault(import('..\\pages\\streamers\\index.vue' /* webpackChunkName: "pages/streamers/index" */))
const _16952de7 = () => interopDefault(import('..\\pages\\streamers\\_streamer_slug.vue' /* webpackChunkName: "pages/streamers/_streamer_slug" */))
const _10067b11 = () => interopDefault(import('..\\pages\\ticket\\_uuid.vue' /* webpackChunkName: "pages/ticket/_uuid" */))
const _1f424756 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cart",
    component: _74fc7a6d,
    name: "cart"
  }, {
    path: "/checkout",
    component: _75706713,
    name: "checkout"
  }, {
    path: "/faq",
    component: _aae4094e,
    name: "faq"
  }, {
    path: "/how-to",
    component: _491e29b6,
    name: "how-to"
  }, {
    path: "/location",
    component: _1ac7ea02,
    name: "location"
  }, {
    path: "/streamers",
    component: _35006679,
    name: "streamers"
  }, {
    path: "/streamers/:streamer_slug",
    component: _16952de7,
    name: "streamers-streamer_slug"
  }, {
    path: "/ticket/:uuid?",
    component: _10067b11,
    name: "ticket-uuid"
  }, {
    path: "/",
    component: _1f424756,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
