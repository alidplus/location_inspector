<template>
  <div class="border-t border-current-500 w-screen mt-3 flex items-center justify-between p-3 leading-5">
      <div>
        <p class="text-slate-400">Customer</p>
        <p class="font-medium">Christopher Nunez</p>
        <p class="text-sm">+1 (516) 812-9200</p>
      </div>
      <div class="flex">
        <UButton @click="messageBtn" color="" class="bg-gray-200 rounded-md flex-col items-center justify-center px-4 py-1 me-2">
          <UIcon name="i-heroicons-chat-bubble-oval-left-solid" class="text-3xl bg-blue-500" />
          <p class="text-blue-500 text-sm">Mag</p>
        </UButton>
        <UButton @click="callBtn" color="" class="bg-gray-200 rounded-md flex-col items-center justify-center px-4 py-1">
          <UIcon name="i-heroicons-phone-solid" class="text-3xl text-blue-500" />
          <p class="text-blue-500 text-sm">Call</p>
        </UButton>
      </div>
    </div>
</template>

<script setup>
  const messageBtn = () => {
    console.log("message");
  }
  const callBtn = () => {
    console.log("call");
  }
</script>