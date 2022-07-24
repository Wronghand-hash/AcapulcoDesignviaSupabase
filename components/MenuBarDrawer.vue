<i18n lang="yaml">
en:
  menu: 'Menu'
  shop: 'Shop'
  home: 'Home'
  admin: 'Admin'
  aboutUs: 'About Us'

fa:
  menu: 'منو'
  shop: 'خرید'
  home: 'خونه'
  admin: 'ادمین'
  aboutUs: 'درباره ی ما'
</i18n>

<template>
  <div class="">
    <v-tooltip bottom class="sm:hidden">
      <template #activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          fab
          dark
          depressed
          x-large
          color="transparent"
          v-on="on"
          @click="drawer = !drawer"
        >
          <v-icon x-large>mdi-microsoft-xbox-controller-menu</v-icon>
        </v-btn>
      </template>
      <span class="sm:invisible">{{ $t('menu') }}</span>
    </v-tooltip>

    <v-navigation-drawer
      v-model="drawer"
      left
      temporary
      transition="fade-transition"
      app
      full-width
      class="drawer indigo darken-2"
    >
      <div class="w-full h-full p-6">
        <div class="align-center w-full h-3/6 flex flex-col space-y-7">
          <nuxt-link v-if="$route.path.toString().includes('fa')" to="/fa">
            <v-btn
              class="Btn"
              dark
              depressed
              rounded
              x-large
              color="indigo lighten-1"
            >
              <v-icon class="" large>mdi-home</v-icon>
              <span class="aboutUs text-2xl">
                {{ $t('home') }}
              </span>
            </v-btn>
          </nuxt-link>
          <nuxt-link v-else to="/">
            <v-btn
              class="Btn"
              dark
              depressed
              rounded
              x-large
              color="indigo lighten-1"
            >
              <v-icon class="" large>mdi-home</v-icon>
              <span class="aboutUs text-2xl"> {{ $t('home') }} </span>
            </v-btn>
          </nuxt-link>
          <nuxt-link
            v-if="$route.path.toString().includes('fa')"
            to="/fa/productList"
          >
            <v-btn
              depressed
              x-large
              dark
              rounded
              color="indigo lighten-1"
              class=""
            >
              <v-icon large>mdi-shopping</v-icon>
              <span class="white--text text-2xl"> {{ $t('shop') }} </span>
            </v-btn>
          </nuxt-link>
          <nuxt-link v-else to="/productList">
            <v-btn
              depressed
              x-large
              dark
              rounded
              color="indigo lighten-1"
              class=""
            >
              <v-icon large>mdi-shopping</v-icon>
              <span class="white--text text-2xl"> {{ $t('shop') }} </span>
            </v-btn>
          </nuxt-link>
          <nuxt-link
            v-if="$route.path.toString().includes('fa')"
            to="/fa/aboutUs"
          >
            <v-btn
              class="Btn"
              dark
              depressed
              rounded
              x-large
              color="indigo lighten-1"
            >
              <v-icon class="" large>mdi-meditation</v-icon>
              <span class="aboutUs text-2xl"> {{ $t('aboutUs') }} </span>
            </v-btn>
          </nuxt-link>
          <nuxt-link v-else to="/aboutUs">
            <v-btn
              class="Btn"
              dark
              depressed
              rounded
              x-large
              color="indigo lighten-1"
            >
              <v-icon class="" large>mdi-meditation</v-icon>
              <span class="aboutUs text-2xl"> {{ $t('aboutUs') }} </span>
            </v-btn>
          </nuxt-link>

          <NuxtLink
            v-show="isAdmin === true"
            id="admin-link"
            class="flex"
            to="/adminPage"
          >
            <v-btn
              depressed
              rounded
              dark
              x-large
              color="indigo lighten-1"
              class=""
            >
              <v-icon class="cowboy">mdi-account-cowboy-hat</v-icon>
              <span class="white--text text-2xl">{{ $t('admin') }}</span>
            </v-btn>
          </NuxtLink>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['admin'],
  data() {
    return {
      drawer: false,
    }
  },
  computed: {
    isAdmin() {
      return this.admin
    },
  },
}
</script>

<style scoped>
.drawer {
  z-index: 200 !important;
}
span {
  font-family: 'Acme', 'Rezvan';
  text-align: center;
  display: flex;
  justify-self: center;
  align-self: center;
}
</style>
