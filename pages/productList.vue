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
            src="~/assets/images/surfsUp.png"
            class="filter drop-shadow-lg w-96 object-contain surfingBoard"
            alt=""
          />
        </div>
        <div class="w-3/4 lg:w-4/6 z-10 mt-14 NavbarTrigger">
          <h1
            class="text-8xl lg:text-9xl text-center text-mainBlue capitalize firstText opacity-0 NavbarTrigger"
          >
            take a trip with us
            <br />
            <span
              class="text-mainRed font-extrabold span text-8xl lg:text-10xl"
            >
              stay free
            </span>
          </h1>
        </div>
        <div
          class="lg:w-11/12 w-full h-full grid grid-cols-8 mt-24 background opacity-0"
        >
          <div
            class="menuNavbar sticky flex align-center py-6 divide-x-2 divide-black col-span-8"
          >
            <NuxtLink to="/">
              <span class="p-9"
                ><v-icon light x-large color="pink lighten-5"
                  >mdi-chevron-double-left</v-icon
                ></span
              >
            </NuxtLink>
            <NuxtLink to="/">
              <span class="menu px-5 text-4xl text-gray-100 font-semibold">
                Home
              </span>
            </NuxtLink>
            <NuxtLink to="/productList">
              <span>
                <h1 class="px-5 text-4xl text-gray-100 font-semibold">Shop</h1>
              </span>
            </NuxtLink>
          </div>
          <div
            class="p-3 col-span-8 lg:col-span-2 self-start justify-self-end sidebar opacity-0 space-y-4 sticky h-auto flex flex-col justify-between align-center"
          >
            <!-- <div class="flex flex-col p-10 self-center"> -->
            <!-- <h1 class="text-7xl mt-10 text-center text-gray-700 font-bold">
                Shop
              </h1> -->
            <h3
              class="p-3 text-mainBlue text-5xl lg:text-6xl border-red-600 font-black"
            >
              Discover!
            </h3>
            <div
              class="space-x-3 space-y-2 px-4 text-center lg:text-left flex flex-wrap align-center lg:justify-start justify-center"
            >
              <span class="cursor-pointer" @click="changeCatagory('Lighters')">
                <h1
                  class="lg:text-3xl text-2xl border-mainBlue border-b-2 p-4 sidebarText"
                >
                  Lighters🔥
                </h1>
              </span>
              <span class="cursor-pointer" @click="changeCatagory('Shirts')">
                <h1
                  class="lg:text-3xl text-2xl text-mainBlue p-4 border-mainBlue border-b-2 sidebarText"
                >
                  Acapulco Shirts🌴
                </h1>
              </span>
              <span
                class="cursor-pointer"
                @click="changeCatagory('Custom Matchboxes')"
              >
                <h1
                  class="lg:text-3xl text-2xl text-mainBlue p-4 border-mainBlue border-b-2 sidebarText"
                >
                  Custom Matchboxes💥
                </h1>
              </span>
              <span class="cursor-pointer" @click="changeCatagory('Lighters')">
                <h1
                  class="lg:text-3xl text-2xl border-mainBlue border-b-2 p-4 sidebarText"
                >
                  Acapulco Shorts
                </h1>
              </span>
              <span class="cursor-pointer" @click="changeCatagory('Lighters')">
                <h1
                  class="lg:text-3xl text-2xl border-mainBlue border-b-2 p-4 sidebarText"
                >
                  Acapulco Hoodies
                </h1>
              </span>
              <span
                class="cursor-pointer"
                @click="changeCatagory('Collections')"
              >
                <h1
                  class="lg:text-3xl text-2xl border-mainBlue border-b-2 text-mainBlue p-4 sidebarText"
                >
                  Collections🗿
                </h1>
              </span>
            </div>
            <!-- </div> -->
          </div>
          <div
            class="lg:col-span-6 col-span-8 rounded-lg self-center justify-self-center"
          >
            <!-- <div class="grid w-full divide-y-4"> -->

            <!-- <div class="row-span-5 col-span-2 place-items-center"> -->
            <div
              class="grid lg:grid-cols-2 grid-cols-1 gap-6 p-4 mt-6 place-items-center self-center justify-self-center"
            >
              <ProductCard
                v-for="product in products"
                id="product-card"
                ref="ProductCard"
                :key="product.id"
                class="p-4 productCard"
                :product="product"
              />
            </div>
            <!-- </div> -->
            <!-- </div> -->
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

    Footer: () => import('../layouts/Footer.vue'),
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
      products: [],
    }
  },
  computed: {
    // products() {
    //   return this.$store.state.products
    // },
    catagory() {
      return this.$store.state.catagory
    },
  },

  mounted() {
    // this.animateSurfingBoard()
    this.animateBackground()
    this.animateProductCards()
    this.getProducts()
  },

  methods: {
    changeCatagory(selected) {
      this.$store.dispatch('changeCatagory', selected)
    },
    async getProducts() {
      try {
        const { data, error } = await this.$supabase.from('products').select()
        if (error) throw error
        if (data) {
          this.products = data
        }
      } catch (error) {
        console.log(error)
      }
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
    animateProductCards() {
      const products = this.$gsap.utils.toArray('#product-card')
      products.forEach((product) => {
        this.$gsap.fromTo(
          product,
          {
            y: 200,
            opacity: 0,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,

            ease: 'Sine.easeOut',
          }
        )
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
        y: -20,
        ease: 'power3.out',
        stagger: 0.1,
      })
      // tl.to('.productCard', {
      //   opacity: 1,
      //   y: -20,
      //   ease: 'power3.out',
      //   stagger: 0.1,
      // })
    },
  },
}
</script>

<style scoped>
#main {
  font-family: 'Yanone Kaffeesatz', sans-serif;
}

.background {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
}

.sidebar {
  background: #ffeeeeef;
  box-shadow: 0 18px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
}

.menuNavbar {
  background-image: url('./assets/images/trippy.jpg');
  background-size: cover;
  background-position: 0px 0px;
  background-repeat: repeat-y;
  animation: animatedBackground 45s linear infinite alternate;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
}

.sidebarText {
  transition: ease-in-out 0.3s;
  color: #001524;
}

.sidebarText:hover {
  color: #ff4a68;
  border-bottom: #ff4a68 solid 2px;
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
