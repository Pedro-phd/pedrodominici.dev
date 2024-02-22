
<template>
  <div class="flex w-full justify-between items-center border-b border-ct-border px-4 md:px-16 py-4 fixed z-10 bg-white animate__animated animate__fadeIn">
    <div class="flex gap-2">
      <a href="#about">
        <IconButton @click="focus('about')">
          <IconsUserIcon />
        </IconButton>
      </a>
      <a href="#skill">
        <IconButton @click="focus('skill')">
          <IconsCodeIcon />
        </IconButton>
      </a>
      <a href="#like">
        <IconButton @click="focus('like')">
          <HeartHandshakeIcon class="text-[#636C76]" />
        </IconButton>
      </a>
    </div>
    <div class="flex gap-2">
      <CustomButton variant="default">Contact</CustomButton>
      <CustomButton variant="primary">Resume</CustomButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HeartHandshakeIcon } from 'lucide-vue-next';
const { state, setFocus } = useFocus()
const focus = (section: string) => {
  setFocus(section)
}
</script>