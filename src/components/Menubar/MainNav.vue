<template>
  <nav class="pt-5 bg-white border-b shadow-md h-20 mb-5">
    <div class="container max-w-screen-lg mx-auto flex justify-between">
      <div class="flex items-center">
        <h1 class="mr-14 text-xl text-blue-900"><b>ComingS00n</b></h1>
        <ul class="flex space-x-5">
          <li v-for="x in menus" :key="x.name" class="text-sm text-blue-900 hover:border-b-2">
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
          name: "Home",
          link: "/"
        },
        {
          name: "About",
          link: '/aboutMe'
        },
        {
          name: "Image",
          link: "/image"
        }
      ]
    }
  }
}
</script>
