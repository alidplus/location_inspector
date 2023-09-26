<template>
  <div class="flex items-center justify-between w-screen border-t border-current-500  p-3">
    <div class="w-4/6">
      <p class="text-slate-400">Pickup address</p>
      <p class="font-medium">3001 Fulton StaticRange, Brooklyn, NY 11208</p>
      <p class="flex" v-if="locationError">
        <UIcon name="i-heroicons-exclamation-triangle" class="text-xl text-red-500" /> 
        <span class="text-red-500 ms-1">{{ locationError }}</span>
      </p>
      <p class="flex" v-else>
        <UIcon name="i-heroicons-map-pin-solid" class="text-xl text-blue-500" /> 
        <UIcon name="i-heroicons-map-pin-solid" class="text-xl text-blue-500 animate-ping absolute" /> 
        <span class="text-blue-500 ms-1">{{ distance }} mi away from my location</span>
      </p>
    </div>
    <UButton @click="goLocation" label="GO" color="" class="bg-lime-500 p-4 rounded-lg text-xl font-normal" />
  </div>
</template>

<script setup lang="ts">
import { getLocation, calcDistance } from '~/utils/location'
import { TPointGeoJson } from '~/types/location'
  const originPoint: TPointGeoJson = {
    type: "Point",
    coordinates: [40.6709687,-73.8936269]
  }
  const location = ref<TPointGeoJson>({ type: "Point", coordinates: [0, 0] })
  const locationError = ref<string | null>(null)
  const stopWatch = ref<any>(null)

  onMounted(async () => {
    try {
      const loc = await getLocation()
      location.value = {
        type: "Point",
        coordinates: [
          loc.coords.latitude,
          loc.coords.longitude
        ]
      }
      stopWatch.value = watchLiveLocation((pos: GeolocationPosition) => {
        location.value = {
          type: "Point",
          coordinates: [
            pos.coords.latitude,
            pos.coords.longitude
          ]
        }
      })
    } catch (e: any) {
      locationError.value = e.message
    }
  })

  const distance = computed<number>(
    () => !locationError.value ? ~~calcDistance(originPoint, location.value) : NaN
  )

  const goLocation = () => {
    console.log("go location");
  }
</script>