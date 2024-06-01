<template>
  <div
    class="fixed flex flex-shrink-0 h-16 w-full max-w-6xl z-10 bg-white border-b-2 border-gray-100"
  >
  <button class="md:hidden p-6" @click="showMobileMenu">
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>

    <!-- TODO mobile header -->

    <div class="flex-1 px-4 flex items-center justify-between">
      <div class="flex">
        <!-- logo -->
        <!-- <logo class="h-5 w-5 hidden md:flex" /> -->
        <!-- search -->
        <input />
      </div>

      <!-- icons-->
      <div>
        <GlobeIcon class="mr-1 h-5 w-5 text gray-700 hover:text-gray-800" />
      </div>
    </div>
  </div>
</template>

<script>
import GlobeIcon from "./GlobeIcon.vue";

export default {
  componenets: {GlobeIcon},
  methods: {
    showMobileMenu(){
      this.$emit('showMobileMenu')
    }
  }
}
</script>
