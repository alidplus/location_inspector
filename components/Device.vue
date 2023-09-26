<template>
  <div class="flex items-center justify-between px-3 pb-4">
    <div class="flex items-center mt-3">
      <img :src="device.thumbUrl" class="h-16 me-2"/>
      <div class="">
        <p class="font-medium">{{ device.title }}</p>
        <p class="text-slate-400 text-sm">{{ subtitle }}</p>
        <p class="text-blue-500 text-sm">Estimated offer {{ offer }}</p>
      </div>
    </div>
    <div class="flex flex-col items-end">
      <UButton @click="deviceMenu" color="" variant="ghost" class="p-0 mb-2">
        <UIcon name="i-heroicons-ellipsis-horizontal" class="text-3xl text-red-700" />
      </UButton>

      <UButton color="red" label="Start inspection" @click="isOpen = true"/>
    </div>
    <UModal v-model="isOpen">
      <Inspect :device="device" @close="isOpen = false" />
    </UModal>
  </div>
</template>
<script setup lang="ts">
  const isOpen = ref(false)

  interface IProps {
    device: IDevice,
  }
  type DeviceSubtitle = `${number}GB - ${"Unlocked" | "Locked"} - ${"Flawless" | "Good"}`;

  const props = defineProps<IProps>()
  const {device} = props
  const subtitle = computed<DeviceSubtitle>(
    () => `${device.memory}GB - ${device.unlocked ? "Unlocked" : "Locked"} - ${device.quality === 'good' ? "Good" : "Flawless"}`
  );
  const offer = computed<string>(
    () => new Intl.NumberFormat('en-US', {
      currency: 'USD',
      style: 'currency',
      maximumFractionDigits: 0
    }).format(device.offer)
  )
  const deviceMenu = () => {
    console.log("Device menu");
  }
</script>