<template>
  <Suspense>
    <template #default>
      <div>
        <AsynCityView />
      </div>
    </template>
    <template #fallback>
      <div>Yuklanobdi</div>
    </template>
  </Suspense>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'
const AsynCityView = defineAsyncComponent(() =>
  import('@/component/AsynCityView.vue')
)
</script>


