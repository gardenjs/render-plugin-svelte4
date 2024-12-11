function inform(propName) {
  const message = `Sveltekit object $app/navigation.${propName} was called. Learn more to avoid this message here`
  console.log(message)
  alert(message)
}

export const afterNavigate = () => {
  inform('afterNavigate')
}
export const beforeNavigate = () => {
  inform(beforeNavigate)
}
export const disableScrollHandling = () => {
  inform('disableScrollHandling')
}
export const goto = () => {
  inform('goto')
}
export const invalidate = () => {
  inform('invalidate')
}
export const invalidateAll = () => {
  inform('invalidateAll')
}
export const onNavigate = () => {
  inform('onNavigate')
}
export const preloadCode = () => {
  inform('preloadCode')
}
export const preloadData = () => {
  inform('preloadData')
}
export const pushState = () => {
  inform('pushState')
}
export const replaceState = () => {
  inform('replaceState')
}
