<template>
  <div class="flex flex-col bg-white w-screen mt-3 px-3">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <UIcon name="i-heroicons-clock" class="text-3xl text-orange-800 me-1" />
        <span>Payment pemding</span>
      </div>
      <div>
        <UButton @click="paymentMenu" color="" variant="ghost">
          <UIcon name="i-heroicons-ellipsis-horizontal" class="text-3xl text-red-700" />
        </UButton>
      </div>
    </div>
    <div class="flex justify-between items-center mt-1">
      <div>
        <p>Subtotal</p>
        <p class="text-slate-400 text-sm">2 Devices</p>
      </div>
      <div>
        <p>$1,300</p>
      </div>
    </div>
    <div class="mt-3">
      <div>
        <p>Peyment Method</p>
        <p class="text-slate-400 text-sm">Cashapp: <span class="text-blue-500">$scga12</span></p>
      </div>
    </div>
    <div class="flex justify-between items-center my-2">
        <p>Total</p>
        <p>$1,300</p>
    </div>
  </div>
  <div class="flex justify-center border-t-2 border-current-500 bg-white w-screen py-4">
    <UButton @click="sendPayment" class="bg-blue-950 py-2 px-20 text-lg font-normal" color="">
      Send Peyment
    </UButton>
  </div>
</template>
<script setup>
  const sendPayment = () => {
    console.log("send payment");
  }
  const paymentMenu = () => {
    console.log("payment menu");
  }
</script>