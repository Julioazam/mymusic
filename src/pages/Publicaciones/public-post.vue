<template>
  <div class="q-pa-md items-start q-gutter-md center-card">
    <!-- Tarjeta Post -->
    <q-card class="my-card " flat bordered>
      <!-- Cabecera -->
      <q-item>
        <q-item-section avatar>
          <q-btn round to="/perfil/photos-perfil">
            <q-avatar size="42px">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-btn>
        </q-item-section>

        <q-item-section avatar>
          <div class="q-pa-md q-gutter-">
            <q-input color="dark" label="Publica un estado." rounded  standout readonly @click="bar2 = true" style="width: 400px; max-width: 100%"/>
            <!-- Postear -->
            <q-dialog v-model="bar2" persistent transition-show="flip-down" transition-hide="flip-up">
              <q-card class="my-card " flat bordered>
                <q-bar class="bg-negative text-white">
                  <q-space />
                  <q-btn dense flat icon="close" v-close-popup>
                    <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                  </q-btn>
                </q-bar>
                <form autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false">
                 
                  <q-editor v-model="editor" min-height="5rem" placeholder="Publica un estado" toolbar-text-color="white" toolbar-bg="secondary" toolbar-toggle-color="info" align="center" flat content-class="bg-blue-grey-1" :toolbar="[
                        [ 'left', 'center'],
                      [ 'right', 'justify'],
                      ['bold', 'italic', 'quote'],
                      [
                        {
                            label: 'Tamaño',
                            icon: $q.iconSet.editor.formatting,
                            fixedLabel: true,
                            fixedIcon: true,
                            list: 'no-icons',
                            options: [ 'size-2', 'size-3', 'size-4', 'size-5' ]
                          }                 
                      ],
                      [
                          {
                            label: 'Fotmato',
                            icon: $q.iconSet.editor.font,
                            fixedIcon: true,
                            list: 'no-icons',
                            options: [ 'default_font', 'arial', 'arial_black', 'comic_sans', 'courier_new', 'impact', 'lucida_grande', 'times_new_roman', 'verdana' ]
                          }
                          ],
                          [ 'hr', 'link', 'removeFormat'],
                      ['undo'],
                      [ 'redo']
                  ]" :fonts="{
                    arial: 'Arial',
                      arial_black: 'Arial Black',
                      comic_sans: 'Comic Sans MS',
                      courier_new: 'Courier New',
                      impact: 'Impact',
                      lucida_grande: 'Lucida Grande',
                      times_new_roman: 'Times New Roman',
                      verdana: 'Verdana'
                  }" />
                </form>

                <q-separator />

                <q-card-section>
                  <q-item>
                    <q-item-section avatar>
                      <q-btn round to="/perfil/photos-perfil">
                        <q-avatar size="42px">
                          <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                        </q-avatar>
                      </q-btn>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-h6 q-mb-xs absolute q-pa-xs"> {{user}} </q-item-label>
                      <q-item-label caption class="text-subtitle2 text-right q-pa-md text-dark col-4"> {{category}}</q-item-label>
                      <q-item-label caption class="text-right"> (241) 137-2093 </q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-card-section horizontal>
                    <q-card-section class="q-pt-xs">
                      <div class="text-caption text-grey" v-html="editor" />
                    </q-card-section>
                    <q-card-section class="col-5 flex flex-center">

                      <div class="contPrinIntSn cc">
                        <div class="imageUploaderCont ccc">
                          <div class="imagePrevewCont bc">
                            <label class="imageButton cc">
                                <!--IMAGE PREVEW-->
                                <q-img class="imagePrevew" v-if="seeImage" :src="imagePrevUrl">
                                </q-img>
                                <!--INPUT HIDE-->
                                <input id="imageFile" @change="previsualizarImagen($event)" style="display: none;" type="file" name="image">
                                <!--INPUT ICON-->
                                <q-icon v-if="seeIcon" class="uploadImageIcon" name="add_a_photo" />
                            </label>
                          </div>
                        </div>
                      </div>
                      <!-- <q-img class="rounded-borders" src="https://i.ibb.co/0Jmshvb/no-image.png" /> -->
                    </q-card-section>
                  </q-card-section>
                </q-card-section>

                <q-separator/>

                <q-card-actions align="center">
                  <!-- Evaluación -->
                  <div class="row no-wrap items-center" align="left">
                    <q-rating size="18px" v-model="stars" :max="5" color="info" />
                    <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
                  </div>
                  <q-btn flat round color="red" icon="favorite" />
                  <q-btn flat round color="teal" icon="bookmark" />
                  <q-btn flat round color="primary" icon="share" />
                  <div class="q-pa-md q-gutter-sm">
                    <q-btn color="dark" push size="xs">
                      <q-icon left size="3em" name="send" />
                      <div>Publicar</div>
                    </q-btn>
                    <q-btn color="dark" push size="xs">
                      <q-icon left size="3em" name="send" />
                      <div>Live</div>
                    </q-btn>
                    
                  </div>
                </q-card-actions>
                <!-- Fin Botones -->
              </q-card>
              <!-- Fin 1er post -->


              <!-- segundo Post -->
              <!-- Tarjeta Estado -->
              <q-card class="my-card" flat bordered>
                <!-- Cabecera -->
              </q-card>
            </q-dialog>
            <!-- Fin postear -->
          </div>
        </q-item-section>
      </q-item>
    </q-card>
    <!--Fin Tarjeta Post -->



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
          <!-- <div class="text-overline">Overline</div> -->
          <!-- <div class="text-h5 q-mt-sm q-mb-xs">Title</div> -->
          <div class="text-caption text-grey" v-html="editor" />
        </q-card-section>
        <q-card-section class="col-5 flex flex-center">
          <label class="img-muestra">
            <!-- IMAGE PREVEW -->
            <q-img class="imagePrevew" :src="imagePrevUrl"></q-img>
          </label>           
        </q-card-section>
      </q-card-section>

      <q-card-actions align="center">
        <!-- Evaluación -->
        <div class="row no-wrap items-center" align="left">
          <q-rating size="18px" v-model="stars" :max="5" color="info" />
          <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
        </div>
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>

      <q-separator />

      <q-card-actions align="center">
        <!-- Buton agenda, reservar ubication -->
        <q-btn flat round icon="event" @click="open('left')" />
        <q-btn flat color="primary">Reservar </q-btn>
        <q-btn fab color="primary" icon="place" class="ubication" />
        <q-dialog v-model="dialog" :position="position">
          <q-card style="width: 320px">
            <q-card-section class="items-center no-wrap">
              <q-date v-model="days" multiple />
            </q-card-section>
          </q-card>
        </q-dialog>
        <!-- Fin agenda -->
      </q-card-actions>
    </q-card>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    // Agenda
    const dialog = ref(false)
    const position = ref('top')

    return {
      // Post
      editor: ref(''),
      bar2: ref(false),

      // Fin Agenda
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      user: 'Julio Armando',
      category: 'Musical'
    }
  },

  data:() => ({

    //URL PREVEW 1
    imagePrevUrl: null,
    seeIcon: true,
    seeImage: false,

  }),

  methods:{
    previsualizarImagen(e) {
            const file = e.target.files[0];
            this.imagePrevUrl = URL.createObjectURL(file);
            this.seeIcon = false;
            this.seeImage = true;
        }

  }
}

</script>
<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 600px;
  // left:20%
}

.ubication {
  right: -50px;
}

.center-card {
  padding-left: 25%;
}


/*SUBIR IMAGEN*/
.cc{display: flex; justify-content: center; align-items: center;}
.ccc{display: flex; justify-content: center; align-items: center; flex-direction: column;}
.bc{display: flex; justify-content: space-between; align-items: center; }

.contPrinIntSn {
    width: 100%;
    height: 30vh;
    background: white;
    box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    overflow: hidden;
}
.img-muestra{
    width: 100%;
    height: 30vh;
    background: white;
    border-radius: 20px;
    overflow: hidden;

}

.imageUploaderCont {
    width: 100%;
    height: 100%;
}

.imagePrevewCont {
    width: 100%;
    height: 100vh;
    position: relative;
    flex-wrap: wrap;
    align-content: space-between;
}

.imageButton {
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 5px;
    cursor: pointer;
    overflow: hidden;
}

.imageButtonGrey {
    width: 30%;
    height: 38%;
    background: transparent;
    border-radius: 5px;
}

.uploadImageIcon {
    color: black !important;
    font-size: 35px !important;
}

.imagePrevew {
    height: 100%;
}

/*SUBIR IMAGEN*/

@media only screen and (max-width: 1025px) and (min-width: 841px) {
  .my-card {
    width: 100%;
    max-width: 890px;
    // left:20%
  }

  .center-card {
    // padding-left: 2%;
  }
}

@media only screen and (max-width: 620px) and (min-width: 250px) {
  .center-card {
    left: 0;
    right: 0;
    padding: 1%;
  }
}

</style>
