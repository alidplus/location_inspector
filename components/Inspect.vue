<template>
  <div class="flex items-center justify-between px-3 pb-4" @click="save">
    <div class="flex items-center mt-3">
      <img :src="device.thumbUrl" class="h-16 me-2"/>
      <div class="">
        <p class="font-medium">{{ device.title }}</p>
        <p class="text-slate-400 text-sm">{{ subtitle }}</p>
        <p class="text-blue-500 text-sm">Estimated offer {{ offer }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  const inspector = useInspectStore()
  const toast = useToastStore()
  interface IProps {
    device: IDevice,
  }
  type DeviceSubtitle = `${number}GB - ${"Unlocked" | "Locked"} - ${"Flawless" | "Good"}`;

  const props = defineProps<IProps>()
  const emit = defineEmits<{
    (e: 'close'): void
  }>()

  const { device } = props

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

  const save = () => {
    inspector.inspect(device)
    toast.showToast(`"${device.title}" has been Saved`)
    emit('close')
  }
</script>