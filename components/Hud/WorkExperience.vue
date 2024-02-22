<template>
  <WidgetContainer title="Work experience" 
    class="w-full lg:w-1/3"
    :class="{ inFocus: state.focus === 'about' }"
  >
    <div class="flex flex-col gap-4 lg:gap-2">
      <WorkExperienceItems enterprise="Kenlo" position="Pleno Frontend" time="Now">
        Responsible for the development and maintenance of complex systems in the real estate industry
      </WorkExperienceItems>
      <WorkExperienceItems enterprise="Kenlo" position="Junior Frontend" time="2022 - 2023">
        Responsible for the development and maintenance of complex systems in the real estate industry
      </WorkExperienceItems>
      <WorkExperienceItems enterprise="Acct" position="Junior Frontend" time="2021 - 2022">
        Responsible for creating components and custom pages
        using ReactJS and integrations with NodeJS and GraphQL, integrating the VTEX platform.
      </WorkExperienceItems>
      <WorkExperienceItems enterprise="Acct" position="Estagiario" time="2020 - 2021">
        As a Frontend developer I was responsible for creating and
        maintaining well desingned pages for e-commerces using the
        VTEX platform.
      </WorkExperienceItems>
    </div>
  </WidgetContainer>
</template>

<script setup lang="ts">

const { state } = useFocus()

</script>

<style scoped>

.inFocus {
    box-shadow: 0 0 0 0 rgb(54, 127, 204);
    animation: pulse 2s infinite;
  }


@keyframes pulse {
	0% {
		box-shadow: 0 0 0 0 rgb(54, 127, 204);
	}
	
	70% {
		box-shadow: 0 0 0 10px rgba(51, 217, 178, 0);
	}
	
	100% {
		box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);
	}
}


</style>