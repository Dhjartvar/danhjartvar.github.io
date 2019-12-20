<template>
  <q-toolbar class="justify-center">
    <q-tabs v-model="tab" dense inline-label narrow-indicator shrink :class="isMobile ? 'justify-between' : ''">
      <q-route-tab
        class="text-accent"
        :label="isMobile ? '' : 'Projects'"
        to="/projects"
        name="Projects"
        icon="mdi-github-box"
        no-caps
      />

      <q-separator inset dark vertical />

      <q-route-tab
        class="text-accent"
        :label="isMobile ? '' : 'Skills'"
        to="/skills"
        name="Skills"
        icon="mdi-tools"
        no-caps
      />

      <q-separator inset dark vertical />

      <q-route-tab class="text-accent" :label="isMobile ? 'Dan' : 'Dan Hjartvar'" to="/" name="Home" no-caps />

      <q-separator inset dark vertical />

      <q-route-tab
        class="text-accent"
        :label="isMobile ? '' : 'Work'"
        to="/work"
        name="Work"
        icon="mdi-briefcase"
        no-caps
      />

      <q-separator inset dark vertical />

      <q-route-tab
        class="text-accent"
        :label="isMobile ? '' : 'Education'"
        to="/education"
        name="Education"
        icon="mdi-school"
        no-caps
      />
    </q-tabs>
  </q-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  props: ['isMobile'],
  data() {
    return {
      tab: 'Home'
    }
  }
}
</script>
