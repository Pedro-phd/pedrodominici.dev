<template>
  <button
    class="icon-btn"
  >
    <slot />
  </button>
</template>

<style scoped>
  .icon-btn {
    @apply flex justify-center items-center size-9 
    p-2 rounded-md border bg-ct-default-bg border-ct-default-border 
    text-[#24292F] drop-shadow-iconButton 
    hover:shadow-inner hover:bg-ct-default-hover transition-all
  }

</style>