<script setup>
import { cn } from "@/lib/utils";
import { useCityImg } from "@/composables/getCityImg";


const { imgUrl } = useCityImg();

const props = defineProps({
  class: { type: null, required: false },
});

</script>

<template>
  <div
    :class="
      cn(
        'rounded-lg dark:bg-gray-800 transition-colors duration-300 border text-card-foreground shadow-sm',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
