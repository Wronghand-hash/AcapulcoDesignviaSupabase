<template>
  <div
    v-if="loading"
    class="h-screen w-screen bg-transparent grid place-items-center self-center absolute z-50"
  >
    <div class="lds-ripple bg-transparent">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingComponent',
  data: () => ({
    loading: false,
    overlay: false,
  }),
  methods: {
    start() {
      this.loading = true
      this.overlay = true
    },
    finish() {
      this.loading = false
      this.overlay = false
    },
    fail(error) {
      console.log(error)
    },
    increase(num) {
      // console.log(num)
    },
  },
}
</script>
//
<style lang="scss" scoped>
// $transition-duration: 2s;
// $path-length: 157px;
// svg {
//   overflow: visible;
//   width: 100px;
//   height: 150px;

//   g {
//     animation: slide $transition-duration linear infinite;

//     &:nth-child(2) {
//       animation-delay: $transition-duration / 4;

//       path {
//         animation-delay: $transition-duration / 4;
//         stroke-dasharray: 0px $path-length + 1;
//         stroke-dashoffset: 1px;
//       }
//     }
//   }

//   path {
//     stroke: url(#gradient);
//     stroke-width: 20px;
//     stroke-linecap: round;
//     fill: none;
//     stroke-dasharray: 0 $path-length;
//     stroke-dashoffset: 0;
//     animation: escalade $transition-duration cubic-bezier(0.8, 0, 0.2, 1)
//       infinite;
//   }
// }

// @keyframes slide {
//   0% {
//     transform: translateY(-50px);
//   }
//   100% {
//     transform: translateY(50px);
//   }
// }

// @keyframes escalade {
//   0% {
//     stroke-dasharray: 0 $path-length;
//     stroke-dashoffset: 0;
//   }
//   50% {
//     stroke-dasharray: $path-length - 1 $path-length;
//     stroke-dashoffset: 0;
//   }
//   100% {
//     stroke-dasharray: $path-length - 1 $path-length;
//     stroke-dashoffset: -($path-length - 1);
//   }
// }
//
</style>
<style scoped>
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid rgb(0, 11, 168);
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
