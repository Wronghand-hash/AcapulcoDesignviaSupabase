<i18n lang="yaml">
en:
  aboutus: 'About Us'
  home: 'Home'
  shop: 'Shop'
  admin: 'Admin'
  welcome: 'Welcome Back!'
  logout: 'Logout'
  signedOut: 'Successfully logged out'
  profile: 'My Profile'

fa:
  aboutus: 'درباره ی ما'
  home: 'خانه'
  shop: 'خرید'
  admin: 'ادمین'
  welcome: 'خوش برگشتی'
  logout: 'لاگ آوت'
  signedOut: 'از حسابتون خارج شدید'
  profile: 'پروفایل من'
</i18n>
<template>
  <!-- <v-app> -->
  <div
    class="mb-8 fixed w-screen h-20 lg:h-24 bg-transparent Navbar opacity-100 z-50 flex align-center justify-center pl-2 lg:px-9"
  >
    <v-alert
      v-show="signedOut"
      transition="fade-transition"
      color="green"
      type="success"
      class="text-4xl text-mainBlue items-center absolute justify-center"
    >
      {{ $t('signedOut') }}
    </v-alert>
    <!-- <div class="hidden lg:flex">
      <v-btn
        class="Btn"
        dark
        depressed
        rounded
        x-large
        color="transparent"
      >
        <v-icon class="" large>mdi-volume-high</v-icon>
      </v-btn>
    </div> -->
    <div class="hidden lg:flex">
      <nuxt-link v-if="$route.path.toString().includes('fa')" to="/fa/aboutus">
        <v-btn class="Btn" dark depressed rounded x-large color="transparent">
          <v-icon class="" large>mdi-meditation</v-icon>
          <span class="aboutUs text-xl lg:text-2xl"> {{ $t('aboutus') }} </span>
        </v-btn>
      </nuxt-link>
      <nuxt-link v-else to="/aboutus">
        <v-btn class="Btn" dark depressed rounded x-large color="transparent">
          <v-icon class="" large>mdi-meditation</v-icon>
          <span class="aboutUs text-xl lg:text-2xl"> {{ $t('aboutus') }} </span>
        </v-btn>
      </nuxt-link>
    </div>

    <div class="flex align-center justify-end px-2">
      <div class="hidden lg:flex">
        <nuxt-link v-if="$route.path.toString().includes('fa')" to="/fa">
          <v-btn class="Btn" depressed rounded x-large color="transparent">
            <v-icon class="white--text" large>mdi-home</v-icon>
            <span class="aboutUs white--text text-xl lg:text-2xl">
              {{ $t('home') }}
            </span>
          </v-btn>
        </nuxt-link>
        <nuxt-link v-else to="/">
          <v-btn class="Btn" depressed rounded x-large color="transparent">
            <v-icon class="white--text" large>mdi-home</v-icon>
            <span class="aboutUs white--text text-xl lg:text-2xl">
              {{ $t('home') }}
            </span>
          </v-btn>
        </nuxt-link>
      </div>
      <div class="hidden lg:flex">
        <nuxt-link
          v-if="$route.path.toString().includes('fa')"
          to="/fa/productList"
        >
          <v-btn depressed x-large color="transparent" class="">
            <v-icon medium class="white--text">mdi-shopping</v-icon>
            <span class="white--text text-xl lg:text-2xl">
              {{ $t('shop') }}
            </span>
          </v-btn>
        </nuxt-link>
        <nuxt-link v-else to="/productList">
          <v-btn depressed x-large color="transparent" class="">
            <v-icon medium class="white--text">mdi-shopping</v-icon>
            <span class="white--text text-xl lg:text-2xl">
              {{ $t('shop') }}
            </span>
          </v-btn>
        </nuxt-link>
      </div>
      <div v-show="showAdmin === true" class="hidden lg:flex">
        <NuxtLink id="admin-link" class="flex" to="/adminPage">
          <v-btn depressed dark x-large color="transparent" class="">
            <v-icon class="cowboy">mdi-cryengine</v-icon>
            <span class="white--text text-xl lg:text-2xl">
              {{ $t('admin') }}
            </span>
          </v-btn>
        </NuxtLink>
      </div>
      <div v-show="user" class="">
        <v-menu light transition="slide-y-transition" bottom>
          <template #activator="{ on: menu, attrs }">
            <v-tooltip bottom>
              <template #activator="{ on: tooltip }">
                <v-btn
                  color="transparent"
                  class="profilePageBtn align-center"
                  v-bind="attrs"
                  depressed
                  x-large
                  fab
                  dark
                  @click="dialog = true"
                  v-on="{ ...tooltip, ...menu }"
                >
                  <v-icon class="white--text">mdi-account-key</v-icon>
                </v-btn>
              </template>
              <span
                class="font-mainFont font-extrabold text-xl text-LightBlue-50"
                >{{ $t('welcome') }}</span
              >
            </v-tooltip>
          </template>
          <v-list dense class="space-y-4 p-4">
            <v-list-item>
              <v-list-item-icon>
                <NuxtLink
                  v-if="$route.path.toString().includes('fa')"
                  to="/fa/profilepage"
                >
                  <v-btn light depressed color="transparent">
                    <v-icon>mdi-account-check</v-icon>

                    <span class="text-xl font-bold text-center ProfileText">{{
                      $t('profile')
                    }}</span>
                  </v-btn>
                </NuxtLink>
                <NuxtLink v-else to="/profilepage">
                  <v-btn light depressed color="transparent">
                    <v-icon>mdi-account-check</v-icon>

                    <span class="text-xl font-bold text-center ProfileText">{{
                      $t('profile')
                    }}</span>
                  </v-btn>
                </NuxtLink>
              </v-list-item-icon>
            </v-list-item>
            <v-list-item>
              <v-btn color="transparent" depressed class="" @click="signOut">
                <v-icon>mdi-logout-variant</v-icon>
                <span class="text-xl ml-1 lg:text-2xl">
                  {{ $t('logout') }}
                </span>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div class="lg:hidden">
        <LazyHydrate when-visible>
          <MenuBarDrawer :admin="admin" />
        </LazyHydrate>
      </div>

      <v-spacer></v-spacer>
      <nuxt-link
        v-if="$route.path.toString().includes('fa')"
        :to="switchLocalePath('en')"
        @click="$i18n.setLocaleCookie('en')"
      >
        <v-btn class="Btn" dark depressed rounded x-large color="transparent">
          <v-icon class="" large>mdi-web</v-icon>
          <span class="aboutUs text-lg lg:text-x"> EN </span>
        </v-btn></nuxt-link
      >
      <nuxt-link
        v-else
        :to="switchLocalePath('fa')"
        @click="$i18n.setLocaleCookie('fa')"
      >
        <v-btn class="Btn" dark depressed rounded x-large color="transparent">
          <v-icon class="" large>mdi-web</v-icon>
          <span class="aboutUs text-lg lg:text-xl"> FA </span>
        </v-btn></nuxt-link
      >
      <LazyHydrate when-visible>
        <LoginDialog v-show="!user"> </LoginDialog>
      </LazyHydrate>
      <ShoppingCartDrawer />
    </div>
  </div>
  <!-- </v-app> -->
</template>
<!-- id="app"
    
      justify-center
      color="transparent"
      width="100%"
      fixed
      elevation="0"
      class="pt-8" -->

<!-- <v-btn
        v-if="user"
        :click="signOut()"
        dark
        depressed
        rounded
        x-large
        color="transparent"
        >Logout</v-btn
      > -->

<script>
import LazyHydrate from 'vue-lazy-hydration'
import ShoppingCartDrawer from '../components/ShoppingCartDrawer.vue'
export default {
  components: {
    LazyHydrate,
    MenuBarDrawer: () => import('../components/MenuBarDrawer.vue'),
    LoginDialog: () => import('../components/LoginDialog.vue'),
    ShoppingCartDrawer,
  },
  data() {
    return {
      signedOut: false,
      admin: false,
      categories: [
        {
          title: 'Lighters',
        },
        {
          title: 'Acapulco Shirts',
        },
        {
          title: 'Custom Matchboxes',
        },
        {
          title: 'Collections',
        },
      ],
      drawer: false,
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    showAdmin() {
      return this.admin
    },
  },

  watch: {
    user() {
      if (this.user === null) {
        this.admin = false
      }
    },
  },

  mounted() {
    this.$supabase.auth.onAuthStateChange(() => {
      this.$store.dispatch('setUser', this.$supabase.auth.user())
    })
    this.animateNavbar()
    if (this.$store.state.user) {
      this.getUser()
    }
    // this.playSound()
  },
  methods: {
    animateNavbar() {
      this.$gsap.to('.Navbar', {
        backgroundColor: '#ff4a68',
        opacity: 0.8,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.NavbarTrigger',
          scrub: 2.5,
          start: 'bottom top',
          end: 'bottom bottom',
          toggleActions: 'play none none none none',
        },
      })
    },
    async signOut() {
      try {
        const { error } = await this.$supabase.auth.signOut()
        if (error) throw error
        this.signedOut = true
        setTimeout(() => {
          this.signedOut = false
        }, 3000)
      } catch (error) {
      } finally {
        this.admin = false
      }
    },
    async getUser() {
      try {
        const { data, error } = await this.$supabase
          .from('users')
          .select()
          .eq('id', this.$store.state.user.id)

        if (error) throw error
        console.log(data[0].admin)
        if (data[0].admin === true) {
          console.log(data[0])
        }
      } catch (error) {
      } finally {
        this.admin = true
      }
    },
  },
}
</script>

<style scoped>
span {
  font-family: 'Acme', 'Estedad';
  text-align: center;
  display: flex;
  justify-self: center;
  align-self: center;
}
#admin-link {
  color: #fff;
}

/* .sticky {
  background-color: #fff;
} */

/* #navbar {
  animation: 30s ease-in-out infinite alternate-reverse color-change;
} */
.Navbar {
  z-index: 250 !important;
}
</style>
