const cacheName = "Tecnoticias"
const files = [
  '/ultimaativ/',
  '/ultimaativ/index.html',
  '/ultimaativ/style.css'.
  'https://www.techtudo.com.br/noticias/2020/05/nokia-festeja-155-anos-relembre-os-celulares-mais-marcantes.ghtml',
  'https://www.nsctotal.com.br/noticias/a-tecnologia-durante-tempos-de-pandemia',
  'https://canaltech.com.br/apps/app-google-modo-escuro-android-ios-165079/',
  'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css',
  '/ultimaativ/script.js',
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
})


self.addEventListener('fetch', function(evt) {
  console.log("fetch sw");
  evt.responseWith(
    caches.match(evt.request). then(function(res){
      return res || fetch(evt.request)
    })
  )
})
