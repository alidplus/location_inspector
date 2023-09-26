<template>
  <!-- google static map need a api key was not safe to use in a test project -->
  <img class="w-screen" src="/images/fake_map.png" alt="">
  <div class="w-screen bg-white flex flex-col items-center drop-shadow-sm py-3">
    <div class="w-screen px-9">
      <BadgeGroup />
      <DateTime />
    </div>
    <div class="w-screen px-7">
      <Alert />
    </div>
    <Customer />
    <PickUpAddress />
    <AddressInstructions />
  </div>
  <div class="w-screen bg-white mt-3 drop-shadow-sm pt-3">
    <Devices />
  </div>
  <div class="w-screen bg-white mt-3 drop-shadow-sm">
    <Payment />
  </div>
</template>