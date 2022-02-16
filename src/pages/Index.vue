
<template>
	<div class="q-pa-md items-start q-gutter-md center-card">

	  	<!-- Tarjeta Video -->
	    <q-card class="my-card">
	    	<q-card-section class="q-pt-none">
	    		<div class="text-h6 q-mb-xs absolute q-pa-xs">{{ user }}</div>
	    		<div class="text-subtitle2 text-right q-pa-md text-dark">{{category}}</div>
	    		{{ lorem }}
	    	</q-card-section>

	    	<!-- <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" /> -->
	    	<q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
	    	<q-card-actions align="center">

	    		<!-- Evaluación -->
	    		<div class="row no-wrap items-center" align="left">
	    			<q-rating size="18px" v-model="stars" :max="5" color="primary" />
	    			<span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
	    		</div>
		        <q-btn flat round color="red" icon="favorite" />
		        <q-btn flat round color="teal" icon="bookmark" />
		        <q-btn flat round color="primary" icon="share" />
	      	</q-card-actions>

	    	<q-separator />

	    	<q-card-actions align="center">
	    		<q-btn flat round icon="event" />
	    		<q-btn flat color="primary">Reservar
	    		</q-btn>

	    			<!-- Location -->
	    		<q-btn fab color="primary" icon="place" class="ubication"/>
	    	</q-card-actions>
	    </q-card>

	    <!-- Tarjeta Estado -->
	    <q-card class="my-card" flat bordered>
	    	<!-- Cabecera -->
	    	<q-item>

	    		<q-item-section avatar>
	    			<q-avatar>
	    				<img src="https://cdn.quasar.dev/img/boy-avatar.png" alt="">
	    			</q-avatar>
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
	    			<div class="text-caption text-grey"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
	    		</q-card-section>

	    		<q-card-section class="col-5 flex flex-center">
	    			<q-img class="rounded-borders" src="https://cdn.quasar.dev/img/parallax2.jpg"/>
	    		</q-card-section>
	    	</q-card-section>

	    	<q-card-actions align="center">

	    		<!-- Evaluación -->
	    		<div class="row no-wrap items-center" align="left">
	    			<q-rating size="18px" v-model="stars" :max="5" color="primary" />
	    			<span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
	    		</div>
		        <q-btn flat round color="red" icon="favorite" />
		        <q-btn flat round color="teal" icon="bookmark" />
		        <q-btn flat round color="primary" icon="share" />
	      	</q-card-actions>

	    	<q-separator />

	    	<q-card-actions align="center">
	    		<q-btn flat round icon="event" />
	    		<q-btn flat color="primary">Reservar
	    		</q-btn>

	    			<!-- Location -->
	    		<q-btn fab color="primary" icon="place" class="ubication"/>
	    	</q-card-actions>
	    </q-card>

	    <!-- Tarjeta Video -->
	    <q-card class="my-card">
	    	<q-card-section class="q-pt-none">
	    		<div class="text-h6 q-mb-xs absolute q-pa-xs">{{ user }}</div>
	    		<div class="text-subtitle2 text-right q-pa-md text-dark">{{category}}</div>
	    		{{ lorem }}
	    	</q-card-section>

	    	<q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />
	    	<!-- <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" /> -->
	    	<q-card-actions align="center">

	    		<!-- Evaluación -->
	    		<div class="row no-wrap items-center" align="left">
	    			<q-rating size="18px" v-model="stars" :max="5" color="primary" />
	    			<span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
	    		</div>
		        <q-btn flat round color="red" icon="favorite" />
		        <q-btn flat round color="teal" icon="bookmark" />
		        <q-btn flat round color="primary" icon="share" />
	      	</q-card-actions>

	    	<q-separator />

	    	<q-card-actions align="center">
	    		<q-btn flat round icon="event" />
	    		<q-btn flat color="primary">Reservar
	    		</q-btn>

	    			<!-- Location -->
	    		<q-btn fab color="primary" icon="place" class="ubication"/>
	    	</q-card-actions>
	    </q-card>

	    <!-- Tarjeta Estado -->
	    <q-card class="my-card" flat bordered>
	    	<!-- Cabecera -->
	    	<q-item>

	    		<q-item-section avatar>
	    			<q-avatar>
	    				<img src="https://cdn.quasar.dev/img/boy-avatar.png" alt="">
	    			</q-avatar>
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
	    			<div class="text-caption text-grey"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
	    		</q-card-section>

	    		<q-card-section class="col-5 flex flex-center">
	    			<q-img class="rounded-borders" src="https://cdn.quasar.dev/img/parallax2.jpg"/>
	    		</q-card-section>
	    	</q-card-section>

	    	<q-card-actions align="center">

	    		<!-- Evaluación -->
	    		<div class="row no-wrap items-center" align="left">
	    			<q-rating size="18px" v-model="stars" :max="5" color="primary" />
	    			<span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
	    		</div>
		        <q-btn flat round color="red" icon="favorite" />
		        <q-btn flat round color="teal" icon="bookmark" />
		        <q-btn flat round color="primary" icon="share" />
	      	</q-card-actions>

	    	<q-separator />

	    	<q-card-actions align="center">
	    		<q-btn flat round icon="event" />
	    		<q-btn flat color="primary">Reservar
	    		</q-btn>

	    			<!-- Location -->
	    		<q-btn fab color="primary" icon="place" class="ubication"/>
	    	</q-card-actions>
	    </q-card>

  	</div>
</template>

<script>
import sesion from '../mixins/sesion'
export default {
  mixins:[sesion],
  setup () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      user:'Julio Armando',
      category:'Musical'
    }
  }
}

// import { defineComponent } from 'vue';

// export default defineComponent({
//   name: 'PageIndex'
// })
</script>
<style lang="scss" scoped>
.my-card{
	width: 100%;
	max-width: 600px;
	// left:20%
}

.ubication{
  right:-50px;
}

.center-card{
  padding-left:25%;
}

@media only screen and (max-width: 1025px) and (min-width: 841px) {
	.my-card{
		width: 100%;
		max-width: 890px;
		// left:20%
	}
	.center-card{
		// padding-left: 2%;
	}
}

@media only screen and (max-width: 620px) and (min-width: 250px) {
	.center-card{
		left:0;
		right:0;
		padding: 1%;
	}
}

</style>
