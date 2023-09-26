<template>
  <div id="app-navigator" class="fixed bottom-0 bg-white flex w-screen h-20 border-t-2 border-current-500">
    <NuxtLink to="/chat" class="flex flex-col justify-center items-center w-1/5 h-full">
      <UIcon name="i-heroicons-chat-bubble-left-ellipsis" class="text-3xl text-blue-500" />
      <p class="text-xs">Chats</p>
    </NuxtLink>
    <NuxtLink to="/schedule" class="flex flex-col justify-center items-center w-1/5 h-full">
      <UIcon name="i-heroicons-calendar-days" class="text-3xl text-blue-500" />
      <p class="text-xs">Schedule</p>
    </NuxtLink>
    <NuxtLink to="/" class="flex flex-col justify-center items-center w-1/5 h-full">
      <UIcon name="i-heroicons-map-pin-solid" class="text-3xl text-blue-500" />
      <p class="text-xs">Pickups</p>
    </NuxtLink>
    <NuxtLink to="/earnings" class="flex flex-col justify-center items-center w-1/5 h-full">
      <UIcon name="i-heroicons-circle-stack" class="text-3xl text-blue-500" />
      <p class="text-xs">Earnings</p>
    </NuxtLink>
    <NuxtLink to="/account" class="flex flex-col justify-center items-center w-1/5 h-full">
      <UIcon name="i-heroicons-user" class="text-3xl text-blue-500" />
      <p class="text-xs">Account</p>
    </NuxtLink>
  </div>
</template>
<style scoped>
  #app-navigator .router-link-active p {
    --tw-text-opacity: 1;
    color: rgb(59 130 246 / 1);
    color: rgb(59 130 246 / var(--tw-text-opacity));
  }
</style>