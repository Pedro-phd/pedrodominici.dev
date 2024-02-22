<template>
  <div class="content">
    <h3 class="title">{{title}}</h3>
    <div class="list">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">

  interface IProps {
    title: string
  }

  defineProps<IProps>()

</script>

<style scoped>
  .title {
    @apply text-base text-ct-default-text font-[500]
  }
  .content {
    @apply flex flex-col gap-2 px-3 py-4 border border-ct-default-border rounded-md
  }
</style>