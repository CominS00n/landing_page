<template>
  <div class="max-w-screen-lg flex flex-col mx-auto my-5 max-md:items-center">
    <div class="flex flex-col justify-center items-center text-xl my-7">
      <b class="text-blue-900">Project Team</b>
      <b class="text-blue-900">AI Mood Detection:Smart Home</b>
    </div>
      <div class="grid grid-cols-3 gap-5 justify-items-center last:gap-0 max-md:mx-5 max-md:grid-cols-1">
        <div class="relative rounded-xl bg-white shadow-md h-56 w-64 overflow-hidden max-md:mt-5">
          <div class="absolute bottom-5 left-5 text-white text-xl">
            <b>Pop</b>
          </div>
          <div>
            <img class="object-cover h-56 w-64" src="@/image/ComingS00n_002.jpg" alt="image" />
          </div>
        </div>

        <div class="relative rounded-xl bg-white shadow-md h-56 w-64 overflow-hidden max-md:mt-5">
          <div class="absolute bottom-5 left-5 text-white text-xl">
            <b>Pleng</b>
          </div>
          <div>
            <img class="object-cover h-56 w-64" src="@/image/Pleng.jpg" alt="image" />
          </div>
        </div>

        <div class="relative rounded-xl bg-white shadow-md h-56 w-64 overflow-hidden max-md:mt-5">
          <div class="absolute bottom-5 left-5 text-white text-xl">
            <b>Khanun</b>
          </div>
          <div>
            <img class="object-cover h-56 w-64" src="@/image/Khanun.jpg" alt="image" />
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'BodyItem'
}
</script>
