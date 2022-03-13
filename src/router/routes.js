
const routes = [

  // Login
  {
     path: '/', component: () => import('pages/Login.vue'),
     name:'Login',
  },

  // Ruta Inicio con hijos
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    name:'Home',
    children:
    [
      // Index
      {
        path: '/home', component: () => import('pages/Index.vue'),
        name:'Index'
      },

      // Home - States
      {
        path: '/home/states', component: () => import('pages/Publicaciones/public-states.vue'),
        name: 'States'
      },

      // Home - Photos
      {
        path: '/home/photos', component: () => import('pages/Publicaciones/public-photos.vue'),
        name: 'Photos'
      },

      // Home - Videos
      {
        path: '/home/videos', component: () => import('pages/Publicaciones/public-videos.vue'),
        name: 'Videos'
      },

      // Home - friends
      {
        path: '/home/friends', component: () => import('pages/Publicaciones/public-friends.vue'),
        name: 'Friends'
      },


      // Perfil
      {
        path: '/Perfil',
        component: () => import('pages/Perfil.vue'),
        name:'Perfil',
        children:[
            { path: '/perfil/info-perfil', component: () => import('pages/Perfil/info-perfil.vue')},
            { path: '/perfil/friends-perfil', component: () => import('pages/Perfil/friends-perfil.vue')}
        ]
      }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
