<template>
  <div 
    class="border rounded-2xl font-bold px-4 py-1"
    :class="{blue: color === 'blue', gray: color === 'gray', green: color === 'green', purple: color === 'purple', yellow: color === 'yellow', pink: color === 'pink',default: color === 'default'}"
    >
    <slot />
  </div>
</template>

<style scoped>
  .blue {
    @apply text-[#0969DA] border-[#0969DA]
  }
  .gray {
    @apply text-[#6E7781] border-[#6E7781]
  }
  .green {
    @apply text-[#1A7F37] border-[#1A7F37]
  }
  .purple {
    @apply text-[#8250DF] border-[#8250DF]
  }
  .yellow {
    @apply text-[#BF8700] border-[#BF8700]
  }
  .pink {
    @apply text-[#BF3989] border-[#BF3989]
  }
  .default {
    @apply text-[#1F2328] border-[#D0D7DE]
  }
</style>

<script setup lang="ts">

  type TColor = "blue" | "gray" | "green" | "purple" | "yellow" | "pink" | "default"
  interface IProps {
    color: TColor
  }

  defineProps<IProps>()
</script>

