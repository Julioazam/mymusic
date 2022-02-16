
const routes = [

  // Login
  {
     path: '/',
     name:'Login',
      component: () => import('pages/Login.vue'),
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
        path: '/home',
        component: () => import('pages/Index.vue'),
        name:'Index'
      },

      // Home - States
      {
        path: '/home/post',
        component: () => import('pages/Publicaciones/public-post.vue'),
        name: 'Post'
      },

      // Home - States
      {
        path: '/home/states',
        component: () => import('pages/Publicaciones/public-states.vue'),
        name: 'States'
      },

      // Home - Photos
      {
        path: '/home/photos',
        component: () => import('pages/Publicaciones/public-photos.vue'),
        name: 'Photos'
      },

      // Home - Videos
      {
        path: '/home/videos',
        component: () => import('pages/Publicaciones/public-videos.vue'),
        name: 'Videos'
      },

      // Home - Stories
      {
        path: '/home/stories',
        component: () => import('pages/Publicaciones/public-stories.vue'),
        name: 'Stories'
      },

      // Home - friends
      {
        path: '/home/friends',
        component: () => import('pages/Publicaciones/public-friends.vue'),
        name: 'Friends'
      },

      // Home - categories
      {
        path: '/home/categories',
        component: () => import('pages/Publicaciones/public-categories.vue'),
        name: 'Categories'

      },


      // Perfil
      {
        path: '/Perfil',
        component: () => import('pages/Perfil.vue'),
        name:'Perfil',
        children:[
            { path: '/perfil/historys-perfil', component: () => import('pages/Perfil/historys-perfil.vue')},
            { path: '/perfil/photos-perfil', component: () => import('pages/Perfil/photos-perfil.vue')},
            { path: '/perfil/movies-perfil', component: () => import('pages/Perfil/movies-perfil.vue')},
            { path: '/perfil/info-perfil', component: () => import('pages/Perfil/info-perfil.vue')},
            { path: '/perfil/agenda-perfil', component: () => import('pages/Perfil/agenda-perfil.vue')},
            { path: '/perfil/friends-perfil', component: () => import('pages/Perfil/friends-perfil.vue')},
            { path: '/perfil/chat-perfil', component: () => import('pages/Perfil/chat-perfil.vue')}
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
