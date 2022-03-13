<template>

	<div class="q-pa-md items-start q-gutter-md center-card">
    <q-card class="my-card" flat bordered>

        <!-- Cabecera -->
        <q-list>
          <q-item v-for="(item, i) in genero " :key="i">
            <q-item-section avatar>
              <q-btn round>
                <q-avatar size="42px">
                  <q-img class="img-login" src="https://mymusicperronas.000webhostapp.com/apimusic/files/logo.png">
                  </q-img>
                </q-avatar>
              </q-btn>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-h6 q-mb-xs relative q-pa-xs text-capitalize"> {{item}} </q-item-label>
              <q-item-label caption class="text-left ">Genero </q-item-label>

            </q-item-section>

            <q-card-actions align="center">
              <!-- Evaluación -->
              <div class="row no-wrap items-center" align="left">
                <q-rating size="18px" v-model="stars" :max="5" color="info" />
                <!-- <span class="text-caption text-grey q-ml-sm">({{item}})</span> -->
              </div>
              <q-btn
                  round
                  flat
                  color="red"
                  stack
                  no-caps
                  size="20px"
              >
                  <q-icon size="22px" name="favorite" />
                  <!-- <span class="text-caption text-grey q-ml-sm">{{item}}</span> -->
              </q-btn>
              <q-btn flat round color="teal" icon="bookmark" />
              <q-btn flat round color="primary" icon="share" />
            </q-card-actions>
          </q-item>
        </q-list>

    </q-card>
  </div>

</template>

<script>
export default {

  data() {
    return {
      token: null,
      genero:null,
    }
  },

  created: function(){
    this.getToken();
  },

  methods:{
    getToken:  async function(){

      const clientSecret ='36c404ddc7414e458fe3e9e347ff3c39';
      const clientId = 'f72ee33ceff848b694f07afe4aac84f8';
      //  console.log(clientId + ""+ clientSecret);
       const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        this.token= data.access_token;

        console.log(this.token);
           this.getGenero();
          //  this.getRecomends();
    },

    getGenero: async function(){
      const result = await fetch(`https://api.spotify.com/v1/recommendations/available-genre-seeds`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + this.token}
        });

        const data = await result.json();

        this.genero= data.genres;
        console.log(this.genero);
        // console.log(data);
    }

  }
}
</script>


<style lang="scss" scoped>.my-card{
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
