/* eslint-disable no-undef */ /* eslint-disable no-undef */ /* eslint-disable
no-undef */
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
  stayFree: 'خوش اومدید'
  backHome: 'برگرد خونه'
  home: 'دسته بندی '
  shop: 'خرید'
  discover: '!کشف کن'
  lighters: 'فندک '
  acapulcoShirt: 'پیراهن '
  acapulcoMatchboxes: 'کبریت '
  acapulcoHoodies: 'هودی '
  acapulcoShorts: 'شلوارک '
  collections: 'کالکشن '
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
            class="menuNavbar lg:px-3 sticky space-y-2 flex-col lg:flex-row flex align-center justify-between py-6 col-span-8"
          >
            <div class="flex items-center w-full justify-start">
              <NuxtLink to="/">
                <v-tooltip bottom>
                  <template #activator="{ on: tooltip }">
                    <span class="py-8 px-2" v-on="{ ...tooltip }"
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
                class="menu lg:text-4xl text-2xl py-3 justify-self-center self-center rounded-md text-mainBlue font-semibold"
              >
                {{ $t('home') }}
              </span>
            </div>
            <div class="pt-2 relative text-white">
              <input
                v-model="SearchIndex"
                class="border-2 placeholder-mainBlue transition ease-in w-72 duration-300 text-darkPurple hover:bg-white border-gray-300 bg-green-200 h-12 px-5 pr-4 md:pr-16 rounded-full text-lg focus:outline-none"
                type="search"
                name="search"
                placeholder="ُSearch"
              />
              <button
                type="submit"
                class="absolute right-0 top-0 mt-5 mr-4"
                @click="SearchProducts"
              >
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
            class="p-3 col-span-8 bg-LightBlue-100 self-center justify-self-center flex-col w-screen sidebar opacity-0 space-y-4 sticky h-auto flex justify-between align-center"
          >
            <div
              class="space-x-2 lg:my-5 px-1 text-center lg:text-left flex align-center justify-center"
            >
              <div class="lg:flex lg:space-x-5 font-bold">
                <span class="cursor-pointer" @click="category = 'Lighters'">
                  <h1
                    class="lg:text-3xl text-2xl bg-green-500 lg:rounded-md rounded-t-md shadow-2xl filter drop-shadow-xl px-12 py-2 sidebarText text-center flex justify-center align-end"
                  >
                    {{ $t('lighters') }}
                    <img
                      class="h-8 lg:h-12 ml-1 object-contain"
                      src="../assets/images/acapulcoLighterSmall.webp"
                    />
                  </h1>
                </span>
                <span class="cursor-pointer" @click="category = 'Collections'">
                  <h1
                    class="lg:text-3xl text-2xl bg-green-500 lg:rounded-md shadow-2xl filter drop-shadow-xl px-12 py-2 sidebarText text-center flex justify-center align-end"
                  >
                    {{ $t('collections') }}
                    <img
                      class="h-8 lg:h-12 ml-1 object-contain"
                      src="../assets/images/acapulcoCollectionSmall.webp"
                    />
                  </h1>
                </span>
                <span class="cursor-pointer" @click="category = 'Matchboxes'">
                  <h1
                    class="lg:text-3xl text-2xl bg-green-500 rounded-b-md lg:rounded-md shadow-2xl filter drop-shadow-xl px-12 py-2 text-center flex justify-center align-end sidebarText"
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
                <span class="cursor-pointer" @click="category = 'Shirts'">
                  <h1
                    class="lg:text-3xl text-2xl lg:rounded-md bg-green-500 rounded-t-md shadow-2xl filter drop-shadow-xl px-12 py-2 sidebarText text-center flex justify-center align-end"
                  >
                    {{ $t('acapulcoShirt') }}
                    <img
                      class="h-8 lg:h-12 object-contain ml-2"
                      src="../assets/images/acapulcoShirtSmall.webp"
                    />
                  </h1>
                </span>
                <span class="cursor-pointer" @click="category = 'Shorts'">
                  <h1
                    class="lg:text-3xl text-2xl lg:rounded-md bg-green-500 shadow-2xl filter drop-shadow-xl px-12 py-2 sidebarText text-center flex justify-center align-end"
                  >
                    {{ $t('acapulcoShorts') }}
                    <img
                      class="h-8 lg:h-12 ml-1 object-contain"
                      src="../assets/images/acapulcoShortSmall.webp"
                    />
                  </h1>
                </span>
                <span class="cursor-pointer" @click="category = 'Hoodies'">
                  <h1
                    class="lg:text-3xl text-2xl lg:rounded-md bg-green-500 rounded-b-md shadow-2xl filter drop-shadow-xl px-12 py-2 sidebarText text-center flex justify-center align-end"
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
            <v-select
              :items="items"
              light
              filled
              item-color="blue darken-1"
              class="bg-mainGreen bg-opacity-40 lg:self-start lg:w-auto w-full font-mainFont font-black text-mainBlue lg:justify-self-start text-4xl"
              label="Filters"
              outlined
              @input="changeOrder"
            ></v-select>

            <!-- </div> -->
          </div>
          <div
            class="col-span-8 w-full rounded-lg self-center justify-self-center"
          >
            <!-- <div class="grid w-full divide-y-4"> -->

            <!-- <div class="row-span-5 col-span-2 place-items-center"> -->

            <TransitionGroup
              name="products"
              class="w-full h-full grid productCard opacity-0 lg:grid-cols-3 space-y-5 grid-cols-1 gap-6 p-10 mt-6 place-items-center self-center justify-self-center"
            >
              <ProductCard
                v-for="product in products"
                id="product-card"
                ref="ProductCard"
                :key="product.id"
                class="p-4 product"
                :product="product"
              />
            </TransitionGroup>

            <div
              class="w-full h-20 flex justify-center items-center bg-green-300 bg-opacity-70 px-4"
            >
              <v-pagination
                v-model="page"
                circle
                color="#240046"
                large
                dense
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
                class="my-4 px-18 text-4xl flex items-center justify-center font-bold lg:px-32"
                :length="10"
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
// import { useSupabase, useSupabaseAuth } from 'nuxt-supabase/composables'
// import { onMounted, watch } from '@vue/runtime-core'
// import { computed } from '#imports'

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
      from: 1,
      to: 6,
      page: 1,
      category: 'Shirts',
      products: [],
      SearchIndex: '',
      order: 'created_at',
      ascention: false,
      items: ['Newest', 'Most Expensive', 'Least Expensive'],
      // categories: [
      //   'Shirt',
      //   'Collection',
      //   'Shorts',
      //   'Lighters',
      //   'Hoodies',
      //   'Matchboxes',
      // ],
    }
  },
  computed: {
    // products() {
    //   return this.$store.state.products
    // },
    // category() {
    //   return this.$store.state.category
    // },
  },
  watch: {
    SearchIndex() {
      if (this.SearchIndex !== '') {
        this.SearchProducts()
      } else {
        this.getProducts()
      }
    },
    category() {
      this.changeCategory()
    },
    page() {
      this.to = this.page * 4
      this.getProducts()
    },
    order() {
      this.getProducts()

      console.log(this.order)
    },
    ascention() {
      this.getProducts()

      console.log(this.order)
    },
  },

  mounted() {
    // this.animateSurfingBoard()
    // this.$store.dispatch('getProducts')
    this.animateBackground()
    this.getProducts()
  },

  methods: {
    async changeCategory() {
      try {
        const { data, error } = await this.$supabase
          .from('products')
          .select()
          .eq('category', this.category)
          .range(this.from, this.to)

        // .eq("product-category", props.category.title);

        if (error) throw error
        this.products = data
      } catch (error) {
        alert(error.message)
      }
    },

    async SearchProducts() {
      try {
        const { data, error } = await this.$supabase
          .from('products')
          .select()
          .textSearch(
            'title'.toString().trim(),
            this.SearchIndex.toString().trim()
          )

        if (error) throw error
        if (data) {
          this.products = data

          // alert('products fetched')
          // console.log(data)
        }
      } catch (error) {
        // this.animateProductCardsForSearch()
      }
    },
    changeOrder(selected) {
      if (selected === 'Newest') {
        this.order = 'created_at'
      } else if (selected === 'Most Expensive') {
        this.order = 'price'
        this.ascention = false
      } else if (selected === 'Least Expensive') {
        this.order = 'price'
        this.ascention = true
      }
    },
    // changecategory(selected) {
    //   this.$store.dispatch('changecategory', selected)
    // },

    async getProducts() {
      try {
        const { data, error } = await this.$supabase
          .from('products')
          .select()
          .eq('category', this.category)
          .order(this.order, { ascending: this.ascention })
          .range(this.from, this.to)

        if (error) throw error
        if (data) {
          this.products = data
          // this.animateProductCards()

          // alert('products fetched')
          // console.log(data)
        }
      } catch (error) {}
    },

    // animateProductCardsForSearch(product) {
    //   const products = this.$gsap.utils.toArray('.productCard')
    //   products.forEach((product) => {
    //     this.$gsap.to(product, {
    //       opacity: 1,
    //       duration: 0.5,
    //     })
    //   })
    // },
    // animateProductCards(product) {
    //   const products = this.$gsap.utils.toArray('.productCard')
    //   products.forEach((product) => {
    //     this.$gsap.fromTo(product, {
    //       opacity: 0,
    //       y: 40,
    //       duration: 0.5,
    //     })
    //   })
    // },
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
        duration: 0.5,

        stagger: 0.3,
      })
      tl.to('.productCard', {
        delay: 0.3,
        opacity: 1,
        y: -60,
        ease: 'power3.out',
        duration: 0.6,
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
  transition: all 0.2s ease-in-out;
  color: #001524;
}

.sidebarText:hover {
  color: #001524;
  background-color: #70d48f;
}
.sidebarText:active {
  color: #001524;
  background-color: #008028;
  transform: scale(1.05);
}
.menu {
  margin: 2px;
  padding: 4px 13px;
}

/* @keyframes animatedBackground {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 100%;
  }
} */

.products-leave-active,
.products-enter-active {
  transition: all 0.3s ease;
}

.products-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.products-enter {
  opacity: 0 !important;
  transform: translateY(-30px) !important;
}
.products-enter-to {
  opacity: 1 !important;
}
/* .products-enter-to,
.products-leave-from {
  opacity: 1;
  transform: translateX(0px);
} */
</style>
