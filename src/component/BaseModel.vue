<template>
    <Transition name="modal-outer">
        <wrapper v-show="modalLogic"  class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8">
            <Transition name="modal-inner">
                <div v-if="modalLogic"  class="p-4 bg-white self-start mt-32 max-w-md" >
                <slot />
                <button v-on:click="$emit('close-modal')" class="mt-8 bg-weather-primary text-white py-2 px-6">Close</button>
            </div>
            </Transition>
        </wrapper>
    </Transition>
</template>

<script setup>

defineEmits(['close-modal'])
defineProps({
    modalLogic:{
        typeof: Boolean,
        default: false
    }
})
</script>
<style scoped>

.modal-outer-enter-active,
.modal-outer-leave-active{
    transition: all 0.9s cubic-bezier(0.52,0.02,0.19,1.02);
}
.modal-outer-enter-from,
.modal-outer-leave-to{
    opacity: 0 ;
}
.modal-inner-enter-active{
    transition: all 0.9s cubic-bezier(0.52,0.02,0.19,1.02) 0.15s;
}

.modal-inner-leave-active{
    transition: all 0.9s cubic-bezier(0.52,0.02,0.19,1.02) 0.15s;
    scale: 1.8;
}
.modal-inner-enter-from,
.modal-inner-leave-to{
    opacity: 0 ;
}


</style>

