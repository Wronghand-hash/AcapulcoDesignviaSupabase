<template>
  <div
    v-show="showDialog"
    v-gsap.from="{
      y: 600,
      duration: 1,
      ease: 'expo.out',
    }"
    class="
      shadow-2xl
      rounded-xl
      z-50
      bg-gray-200
      w-96
      h-96
      items-center
      grid grid-rows-8
      p-3
      font-mainFont
    "
  >
    <div class="rounded-3xl row-span-2 grid grid-cols-3">
      <svg
        class="
          border-blueGray-500
          m-2
          bg-CoolGray-500
          rounded-full
          flex
          items-center
          justify-center
          cursor-pointer
          fill-current
          text-white
        "
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        @click="toggleDialog"
      >
        <path
          d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
        ></path>
      </svg>
      <div class="justify-center text-5xl flex row-span-2">
        <h1>{{ title }}</h1>
      </div>
    </div>
    <div
      class="row-span-4 flex flex-col justify-center rounded-xl"
      :class="{
        'bg-Emerald-500': theImg === '/tik.png',
        'bg-Rose-500': theImg === '/bigX.png',
        'bg-Sky-500': theImg === '/blueTik.png',
      }"
    >
      <h1
        class="
          text-2xl
          self-center
          text-center
          p-2
          text-mainBlue
          font-bold font-mainFont
        "
      >
        <!-- <img src="~/assets/images/tik.png" class="" alt="" /> -->
      </h1>
    </div>
    <div class="row-span-2 flex justify-center">
      <button
        class="bg-green-400 p-3 m-2 w-full rounded-full shadow-3xl"
        :class="{
          'bg-Emerald-500': theImg === '/tik.png',
          'bg-Sky-500': theImg === '/blueTik.png',
        }"
        @click="toggleDialog"
      >
        <span class="text-mainBlue text-4xl font-mainFont font-extrabold">
          Close
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false,
      title: null,
      theImg: null,
    }
  },

  methods: {
    toggleDialog(Title) {
      this.showDialog = !this.showDialog
      this.title = Title
    },
  },
}
</script>
