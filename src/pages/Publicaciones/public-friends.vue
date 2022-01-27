<template>
  <div class="q-pa-md center-card" style="max-width: 1150px">
    <q-toolbar class="bg-primary text-white shadow-2">
      <q-toolbar-title>Contactos</q-toolbar-title>
       <q-input dark dense standout v-model="text" input-class="text-left" >
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>
    </q-toolbar>

    <q-list bordered separator>

      <!-- Categoria Comedia -->
      <q-item-label header>Comedia</q-item-label>
      <q-slide-item 
        @left="onLeft" 
        @right="onRight" 
        v-for="contact in Musical" :key="contact.id"  
        left-color="green" 
        right-color="red"
      >
        <template v-slot:left>
          <div class="row items-center">
            <q-icon left name="done" /> Enviar Solicitud
          </div>
        </template>
        
        <template v-slot:right>
          <div class="row items-center">Descartar para Amigo
            <q-icon right name="delete" />
          </div>
        </template>
        
        <q-item clickable v-ripple >
          <q-item-section avatar>
            <q-avatar>
              <img :src="`https://cdn.quasar.dev/img/${contact.avatar}`">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            
            <q-item-label>{{ contact.name }}</q-item-label>
            <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="chat_bubble" color="grey" />
          </q-item-section>
        </q-item>
      </q-slide-item>

      <q-separator />

      <!-- Categoria Decoraciones -->
      <q-item-label header>Decoraciones</q-item-label>

      <q-slide-item 
        @left="onLeft" 
        @right="onRight" 
        v-for="contact in contacts" :key="contact.id"  
        left-color="green" 
        right-color="red"
      >

        <template v-slot:left>
          <div class="row items-center">
            <q-icon left name="done" /> Enviar Solicitud
          </div>
        </template>
        
        <template v-slot:right>
          <div class="row items-center">Descartar para Amigo
            <q-icon right name="delete" />
          </div>
        </template>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">
              {{ contact.letter }}
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ contact.name }}</q-item-label>
            <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="chat_bubble" color="green" />
          </q-item-section>
        </q-item>
      </q-slide-item>

      <q-separator />

      <!-- Categoria Musical -->
      <q-item-label header>Musical</q-item-label>
      <q-slide-item 
        @left="onLeft" 
        @right="onRight" 
        v-for="contact in Musical" :key="contact.id"  
        left-color="green" 
        right-color="red"
      >
        <template v-slot:left>
          <div class="row items-center">
            <q-icon left name="done" /> Enviar Solicitud
          </div>
        </template>
        
        <template v-slot:right>
          <div class="row items-center">Descartar para Amigo
            <q-icon right name="delete" />
          </div>
        </template>
        
        <q-item clickable v-ripple >
          <q-item-section avatar>
            <q-avatar>
              <img :src="`https://cdn.quasar.dev/img/${contact.avatar}`">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            
            <q-item-label>{{ contact.name }}</q-item-label>
            <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
            <q-item-label caption lines="2">{{ contact.especialidad }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="chat_bubble" color="grey" />
          </q-item-section>
        </q-item>
      </q-slide-item>

      <!-- Categoria servicios -->
      <q-item-label header>Servicios</q-item-label>
      <q-slide-item 
        @left="onLeft" 
        @right="onRight" 
        v-for="contact in Musical" :key="contact.id"  
        left-color="green" 
        right-color="red"
      >
        <template v-slot:left>
          <div class="row items-center">
            <q-icon left name="done" /> Enviar Solicitud
          </div>
        </template>
        
        <template v-slot:right>
          <div class="row items-center">Descartar para Amigo
            <q-icon right name="delete" />
          </div>
        </template>
        
        <q-item clickable v-ripple to="/perfil/chat-perfil" >
          <q-item-section avatar>
            <q-avatar>
              <img :src="`https://cdn.quasar.dev/img/${contact.avatar}`">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            
            <q-item-label>{{ contact.name }}</q-item-label>
            <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
            <q-item-label caption lines="2">{{ contact.especialidad }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-btn flat to="/perfil/chat-perfil">
              <q-icon name="chat_bubble" color="green" />
            </q-btn>
          </q-item-section>
        </q-item>
      </q-slide-item>

      
    </q-list>
  </div>
</template>
<script>
import { useQuasar } from 'quasar'
import { onBeforeUnmount } from 'vue'

const contacts = [ {
  id: 1,
  name: 'Ruddy Jedrzej',
  email: 'rjedrzej0@discuz.net',
  letter: 'R'
}, {
  id: 2,
  name: 'Mallorie Alessandrini',
  email: 'malessandrini1@marketwatch.com',
  letter: 'M'
}, {
  id: 3,
  name: 'Elisabetta Wicklen',
  email: 'Especialidad (Solista)',
  letter: 'E'
}]

const Musical = [ {
  id: 4,
  name: 'Brunhilde Panswick',
  email: 'bpanswick4@csmonitor.com',
  avatar: 'avatar2.jpg'
}, {
  id: 5,
  name: 'Winfield Stapforth',
  email: 'wstapforth5@pcworld.com',
  avatar: 'avatar6.jpg'
},
{
  id: 6,
  name: 'Winfield Stapforth',
  email: 'wstapforth5@pcworld.com',
  especialidad:'Solista',
  avatar: 'avatar6.jpg'
} ]

export default {
  setup () {
    // Deslizar
    const $q = useQuasar()
    let timer

    function finalize (reset) {
      timer = setTimeout(() => {
        reset()
      }, 1000)
    }

    onBeforeUnmount(() => {
      clearTimeout(timer)
    })

    return {
      category:'Musical',
      contacts,
      Musical,   

      //Deslizar
      onLeft ({ reset }) {
        $q.notify('Solicitud Enviada')
        finalize(reset)
      },

      onRight ({ reset }) {
        $q.notify('Se descarto el usuario')
        finalize(reset)
      }
    }
  }
}
</script>