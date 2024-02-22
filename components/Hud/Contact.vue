<template>
  <div class="item" :class="{ inFocus: state.focus === 'like' }">
    <HeartHandshake class="heart"/>
    <p class="title">Like perfil ?</p>
    <p class="desc">I'm sure we can build a project together!</p>
    <CustomButton variant="primary">Hall we build a better world!</CustomButton>
    <a class="link">Github <ArrowUpRightFromSquare /></a>
  </div>
</template>

<style scoped>
.item {
  @apply flex flex-col gap-2 border border-ct-default-border 
  rounded-md w-full py-8 lg:py-0 lg:h-full items-center justify-center min-w-[330px]
}
.heart {
  @apply size-12 text-[#CF222E]
}
.title {
  @apply text-[#1F2328] text-base font-[500]
}

.desc {
  @apply text-[#636C76] text-sm
}

.link {
  @apply text-sm text-[#0969DA] flex items-center gap-1
}

.link svg {
  @apply size-3 
}


.inFocus {
  box-shadow: 0 0 0 0 rgb(207, 34, 46, 0.7);
  animation: pulse 2s infinite;
}


@keyframes pulse {
  0% {
  box-shadow: 0 0 0 0 rgb(207, 34, 46, 0.7);
}

70% {
  box-shadow: 0 0 0 10px rgb(207, 34, 46, 0);
}

100% {
  box-shadow: 0 0 0 0 rgb(207, 34, 46, 0);
}
}
</style>

<script setup lang="ts">
import { HeartHandshake, ArrowUpRightFromSquare } from 'lucide-vue-next'
const { state} = useFocus()


</script>
