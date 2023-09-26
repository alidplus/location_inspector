<template>
  <div class="flex justify-between">

    <div>
      <UBadge
        variant="solid"
        color="white"
        class="border border-blue-500 text-blue-500 me-2"
        :ui="{ rounded: 'rounded-full' }"
      >
        offer #T216
      </UBadge>
  
      <UBadge 
        variant="solid"
        :ui="{ rounded: 'rounded-full' }"
        class="text-current bg-orange-200 me-2"
      >
        Pending payment
      </UBadge>
    </div>

    <div>
      <UBadge
        variant="solid"
        class="text-current bg-gray-300"
        :ui="{ rounded: 'rounded-full' }"
      >
        Assigned
      </UBadge>
    </div>

  </div>
</template>