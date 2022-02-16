<template>
  <div class="text-h4 q-mb-md">Agenda</div>
  <p>Agenda de trabajo del usuario </p>
  <div class="row">
    <div class="col-xl-12 col-sm-12 col-md-12">
      <q-splitter v-model="splitterModelfech" style="height: 100%">
        <template v-slot:before class="col-12">
          <div class="q-pa-md">
            <q-date v-model="date" :events="events" event-color="orange" landscape style="width:100%;" />
          </div>
        </template>
      </q-splitter>
    </div>
    <div class="col-xl-12 col-sm-12 col-md-12">
      <q-splitter style="height: 100%">
        <template v-slot:after class="col-12">

          <q-tab-panels v-model="date" animated transition-prev="jump-up" transition-next="jump-up">
            <q-tab-panel name="2019/02/01">
              <div class="text-h4 q-mb-md">2019/02/01</div>
              <p>Dia ocupado hasta </p>
              <p>de 8:00am a 1:00 pm.</p>
            </q-tab-panel>
            <q-tab-panel name="2019/02/05">
              <div class="text-h4 q-mb-md">2019/02/05</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>
            <q-tab-panel name="2019/02/06">
              <div class="text-h4 q-mb-md">2019/02/06</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
  </div>
</template>
<script>

import {ref} from 'vue'
import sesion from '../../mixins/sesion'


export default {
  mixins:[sesion],
  setup () {
    return {
      // Fotos
      fitModes: [ 'cover', 'fill',  'none' ],

      // Esqueleto de botones
      tab: ref('info'),
      innerTab: ref('innerInfo'),
      splitterModel: ref(20),
      // Fin Esqueleto de botones

      // Fin
      // Agenda fecha
      splitterModelfech: ref(50),
      date: ref('2019/02/01'),
      events: [ '2019/02/01', '2019/02/05', '2019/02/06' ],

      // Dato
      user:' Julio Armando',

       slide: ref(1)
    }
  }
}
</script>
