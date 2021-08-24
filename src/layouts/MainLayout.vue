<template>
  <q-layout view="lHh Lpr fff" class="bg-positive-1">
    <q-header elevated class="bg-primary text-white-8" height-hint="64">
      <q-toolbar class="GPL__toolbar" style="height: 64px">
        <q-btn flat dense round @click="toggleLeftDrawer" aria-label="Menu" color="positive" icon="menu" class="q-mx-md"/>

        <q-toolbar-title v-if="$q.screen.gt.sm" shrink class="row items-center no-wrap">
          <!-- <img src="https://cdn.quasar.dev/img/layout-gallery/logo-google.svg"> -->
          <span class="q-ml-sm">My Pary</span>
        </q-toolbar-title>

        <q-space />

        <!-- Barra de busqueda -->
        <q-input class="GPL__toolbar-input" dense standout="bg-secondary" v-model="search" placeholder="Buscar perfiles, categorias" >
          <!-- <q-input class="GNL__toolbar-input" outlined dense v-model="search" color="bg-grey-7 shadow-1" placeholder="Search for topics, locations & sources"> -->
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" color="positive"/>
            <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
          </template>
        </q-input>

        <q-btn v-if="$q.screen.gt.xs" flat dense no-wrap color="positive" icon="add" no-caps label="Crear Pary" class="q-ml-sm q-px-md">
          <q-menu anchor="top end" self="top end">
            <q-list class="text-grey-8" style="min-width: 100px">
              <q-item aria-hidden="true">
                <q-item-section class="text-uppercase text-grey-7" style="font-size: 0.7rem">Crear PARY</q-item-section>
              </q-item>
              <q-item v-for="menu in createMenu" :key="menu.text" clickable v-close-popup aria-hidden="true">
                <q-item-section avatar>
                  <q-icon :name="menu.icon" />
                </q-item-section>
                <q-item-section>{{ menu.text }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-btn v-if="$q.screen.gt.xs" flat dense no-wrap color="positive" icon="cloud_upload" no-caps label="Subir" class="q-ml-sm q-px-md" to="/home/post"/>

        <q-space />

        <!-- Botones-->
        <div class="q-gutter-sm row items-center no-wrap">

          <!-- btn Home -->
          <q-btn round dense flat color="positive" icon="apps" to="/home">
            <q-tooltip>Home Apps</q-tooltip>
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
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
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

            <q-item clickable v-ripple to="/">
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Iniciar Sesión
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/login">
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Registrar
              </q-item-section>
            </q-item>

            <q-separator class="q-my-md" />

            <q-item clickable class="GPL__drawer-item GPL__drawer-item--storage">
              <q-item-section avatar><q-icon name="cloud" />
            </q-item-section>

            <q-item-section top>
              <q-item-label>Storage</q-item-label>
                <q-linear-progress :value="storage" class="q-my-sm" />
                <q-item-label caption>2.6 GB of 15 GB</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img  class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-btn round flat dense to="/perfil/info-perfil">     
              <q-avatar  size="56px" class="q-mb-sm">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              <q-tooltip>Perfil</q-tooltip>
            </q-btn>
            <div class="text-weight-bold">Julio Armando Maza Labastida</div>
            <div>armando95azamgmail.com</div>
          </div>
        </q-img>        
      </q-drawer>
   

    <!-- Inicio Header Izquierda -->
    <q-drawer v-model="leftDrawerOpen" bordered behavior="mobile" @click="leftDrawerOpen = false">
      <q-scroll-area class="fit">
        <q-toolbar class="GPL__toolbar">
          <q-toolbar-title class="row items-center text-grey-8">
            <!-- <img class="q-pl-md" src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"> -->
            <span class="q-ml-sm">My PARY</span>
          </q-toolbar-title>
        </q-toolbar>

        <!-- Group Public -->
        <q-list padding>
          <q-item v-for="link in links1" :key="link.text" clickable class="GPL__drawer-item" :to="link.path">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>
          <!-- Finn Group Public -->

          <q-separator class="q-my-md" />

          <q-item v-for="link in links2" :key="link.text" clickable class="GPL__drawer-item" >
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item v-for="link in links3" :key="link.text" clickable class="GPL__drawer-item">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

    </q-drawer>

    <q-page-container class="GPL__page-container">
      <router-view></router-view>

      <q-page-sticky v-if="$q.screen.gt.sm" expand position="left">
        <div class="fit q-pt-xl q-px-sm column">

          <q-btn round flat color="grey-8" stack no-caps size="26px" class="GPL__side-btn" to="/home/states">
            <q-icon size="22px" name="assistant" />
            <div class="GPL__side-btn__label">Estados</div>
            <q-badge floating color="red" text-color="white" style="top: 8px; right: 16px">
              1
            </q-badge>
          </q-btn>

          <q-btn round flat color="grey-8" stack no-caps size="26px" class="GPL__side-btn" to="/home/photos">
            <q-icon size="22px" name="photo" />
            <div class="GPL__side-btn__label">Fotos</div>
          </q-btn>

          <q-btn round flat color="grey-8" stack no-caps size="26px" class="GPL__side-btn" to="/home/videos">
            <q-icon size="22px" name="collections_bookmark" />
            <div class="GPL__side-btn__label">Videos</div>
          </q-btn>

          <q-btn round flat color="grey-8" stack no-caps size="26px" class="GPL__side-btn" to="/home/stories">
            <q-icon size="22px" name="import_contacts" />
            <div class="GPL__side-btn__label">Historias</div>
          </q-btn>

          <q-btn round flat color="grey-8" stack no-caps size="26px" class="GPL__side-btn" to="/home/friends">
            <q-icon size="22px" name="group" />
            <div class="GPL__side-btn__label">Amigos</div>
          </q-btn>

          <q-btn round flat color="grey-8" stack no-caps size="26px" class="GPL__side-btn" to="/home/categories">
            <q-icon size="22px" name="category" />
            <div class="GPL__side-btn__label">Categorías</div>
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
    function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    function toggleRightDrawer () {
      rightDrawerOpen.value = !rightDrawerOpen.value
    }
    return {
      rightDrawerOpen,
      leftDrawerOpen,
      search,
      storage,
      links1: [
        { icon: 'assistant', text: 'Estados', path: "/home/states" },
        { icon: 'photo', text: 'Fotos', path: "/home/photos" },
        { icon: 'photo_album', text: 'Videos', path: "/home/videos" },
        { icon: 'import_contacts', text: 'Historias', path: "/home/stories" },
        { icon: 'people', text: 'Amigos', path: "/home/friends" },
        { icon: 'category', text: 'Categorias', path: "/home/categories"}
      ],
      links2: [
        { icon: 'archive', text: 'Archive' },
        { icon: 'delete', text: 'Trash' }
      ],
      links3: [
        { icon: 'settings', text: 'Settings' },
        { icon: 'help', text: 'Help & Feedback' },
        { icon: 'get_app', text: 'App Downloads' }
      ],
      createMenu: [
        { icon: 'photo_album', text: 'Album' },
        { icon: 'people', text: 'Shared Album' },
        { icon: 'movie', text: 'Movie' },
        { icon: 'library_books', text: 'Animation' },
        { icon: 'dashboard', text: 'Collage' },
        { icon: 'book', text: 'Photo book' }
      ],
      toggleLeftDrawer,
      toggleRightDrawer
    }
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