<template>
  <div class="q-pa-md items-start q-gutter-md center-card">

    

    <!-- Tarjeta Estado -->
    <q-card class="my-card" flat bordered>
      <!-- Cabecera -->
      <q-item>
        <q-item-section avatar>
          <q-btn round to="/perfil/photos-perfil">
            <q-avatar size="42px">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-btn>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-h6 q-mb-xs absolute q-pa-xs"> {{user}} </q-item-label>
          <q-item-label caption class="text-subtitle2 text-right q-pa-md text-dark col-4"> {{category}}</q-item-label>
          <q-item-label caption class="text-right"> (241) 137-2093 </q-item-label>
        </q-item-section>
      </q-item>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">Overline</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
          <div class="text-caption text-grey" v-html="editor" />
        </q-card-section>
        <q-card-section class="col-5 flex flex-center">
          <q-img class="rounded-borders" src="https://cdn.quasar.dev/img/parallax2.jpg" />
        </q-card-section>
      </q-card-section>
      <q-card-actions align="center">
        <!-- Evaluación -->
        <div class="row no-wrap items-center" align="left">
          <q-rating size="18px" v-model="stars" :max="5" color="info" />
          <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
        </div>
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>
      <q-separator />
      <q-card-actions align="center">
        <!-- Buton agenda, reservar ubication -->
        <q-btn flat round icon="event" @click="open('left')" />
        <q-btn flat color="primary">Reservar </q-btn>
        <q-btn fab color="primary" icon="place" class="ubication" />
        <q-dialog v-model="dialog" :position="position">
          <q-card style="width: 320px">
            <q-card-section class="items-center no-wrap">
              <q-date v-model="days" multiple />
            </q-card-section>
          </q-card>
        </q-dialog>
        <!-- Fin agenda -->
      </q-card-actions>
    </q-card>

    <!-- Tarjeta Estado -->
    <q-card class="my-card" flat bordered>
      <!-- Cabecera -->
      <q-item>
        <q-item-section avatar>
          <q-btn round to="/perfil/photos-perfil">
            <q-avatar size="42px">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-btn>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-h6 q-mb-xs absolute q-pa-xs"> {{user}} </q-item-label>
          <q-item-label caption class="text-subtitle2 text-right q-pa-md text-dark col-4"> {{category}}</q-item-label>
          <q-item-label caption class="text-right"> (241) 137-2093 </q-item-label>
        </q-item-section>
      </q-item>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">Overline</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
          <div class="text-caption text-grey" v-html="editor" />
        </q-card-section>
        <q-card-section class="col-5 flex flex-center">
          <q-img class="rounded-borders" src="https://cdn.quasar.dev/img/parallax2.jpg" />
        </q-card-section>
      </q-card-section>
      <q-card-actions align="center">
        <!-- Evaluación -->
        <div class="row no-wrap items-center" align="left">
          <q-rating size="18px" v-model="stars" :max="5" color="info" />
          <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
        </div>
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>
      <q-separator />
      <q-card-actions align="center">
        <!-- Buton agenda, reservar ubication -->
        <q-btn flat round icon="event" @click="open('left')" />
        <q-btn flat color="primary">Reservar </q-btn>
        <q-btn fab color="primary" icon="place" class="ubication" />
        <q-dialog v-model="dialog" :position="position">
          <q-card style="width: 320px">
            <q-card-section class="items-center no-wrap">
              <q-date v-model="days" multiple />
            </q-card-section>
          </q-card>
        </q-dialog>
        <!-- Fin agenda -->
      </q-card-actions>
    </q-card>

    <!-- Tarjeta Estado -->
    <q-card class="my-card" flat bordered>
      <!-- Cabecera -->
      <q-item>
        <q-item-section avatar>
          <q-btn round to="/perfil/photos-perfil">
            <q-avatar size="42px">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-btn>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-h6 q-mb-xs absolute q-pa-xs"> {{user}} </q-item-label>
          <q-item-label caption class="text-subtitle2 text-right q-pa-md text-dark col-4"> {{category}}</q-item-label>
          <q-item-label caption class="text-right"> (241) 137-2093 </q-item-label>
        </q-item-section>
      </q-item>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">Overline</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
          <div class="text-caption text-grey" v-html="editor" />
        </q-card-section>
        <q-card-section class="col-5 flex flex-center">
          <q-img class="rounded-borders" src="https://cdn.quasar.dev/img/parallax2.jpg" />
        </q-card-section>
      </q-card-section>
      <q-card-actions align="center">
        <!-- Evaluación -->
        <div class="row no-wrap items-center" align="left">
          <q-rating size="18px" v-model="stars" :max="5" color="info" />
          <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
        </div>
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>
      <q-separator />
      <q-card-actions align="center">
        <!-- Buton agenda, reservar ubication -->
        <q-btn flat round icon="event" @click="open('left')" />
        <q-btn flat color="primary">Reservar </q-btn>
        <q-btn fab color="primary" icon="place" class="ubication" />
        <q-dialog v-model="dialog" :position="position">
          <q-card style="width: 320px">
            <q-card-section class="items-center no-wrap">
              <q-date v-model="days" multiple />
            </q-card-section>
          </q-card>
        </q-dialog>
        <!-- Fin agenda -->
      </q-card-actions>
    </q-card>

  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    // Agenda
    const dialog = ref(false)
    const position = ref('top')

    return {
      
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
      category: 'Musical'
    }
  }
}

</script>
<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 600px;
  // left:20%
}

.ubication {
  right: -50px;
}

.center-card {
  padding-left: 25%;
}

@media only screen and (max-width: 1025px) and (min-width: 841px) {
  .my-card {
    width: 100%;
    max-width: 890px;
    // left:20%
  }

  .center-card {
    // padding-left: 2%;
  }
}

@media only screen and (max-width: 620px) and (min-width: 250px) {
  .center-card {
    left: 0;
    right: 0;
    padding: 1%;
  }
}

</style>
