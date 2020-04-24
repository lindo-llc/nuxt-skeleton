export default ({ app }, inject) => {
  inject('notify', (message, type, fatal = false) => {
    if (fatal) {
      let message = data.response.data ? data.response.data.message : data
      app.$toast.show(message, {
        position: 'top-center',
        type: 'error',
        theme: 'toasted-custom',
        duration: 8000,
        action: {
          text: 'Ok',
          onClick: (e, toastObject) => {
            toastObject.goAway(0);
          }
        },
      })
    } else {
      app.$toast.show(message, {
        type: (type ? type : 'default'),
        theme: 'toasted-custom',
        duration: 8000,
        action: {
          text: 'Ok',
          onClick: (e, toastObject) => {
            toastObject.goAway(0);
          }
        },
      })
    }

  })
}
