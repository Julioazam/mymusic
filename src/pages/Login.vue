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
			      <div class="col-12" >
			        <q-img class="img-login" src="https://cdn.quasar.dev/img/parallax2.jpg">
			        </q-img>
			      </div>
			  	</div>
			  	<BR></BR>
            	<div class="text-h5">Bienvenido de nuevo</div>
            	<q-separator color="positive"/>
            	<BR></BR>
            	<div class="text-subtitle2">Ingresa tus datos de acceso para iniciar sesión en tu cuenta</div>
            	
            </q-card-section>
          </q-card>

          <q-card class="my-card">
            <q-section>
            	<!-- Formulario de login -->
              <q-form method="get" ref="form" lazy-validation v-on:submit="login" >
                <!-- v-model="valid"	@submit.prevent="nothing()" -->
                <div class="q-pa-md">
                  <div class="q-gutter-y-md column" style="max-width: 300px">

                    <q-input v-model="mail" label="Usuario" placeholder="Correo | Usuario" hint="Escriba su usuario correo electronico" required clearable color="primary" rounded :rules="stringRules">
                      <template v-slot:prepend>
                        <q-icon name="person" />
                      </template>
                    </q-input>
                    <q-input v-model="passwordl" label="Contraseña" placeholder="Contraseña" hint="Escriba su contraseña" :type="isPwd ? 'password' : 'text'" required clearable color="primary">
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
                  	<q-btn :loading="loading[0]" unelevated  color="info" @click="simulateProgress(0)" label="Ingresar" type="submit">
                    
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

        <q-tab-panel name="two">With so much content to display at once, and often so little screen real-estate

        	<q-form  method="get" ref="formR" lazy-validation class="col-12" v-on:register="register">

            	<!-- v-model="valid"	 -->
              	<div class="q-pa-md" style="max-width: 300px;">
                	<div class="q-gutter-y-md column" >
                		<label class="imageButton">
                			<q-icon name="person" v-if="seeIcon" class="uploadImageIcon"/>                      
                			<img class="imagePrevew" v-if="seeImage" :src="imagePrevUrl">
	                		<q-file  v-model="imagen" id="imagen" :dense="dense" label="Foto de perfil" placeholder="Carga de imagen" hint="Sube tu foto de perfil" accept=".jpg, image/*"  @change="previsualizarImagen($event)">
					    	</q-file>
						</label>

						<q-input outlined v-model="nombre" id="nombre" :dense="dense" label="Nombre (s)" placeholder="Escribir" hint="Escriba su Nombre (s)"/>

	                  	<q-input outlined v-model="apellidos" id="apellidos" label="Apellidos" placeholder="Escribir" hint="Escriba sus Apellidos" :dense="dense"/>

	                  	<q-input outlined v-model="email" id="email" label="Email" placeholder="Escribir" hint="Escriba su correo electronico" :dense="dense"/>

	                  	<q-input outlined v-model="password" id="password" label="Contraseña" placeholder="Escribir" hint="Escriba su contraseña" :type="isPwd ? 'password' : 'text'" required :dense="dense">
	                    	<template v-slot:append>
	                    		<q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
	                    	</template>
	                  	</q-input>

	                  	<q-input outlined v-model="nom_artistico" id="nom_artistico" label="Nombre Artistico" placeholder="Escribir" hint="Escriba su Nombre Artistico" :dense="dense"/>

	                  	<q-select outlined v-model="categoria" id="categoria" :options="options" label="Categoria" hint="Seleciones una Categoría" :dense="dense"/>

	                  	<q-list>
	                    	<q-item tag="label"  v-model="checkbox" id="checkbox" :true-value="10" :false-value="0" :rules="[v => v != 0 || 'Debes aceptar nuestros términos y condiciones']">
	                    		<q-item-section avatar>
	                    			<q-radio v-model="color" val="primary" color="primary" />
	                    		</q-item-section>

	                    		<q-item-section>
	                    			<q-item-label class="text-body2" >Más Información</q-item-label>
	                    			<q-item-label caption class="text-caption">Acepto terminos y condiciones </q-item-label>
	                    		</q-item-section>
	                    	</q-item>
	                    </q-list>
	                </div>

	                <div class="submitCont sc">
	                	<q-btn :loading="loading[0]" unelevated  color="info" @click="simulateProgress(0); register()" label="Registrar" type="register">
	                		<template v-slot:loading>
	                			<q-spinner-facebook />
	                		</template>
	                	</q-btn>
	                </div>
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
export default {

	setup() {
		const loading = ref([ false	])

		const progress = ref(false)

		function simulateProgress (number) {
			// we set loading state
	    	loading.value[ number ] = true

	    	// simulate a delay
	    	setTimeout(() => {
	    		// we're done, we reset loading state
	      		loading.value[ number ] = false
	      	}, 300)
	    }

	    return {
	    	// Contaseña
	    	isPwd: ref(true),
	    	dense: ref(true),
	    	color: ref('cyan'),

	    	// Botones de login
		    loading,
		    progress,
		    simulateProgress,
	      	
		    // Cards
		    tab: ref('one'),

	     	// select
	     	categoria: ref(null),
	     	imagen: ref(null)
	     }
	},

	data: () => ({
		//URL PREVEW 1
		imagePrevUrl:null,
		seeIcon:true,
		seeImage:false,

		//VALIDATIONS
	    valid: true,
	    stringRules: [v => !!v || '', ],

    	options: ['Comedia', 'Decoraciones', 'Musical', 'Servicios', 'Otro'],

	    mail: null,
	    passwordl: null,

	    imagen: null,
	    nombre: null,
	    apellidos: null,
	    email: null,
	    password: null,
	    categoria: null,
	    nom_artistico:null,
	    checkbox: 0
	}),

	methods: {
		previsualizarImagen(e){
			const file = e.target.files[0];
      		this.imagePrevUrl = URL.createObjectURL(file);
      		this.seeIcon=false;
      		this.seeImage = true;
		},
		
		nothing() {
			return null;
		},


		login: function(){
			// this.$router.push({ path: 'home' })
		
		  	//this.$refs.form.validate()
		  	//GUARDAR DATOS
			const mail = this.mail;
			const passwordl = this.passwordl;

			//CREAR PAQUETE
			const packagePost = { 
				'mail':mail,
	          	'passwordl':passwordl
	        };

	        //ENVIAR PACKETE POR POST
	       
			$.ajax({
				data:  packagePost, 
	          	url:   ''+serverName+''+'/ajax/usuario.php?op=verificar', 
	          	type:  'post',

	          	success:  function (res) {
	          		alert(res);
	          		router.push({ path: 'home' });
	          		// if(res=="Error mail"){
	          		// 	alert(res);
	          		// }else{
	          		// 	alert(res);
	          			
	          		// 	// console.log('Success')
	          		// 	// router.push({ name: '/home', params: { id: '1' } }) godornizazam@outlook.com
	          		// 	// localStorage.setItem('token',  res );
	          		// 	// alert(res);
	          		// 	// router.push({ path: '/home/perfil' });
	          		// 	// router.push({ path: '/home'});
          			// 	router.push({ path: '/home'
          			// 		//name: 'Providers orders',
             //  				// params:{ id: 1 }
             //  			});
          			// }
          		}
        	});
    	},

	    register: function(){
	    	// this.$refs.formR.validate()
	    	
	    		//GUARDAR DATOS
	    		const nombre = this.nombre;
	    		const apellidos = this.apellidos;
	    		const email = this.email;
	    		const password = this.password;
	    		const nom_artistico = this.nom_artistico;
	    		const categoria = this.categoria;

	    		//CREAR PAQUETE
	    		const packagePost = {
	    			'nombre':nombre,
	    			'apellidos':apellidos,
	    			'email':email,
	    			'password':password,
	    			'nom_artistico':nom_artistico,
	    			// 'categoria':categoria
	    		};

	    		
	    		//ENVIAR PACKETE POR POST
	    		$.ajax({
	    			data:  packagePost,
	    			url:   ''+serverName+''+'/ajax/usuario.php?op=guardaryeditar', 
	    			type:  'post',

	    			success:  function (res) {
	    				
	    				if( res == 'Error mail'){
	    				
	    					alert('Correo ya registrado')
	    					console.log('Correo ya existe')
	    				
	    				}else if( res == 'Err inputs'){
	    				
	    					alert('Verifica tu información')
	    					console.log('verificar registro')	    				

	    				}
	    				//GUARDAR TOKEN
	    				else{
	    					localStorage.setItem('token',  res );
	    					router.push({ path: '/home'});
	    					console.log('Registrado')
	    				}
	    			}
	    		});
	    	
	    }
	}
}

</script>
<style>
.img-bg{
	background-image: url("../../public/2.jpg");
  	background-position: center; /* Center the image */
  	background-repeat: no-repeat; /* Do not repeat the image */
  	background-size: cover; 
  	background-attachment:fixed;
}
.my-card {
  width: 100%;
  max-width: 600px;
}

.img-login{
	border-radius:50%;
	width: 200px;
	height:150px;
}

.submitCont {
  /*height: 50px;*/
  margin-top: 10vh;
}

/*SUBIR IMAGEN*/



.imageButton{
	width: 100%; height: 85%;
	background: white;
	border-radius: 5px;
	cursor: pointer;
	overflow: hidden;
}

.uploadImageIcon{
	color: black !important;
	font-size: 35px !important;
}

.imagePrevew{
	height: 100%;
	width: 56%;
	border-radius:50%;
}
			
		/*SUBIR IMAGEN*/


</style>
