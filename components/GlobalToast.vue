<template>
  <div v-show="toast.show" class="w-screen fixed bottom-0 z-50 px-3 mb-3">
    <UAlert
      class="drop-shadow"
      color="violet"
      variant="solid"
      :title="toast.message"
      :actions="[{
        icon: 'i-heroicons-x-mark-20-solid',
        color: 'white',
        variant: 'link',
        padded: false,
        click: () => toast.hideToast()
      }]"
    />
  </div>
</template>

<script setup lang="ts">
  const toast = useToastStore()
</script>