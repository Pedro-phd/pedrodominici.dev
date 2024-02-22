<template>
  <div class="item">
    <div class="header">
      <div class="flex gap-2 items-center">
        <slot name="icon" />
        <p>{{ title }}</p>
      </div>
      <GripVertical class="text-ct-icon size-4"/>
    </div>
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<style scoped>
  .item {
    @apply w-full h-full xl:max-w-[282px] flex flex-col gap-2 border border-ct-default-border rounded-md px-3 py-2
  }
  .header {
    @apply flex gap-2 w-full items-center justify-between
  }

  .content {
    @apply text-xs text-[#656D76] leading-4
  }

</style>

<script setup lang="ts">

  import { GripVertical } from 'lucide-vue-next'

  interface IProps {
    icon: Element
    title: string
  }

  defineProps<IProps>()
</script>