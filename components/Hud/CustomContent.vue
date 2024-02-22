<template>

  <div class="readme">
    <div class="nav">
      <p class="nav-item">
        <User />
        About
      </p>
    </div>
    <div class="content">
      <h1>Pedro Dominici</h1>
      <div class="divider"/>
      <div class="paragraph">
        <p>
          Throughout my career, I have been developing software solutions that bring benefits and enhance the user experience. With a primary focus on frontend development, I specialize in creating intuitive and visually appealing interfaces. 
        </p>
        <p>
          Additionally, I possess fullstack skills, allowing me to work on solutions using Golang, Javascript, C#, and other languages. I am passionate about exploring the possibilities of technology and am always open to taking on new challenges.</p>
      </div>
      <h3>My principals tools of working</h3>
      <div class="tools">
        <CustomTag color="blue">React</CustomTag>
        <CustomTag color="gray">Next</CustomTag>
        <CustomTag color="green">Vue</CustomTag>
        <CustomTag color="purple">Nuxt</CustomTag>
        <CustomTag color="blue">Go</CustomTag>
        <CustomTag color="yellow">Node</CustomTag>
        <CustomTag color="blue">TS</CustomTag>
        <CustomTag color="gray">C#</CustomTag>
        <CustomTag color="blue">Docker</CustomTag>
        <CustomTag color="pink">AWS</CustomTag>
        <CustomTag color="default">...And More</CustomTag>
      </div>
    </div>
  </div>

</template>

<style scoped>
  .readme {
    @apply flex flex-col w-full border border-ct-default-border rounded-md
  }

  .nav {
    @apply flex px-4 h-12 border-b border-ct-default-border
  }

  .nav-item {
    @apply flex items-center h-full gap-1 
    text-sm font-[Inter] border-b border-[#FD8C73] 
    
  }
  svg {
    color: #636C76;
    width: 16px;
    height: 16px;
  }

  .content {
    @apply flex flex-col w-full px-3 py-4 gap-2 pb-8
  }

  h1 {
    @apply text-4xl font-[600] text-[#1F2328]
  }

  .divider {
    @apply border-b border-ct-default-border
  }

  .paragraph {
    @apply flex flex-col gap-3
  }
  .paragraph p {
    @apply text-[#656D76] text-wrap w-full
  }

  h3 {
    @apply text-xl font-[600] text-[#1F2328] mt-4
  }

  .tools {
    @apply flex gap-2 md:gap-4 w-full flex-wrap
  }
</style>

<script setup>
 import { User } from 'lucide-vue-next'

</script>