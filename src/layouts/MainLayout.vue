<template>
  <q-layout view="lHh Lpr fff" class="bg-positive-1">
    <q-header elevated class="bg-white text-dark-8" height-hint="64">
      <q-toolbar class="GPL__toolbar" style="height: 64px">
        <q-toolbar-title v-if="$q.screen.gt.sm" shrink class="row items-center no-wrap">
          <img style="width: 70px;" src="http://localhost/apimusic/files/logo.png">
          <!-- <span class="q-ml-sm">My Pary</span> -->
          <!-- <q-avatar size="40px"> -->
              <!-- <img src="http://localhost/apiprueba/files/logo.png"> -->
            <!-- </q-avatar> -->
        </q-toolbar-title>

        <q-space />

        <!-- Barra de busqueda -->
        <q-input class="GPL__toolbar-input" dense standout="bg-info" v-model="search" placeholder="Buscar genero" >
          <!-- <q-input class="GNL__toolbar-input" outlined dense v-model="search" color="bg-grey-7 shadow-1" placeholder="Search for topics, locations & sources"> -->
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" color="primary"/>
            <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
          </template>
        </q-input>



        <q-btn v-if="$q.screen.gt.xs" flat dense no-wrap color="dark" icon="cloud_upload" no-caps label="Actualizar" class="q-ml-sm q-px-md" to="/home"/>

        <q-space />

        <!-- Botones-->
        <div class="q-gutter-sm row items-center no-wrap">

          <!-- btn Home -->
          <q-btn round dense flat color="dark" icon="apps" to="/home">
            <q-tooltip>Home</q-tooltip>
          </q-btn>

          <!-- btn Notificaciones -->
          <q-btn round dense flat color="dark" icon="notifications">
            <q-badge color="info" text-color="positive" floating>
              2
            </q-badge>
            <q-tooltip>Notificaciones</q-tooltip>
          </q-btn>

          <!-- btn Cuenta -->
          <q-btn round flat dense @click="toggleRightDrawer" class="q-mx-md">
            <q-avatar size="40px">
              <img :src="perfil">
            </q-avatar>
            <q-tooltip>Cuenta</q-tooltip>
          </q-btn>

        </div>
        <!-- Fin botones -->

      </q-toolbar>
    </q-header>
 <!-- Inicio Header Derecha -->
    <q-drawer side="right" v-model="rightDrawerOpen" bordered :width="230" :breakpoint="500" behavior="mobile" @click="rightDrawerOpen  = false">
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>

            <q-item clickable v-ripple to="/perfil/info-perfil">
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Perfil
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple  @click="salir()" >
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Salir
              </q-item-section>
            </q-item>

            <q-separator class="q-my-md" />
          </q-list>
        </q-scroll-area>

        <q-img  class="absolute-top" :src="portada" style="height: 150px">
        <!-- <q-img  class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px"> -->
          <div class="absolute-bottom bg-transparent">
            <q-btn round flat dense to="/perfil/info-perfil">
              <q-avatar  size="56px" class="q-mb-sm">
                <!-- <img src="https://cdn.quasar.dev/img/boy-avatar.png"> -->
                <img :src="perfil">
              </q-avatar>
              <q-tooltip>Perfil</q-tooltip>
            </q-btn>
            <div class="text-weight-bold inset-shadow	text-center  bg-black" clickable v-ripple to="/perfil/info-perfil">{{this.nom_artistico}}</div>
            <div class=" text-center bg-black ">{{this.email}}</div>
          </div>
        </q-img>
      </q-drawer>


    <!-- Inicio Header Izquierda -->
    <q-page-container class="GPL__page-container">
      <router-view></router-view>

      <q-page-sticky v-if="$q.screen.gt.sm" expand position="left">
        <div class="fit q-pt-xl q-px-sm column">

           <q-btn round flat color="grey-8" stack no-caps size="26px" class="GPL__side-btn" to="/home/states">
            <q-icon size="22px" name="assistant" />
            <div class="GPL__side-btn__label">Genero</div>
            <q-badge floating color="red" text-color="white" style="top: 8px; right: 16px">
              1
            </q-badge>
          </q-btn>

          <q-btn round flat color="grey-8" stack no-caps size="26px" class="GPL__side-btn" to="/home/photos" >
            <q-icon size="22px" name="import_contacts" />
            <div class="GPL__side-btn__label">Album</div>
          </q-btn>

           <q-btn round flat color="grey-8" stack no-caps size="26px" class="GPL__side-btn">
            <q-icon size="22px" name="photo" />
            <div class="GPL__side-btn__label">Artista</div>
          </q-btn>

          <q-btn round flat color="grey-8" stack no-caps size="26px" class="GPL__side-btn" to="/home/videos">
            <q-icon size="22px" name="collections_bookmark" />
            <div class="GPL__side-btn__label">Pista</div>
          </q-btn>



          <q-btn round flat color="grey-8" stack no-caps size="26px" class="GPL__side-btn" to="/home/friends">
            <q-icon size="22px" name="group" />
            <div class="GPL__side-btn__label">Amigos</div>
          </q-btn>
        </div>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'GooglePhotosLayout',
  setup () {

    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)
    const drawerRight = ref(false)

    const search = ref('')
    const storage = ref(0.26)
    function toggleRightDrawer () {
      rightDrawerOpen.value = !rightDrawerOpen.value
    }
    return {
      rightDrawerOpen,
      leftDrawerOpen,
      search,
      storage,

      toggleRightDrawer
    }
  },

  data:() => ({
    nombre: null,
    apellidos: null,
    nom_artistico: null,
    email: null,

    perfil: null,
    portada: null,
    respuesta: null

  }),

  methods: {
    salir: function(){

        var token = localStorage.getItem('token');

        axios.get('' + localhost + '' + 'usuario.php?op=salir&token='+token)
        .then(res=> {

        	this.respuesta=res.data
          alert(this.respuesta);
          if(this.respuesta == 'success'){
            localStorage.clear();
            this.$router.push({ path: '/' })
          }
        })
    }

  },

  mounted(){
    //Cargar datos de perfil
    var token = localStorage.getItem('token');

    axios.get('' + serverName + '' + '/ajax/usuario.php?op=mostrar&token=' + token)
    .then(response =>{
      this.respuesta=response.data
      // alert(this.respuesta);
      this.nombre = response.data[0].nombre;
      this.apellidos = response.data[0].apellidos;
	    this.nom_artistico = response.data[0].nom_artistico;
	    this.email = response.data[0].email;
	    this.telefono = response.data[0].telefono;
	    this.fechNac = response.data[0].fechNac;

      this.perfil = response.data[0].perfil;
      this.portada = response.data[0].portada;
    })
  }
}
</script>

<style lang="sass">
.GPL
  &__toolbar
    height: 64px
  &__toolbar-input
    width: 35%
  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px

    .q-item__section--avatar
      padding-left: 12px
      .q-icon
        color: #5f6368
    .q-item__label:not(.q-item__label--caption)
      color: #011a27
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem
    &--storage
      border-radius: 0
      margin-right: 0
      padding-top: 24px
      padding-bottom: 24px
  &__side-btn
    &__label
      font-size: 12px
      line-height: 24px
      letter-spacing: .01785714em
      font-weight: 500
  @media (min-width: 1024px)
    &__page-container
      padding-left: 94px
</style>
