<template>
  <header class="bg-while h-auto mb-5">
    <div
      class="max-w-screen-lg mx-auto flex justify-between items-center max-md:flex-col-reverse"
    >
      <div class="flex flex-col w-1/2 max-sm:my-5">
        <b class="uppercase text-4xl text-blue-900">sitthichai</b>
        <b class="uppercase text-4xl text-blue-900">puckpoo</b>
        <p class="mt-5 text-blue-900">
          นายสิทธิชัย พักโพธิ์ (ป๊อป) มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี คณะวิทยาศาสตร์และเทคโนโลยี
          สาขาเทคโนโลยีสารสนเทศ ที่อยู่.......
        </p>
        <button
          type="button"
          class="rounded-md uppercase mt-5 bg-blue-800 text-white w-28 h-10 text-sm hover:border hover:border-blue-900 hover:bg-white hover:text-blue-900"
        >
          <RouterLink to="/aboutMe">Read More</RouterLink>
        </button>
      </div>
      <div class="justify-items-center">
        <img src="@/image/ComingS00n.jpg" alt="##" class="rounded-3xl w-72" />
      </div>
    </div>
  </header>
  <icon-navbar />
</template>

<script lang="ts">
import IconNavbar from '@/components/Iconbar/IconNavbar.vue'
export default {
  name: 'HomeView',
  components: {
    IconNavbar
  }
}
</script>
