<template>
  <div class="flex flex-col items-center relative bg-gray-200">
    <!-- google static map need a api key was not safe to use in a test project -->
    <img class="w-screen" src="/images/fake_map.png" alt="">
    <div class="bg-white flex flex-col items-center drop-shadow-sm py-3">
      <div class="w-full px-9">
        <BadgeGroup />
        <DateTime />
      </div>
      <div class="w-full px-7">
        <Alert />
      </div>
      <Customer />
      <PickUpAddress />
      <AddressInstructions />
    </div>
    <div class="bg-white mt-3 drop-shadow-sm pt-3">
      <Devices />
    </div>
    <div class="bg-white mt-3 drop-shadow-sm">
      <Payment />
    </div>
    <GlobalToast />      
    <Navigator />
  </div>
</template>

<script setup lang="ts">
</script>