<template>
  <div class="item">
    <p class="time">{{ time }}</p>
    <div class="header">
      <p class="enterprise">@{{ enterprise }}, </p>
      <p class="position">{{ position }}</p>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .item {
    @apply w-full border-b border-ct-default-border pb-2 flex flex-col gap-1
  }

  .time {
    @apply text-xs text-[#656D76]
  }
  
  .header {
    @apply flex gap-1 text-base lg:text-sm
  }
  
  .enterprise {
    @apply font-[500]
  }
  .content {
    
    @apply text-sm lg:text-xs text-[#656D76]
  }
</style>


<script setup lang="ts">

interface IProps {
  time: string
  enterprise: string
  position: string
}

defineProps<IProps>()

</script>