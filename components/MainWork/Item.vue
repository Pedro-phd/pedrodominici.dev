<template>
  <div class="item">
    <p class="enterprise" v-if="enterprise != ''">@/{{ enterprise }} - </p>
    <p class="project"> {{ project }}</p>
  </div>
</template>

<script setup lang="ts">

interface IProps {
  enterprise: string
  project: string
}

defineProps<IProps>()

</script>

<style scoped>
  .item {
    @apply flex w-fit gap-1 bg-[#F6F8FA] border rounded-md border-ct-default-border py-1 px-2
  }
  p {
    @apply text-xs text-ct-text-black leading-none
  }

  .enterprise {
    @apply font-[500]
  }
</style>