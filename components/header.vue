<template>
 <header class="header" :class="[scrollPosition > 100 ? 'header-prepare-sticky': '',scrollPosition > 150 ? 'header-sticky': '',!isHomePage ? 'header-no-bg' : ''] ">
        <div class="container">

            <div class="header-wrapper">
                <div @click="$router.push('/')" class="header-logo">
                    <img class="logo_w" src="/logo.png" alt="">
                    <img class="logo_b" src="/logo_b.png" alt="">
                </div>
                <div class="header-nav">
<!--                  navItemActive-->
                    <ul>
                        <li v-for="nav_item in nav_items" :key="nav_item.id"
                            :class="[$route.path===nav_item.url? nav_item.star?'navItemActive with-star':'navItemActive':'']">
                          <nuxt-link :to="nav_item.url">{{nav_item.name}}</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="header-button">
                  <div v-if="items_in_cart.tickets.length>0">
                      <nuxt-link :data-num="items_in_cart.tickets.length" class="header-button__cart" to="/cart">корзина</nuxt-link>
                  </div>
                  <div v-else>
                   <a v-if="isHomePage" href="#" v-scroll-to="'#tickets'">купить билет</a>
                    <nuxt-link v-else to="/#tickets">купить билет</nuxt-link>
                  </div>

                </div>
            </div>

        </div>

    </header>
</template>

<script>


export default {

  transition: 'home',
  data() {
    return {
      isHomePage:null,
      scrollPosition:null,
      cart:null,
      nav_items:[
        {id:1,name:'Активности',url:'/1',star:false},
        {id:2,name:'Участники',url:'/streamers',star:true},
        {id:3,name:'FAQ',url:'/faq',star:false},
        {id:4,name:'Стать участником',url:'/how-to',star:false},
        {id:5,name:'Awards',url:'/3',star:false},
        {id:6,name:'О фестивале',url:'/4',star:false},
        {id:7,name:'Как добраться',url:'/location',star:false},
      ]

    }
  },
   watch: {
    '$route.path': function(val) {
      this.$route.path === '/' ? this.isHomePage = true : this.isHomePage = false
      this.$store.dispatch('cart/fetchCart')

    }
  },
   mounted() {
    window.addEventListener('scroll', this.updateScroll)
    this.$route.path === '/' ? this.isHomePage = true : this.isHomePage = false
    if (!this.$auth.$storage.getCookie('session_id')){
      this.$auth.$storage.setCookie('session_id', this.uuidv4())
      console.log('create session_id')
    }else {
      console.log('session_id exists')
    }
    this.$store.dispatch('cart/fetchCart')

  },
  methods: {
     updateScroll() {
      this.scrollPosition = window.scrollY
    },
    uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
  },
  computed:{
    items_in_cart(){
      return this.$store.getters['cart/getCart']
    }
  }
}
</script>


<style>
.home-enter-active, .home-leave-active { transition: opacity .5s; }
.home-enter, .home-leave-active { opacity: 0; }
</style>
