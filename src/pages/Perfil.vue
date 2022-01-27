<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card col">    
      <!-- Portada -->
      <q-responsive :ratio="16/9" class="img-portada">

        <q-carousel
          swipeable
          animated
          arrows
          v-model="slide"
          v-model:fullscreen="fullscreen"
          infinite
          :autoplay="autoplay"
          vertical
          transition-prev="slide-down"
          transition-next="slide-up"
          control-color="white"
          navigation-icon="radio_button_unchecked"
          navigation
          padding
          class="text-white shadow-1 rounded-borders"
        >
          <q-carousel-slide :name="1" :img-src="portada" />
          <q-carousel-slide :name="2" :img-src="perfil" />
          <q-carousel-slide :name="3" :img-src="portada" />

          <template v-slot:control>
            <q-carousel-control
              position="bottom-right"
              :offset="[18, 18]"
            >
              <q-btn
                class="btn-editar"
                push round dense color="white" text-color="primary"
                :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="fullscreen = !fullscreen"
              />
            </q-carousel-control>
          </template>
        </q-carousel>
      </q-responsive>

      <!-- perfil -->
      <q-card-section>
        <div align="center" class="section-card">
          <q-img 
            v-model="imagen"
            class="img-login" 
            :src="perfil" 
          />
          <p class="text-h5">{{nombre}}</p>
          <p class="text-center text-no-wrap">{{telefono}}</p>
          <p class="text-subtitle2">{{descripcion}}</p>

          <div class="row no-wrap items-center">
            <q-rating size="18px" v-model="stars" :max="5" color="info" />
            <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
          </div>

          <q-btn 
            round 
            flat 
            color="red" 
            stack 
            no-caps 
            size="20px" 
          >
            <q-icon size="22px" name="favorite" />
            <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
          </q-btn>

          <!-- <q-btn flat round color="teal" icon="bookmark" /> -->
          <q-btn flat round color="primary" icon="share" />
        </div>

        <!-- btn editar portada -->
        <div align="right" class="section-card">
          <q-btn 
              flat  
              icon="fa fa-ellipsis-v" 
              @click="darkDialog = true"  
              style="color: #F56628"
            />
            <p align="left">
              <span class=" text-grey q-ml-sm">{{category}} <br> </span>
              <span class=" text-grey q-ml-sm">/ Mariachi</span>
            </p>
        </div>
        
        <q-separator />

        <q-card-actions align="center">
          <!-- Buton agenda, reservar ubication -->
          <q-btn 
            flat 
            round 
            icon="event" 
            @click="open('left')" 
          />

          <q-btn 
            round 
            flat 
            color="info" 
            stack 
            no-caps 
            size="20px" 
            to="/perfil/agenda-perfil"
          >
            <q-icon size="22px" name="far fa-address-book" />
            <div class="GPL__side-btn__label">Agenda</div>
          </q-btn>

          <q-btn 
            fab 
            color="primary" 
            icon="place" 
            class="ubication" 
            to="/perfil/info-perfil" 
            @click="step = 2 "  
          />

          <q-dialog v-model="dialog" :position="position">
            <q-card style="width: 320px">
              <q-card-section class="items-center no-wrap">
                <q-date v-model="days" multiple />
              </q-card-section>
            </q-card>
          </q-dialog>
          <!-- Fin agenda -->
        </q-card-actions>

      </q-card-section>


      <!-- Editar dialog -->
      <q-dialog 
        v-model="darkDialog" 
        persistent 
        transition-show="flip-down"
        transition-hide="flip-up"
      >
        <q-card class=" text-black">
          <q-bar>
            <q-icon name="warning" />
            <div>¿Estas Seguro?</div>

            <q-space />

            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip class="bg-white text-primary">Cerrar</q-tooltip>
            </q-btn>
          </q-bar>

          <q-card-section>
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Configuración</div>

                <form
                  method="post" 
                  ref="formR"  
                  @submit.prevent.stop="onSubmit"
                  enctype="multipart/form-data"
                >

                  <q-file 
                    borderless 
                    v-model="addportada" 
                    label="Portada"
                    accept=".jpg, image/*" 
                    prepend-icon=""
                     :src="perfil"
                    use-chips
                  >
                    <template v-slot:before>
                      <q-icon name="far fa-image" />
                    </template>
                  </q-file>
                  
                  <q-file 
                    borderless 
                    v-model="addperfil" 
                    label="Perfil"
                    accept=".jpg, image/*" 
                    :src="perfil"
                    use-chips
                  >
                    <template v-slot:before>
                      <q-icon name="fas fa-user-edit" />
                    </template>
                  </q-file>

                  <q-input
                    v-model="descripcion" 
                    filled
                    type="textarea"
                    id="descripcion"
                    name="descripcion"
                    label='descripcion'
                    :dense="dense" 
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Por favor Escriba su nombre']"
                  />

                </form>
              </div>
                <q-separator vertical inset class="q-mx-lg" />
              <q-btn
                  color="primary"
                  label="Save"
                  push
                  size="sm"
                  @click="updateImg()"
                  v-close-popup
              />
            </div>
          
          </q-card-section>
        </q-card>
      </q-dialog>
      
    </q-card>
    
  </div>
  <!-- botones horizontales -->
  <q-tabs
    v-model="tab"
    dense
    class="text-white"
    active-color="dark"
    indicator-color="primary"
    align="justify"
    :breakpoint="0"
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

  <!-- Perfil -->
  <div class="q-pa-md">
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
                  <q-icon name="far fa-calendar-check" />
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
import { axios } from 'src/boot/axios';
import { useQuasar } from 'quasar'

export default {
  setup () {
    const $q = useQuasar()
    const accept = ref(false)
    // Agenda
    const dialog = ref(false)
    const position = ref('top')
    
    return {
      // Slider portada
      slide: ref(1),
      fullscreen: ref(false),
      autoplay: ref(true),

       // Agenda
      dialog,
      position,
      open(pos) {
        position.value = pos
        dialog.value = true
      },
      days: ref(['2019/02/01', '2019/02/10', '2019/02/21']),
      stars: ref('4'),
      // Fin Agenda
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      user: 'Julio Armando',
      category: 'Musical',

      // Esqueleto de botones
      tab: ref('info'),
      innerTab: ref('innerInfo'),
      splitterModel: ref(20),
      // Fin Esqueleto de botones
      
      // Header
      drawer: ref(false),
      miniState: ref(true),

      // Dato
      imagen: ref(null),
      accept,

      // Botones dialog editar
      darkDialog: ref(false),
      model: ref(null)
    }


  },

  data: () => ({
    // Portada
    perfil:null,
    addperfil:null,
    portada: null,
    addportada:null,
    descripcion:null,


    // Datos
    nombre: null,
    nom_artistico: null,
    email: null,
    imagen: null,
    telefono: null,

    respuesta: null,
    res:null

  }),

  methods:{

    updateImg: function(){
      //Alamacenamos datos
      const token = localStorage.getItem('token');
      const portada = this.addportada;
      const perfil = this.addperfil;
      const descripcion = this.descripcion;

      //Crear paquete 
      const data =new FormData();
      data.append('token',token);
      data.append('frase',descripcion);
      data.append('perfil',perfil);
      data.append('portada',portada);

      //Send data
      axios.post('' + localhost + '' + 'usuario.php?op=updateimgPerfil', data)
      .then(res => {
        this.respuesta=res.data

        alert(this.respuesta);

      })

    }

  },

  mounted(){
    //Cargar datos de perfil
    
    
    var token = localStorage.getItem('token');
    // const userid = this.$route.params.id;
    // const estadoUser = this.estadoUser;

    axios.get('' + serverName + '' + '/ajax/usuario.php?op=mostrar&token=' + token)
    .then(response =>{
      this.respuesta=response.data
      this.idusuario=response.data[0].idusuario;
      this.nombre = response.data[0].nombre;
	    this.nom_artistico = response.data[0].nom_artistico;
	    this.email = response.data[0].email;
	    
	    this.imagen = response.data[0].imagen;
	    this.telefono = response.data[0].telefono;
	    this.fechNac = response.data[0].fechNac;

      this.pais = response.data[0].pais;
      this.estado = response.data[0].estado;
      this.munic = response.data[0].munic;
      this.col = response.data[0].col;
      this.dir = response.data[0].dir;
      this.codpost = response.data[0].codpost;
      this.lat = response.data[0].lat;

      this.perfil = response.data[0].perfil;
      this.portada = response.data[0].portada;
      this.descripcion = response.data[0].frase;
      // alert("Perfil: "+token);
    })

  }
}
</script>

<style>
/* Inicio Portada*/
  .btn-editar{
    z-index: 99;
  }
  .section-card{
    top:-90px;
    width: 100%;
    position:relative;
    height: 160px;
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