<template>
  <WidgetContainer title="Main Work" class="min-w-[220px]"
  :class="{ inFocus: state.focus === 'skill' }"
  >
    <div class="flex flex-wrap lg:flex-col gap-2 h-fit lg:h-full">
      <MainWorkItem enterprise="Kenlo" project="CMS" />
      <MainWorkItem enterprise="Kenlo" project="Landing Page" />
      <MainWorkItem enterprise="Samsung" project="E-commerce" />
      <MainWorkItem enterprise="Dzarm" project="E-commerce" />
      <MainWorkItem enterprise="Hering outlet" project="E-commerce" />
      <MainWorkItem enterprise="" project="Others" />
    </div>
  </WidgetContainer>
</template>

<script setup>
const { state} = useFocus()

</script>

<style scoped>

.inFocus {
  box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.7);
  animation: pulse 2s infinite;
}


@keyframes pulse {
  0% {
  box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.7);
}

70% {
  box-shadow: 0 0 0 10px rgba(51, 217, 178, 0);
}

100% {
  box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);
}
}
</style>