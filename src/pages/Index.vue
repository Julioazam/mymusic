<template>

	<div class="q-pa-md items-start q-gutter-md center-card">

    <q-btn-dropdown
      split
      class="glossy"
      color="info"
      label="Genero"
      hit="Seleccione un genero"
    >
      <q-list>
        <!-- @click="getPlay()" -->
        <q-item v-for="(gen, s) in genero" :key="s" clickable v-close-popup @click="getPlay()">
          <q-item-section avatar>
            <q-avatar icon="folder" color="primary" text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{gen}}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-btn-dropdown>

    <q-btn-dropdown
      split
      class="glossy"
      color="primary"
      label="Playlist"
      hit="Seleccione un genero"
    >
      <q-list>
        <q-item v-for="(playlis, s) in playings" :key="s" clickable v-close-popup @click="getList(playlis.id)">
          <q-item-section avatar>
            <!-- <q-avatar icon="folder" color="primary" text-color="white" /> -->
            <q-avatar size="42px" v-for="(icon , i) in playlis.icons" :key="i">
                  <img  :src="icon.url">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{playlis.name}}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-btn-dropdown>


    <q-card class="my-card" flat bordered>
      <div class="" >
        <!-- Cabecera -->
        <q-list>
          <q-item v-for="(item, i) in playList " :key="i">
            <q-item-section avatar>
              <q-btn round @click="getList(item.id)">
                <q-avatar size="42px" v-for="(icon , i) in item.images" :key="i">
                  <img  :src="icon.url">
                </q-avatar>
              </q-btn>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-h6 q-mb-xs relative q-pa-xs"> {{item.name}} </q-item-label>
              <q-item-label caption class="text-left ">Song </q-item-label>

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


      </div>
    </q-card>



  </div>

</template>

<script>

export default {

  data() {
    return {
      utlSpoti: 'https://api.spotify.com/v1',
      clientId: 'f72ee33ceff848b694f07afe4aac84f8',
      clientSecret: '36c404ddc7414e458fe3e9e347ff3c39',
      token: null,
      genero:null,
      recomends:null,
      playings: null,
      playList:null
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
    },

    getPlay: async function(){
      const result = await fetch(`https://api.spotify.com/v1/browse/categories?offset=0`, {
        // const result = await fetch(`https://api.spotify.com/v1/browse/categories/${id}/playlists`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + this.token}
        });

        const data = await result.json();
        this.playings= data.categories.items;
        // console.log(this.playings);
        // console.log(data);
    },

    getList: async function(id){
      const result = await fetch(`https://api.spotify.com/v1/browse/categories/${id}/playlists?limit=10`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + this.token}
        });

        const data = await result.json();

        this.playList= data.playlists.items;
        console.log(this.playList);

    }

  }
}
</script>


<style lang="scss" scoped>
.select-css {
	display: block;
	font-size: 16px;
	font-family: 'Verdana', sans-serif;
	font-weight: 400;
	color: #444;
	line-height: 1.3;
	padding: .4em 1.4em .3em .8em;
	width: 400px;
	max-width: 100%;
	box-sizing: border-box;
 margin: 20px auto;
	border: 1px solid #aaa;
	box-shadow: 0 1px 0 1px rgba(0,0,0,.03);
	border-radius: .3em;
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background-color: #fff;
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
	  linear-gradient(to bottom, #ffffff 0%,#f7f7f7 100%);
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
	background-size: .65em auto, 100%;
}
.select-css::-ms-expand {
	display: none;
}
.select-css:hover {
	border-color: #888;
}
.select-css:focus {
	border-color: #aaa;
	box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
	box-shadow: 0 0 0 3px -moz-mac-focusring;
	color: #222;
	outline: none;
}
.select-css option {
	font-weight:normal;
}



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
