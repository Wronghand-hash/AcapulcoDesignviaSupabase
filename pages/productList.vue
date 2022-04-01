<i18n lang="yaml">
en:
  takeATrip: 'Take a trip with us'
  stayFree: 'Stay Blessed'
  backHome: 'Go Back'
  home: 'Categories'
  shop: 'Shop'
  discover: 'Discover'
  lighters: 'Lighters'
  acapulcoShirt: 'Shirt'
  acapulcoMatchboxes: 'Matchboxes'
  acapulcoShorts: 'Shorts'
  acapulcoHoodies: 'Hoodies'
  collections: 'Collections'
fa:
  takeATrip: 'با ما هسمفر شید'
  stayFree: 'خوش اومدین'
  backHome: 'برگرد خونه'
  home: 'دسته بندی ها'
  shop: 'خرید'
  discover: '!کشف کن'
  lighters: 'فندک ها'
  acapulcoShirt: 'پیراهن ها'
  acapulcoMatchboxes: 'کبریت ها'
  acapulcoHoodies: 'هودی ها'
  acapulcoShorts: 'شلوارک ها'
  collections: 'کالکشن ها'
</i18n>

<template>
  <v-app>
    <!-- <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
      integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
      crossorigin="anonymous"
    /> -->
    <div id="main" class="space-y-3 overflow-hidden">
      <LazyHydrate when-idle>
        <Navbar
          v-gsap.to="{
            opacity: 1,
            duration: 1.5,
            delay: 1,
            ease: 'circ.out',
          }"
          class="navbar"
        />
      </LazyHydrate>
      <div
        v-gsap.to="{
          opacity: 1,
          duration: 1.5,
          delay: 1,
          ease: 'circ.out',
        }"
        class="w-full py-24 flex flex-col align-center justify-center"
      >
        <div class="max-w-lg h-32 px-2 surfingBoardDiv">
          <img
            src="~/assets/images/surfsUp.webp"
            class="filter drop-shadow-lg w-96 object-contain surfingBoard"
            alt=""
          />
        </div>
        <div class="w-3/4 lg:w-4/6 z-10 mt-14 NavbarTrigger">
          <h1
            class="text-7xl lg:text-9xl text-center text-mainBlue capitalize firstText opacity-0 NavbarTrigger"
          >
            {{ $t('takeATrip') }}
            <br />
            <span
              class="text-mainRed font-extrabold span text-6xl lg:text-10xl sm:hidden sm:invisible"
            >
              {{ $t('stayFree') }}
            </span>
          </h1>
        </div>
        <div
          class="lg:w-11/12 w-full h-full grid grid-cols-8 mt-24 background bg-transparent opacity-0"
        >
          <div
            class="menuNavbar sticky flex align-center justify-between py-6 col-span-8"
          >
            <div class="flex items-center">
              <NuxtLink to="/">
                <v-tooltip bottom>
                  <template #activator="{ on: tooltip }">
                    <span class="py-8 px-3" v-on="{ ...tooltip }"
                      ><v-icon light x-large color="pink lighten-5"
                        >mdi-chevron-double-left</v-icon
                      ></span
                    >
                  </template>
                  <span
                    class="font-mainFont font-extrabold text-xl text-LightBlue-50"
                    >{{ $t('backHome') }}</span
                  >
                </v-tooltip>
              </NuxtLink>
              <span
                class="menu text-4xl py-3 justify-self-center self-center rounded-md text-mainBlue font-semibold"
              >
                {{ $t('home') }}
              </span>
            </div>
            <div class="pt-2 relative text-white mr-5">
              <input
                class="border-2 placeholder-white transition ease-in duration-300 text-darkPurple hover:bg-white border-gray-300 bg-mainBlue h-10 px-5 pr-4 md:pr-16 rounded-full text-md focus:outline-none"
                type="search"
                name="search"
                placeholder="ُSearch"
              />
              <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                <svg
                  id="Capa_1"
                  class="text-white h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style="enable-background: new 0 0 56.966 56.966"
                  xml:space="preserve"
                  width="512px"
                  height="512px"
                >
                  <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            class="p-3 col-span-8 bg-LightBlue-100 self-center justify-self-center w-screen sidebar opacity-0 space-y-4 sticky h-auto flex flex-col justify-between align-center"
          >
            <div
              class="space-x-2 lg:my-5 px-1 text-center lg:text-left flex align-center justify-center"
            >
              <div class="lg:flex lg:space-x-5 font-bold">
                <span
                  class="cursor-pointer"
                  @click="changeCatagory('Lighters')"
                >
                  <h1
                    class="lg:text-3xl text-2xl bg-LightBlue-500 lg:rounded-md rounded-t-md shadow-2xl filter drop-shadow-xl px-12 py-2 sidebarText text-center flex justify-center align-end"
                  >
                    {{ $t('lighters') }}
                    <img
                      class="h-8 lg:h-12 ml-1 object-contain"
                      src="../assets/images/acapulcoLighterSmall.webp"
                    />
                  </h1>
                </span>
                <span
                  class="cursor-pointer"
                  @click="changeCatagory('Collections')"
                >
                  <h1
                    class="lg:text-3xl text-2xl bg-LightBlue-500 lg:rounded-md shadow-2xl filter drop-shadow-xl px-12 py-2 sidebarText text-center flex justify-center align-end"
                  >
                    {{ $t('collections') }}
                    <img
                      class="h-8 lg:h-12 ml-1 object-contain"
                      src="../assets/images/acapulcoCollectionSmall.webp"
                    />
                  </h1>
                </span>
                <span
                  class="cursor-pointer"
                  @click="changeCatagory('Matchboxes')"
                >
                  <h1
                    class="lg:text-3xl text-2xl bg-LightBlue-500 rounded-b-md lg:rounded-md shadow-2xl filter drop-shadow-xl px-12 py-2 text-center flex justify-center align-end sidebarText"
                  >
                    {{ $t('acapulcoMatchboxes') }}
                    <img
                      class="h-8 lg:h-12 ml-1 object-contain"
                      src="../assets/images/matchbox-small.webp"
                    />
                  </h1>
                </span>
              </div>
              <div class="lg:flex lg:space-x-5 font-bold">
                <span class="cursor-pointer" @click="changeCatagory('Shirts')">
                  <h1
                    class="lg:text-3xl text-2xl lg:rounded-md bg-LightBlue-500 rounded-t-md shadow-2xl filter drop-shadow-xl px-12 py-2 sidebarText text-center flex justify-center align-end"
                  >
                    {{ $t('acapulcoShirt') }}
                    <img
                      class="h-8 lg:h-12 object-contain ml-2"
                      src="../assets/images/acapulcoShirtSmall.webp"
                    />
                  </h1>
                </span>
                <span class="cursor-pointer" @click="changeCatagory('Shorts')">
                  <h1
                    class="lg:text-3xl text-2xl lg:rounded-md bg-LightBlue-500 shadow-2xl filter drop-shadow-xl px-12 py-2 sidebarText text-center flex justify-center align-end"
                  >
                    {{ $t('acapulcoShorts') }}
                    <img
                      class="h-8 lg:h-12 ml-1 object-contain"
                      src="../assets/images/acapulcoShortSmall.webp"
                    />
                  </h1>
                </span>
                <span class="cursor-pointer" @click="changeCatagory('Hoodies')">
                  <h1
                    class="lg:text-3xl text-2xl lg:rounded-md bg-LightBlue-500 rounded-b-md shadow-2xl filter drop-shadow-xl px-12 py-2 sidebarText text-center flex justify-center align-end"
                  >
                    {{ $t('acapulcoHoodies') }}
                    <img
                      class="h-8 lg:h-12 ml-1 object-contain"
                      src="../assets/images/acapulcoHoodieSmall.webp"
                    />
                  </h1>
                </span>
              </div>
            </div>
            <!-- </div> -->
          </div>
          <div class="col-span-8 rounded-lg self-center justify-self-center">
            <!-- <div class="grid w-full divide-y-4"> -->

            <!-- <div class="row-span-5 col-span-2 place-items-center"> -->
            <div
              class="grid productCard lg:grid-cols-3 grid-cols-1 gap-6 p-4 mt-6 place-items-center self-center justify-self-center"
            >
              <ProductCard
                v-for="product in products"
                id="product-card"
                ref="ProductCard"
                :key="product.id"
                class="p-4"
                :product="product"
              />
            </div>
            <div class="w-full px-56">
              <v-pagination
                v-model="page"
                circle
                color="#240046"
                large
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
                class="my-4 font-bold text-lg"
                :length="15"
              ></v-pagination>
            </div>
          </div>
        </div>
      </div>
      <LazyHydrate when-visible>
        <Footer />
      </LazyHydrate>
    </div>
  </v-app>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  components: {
    LazyHydrate,

    Footer: () => import('../layouts/TheFooter.vue'),
    Navbar: () => import('../layouts/TheNavbar.vue'),
    ProductCard: () => import('../components/ProductCard.vue'),
  },

  transition: {
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, { opacity: 0 })
    },
    enter(el, done) {
      this.$gsap.to(el, 1, { opacity: 1 })
      done()
    },
    leave(el, done) {
      this.$gsap.to(el, 1, { opacity: 0 })
      done()
    },
  },
  data() {
    return {
      page: 1,
    }
  },

  computed: {
    // products() {
    //   return this.$store.state.products
    // },

    catagory() {
      return this.$store.state.catagory
    },
    products() {
      return this.$store.state.products
    },
  },

  mounted() {
    // this.animateSurfingBoard()
    this.animateProductCards()
    this.$store.dispatch('getProducts')
    this.animateBackground()
  },

  methods: {
    changeCatagory(selected) {
      this.$store.dispatch('changeCatagory', selected)
    },

    // animateSurfingBoard() {
    //   const gsap = this.$gsap

    //   gsap
    //     .timeline({
    //       scrollTrigger: {
    //         start: 'top top',
    //         end: '+=700',
    //         scrub: 2,
    //         trigger: '.navbar',
    //         marker: true,
    //       },
    //     })
    //     .to('.surfingBoard', {
    //       opacity: 0,
    //       rotation: 360 * 7,
    //       duration: 0.2,
    //       y: 100,
    //       scale: 0.2,
    //     })
    // },
    animateProductCards(product) {
      const products = this.$gsap.utils.toArray('.productCard')
      products.forEach((product) => {
        this.$gsap.to(product, {
          opacity: 0,
          autoAlpha: 1,
          y: -50,
          ease: 'expo.Out',
          duration: 3,
        })
      })
    },
    animateBackground() {
      const gsap = this.$gsap
      const tl = gsap.timeline()

      tl.to('.firstText', {
        opacity: 1,
        y: 30,
        ease: 'expo.Out',
        duration: 1,
      })
      tl.from('.span', {
        opacity: 0,
        y: -50,
        ease: 'expo.Out',
        duration: 0.8,
      })
      tl.to('.background', {
        opacity: 1,
        scale: 1,
        ease: 'expo.Out',
        duration: 0.5,
      })
      tl.from('.menuNavbar', {
        opacity: 0,
        y: -10,

        duration: 0.3,

        ease: 'expo.Out',
      })
      tl.to(
        '.sidebar',
        {
          opacity: 1,
          ease: 'expo.Out',
        },
        '-=0.5'
      )
      tl.from('.sidebarText', {
        opacity: 0,
        y: 60,
        ease: 'power3.out',
        duration: 0.3,

        stagger: 0.3,
      })
      tl.from('.productCard', {
        opacity: 0,
        y: 40,
        ease: 'power3.out',
        duration: 0.3,

        stagger: 0.3,
      })
    },
  },
}
</script>

<style scoped>
#main {
  font-family: 'Yanone Kaffeesatz', 'Rezvan';
}

.background {
  box-shadow: 0 8px 32px 0 #e7e7e75e;
  background-color: #ffffffa0;
  border-radius: 10px;
}

.sidebar {
  background: #c5e2f7ef;
  box-shadow: 0 18px 32px 0 rgba(31, 38, 135, 0.37);
}

.menuNavbar {
  background-color: #53db7c;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

.sidebarText {
  transition: ease-in-out 0.3s;
  color: #001524;
}

.sidebarText:hover {
  color: white;
  background-color: #1411c7;
  border: none;
}
.menu {
  margin: 2px;
  padding: 4px 13px;
  background-color: #84f0a6;
}

/* @keyframes animatedBackground {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 100%;
  }
} */
</style>
