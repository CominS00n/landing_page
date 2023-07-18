<template>
  <main-nav/>
  <router-view />
</template>

<script lang="ts">

import MainNav from '@/components/Menubar/MainNav.vue'

export default {
  name: "App",
  components: {
    MainNav,
  }
}
</script>
