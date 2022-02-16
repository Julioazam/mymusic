<template>
  <div class="text-h4 q-mb-md">Mis Amigos</div>
  <p>Info y datos de perfil</p>
  <div class="q-pa-md col-12">
    <div class="q-gutter-md row items-start">
      <q-list class="shadow-2 rounded-borders" style=" width: 100%;">
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar6.jpg">
            </q-avatar>
          </q-item-section>
          <q-item-section>Jane</q-item-section>
        </q-item>
        <q-separator inset="item" />
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar3.jpg">
            </q-avatar>
          </q-item-section>
          <q-item-section>Lily</q-item-section>
        </q-item>
        <q-separator inset="item" />
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar5.jpg">
            </q-avatar>
          </q-item-section>
          <q-item-section>Mary</q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import sesion from '../../mixins/sesion'
export default {
  mixins:[sesion],
  setup() {

  },
}
</script>
