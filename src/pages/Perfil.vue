<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card col">
      <q-responsive :ratio="16/9" class="img-portada">
        <q-img  src="https://cdn.quasar.dev/img/mountains.jpg"/>
      </q-responsive>

      <q-card-section align="center" >
        <div align="center" class="section-card">
          <q-img class="img-login" src="https://cdn.quasar.dev/img/parallax2.jpg" ></q-img>
          <p class="text-h5">{{user}}</p>
          <p class="text-subtitle2">Ingresa tus datos de acceso para iniciar sesión en tu cuenta</p>
        </div>
      </q-card-section>
    </q-card>
    
  </div>

  <!-- Perfil -->
  <div class="q-pa-md">
    <!-- botones horizontales -->
      <q-tabs
        v-model="tab"
        dense
        class="text-primary"
        active-color="dark"
        indicator-color="primary"
        align="justify"
        view="hHh Lpr lff"
      >

        <q-tab name="photos"> 
          <router-link class="text-primary" style="text-decoration: none; font-weight:600;" active-color="dark" indicator-color="primary" align="justify" to="/perfil/photos-perfil">Fotos</router-link>
        </q-tab>

        <q-tab name="movies"> 
          <router-link class="text-primary" style="text-decoration: none; font-weight:600;" active-color="dark" indicator-color="primary" align="justify" to="/perfil/movies-perfil">Videos</router-link>
        </q-tab>

        <q-tab name="history">
          <!-- hacemos llamado a pagina history -->
          <router-link class="text-primary" style="text-decoration: none; font-weight:600;" active-color="dark" indicator-color="primary" align="justify" to="/perfil/historys-perfil">Historias</router-link>
        </q-tab>
        
      </q-tabs>
      <!-- fin botones horizontales -->
    <q-layout view="hHh Lpr lff" container style="height: 1000px" class="shadow-2 rounded-borders">
      <q-header class="row" >
        <q-toolbar class="col">
          <q-btn flat @click="drawer = !drawer" round dense icon="drag_indicator" />
          <q-toolbar-title>Información</q-toolbar-title>
        </q-toolbar>

      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"

        :width="200"
        :breakpoint="500"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <router-link class="text-primary" style="text-decoration: none; font-weight:600;" active-color="dark" indicator-color="primary" align="justify" to="/perfil/info-perfil">
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="person" />
                </q-item-section>

                <q-item-section>
                  Perfil                
                </q-item-section>

              </q-item>
            </router-link>

            <router-link class="text-primary" style="text-decoration: none; font-weight:600;" active-color="dark" indicator-color="primary" align="justify" to="/perfil/agenda-perfil">

              <q-item active clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="star" />
                  <q-badge color="red" floating>2</q-badge>
                </q-item-section>

                <q-item-section>
                  Agenda
                </q-item-section>
              </q-item>
            </router-link>

            <router-link class="text-primary" style="text-decoration: none; font-weight:600;" active-color="dark" indicator-color="primary" align="justify" to="/perfil/friends-perfil">

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="group" />
                </q-item-section>

                
                <q-item-section>
                  Amigos
                </q-item-section>
              </q-item>
            </router-link>
            
            <q-separator />

            <router-link class="text-primary" style="text-decoration: none; font-weight:600;" active-color="dark" indicator-color="primary" align="justify" to="/perfil/chat-perfil">

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="drafts" />
                  <q-badge color="red" floating>2</q-badge>
                </q-item-section>

                <q-item-section>
                  Chat
                </q-item-section>
              </q-item>
            </router-link>


          </q-list>
        </q-scroll-area>
      </q-drawer>

      <!-- Insertamos la pagina de Info Users-->
      <q-page-container>
        <router-view></router-view>
      </q-page-container>
                  
    </q-layout>
  </div>
 
</template>

<script>

import {ref} from 'vue'

export default {
  setup () {
    return {
      // Esqueleto de botones
      tab: ref('info'),
      innerTab: ref('innerInfo'),
      splitterModel: ref(20),
      // Fin Esqueleto de botones
      
      // Header
       drawer: ref(false),
      miniState: ref(true),

      // Dato
      user:' Julio Armando',

       slide: ref(1)
    }
  }
}
</script>

<style>
/* Inicio Portada*/
  .section-card{
    top:-90px;
    width: 100%;
    height:150px;
    position:relative;
  }
  .img-portada{
    /*background-attachment: fixed;*/
    height:350px;

  }

  .img-login{
    /*top:-50px;*/
    border-radius:50%;
    width: 200px;
    margin-bottom: 10px;

  }

  .my-card{
    width: 100%;
    max-width: 300px;

    top:-10px;
  }

/*Fin Portada*/
</style>