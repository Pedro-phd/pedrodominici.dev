<template>
  <div class="flex w-full justify-between items-center border-b border-ct-border px-4 md:px-16 py-4">
    <div class="flex gap-2">
      <IconButton @click="console.log('home')">
        <IconsHomeIcon />
      </IconButton>
      <IconButton @click="console.log('user')">
        <IconsUserIcon />
      </IconButton>
      <IconButton @click="console.log('code')">
        <IconsCodeIcon />
      </IconButton>
    </div>
    <div class="flex gap-2">
      <CustomButton variant="default">Contact</CustomButton>
      <CustomButton variant="primary">Resume</CustomButton>
    </div>
  </div>
</template>