<template>
  <div class="flex flex-col items-center relative bg-gray-200 pb-20">
    <Head>
      <Title>Location Inspector</Title>
      <Meta name="description" content="Location Inspector description"/>
      <Meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0"/>
    </Head>
    <RouterView />
    <GlobalToast />
    <Navigator />
  </div>
</template>

<script setup lang="ts">
</script>

<style>
</style>