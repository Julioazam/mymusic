import Vue from 'vue'
// import Home from 'layouts/MainLayout.vue'


const routes = [

  // Ruta Inicio con hijos
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    name:'Home',
    children: 
    [
      { path: '/home', component: () => import('pages/Index.vue')},

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

  {
     path: '/Login',
     name:'Login',
    component: () => import('pages/Login.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]



export default routes
