const state = reactive({
  focus: ''
})

export default function () {
  const setFocus = async (section: string) => {
    state.focus = section
    await navigateTo(`#${section}`)
  }
  
  return {state, setFocus}
}