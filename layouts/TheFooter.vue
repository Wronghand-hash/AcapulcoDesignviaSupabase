<i18n lang="yaml">
en:
  findUS: 'Find Us One Social Media!'
  made: 'Made With'
  iran: 'From Iran'
  art: 'Art By'

fa:
  findUS: 'ما رو تو شبکه های اجتماعی پیدا کنین'
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
            <v-icon x-large class="icon-3d transform lg:scale-150">
              mdi-telegram</v-icon
            >
            <v-icon x-large class="icon-3d transform lg:scale-150"
              >mdi-google</v-icon
            >
            <v-icon x-large class="icon-3d transform lg:scale-150"
              >mdi-instagram</v-icon
            >
            <v-icon x-large class="icon-3d transform lg:scale-150"
              >mdi-whatsapp</v-icon
            >
          </div>
          <div class="w-40 h-48 self-end justify-self-end">
            <a href="https://www.instagram.com/famouskesler/?hl=en">
              <img
                class="object-contain icon-3d"
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
$redColor: rgba(244, 67, 54, 1);
$blueColor: rgba(33, 150, 243, 1);
.icon-3d {
  cursor: pointer;
  -webkit-animation: icon3d 200ms 10;
  animation: icon3d 200ms 10;
  color: #f6f6f6;
  padding-bottom: 5px;
  border-bottom: 5px solid #120129;
  border-radius: 25px;
  // border-right: 5px solid #120129;
  &:hover {
    border-bottom: 5px solid #ff4a68;
    // border-right: 5px solid #ff4a68;

    transition: ease-in-out 0.7s;
    -webkit-animation: icon3d 200ms infinite;
    animation: icon3d 200ms infinite;
  }
}

@keyframes icon3d {
  0% {
    text-shadow: 5px 4px $redColor, -5px -6px $blueColor;
  }
  25% {
    text-shadow: -5px -6px $redColor, 5px 4px $blueColor;
  }
  50% {
    text-shadow: 5px -4px $redColor, -8px 4px $blueColor;
  }
  75% {
    text-shadow: -8px -4px $redColor, -5px -4px $blueColor;
  }
  100% {
    text-shadow: -5px 0 $redColor, 5px -4px $blueColor;
  }
}
</style>
