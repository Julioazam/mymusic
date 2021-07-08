
<template>
	<div class="q-pa-md row items-start q-gutter-md">

	  	<!-- Tarjeta Video -->
	    <q-card class="my-card">
	    	<q-card-section class="q-pt-none ">
	    		<div class="text-h6 q-mb-xs absolute q-pa-xs">{{ user }}</div> 
	    		<div class="text-subtitle2 text-right q-pa-md text-dark">{{category}}</div>
	    		{{ lorem }}
	    	</q-card-section>

	    	<!-- <q-video src="https://www.y outube.com/embed/k3_tw44QsZQ?rel=0" /> -->
	    	<q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
	    	<q-card-actions align="right"> 

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
			<div class="text-info text-center">
	    		<q-icon name="place" />250 ft
	    	</div>
	    	<q-card-actions>
	    			<!-- Location -->
	    		<q-btn fab color="primary" icon="place" class="absolute" style="top: 0; right: 12px; transform: translateY(700%);"/>

	    		<q-btn flat round icon="event" />
	    		<q-btn flat color="primary">Reservar
	    		</q-btn>
	    	</q-card-actions>
	    </q-card>  

	    <!-- Tarjeta Video -->
	    <q-card class="my-card">
	    	<q-card-section class="q-pt-none ">
	    		<div class="text-h6 q-mb-xs absolute q-pa-xs">{{ user }}</div> 
	    		<div class="text-subtitle2 text-right q-pa-md text-dark">{{category}}</div>
	    		{{ lorem }}
	    	</q-card-section>

	    	<!-- <q-video src="https://www.y outube.com/embed/k3_tw44QsZQ?rel=0" /> -->
	    	<q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
	    	<q-card-actions align="right"> 

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
			<div class="text-info text-center">
	    		<q-icon name="place" />250 ft
	    	</div>
	    	<q-card-actions>
	    			<!-- Location -->
	    		<q-btn fab color="primary" icon="place" class="absolute" style="top: 0; right: 12px; transform: translateY(700%);"/>

	    		<q-btn flat round icon="event" />
	    		<q-btn flat color="primary">Reservar
	    		</q-btn>
	    	</q-card-actions>
	    </q-card>  

	    <!-- Tarjeta Video -->
	    <q-card class="my-card">
	    	<q-card-section class="q-pt-none ">
	    		<div class="text-h6 q-mb-xs absolute q-pa-xs">{{ user }}</div> 
	    		<div class="text-subtitle2 text-right q-pa-md text-dark">{{category}}</div>
	    		{{ lorem }}
	    	</q-card-section>

	    	<q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />
	    	<q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
	    	<q-card-actions align="right"> 

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
			<div class="text-info text-center">
	    		<q-icon name="place" />250 ft
	    	</div>
	    	<q-card-actions>
	    			<!-- Location -->
	    		<q-btn fab color="primary" icon="place" class="absolute" style="top: 0; right: 12px; transform: translateY(700%);"/>

	    		<q-btn flat round icon="event" />
	    		<q-btn flat color="primary">Reservar
	    		</q-btn>
	    	</q-card-actions>
	    </q-card>  

  	</div>
</template>

<script>
export default {
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
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
