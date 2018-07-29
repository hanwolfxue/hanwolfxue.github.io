(function () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js',{ scope: "/" }).then(function (registration) {
      console.log('serviceWorker registration successful with scope: ', registration.scope)
    }).catch(function (err) {
      console.log('serviceWorker registration failed:', err)
    })
  }
})()