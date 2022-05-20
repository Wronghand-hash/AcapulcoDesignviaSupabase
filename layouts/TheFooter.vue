<i18n lang="yaml">
en:
  findUS: 'Find Us One Social Media!'
  made: 'Made With'
  iran: 'From Iran'
  developement: 'Developement By :'
  art: 'Art By :'

fa:
  findUS: 'ما رو تو شبکه های اجتماعی پیدا کنید '
  made: 'ساخته شده با'
  iran: 'از ایران'
  developement: 'توسعه سایت از'
  art: 'هنر از'
</i18n>
<template>
  <div>
    <div
      class="seventhContainer w-screen bg-mainBlue flex flex-col overflow-hidden"
    >
      <div
        class="flex justify-center flex-col w-screen align-center mt-16 h-screen lg:mt-24 lg:mb-80 mb-52"
      >
        <div
          class="h-14 z-40 flex-col flex align-center justify-center p-6 self-center"
        >
          <div class="flex w-screen h-auto flex-col justify-start items-center">
            <div class="text-center space-x-3">
              <h1
                class="font-mainFont font-extrabold capitalize text-5xl p-4 lg:text-7xl text-mainRed"
              >
                {{ $t('findUS') }}
              </h1>
              <div class="flex items-center justify-center space-x-8">
                <a href="https://t.me/acapulco_design" class="icon-3d">
                  <img
                    class="object-contain w-11"
                    src="~/assets/images/telegramIcon.webp"
                    alt=""
                  />
                </a>

                <!-- <v-icon x-large dark class="icon-3d transform lg:scale-150"
                >mdi-google</v-icon
              > -->
                <a
                  href="https://instagram.com/acapulco_design?utm_medium=copy_link"
                >
                  <v-icon
                    x-large
                    dark
                    class="icon-3d transform lg:scale-150 pb-3"
                    >mdi-instagram</v-icon
                  >
                </a>
                <a href="https://wa.me/+989146211500">
                  <v-icon
                    x-large
                    dark
                    class="icon-3d transform pb-3 lg:scale-150"
                    >mdi-whatsapp</v-icon
                  >
                </a>
              </div>
            </div>
            <a href="https://www.instagram.com/famouskesler/?hl=en">
              <img
                class="object-contain h-96 p-10 kesler"
                src="~/assets/images/ppp.png"
                alt=""
              />
            </a>
            <h1
              class="lg:ml-4 font-mainFont font-bold capitalize text-3xl p-2 lg:text-5xl text-mainRed"
            >
              {{ $t('made') }} ❤️ {{ $t('iran') }}
            </h1>
            <h1
              class="self-center lg:ml-4 flex flex-col font-mainFont font-thin capitalize text-center text-3xl p-1 lg:text-4xl text-mainRed"
            >
              {{ $t('developement') }}
              <a
                href="https://www.instagram.com/chao.comanhe/?hl=en"
                class="Chao"
                >Comanche Chao🧙</a
              >
              <a
                href="https://www.instagram.com/just_greez/?hl=en"
                class="Greez"
              >
                Greez🐻</a
              >
            </h1>
            <h1
              class="self-center lg:ml-4 font-mainFont font-thin capitalize text-3xl p-1 lg:text-4xl text-mainRed"
            >
              {{ $t('art') }}
              <a
                href="https://www.instagram.com/payamone/?hl=en"
                class="payamone"
                >PayamOne🌴</a
              >
            </h1>
          </div>
        </div>
        <img
          class="lg:object-fill object-contain bottom-0 absolute lg:h-screen lg:w-screen w-full"
          src="~/assets/images/footerpic.webp"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.animateKisKis()
  },
  methods: {
    animateKisKis() {
      const tl = this.$gsap.timeline({ repeat: -1, yoyo: true })
      tl.from('.kesler', 1, {
        ease: 'power1.inOut',
        rotation: -6,
        x: 10,
        delay: 0.09,

        transformOrigin: '50% 100%',
      })
    },
  },
}
</script>
<style scoped>
.payamone {
  color: #70fa00;
  transition: ease-in-out 0.3s;
}
.Chao {
  color: #ff2d96;
  transition: ease-in-out 0.3s;
}
.Chao:hover {
  color: #8400ff;
}
.Chao:active {
  color: #9a75ff;
  scale: 0.8;
}
.Greez {
  color: #00e1ff;
  transition: ease-in-out 0.3s;
}
.Greez:hover {
  color: #0011ff;
}
.Greez:active {
  color: #7583ff;
  scale: 0.8;
}

.payamone:hover {
  color: #fbff00;
}

/* .kesler:active {
  transition: all ease-in-out 0.3s;
  scale: 1.5;
} */
.payamone:active {
  color: #ff758c;
  scale: 0.8;
}
* {
  font-family: 'Yanone Kaffeesatz', 'Rezvan';
}
</style>
<style lang="scss" scoped>
.icon-3d {
  cursor: pointer;
  border-bottom: 7px solid #120129;
  // border-right: 5px solid #120129;
  &:hover {
    border-bottom: 7px solid #53db7c;
    // border-right: 5px solid #ff4a68;

    transition: ease-in-out 0.3s;
  }
}
</style>
