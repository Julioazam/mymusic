import Vue from 'vue'
// import Home from 'layouts/MainLayout.vue'


const routes = [

  // Ruta Inicio con hijos
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    name:'Home',
    children: [
      { path: '/home', component: () => import('pages/Index.vue')},
      { path: '/home/Perfil' ,component: () => import('pages/Perfil.vue')}
      
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
