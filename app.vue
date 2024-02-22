<template>
  <div class="flex gap-2 flex-col items-center w-full h-screen">
    <HudCustomHeader />
    <div class="px-4 flex flex-col gap-2 items-center w-full md:px-16">
      <HudCustomBanner> Welcome to my personal website! </HudCustomBanner>
      <div class="flex gap-2 flex-col lg:flex-row">
        <HudCustomContent />
        <HudWorkExperience />
      </div>
    </div>
    <div class="px-4 flex gap-2 items-center w-full md:px-16 flex-wrap xl:flex-nowrap">
      <div class="flex gap-2 w-full flex-wrap lg:flex-nowrap">
        <HudMainWork />
        <HudSoftSkill />
      </div>
    <HudContact/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import '@/assets/css/tailwind.css'
</script>