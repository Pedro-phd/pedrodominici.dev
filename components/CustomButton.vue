<template>
  <button class="btn" 
  :class="{
    primary: variant === 'primary',
    default: variant === 'default'
  }">
    <slot />
  </button>
</template>


<script setup lang="ts">
  interface IProps {
    variant: 'default' | 'primary'
  }

  defineProps<IProps>()
</script>

<style scoped>

.btn {
  &.primary{
    @apply flex bg-ct-primary-bg border text-white py-[6px] px-3 rounded-md border-ct-primary-border 
    hover:shadow-inner hover:bg-ct-primary-hover transition-all
  }
  &.default {
    @apply flex bg-ct-default-bg border-ct-default-border border text-ct-default-text py-[6px]  
    px-3 rounded-md   hover:shadow-inner hover:bg-ct-default-hover transition-all
  }
}
</style>