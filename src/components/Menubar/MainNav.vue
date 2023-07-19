<template>
  <nav class="sticky top-0 w-full pt-5 bg-white border-b shadow-md h-20 mb-5">
    <div
      class="max-w-screen-lg mx-auto flex justify-between max-md:mx-5 max-sm:mx-5"
    >
      <div class="flex items-center max-sm:flex-col max-sm:items-start">
        <h1 class="mr-14 text-xl text-blue-900 max-sm:mr-0"><b>ComingS00n</b></h1>
        <ul class="flex space-x-5">
          <li v-for="x in menus" :key="x.name" class="uppercase text-sm text-blue-900 hover:border-b-2">
            <RouterLink :to="x.link">{{ x.name }}</RouterLink>
          </li>
        </ul> 
      </div>
      <div>
        <button
          class="rounded-md border border-blue-900 h-10 w-20 text-xs text-blue-900 hover:border-none hover:bg-blue-900 hover:text-white"
        >
          <b>Login</b>
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'MainNav',
  data() {
    return {
      menus: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'blog',
          link: '/aboutMe'
        },
        {
          name: 'Image',
          link: '/imageView'
        }
      ]
    }
  }
}
</script>
