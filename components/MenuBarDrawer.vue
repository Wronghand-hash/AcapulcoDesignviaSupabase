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
      app
      full-width
      class="drawer purple darken-4"
    >
      <div class="w-full h-full p-6">
        <div class="align-center w-full h-3/6 flex flex-col">
          <nuxt-link to="/">
            <v-btn
              class="Btn"
              dark
              depressed
              rounded
              x-large
              color="transparent"
            >
              <span class="aboutUs text-xl"> {{ $t('home') }} </span>
              <v-icon class="" large>mdi-home</v-icon>
            </v-btn>
          </nuxt-link>
          <nuxt-link to="/aboutUs">
            <v-btn
              class="Btn"
              dark
              depressed
              rounded
              x-large
              color="transparent"
            >
              <span class="aboutUs text-xl"> {{ $t('aboutUs') }} </span>
              <v-icon class="" large>mdi-meditation</v-icon>
            </v-btn>
          </nuxt-link>
          <nuxt-link to="/productList">
            <v-btn depressed x-large dark color="transparent" class="">
              <span class="white--text text-xl"> {{ $t('shop') }} </span>
              <v-icon large>mdi-shopping</v-icon>
            </v-btn>
          </nuxt-link>
          <NuxtLink id="admin-link" class="flex" to="/adminPage">
            <v-btn depressed dark x-large color="transparent" class="">
              <span class="white--text text-xl">{{ $t('admin') }}</span>
              <v-icon class="cowboy">mdi-account-cowboy-hat</v-icon>
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
  data() {
    return {
      drawer: false,
    }
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
