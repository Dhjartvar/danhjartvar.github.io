<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-9">
    <q-header elevated v-if="!small">
      <Toolbar />
    </q-header>

    <q-footer v-if="small">
      <Toolbar />
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
.page {
  margin-left: 20%;
  margin-right: 20%;
  padding: 1%;
  background-color: #242424;
}
.smallPage {
  padding: 2%;
}
</style>

<script>
import Toolbar from '../components/layouts/Toolbar'

export default {
  name: 'Layout',
  components: {
    Toolbar
  },
  computed: {
    small() {
      return this.$q.screen.lt.md
    }
  }
}
</script>
