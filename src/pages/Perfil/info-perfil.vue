<template>
  <hr>
  <div class="text-h5 q-mb-md">Información de {{user}}</div>
  <div class="q-pa-md">
    <q-stepper v-model="step" vertical color="primary" animated>

      <!-- Paso 1 -->
      <q-step :name="1" title="Información de contacto" icon="settings" caption="Optional" :done="step > 1">
        ¿Desea modificar sus datos de contacto?

        <q-form method="get" ref="formR" lazy-validation class="col-12" v-on:register="register" @submit="onSubmit" @reset="onReset">
          <!-- v-model="valid"   -->
          <q-toggle v-model="accept" label="Acepto modificar cambios" checked-icon="check" color="green" unchecked-icon="clear" />
          <div class="q-pa-md" style="max-width: 300px;">
            <div class="q-gutter-y-md column">
              <q-file filled v-model="img" label="Foto de perfil" :dense="dense" accept=".jpg, image/*">
                <template v-slot:prepend>
                  <q-icon name="photo" />
                </template>
              </q-file>
              <q-input filled v-model="nombre" id="nombre" :dense="dense" label="Nombre (s)"/>
              <q-input filled v-model="apellidos" id="apellidos" label="Apellidos" :dense="dense" />
              <q-input filled v-model="artistico" id="artistico" label="Nombre Artistico" :dense="dense" />
              <q-input filled v-model="email" id="email" label="Email" :dense="dense" />
              <q-input filled v-model="password" id="password" label="Contraseña" placeholder="Escribir" :type="isPwd ? 'password' : 'text'" required :dense="dense" hint="Confirme su contraseña">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
                </template>
              </q-input>
              <q-input filled v-model="telefono" id="telefono" label="Telefono" mask="(###) ### - ####"  :dense="dense" />

              <q-input filled v-model="date" mask="date" :rules="['date']" placeholder="Escriba su fecha de nacimiento" hint="" :dense="dense">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date v-model="date">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <!-- <q-select filled v-model="categoria" id="categoria" :options="options" label="Categoria" hint="Seleciones una Categoría" :dense="dense" /> -->
            </div>
          </div>
          <div>
            <q-btn label="Guardar Cambios" type="submit" color="info" />
          </div>
        </q-form>

        <q-stepper-navigation>
          <!-- register() -->
          <q-btn type="submit" @click="step = 2 " color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <!-- Paso 2 -->
      <q-step :name="2" title="Información de ubicación" caption="Optional" icon="create_new_folder" :done="step > 2">
        Actualice sus datos de ubicación

        <q-form method="get" ref="formU" lazy-validation class="col-12" v-on:register="registerU">
          <!-- v-model="valid"   -->
          
          <div class="q-pa-md" style="max-width: 300px;">
            <div class="q-gutter-y-md column">
              
              <q-input filled v-model="pais" id="pais" :dense="dense" label="Pais (s)"/>
              <q-input filled v-model="estado" id="estado" label="Estado" :dense="dense" />
              <q-input filled v-model="munic" id="munic" label="Municio o Delegación" :dense="dense" />
              <q-input filled v-model="col" id="col" label="Colonia o barrio" :dense="dense" />
              <q-input filled v-model="dir" id="dir" required label="Dirección" :dense="dense" />
              <q-input filled v-model="condpost" id="condpost" label="Codigo Postal" mask="(#####)"  :dense="dense" />

              <q-select filled v-model="categoria" id="categoria" :options="options" label="Categoria" hint="Seleciones una Categoría" :dense="dense" />
            </div>
          </div>
          <div>
            <q-btn label="Guardar Cambios" type="submit" color="info" />
          </div>
        </q-form>


        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Regrasar" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <!-- Paso 3 disable -->
      <q-step :name="3" title="Confifuración de usuario" icon="assignment" :done="step > 3" disable >
        Tipo de usuario

        <q-form method="get" ref="formT" lazy-validation class="col-12" v-on:register="registerU">
          <!-- v-model="valid"   -->
          
          <div class="q-pa-md" style="max-width: 300px;">
            <div class="q-gutter-y-md column">

              <q-field standout hint="Tipo de Usuario" :dense="dense" disable>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">Servicio</div>
                </template>
              </q-field>
              
              <q-field standout hint="Categoria" :dense="dense" disable>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">Musica</div>
                </template>
              </q-field>
              
              <q-field standout hint="Especialidad" :dense="dense" disable>
                <template v-slot:control>
                  <div class="self-center full-width no-outline">Musica</div>
                </template>
              </q-field>

              <q-select filled v-model="categoria" id="categoria" :options="options" label="Categoria" hint="Seleciones una Categoría" :dense="dense" />
            </div>
          </div>
         
        </q-form>

        <q-stepper-navigation>
          <q-btn @click="step = 4" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Regrasar" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>


      <q-step :name="4" title="Pago" icon="add_comment">
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.
        <q-stepper-navigation>
          <q-btn color="primary" label="Finish" />
          <q-btn flat @click="step = 2" color="primary" label="Regrasar" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
  <!-- 
  <div class="q-pa-md justify-center" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input filled v-model="name" label="Tu nombre *" lazy-rules :rules="[ val => val && val.length > 0 || 'Por favor escrifghba algo ']" />
      <q-input filled v-model="password" label="Tu contraseña*" hint="Confirme su contraseña" lazy-rules :rules="[ val => val && val.length > 0 || 'Confirme su contraseña ']" />
      <q-input filled type="number" v-model="age" label="Your age *" lazy-rules :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]" />
      <q-toggle v-model="accept" label="Acepto los terminos y condiciones" checked-icon="check" color="green" unchecked-icon="clear" />
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form> 
  </div>-->
</template>
<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup() {
    const $q = useQuasar()

    const accept = ref(false)

    return {
      // Paso a paso
      step: ref(1),

      // Validar
      accept,

      // select
        categoria: ref(null),

      // img-perfil y fecha
      img: ref(null),
      date: ref(''),
      // date: ref('2018/03/18'),

      // Contaseña
      isPwd: ref(true),
      dense: ref(true),
      color: ref('cyan'),

      user: ' Julio Armando',

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Debe aceptar hacer cambios'
          })
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Se guardaron los cambios'
          })
        }
      }
    }
  },

  data: () => ({
    // Validar
    nombre: null,
    apellidos: null,
    artistico: null,
    email: null,
    password: null,
    img: null,
    telefono: null,
    fechNac: null,
    options: ['Comedia', 'Decoraciones', 'Musical', 'Servicios', 'Otro']//Select items

  }),

  methods: {

  }

}

</script>
