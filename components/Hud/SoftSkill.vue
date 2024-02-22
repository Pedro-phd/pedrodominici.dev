<template>
  <WidgetContainer title="Soft skill's" class="min-w-[600px] w-full">
    <div class="flex gap-2 h-full">
      <div class="flex flex-col gap-2 w-1/2 ">
        <SoftSkillsItem title="Team Work" :icon="Users">
          <template v-slot:icon>
            <Users  class="text-ct-icon size-4"/>
          </template>
          <template v-slot:default>
            <p>
              Effective teamwork is crucial for success, fostering seamless integration into teams, sharing knowledge, and achieving joint goals harmoniously and productively.
            </p>
          </template>
        </SoftSkillsItem>
        <SoftSkillsItem title="Knowledge Sharing">
          <template v-slot:icon>
            <Repeat2  class="text-ct-icon size-4"/>
          </template>
          <template v-slot:default>
            <p>
              haring knowledge is crucial for team growth and individual development, as everyone teaches and learns continuously.
            </p>
          </template>
        </SoftSkillsItem>
      </div>
      <div class="flex flex-col gap-2 w-1/2">
        <SoftSkillsItem title="Continuous Learning" :icon="Users">
          <template v-slot:icon>
            <Lightbulb  class="text-ct-icon size-4"/>
          </template>
          <template v-slot:default>
            <p>
              Continuous learning is essential for tackling challenges, embracing new projects, evolving from failures, and achieving sustainable career development.
            </p>
          </template>
        </SoftSkillsItem>
        <SoftSkillsItem title="Resilience" :icon="Users">
          <template v-slot:icon>
            <Dumbbell  class="text-ct-icon size-4"/>
          </template>
          <template v-slot:default>
            <p>
              Resilience is crucial to face challenges and new projects, learn from failures, and achieve sustainable career growth.
            </p>
          </template>
        </SoftSkillsItem>
      </div>
    </div>
  </WidgetContainer>
</template>

<script setup lang="ts">
  import { Users, Repeat2, Lightbulb, Dumbbell } from 'lucide-vue-next'


</script>