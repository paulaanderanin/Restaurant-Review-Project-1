if ('serviceWorker' in navigator) {
  //scope is where the file directory is
  navigator.serviceWorker.register('./sw.js', { scope:'./'}).then(function(reg) {
    console.log('Service worker is registered!');
  }).catch(function(err) {
    console.log('Service worker failed to register', err);
  });
}
