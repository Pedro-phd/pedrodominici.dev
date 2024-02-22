<template>
  <div class="flex gap-2 flex-col items-center w-full h-screen">
    <HudCustomHeader />
    <div class="min-h-[80px] w-full block"/>
    <div class="px-4 flex flex-col gap-2 items-center w-full md:px-16">
      <HudCustomBanner> Welcome to my personal website! </HudCustomBanner>
      <div class="flex gap-2 flex-col lg:flex-row animate__animated animate__fadeIn animate__slower" id="about">
        <HudCustomContent />
        <HudWorkExperience />
      </div>
    </div>
    <div
      class="px-4 flex gap-2 items-center w-full md:px-16 flex-wrap xl:flex-nowrap animate__animated animate__fadeIn animate__slower">
      <div class="flex gap-2 w-full flex-wrap lg:flex-nowrap" id="skill">
        <HudMainWork />
        <HudSoftSkill />
      </div>
      <HudContact id="like" />
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/css/tailwind.css'
</script>