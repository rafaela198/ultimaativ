const cacheName = "Tecnoticias1"
const files = [
  '/ultimaativ/',
  '/ultimaativ/index.html',
  '/ultimaativ/style.css',
  'https://www.techtudo.com.br/noticias/2020/05/nokia-festeja-155-anos-relembre-os-celulares-mais-marcantes.ghtml',
  'https://www.nsctotal.com.br/noticias/a-tecnologia-durante-tempos-de-pandemia',
  'https://canaltech.com.br/apps/app-google-modo-escuro-android-ios-165079/',
  'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css',
  '/ultimaativ/script.js',
  'https://code.jquery.com/jquery-3.2.1.slim.min.js',
  'https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js',
  'https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js',

]

self.addEventListener('install', function(evt) {
    console.log("install sw");
  evt.waitUntil(
    caches.open(cacheName).then(function (cache) {
    console.log('colocando arquivos na cache');
    cache.addAll(files)
  })
  )

})

self.addEventListener('activate', function(evt) {
  console.log("activate sw");
  evt.waitUntil(
  caches.keys().then(function (keys) {
    return Promise.all(
      keys
      .filter(key => key !== cacheName)
      .map(key => caches.delete(key))
    )

  })
  )
})


self.addEventListener('fetch', function(evt) {
  console.log("fetch sw");
  evt.respondWith(
  caches.match(evt.request).then(function(res){
      return res || fetch(evt.request)
    })
  )
})
