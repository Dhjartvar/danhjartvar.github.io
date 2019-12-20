<template>
  <q-layout view="lHh Lpr lFf" class="bg-secondary">
    <q-header elevated id="content-desktop">
      <Toolbar :isMobile="false" />
    </q-header>

    <q-footer id="content-mobile">
      <Toolbar :isMobile="true" />
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
#content-desktop {
  display: block;
}
#content-mobile {
  display: none;
}

@media screen and (max-width: 768px) {
  #content-desktop {
    display: none;
  }
  #content-mobile {
    display: block;
  }
}
</style>

<script>
import Toolbar from '../components/layouts/Toolbar'

export default {
  name: 'Layout',
  components: {
    Toolbar
  }
}
</script>
