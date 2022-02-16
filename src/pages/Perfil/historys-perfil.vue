<template>
  <div class="text-h6">Historias</div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
  <div class="q-pa-md">
    <div class="q-gutter-md row justify-center items-start" style="margin-center: 40px; ">
      <!-- Inicio de Fotos -->
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" spinner-color="white" style="height: 170px; max-width: 300px" img-class="my-custom-image" class="rounded-borders">
      <!-- <q-img v-for="mode in fitModes" src="https://cdn.quasar.dev/img/parallax2.jpg" spinner-color="white" style="height: 170px; max-width: 300px" img-class="my-custom-image" class="rounded-borders"> -->
        <div class="absolute-bottom text-subtitle1 text-center">{{mode}}</div>
      </q-img>
      <!-- Fin de fotos -->
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import sesion from '../../mixins/sesion'

export default {
  mixins:[sesion],
  setup() {
    return {
      // Fotos
      fitModes: ['cover', 'fill', 'none']
    }
  }
}

</script>
