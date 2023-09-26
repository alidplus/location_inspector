<template>
  <div class="w-screen">
    <h3 class="ms-4 font-medium text-xl">Devices</h3>
    <div v-for="device, index in devices" :key="device.id" :class="index !== 0 && 'border-t'">
      <Device :device="device"/>
    </div>
  </div>
</template>
<script setup lang="ts">
  const devices: IDevice[] = [
    {
      id: "f9e8b58f-eac9-4fbd-a7e5-9591622b648c",
      title: 'iPhone 13 Pro Max',
      thumbUrl: "/images/13promax.png",
      memory: 128,
      offer: 750,
      unlocked: true,
      quality: "flawless"
    },
    {
      id: "d727e1c4-4fc5-4d5b-b6f2-7b861e53921d",
      title: 'iPhone 13',
      thumbUrl: "/images/13pro.png",
      memory: 128,
      offer: 550,
      unlocked: true,
      quality: "good"
    }
  ]
</script>