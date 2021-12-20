<template>
  <div class="q-pa-md mobile img-bg" align="center">
    <q-card class="my-card" transparent>
      <q-card-section>
        <div class="text-h6"> Porque The PARY eres tú</div>
      </q-card-section>
      <q-tabs v-model="tab" class="text-teal">
        <q-tab label="Login" name="one" />
        <q-tab label="Registro" name="two" />
      </q-tabs>
      <q-separator />
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="one">The QCard component is a great way to display important pieces of grouped.
          <q-card primary flat bordered class="my-card">
            <q-card-section class="bg-primary text-white">
              <div class="q-col-gutter-md row items-start">
                <div class="col-12">
                  <q-img class="img-login" src="https://cdn.quasar.dev/img/parallax2.jpg">
                  </q-img>
                </div>
              </div>
              <BR/>
              <div class="text-h5">Bienvenido de nuevo</div>
              <q-separator color="positive" />
              <BR/>
              <div class="text-subtitle2">Ingresa tus datos de acceso para iniciar sesión en tu cuenta</div>
            </q-card-section>
          </q-card>
          <q-card class="my-card">
            <q-section>
              <!-- Formulario de login -->
              <q-form method="post" ref="form" lazy-validation id="formLogin">
                <!-- v-model="valid"	@submit.prevent="nothing()"  -->
                <div class="q-pa-md">
                  <div class="q-gutter-y-md column" style="max-width: 300px">
                    <q-input 
                    	v-model="mail" 
                    	id="mail"
                    	name="mail"
                    	label="Usuario" 
                    	placeholder="Correo | Usuario" 
                    	hint="Escriba su usuario o correo electronico" 
                    	required 
                    	clearable 
                    	color="primary" 
                    	rounded 
                    	:rules="stringRules">

                    	  <template v-slot:prepend>
                        	<q-icon name="person" />
                      	</template>
                    </q-input>

                    <q-input 
	                    v-model="passwordl" 
	                    id="passwordl"
	                    name="passwordl"
	                    label="Contraseña" 
	                    placeholder="Contraseña" 
	                    hint="Escriba su contraseña" 
	                    :type="isPwd ? 'password' : 'text'" 
	                    required 
	                    clearable 
	                    color="primary">

	                    <!-- rounded filled -->
                     	<template v-slot:prepend>
                        	<q-icon name="lock" />
                      	</template>
                      	<template v-slot:append>
                        	<q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
                      	</template>
                    </q-input>
                  </div>
                  <div class="submitCont sc">
                    <q-btn :loading="loading[0]" unelevated color="info" @click="simulateProgress(0),login()" label="Ingresar">
                      <template v-slot:loading>
                        <q-spinner-facebook />
                      </template>
                    </q-btn>
                  </div>
                </div>
                <!--<router-link style="margin-top: 20px;text-decoration: none;" :to="{ name: 'Signup Providers'}">Crear una cuenta</router-link>

                <router-link style="margin-top: 20px;text-decoration: none;" :to="{ name: 'Recovery password', params: { id: 1 }} ">Olvide mi contraseña</router-link> -->
              </q-form>
            </q-section>
          </q-card>
        </q-tab-panel>

        <!-- Register -->
        <q-tab-panel name="two">With so much content to display at once, and often so little screen real-estate
          <q-form 
          	method="post" 
          	ref="formR"  
          	class="col-12" 
          	@submit="onSubmit"
          	enctype="multipart/form-data"
          	id="formRegistro">

            <div class="q-pa-md" style="max-width: 300px;">
              <div class="q-gutter-y-md column">

                <label class="imageButton">
                  <q-icon name="photo" v-if="seeIcon" class="uploadImageIcon" />
                  <img class="imagePrevew" v-if="seeImage" :src="imagePrevUrl">
                  <q-file filled v-model="imagen" id="imagen" name="imagen" :dense="dense" label="Foto de perfil" placeholder="Carga de imagen" hint="Sube tu foto de perfil" accept=".jpg, image/*" @change="previsualizarImagen($event)"></q-file>
                </label>

                <q-input 
                	filled 
                	v-model="nombre" 
                	id="nombre" 
                	name="nombre"
                	:dense="dense" 
                	label="Nombre (s)"
                	lazy-rules
                	:rules="[ val => val && val.length > 0 || 'Por favor Escriba su nombre']"/>

                <q-input 
	                filled 
	                v-model="apellidos" 
	                id="apellidos" 
	                name="apellidos"
	                label="Apellidos" 
	                :dense="dense" 
	                lazy-rules
	                :rules="[ val => val && val.length > 0 || 'Por favor Escriba su apellidos']"/>

                <q-input 
                	filled 
                	v-model="nom_artistico" 
                	id="nom_artistico" 
                	name="nom_artistico"
                	label="Nombre Artistico" 
                	:dense="dense" 
                	lazy-rules
                	:rules="[ val => val && val.length > 0 || 'Por favor Escriba su nombre artistico']"/>

                <q-input 
                	filled 
                	v-model="email" 
                	id="email" 
                	name="email"
                	label="Email" 
                	:dense="dense" />
                
                <q-input 
                	filled 
                	v-model="confirmar" 
                	id="confirmar" 
                	name="confirmar"
                	label="Contraseña" 
                	placeholder="Escribir" 
                	:type="isPwd ? 'password' : 'text'" 
                	required 
                	:dense="dense" 
                	hint="Escriba su contraseña">
                	<template v-slot:append>
                    	<q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
                  	</template>
                </q-input>

                <q-input 
                	filled 
                	v-model="password" 
                	id="password" 
                	name="password"
                	label="Contraseña" 
                	placeholder="Escribir" 
                	:type="isPwd ? 'password' : 'text'" 
                	required 
                	:dense="dense" 
                	hint="Confirme su contraseña">
                  <template v-slot:append>
                    <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
                  </template>
                </q-input>

               
                <q-input 
                	filled 
                	v-model="telefono" 
                	id="telefono" 
                	name="telefono"
                	label="Telefono" 
                	mask="(###) ### - ####" 
                	:dense="dense" />

                <q-input filled v-model="fechNac" name="fechNac" id="fechNac" mask="date" :rules="['date']" placeholder="Escriba su fecha de nacimiento" hint="" :dense="dense">
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

                <!-- v-model="valid"   -->
                <q-toggle v-model="accept" label="Acepto Terminos y Condiciones" checked-icon="check" color="green" unchecked-icon="clear" />
              </div>
            </div>
            <div>
              <!-- <q-btn label="Guardar Cambios" type="submit" color="info" /> -->
            <q-btn 
              unelevated 
              color="info" 
              @click="register()" 
              label="Registrar" 
              type="submit">

                <template v-slot:loading>
                  <q-spinner-facebook />
                </template>
              </q-btn>
            </div>
          </q-form>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>
<script>
import router from '../router/routes.js'
import { ref } from 'vue'
import axios from 'axios'
import { useQuasar } from 'quasar'
export default {

  setup() {
    // Switch
    const $q = useQuasar()
    const nombre = ref(null)

    const accept = ref(false)

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
      // Contaseña
      isPwd: ref(true),
      dense: ref(true),
      color: ref('cyan'),

      // Validar
      nombre,
      accept,

      // Botones de login
      loading,
      progress,
      simulateProgress,

      // Cards
      tab: ref('one'),

      // select
      date:ref(''),
      
      imagen: ref(null),

      onSubmit() {
        if (accept.value !== true) {
        	register();
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Debe aceptar Terminos y Condiciones'
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
    //URL PREVEW 1
    imagePrevUrl: null,
    seeIcon: true,
    seeImage: false,

    //VALIDATIONS
    valid: true,
    stringRules: [v => !!v || '', ],

    mail: null,
    passwordl: null,

    nombre: null,
    apellidos: null,
    nom_artistico: null,
    email: null,
    password: null,
    confirmar: null,
    imagen: null,
    telefono: null,
    fechNac:null,

    respuesta:null,
    res:null
  }),

  methods: {
    previsualizarImagen(e) {
      const file = e.target.files[0];
      this.imagePrevUrl = URL.createObjectURL(file);
      this.seeIcon = false;
      this.seeImage = true;
    },

    nothing() {
      return null;
    },


    login: function() {
      //GUARDAR DATOS
      const mail = this.mail;
      const passwordl = this.passwordl;

 		  const packagePost = new FormData();
		  packagePost.append('mail',mail);
      packagePost.append('passwordl',passwordl);

      axios.post('' + serverName + '' + '/ajax/usuario.php?op=verificar',packagePost)
      .then(res => {
        	this.respuesta=res.data
          // alert(this.respuesta);
        	if(this.respuesta == 'Correo no encontrado'){
            // alert(this.respuesta);
            this.$q.notify({
              message:  '1 vue:' + this.respuesta,
              color: 'warning',
              textColor: 'positive',
              icon: 'fa fa-exclamation-circle'

            })
          }else{
            if(this.mail && this.passwordl){
              alert(this.respuesta);
              localStorage.setItem('token', this.respuesta);
              // this.$router.push({ path: '/home' })

            }else{
              this.$q.notify({
                message: '2 vue:' + this.respuesta,
                color: 'warning',
                textColor: 'positive',
                icon: 'fa fa-exclamation-circle'
              })

            }
            
          }
      })     
    },

    register: function() {
      if (this.confirmar == this.password) {
      	//GUARDAR DATOS
        const nombre = this.nombre;
        const apellidos = this.apellidos;
        const nom_artistico = this.nom_artistico;
        const email = this.email;
        const password = this.password;
        const imagen = this.imagen;
        const telefono = this.telefono;
        const fechNac = this.fechNac;
        
          //CREAR PAQUETE
          
          const packagePost = new FormData();
          packagePost.append('nombre',nombre);
          packagePost.append('apellidos',apellidos);
          packagePost.append('nom_artistico',nom_artistico);
          packagePost.append('email',email);
          packagePost.append('password',password);
          packagePost.append('imagen',imagen);
          packagePost.append('telefono',telefono);
          packagePost.append('fechNac',fechNac);

          axios.post('' + serverName + '' + '/ajax/usuario.php?op=guardaryeditar',packagePost)
          .then(res => {
            this.respuesta=res.data
            this.direccionamiento()
          })
          //ENVIAR PACKETE POR POST
        // $.ajax({
        //     data: packagePost,
        //     url: '' + serverName + '' + '/ajax/usuario.php?op=guardaryeditar',
        //     type: 'post',
        //     contentType: false,
        //      processData: false,

        //     success: function(res) {
        //     	if (res == 'Error mail') {
        //     		alert(res);
        //         	console.log('Correo ya existe');

        //       	} else if (res == 'Err inputs') {
        //       		alert(res);
        //         	console.log('verificar registro');

        //       	}
        //       	//GUARDAR TOKEN
        //       	else {
        //       		alert(res);
        //         	// localStorage.setItem('token', res);
        //         	// router.push( '/home' );
        //         	// router.push({ path: '/home' });
        //         	this.direccionamiento();
                  
        //       	}
        //     }
        // });

      }else{
      	alert('Su contraseña no coincide');
      }
    },

    direccionamiento(){
    	if(this.respuesta == 'Usuario registrado'){
    		
    		this.$router.push({ path: '/home' })
    	}else{
    		alert('No se registro el usuario');
    	}
    }
  }
}

</script>
<style>
.img-bg {
  background-image: url("../../public/2.jpg");
  background-position: center;
  /* Center the image */
  background-repeat: no-repeat;
  /* Do not repeat the image */
  background-size: cover;
  background-attachment: fixed;
}

.my-card {
  width: 100%;
  max-width: 600px;
}

.img-login {
  border-radius: 50%;
  width: 200px;
  height: 150px;
}

.submitCont {
  /*height: 50px;*/
  margin-top: 10vh;
}

/*SUBIR IMAGEN*/



.imageButton {
  width: 100%;
  height: 85%;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
}

.uploadImageIcon {
  color: black !important;
  font-size: 35px !important;
}

.imagePrevew {
  height: 100%;
  width: 56%;
  border-radius: 50%;
}

/*SUBIR IMAGEN*/

</style>
