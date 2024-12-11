export let applyAction = () => {
  console.log('mock action called. $app/forms -> applyAction')
}

export const setApplyAction = (value) => {
  applyAction = value
}

export let deserialize = () => {
  console.log('mock action called. $app/forms -> deserialize')
}

export const setDeserialize = (value) => {
  deserialize = value
}

export let enhance = () => {
  console.log('mock action called. $app/forms -> enhance')
}

export const setEnhance = (value) => {
  enhance = value
}
