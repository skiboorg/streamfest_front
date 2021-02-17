export { default as Footer } from '../..\\components\\footer.vue'
export { default as Header } from '../..\\components\\header.vue'
export { default as StreamerCard } from '../..\\components\\StreamerCard.vue'

export const LazyFooter = import('../..\\components\\footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyHeader = import('../..\\components\\header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyStreamerCard = import('../..\\components\\StreamerCard.vue' /* webpackChunkName: "components/streamer-card" */).then(c => c.default || c)
