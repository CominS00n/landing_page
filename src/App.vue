<template>
  <main-nav />
  <router-view />
  <footer-view />
</template>

<script lang="ts">
import MainNav from '@/components/Menubar/MainNav.vue'
import footerView from '@/components/footerView.vue'

export default {
  name: 'App',
  components: {
    MainNav,
    footerView
  }
}
</script>
