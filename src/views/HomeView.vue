<template>
  <first-item
    name="sitthichai puckpoo"
    text="เว็บไซต์สำหรับเขียน Blog ของ ComingS00n
          เป็นเว็บไซต์ที่ใช้เขียนเรื่องราวในแต่ละวันและผลงานต่างๆของ ComingS00n"
  />
  <icon-navbar />
  <body-item />
</template>

<script lang="ts">
import FirstItem from '@/components/HomeView/firstItem.vue'
import IconNavbar from '@/components/Iconbar/IconNavbar.vue'
import BodyItem from '@/components/HomeView/bodyItem.vue'
export default {
  name: 'HomeView',
  components: {
    IconNavbar,
    BodyItem,
    FirstItem
  }
}
</script>
