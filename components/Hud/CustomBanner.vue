<template>
  <div
    class="w-full shadow-sm max-w-[560px] flex bg-[rgba(218,251,225,1)] border border-[rgba(74,194,107,.4)] rounded-md py-4 px-6 gap-4 animate__animated animate__fadeInUp"
  >
    <Trophy class="size-6 text-ct-primary-border" />
    <slot class="" />
  </div>
</template>

<script setup lang="ts">
  import { Trophy } from 'lucide-vue-next'
</script>