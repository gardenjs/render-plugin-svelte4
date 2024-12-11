export const getStores = () => {
  return {
    navigating,
    page,
    updated,
  }
}

export const navigating = () => {
  mockStore(null)
}

export const page = mockStore({
  url: new URL('http://localhost:8080/example/url/'),
})

export const updated = () => {
  mockStore(false)
}

function mockStore(initialValue) {
  let subscriber = () => {}
  let value = initialValue

  function unsubscribe() {
    subscriber = () => {}
  }

  return {
    subscribe: (fn) => {
      subscriber = fn
      subscriber(value)
      return { unsubscribe }
    },
    set: (newValue) => {
      value = newValue
      subscriber(value)
    },
    update: (newValue) => {
      value = newValue
      subscriber(value)
    },
  }
}
