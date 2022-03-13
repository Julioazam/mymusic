<template>
  <div class="q-pa-md">
    <q-stepper v-model="step" vertical color="green" animated>

      <!-- Paso 1 info person -->
      <q-step :name="1" title="Información de Usuario" icon="settings" caption="Optional" :done="step > 1">
        ¿Desea modificar sus datos de contacto?

        <form
          method="post"
          ref="formR"
          class="col-12"
          @submit.prevent.stop="onSubmit"
          enctype="multipart/form-data"
        >

          <div class="q-pa-md" style="max-width: 300px;">
            <div class="q-gutter-y-md column" alieng="center">
              <q-input
               	filled
               	v-model="nombre"
                id="nombre"
               	name="nombre"
               	label='Nombre (s)'
               	:dense="dense"
               	lazy-rules
               	:rules="[ val => val && val.length > 0 || 'Por favor Escriba su nombre']"
                color="green-8"
              />

              <q-input
	              filled
	              v-model="apellidos"
                id="apellidos"
	              name="apellidos"
	              label="Apellidos"
	              :dense="dense"
	              lazy-rules
	              :rules="[ val => val && val.length > 0 || 'Por favor Escriba su apellidos']"
                color="green-8"
              />

              <q-input
               	filled
               	v-model="nom_artistico"
               	id="nom_artistico"
               	name="nom_artistico"
               	label="Nombre Artistico"
               	:dense="dense"
               	lazy-rules
               	:rules="[ val => val && val.length > 0 || 'Por favor Escriba su nombre artistico']"
                color="green-8"
              />

              <q-input
               	filled
               	v-model="email"
               	id="email"
               	name="email"
               	label="Email"
               	:dense="dense"
                color="green-8"
                disable
              />

              <q-input
                ref="passRef"
               	filled
               	v-model="password"
               	id="password"
               	name="password"
               	label="Confirme Contraseña"
               	placeholder="Escribir"
               	:type="isPwd ? 'password' : 'text'"
               	:dense="dense"
               	hint="Confirme su contraseña"
                color="green-8"
                :rules="nameRules"
              >
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
                </template>
              </q-input>


              <q-input
                color="green-8"
               	filled
               	v-model="telefono"
               	id="telefono"
               	name="telefono"
               	label="Telefono"
               	mask="(###) ### - ####"
               	:dense="dense" />

              <q-input
                color="green-8"
                filled
                v-model="fechNac"
                id="fechNac"
                mask="date"
                :rules="['date']"
                placeholder="Escriba su fecha de nacimiento"
                hint=""
                :dense="dense"
                >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date v-model="fechNac">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>

              <!-- <div>
                <q-toggle
                  v-model="accept"
                  label="Confirme su contraseña"
                  dark
                  color="green"
                  checked-icon="check"
                />
              </div> -->
               <q-toggle
                v-model="accept"
                label="Confirme su contraseña"
                color="green"
                checked-icon="check"
               />

            </div>
          </div>

          <div>
            <q-btn
              :loading="loading[0]"
              unelevated
              color="info"
              @click="simulateProgress(0),modifyUser()"
              label="Guardar cambios"
              type="submit">

              <template v-slot:loading>
                <q-spinner-gears />
              </template>
            </q-btn>
          </div>
        </form>

        <q-stepper-navigation>
          <!-- register() -->
          <q-btn
            type="submit"
            @click="step = 2 "
            color="primary"
            label="Continue"
          />
        </q-stepper-navigation>
      </q-step>

      <!-- Paso 2 -->
      <q-step :name="2" title="Información de Ubicación" caption="Optional" icon="place" :done="step > 2">
        Actualice sus datos de ubicación

        <form
          method="post"
          ref="formU"
          lazy-validation
          class="col-12"
          @submit.prevent.stop="onSubmit"
          enctype="multipart/form-data"
        >
          <!-- v-model="valid"   -->

          <div class="q-pa-md" style="max-width: 300px;">
            <div class="q-gutter-y-md column">
              <div>
                  <q-toggle v-model="disable" label="Habilitar" />
                </div>

              <q-input :disable="disable" v-model="pais" id="pais" name="pais" :dense="dense" label="Pais (s)"/>
              <q-input :disable="disable" v-model="estado" id="estado" name="estado" label="Estado" :dense="dense" />
              <q-input :disable="disable" v-model="munic" id="munic" name="munic" label="Municio o Delegación" :dense="dense" />
              <q-input :disable="disable" v-model="col" id="col" name="col" label="Colonia o barrio" :dense="dense" />
              <q-input :disable="disable" v-model="dir" id="dir" name="dir" required label="Dirección" :dense="dense" />
              <q-input :disable="disable" v-model="codpost" id="codpost" name="codpost" label="Codigo Postal" mask="#####"  :dense="dense" />

            </div>
          </div>
          <div>
            <q-btn
              :loading="loading[0]"
              unelevated
              color="info"
              @click="simulateProgress(0),addUbication()"
              label="Guardar cambios"
              type="submit"
              :disable="disable"
            >

              <template v-slot:loading>
                <q-spinner-gears />
              </template>
            </q-btn>
          </div>
        </form>


        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" label="continuar" />
          <q-btn flat @click="step = 1" color="primary" label="Regrasar" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <!-- Paso 4 Pago -->
      <q-step :name="3" title="Finalizar" icon="add_comment">
        Haz terminado de actualizar tus datos gracias por elegir My Music
        <q-stepper-navigation>
          <q-btn @click="step = 1" color="primary" label="Finish" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>

</template>
<script>

import { ref } from 'vue'
import axios from 'axios'
import sesion from '../../mixins/sesion'


export default {
  mixins:[sesion],

  setup() {

    //Validar form
    const accept = ref(false)
    const passRef = ref(null)

    // Boutton
    const loading = ref([false])
    const progress = ref(false)


    function simulateProgress(number) {
      // we set loading state
      loading.value[number] = true

      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        loading.value[number] = false
      }, 300)
    }

    return {



      // Paso a paso
      step: ref(1),

      disable: ref(true),
      habilitar: ref(true),

      // select
      categoria: ref(null),

      // img-perfil y fecha
      imagen: ref(null),
      fechNac: ref(null),


      // Contaseña
      isPwd: ref(true),
      isconf: ref(true),
      dense: ref(true),
      color: ref('cyan'),

      // Botones de login
      loading,
      progress,
      simulateProgress,

      // Validar
      accept,
      passRef,
      nameRules: [
        val => (val && val.length > 0) || 'Confirme con su password'
      ]
    }
  },

  data: () => ({
    // Validar data-user
    valid: true,
    stringRules: [v => !!v || '', ],

    nombre: null,
    apellidos: null,
    nom_artistico: null,
    passwordl: null,
    email: null,
    password: null,
    imagen: null,
    telefono: null,
    fechNac:null,

    //Ubication
    pais: null,
    estado: null,
    munic: null,
    col: null,
    dir: null,
    codpost: null,
    options: ['Comedia', 'Decoraciones', 'Musical', 'Servicios', 'Otro'],//Select items
  // options:[{nomcat:''}],


    respuesta: null,
    res:null,

  }),

  methods: {

    //Update user  step 1
    modifyUser: function(){

      // Validamos la switch
      if(this.accept === true){
        //GUARDAR DATOS
        const token = localStorage.getItem('token');
        const nombre = this.nombre;
        const apellidos = this.apellidos;
        const nom_artistico = this.nom_artistico;
        const email = this.email;
        const password = this.password;
        // const imagen = this.imagen;
        const telefono = this.telefono;
        const fechNac = this.fechNac;

        //CREAR PAQUETE
        const packagePost = new FormData();
        packagePost.append('nombre',nombre);
        packagePost.append('apellidos',apellidos);
        packagePost.append('nom_artistico',nom_artistico);
        packagePost.append('email',email);
        packagePost.append('password',password);
        // packagePost.append('imagen',imagen);
        packagePost.append('telefono',telefono);
        packagePost.append('token',token);
        packagePost.append('fechNac',fechNac);

        //Validar campo contra
        if (this.password.length !==0)
        {
          axios.post('' + localhost + '' + 'usuario.php?op=editarPerfil',packagePost)
          .then(res => {
            this.respuesta=res.data
            // alert(this.respuesta);
            if(this.respuesta =='Usuario Actualizado')
            {
              this.$q.notify({
                message: this.respuesta,
                color: 'secondary',
                textColor: 'positive',
                icon: 'fa fa-thumbs-up'
              })

            }else if(this.respuesta == false){
              this.$q.notify({
                message: 'Contraseña incorrecta',
                color: 'warning',
                textColor: 'positive',
                icon: 'fa fa-exclamation-circle'
              })
            }
          })
          // form has error
        }else{
          this.$q.notify({
            message: "Ingrese su contraseña",
            color: 'warning',
            textColor: 'positive',
            icon: 'fa fa-exclamation-circle'
          })

        }
      }else{
        this.$q.notify({
          message: "Acepte permisos",
          color: 'warning',
          textColor: 'positive',
          icon: 'fa fa-exclamation-circle'
        })
      }
    },

    //step 2 Ubication
    addUbication: function(){
      //GUARDAR DATOS
        const token = localStorage.getItem('token');
        const pais = this.pais;
        const estado = this.estado;
        const munic = this.munic;
        const col = this.col;
        const dir = this.dir;
        const codpost = this.codpost;

        //CREAR PAQUETE
        const packagePost = new FormData();
        packagePost.append('token',token);
        packagePost.append('pais',pais);
        packagePost.append('estado',estado);
        packagePost.append('munic',munic);
        packagePost.append('col',col);
        packagePost.append('dir',dir);
        packagePost.append('codpost',codpost);


        axios.post('' + serverName + '' + '/ajax/ubicacion.php?op=registro',packagePost)
          .then(res => {
            this.respuesta=res.data
            // alert(this.respuesta);

            if(this.respuesta =='Ubicación registrada')
            {
              this.$q.notify({
                message: this.respuesta,
                color: 'secondary',
                textColor: 'positive',
                icon: 'fa fa-thumbs-up'
              })

            }else if(this.respuesta =='Ubicación Actualizada')
            {
              this.$q.notify({
                message: this.respuesta,
                color: 'secondary',
                textColor: 'positive',
                icon: 'fa fa-thumbs-up'
              })

            }else if(this.respuesta == false){
              this.$q.notify({
                message: 'Contraseña incorrecta',
                color: 'warning',
                textColor: 'positive',
                icon: 'fa fa-exclamation-circle'
              })
            }
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
      this.apellidos = response.data[0].apellidos;
	    this.nom_artistico = response.data[0].nom_artistico;
	    this.email = response.data[0].email;
	    this.password = response.data[0].password;
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

      this.tipoUser = response.data[0].tipo;
      this.estatus = response.data[0].estatus;
      // alert("Perfil: "+token);
    });

  }
}

</script>

<style>

.map {
  height: 100%;
}

/*SUBIR IMAGEN*/
.imageButton {
  width: 100%;
  height: 5%;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  text-align: center;

}

.uploadImageIcon {
  color: black !important;
  font-size: 75px !important;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}

.imagePrevew {
  height: 100%;
  width: 66%;
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

/*SUBIR IMAGEN*/

/*MAPA*/
	.addresContainer{
		width: 100%; height: 250px;
		margin-bottom: 60px;
		position: relative;
	}

	.updateMap{
		width: 150px; height: 50px;
		position: absolute;
		right: 15px;top: 15px;
		z-index: 1000;
		background: black;
		border-radius: 5px;
		color: white;
		cursor: pointer;
	}.inputPlacesFh{width: 100%;}

 .mapouter{
   position:relative;
   text-align:right;
   height:500px;
   width:600px;
}

.gmap_canvas {
  overflow:hidden;
  background:none!important;
  height:500px;
  width:600px;
}


</style>
