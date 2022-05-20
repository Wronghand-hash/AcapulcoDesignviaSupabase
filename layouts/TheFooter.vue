<i18n lang="yaml">
en:
  findUS: 'Find Us One Social Media!'
  made: 'Made With'
  iran: 'From Iran'
  art: 'Art By'

fa:
  findUS: 'ما رو تو شبکه های اجتماعی پیدا کنید '
  made: 'ساخته شده با'
  iran: 'از ایران'
  art: 'هنر از'
</i18n>
<template>
  <div>
    <div
      class="seventhContainer w-screen h-dialog lg:h-screen bg-mainBlue flex flex-col"
    >
      <div class="h-3/6 flex align-center justify-center p-6 self-center">
        <div class="self-center flex">
          <div class="text-center space-x-3 lg:space-x-12 lg:space-y-8">
            <h1
              class="font-mainFont font-extrabold capitalize text-5xl p-4 lg:text-7xl text-mainRed"
            >
              {{ $t('findUS') }}
            </h1>
            <div class="flex items-center justify-center space-x-8">
              <a href="https://t.me/acapulco_design" class="icon-3d">
                <img
                  class="object-contain pb-4 w-11"
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
                <v-icon x-large dark class="icon-3d transform lg:scale-150 pb-3"
                  >mdi-instagram</v-icon
                >
              </a>
              <a href="https://wa.me/+989146211500">
                <v-icon x-large dark class="icon-3d transform pb-3 lg:scale-150"
                  >mdi-whatsapp</v-icon
                >
              </a>
            </div>
          </div>
          <div class="w-40 h-48 self-end justify-self-end">
            <a href="https://www.instagram.com/famouskesler/?hl=en">
              <img
                class="object-contain icon-3d pb-6"
                src="~/assets/images/ppp.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <h1
        class="self-center lg:ml-4 lg:self-start font-mainFont font-bold capitalize text-3xl p-2 lg:text-5xl text-mainRed"
      >
        {{ $t('made') }} ❤️ {{ $t('iran') }}
      </h1>
      <h1
        class="self-center lg:self-start lg:ml-4 font-mainFont font-thin capitalize text-3xl p-1 lg:text-4xl text-mainRed"
      >
        {{ $t('art') }}
        <a href="https://www.instagram.com/payamone/?hl=en" class="payamone"
          >PayamOne🌴</a
        >
      </h1>
      <div class="flex z-30 justify-end align-end h-3/6 lg:h-full">
        <img
          class="lg:object-cover object-contain h-full w-full"
          src="~/assets/images/footerpic.webp"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
.payamone {
  color: #70fa00;
  transition: ease-in-out 0.3s;
}
.payamone:hover {
  color: #fbff00;
}
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
