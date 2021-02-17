import Vue from 'vue'

const components = {
  Footer: () => import('../..\\components\\footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c),
  Footer: () => import('../..\\components\\footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c),
  Header: () => import('../..\\components\\header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c),
  Header: () => import('../..\\components\\header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c),
  StreamerCard: () => import('../..\\components\\StreamerCard.vue' /* webpackChunkName: "components/streamer-card" */).then(c => c.default || c),
  StreamerCard: () => import('../..\\components\\StreamerCard.vue' /* webpackChunkName: "components/streamer-card" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
