<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="max-w-screen-lg mx-auto flex mb-5 max-md:mx-5">
    <div class="w-full h-auto rounded-xl border shadow-lg grid grid-cols-4 p-5 hover:border hover:border-blue-900 max-md:grid-cols-1 max-md:justify-center">
      <div class="flex justify-center">
        <img :src="imagePath" alt="No Image" class="rounded-xl w-48" />
      </div>
      <div class="flex items-center p-5 col-span-3">
        <p>
          <h1 class="text-xl"><b>{{ headerText }}</b></h1>
          <hr class="my-3">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ProfileCard",
    props: {
        text: null,
        imagePath: null,
        headerText: null
    },
}
</script>