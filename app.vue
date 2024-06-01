<template>
  <div class="max-w-6xl mx-auto">
    <transition
      enter-active-class="transition-opactiy ease-linear duration"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-30"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <MobileMenu
        v-show="showMobileMenu"
        @closeMobileMenu="showMobileMenu = false"
      />
    </transition>
    <MainHeader
      @showMobileMenu="showMobileMenu = true"
      v-show="!showMobileMenu"
    />
    <div class="h-screen flex container pt-24 pb-8">      <DesktopSidebar class="hidden md:flex" />
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md md:max-w-2xl">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      showMobileMenu: false,
    };
  },
};
</script>
