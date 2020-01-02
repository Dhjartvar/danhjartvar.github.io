<template>
  <q-toolbar class="justify-center">
    <q-tabs
      v-model="tab"
      dense
      inline-label
      narrow-indicator
      shrink
      :class="small ? 'justify-between' : undefined"
    >
      <q-route-tab
        :class="tab === 'Projects' ? 'text-accent' : 'text-green-4'"
        :label="small ? undefined : 'Projects'"
        to="/projects"
        name="Projects"
        icon="mdi-github-box"
        no-caps
      />

      <q-separator inset dark vertical />

      <q-route-tab
        :class="tab === 'Skills' ? 'text-accent' : 'text-green-4'"
        :label="small ? undefined : 'Skills'"
        to="/skills"
        name="Skills"
        icon="mdi-tools"
        no-caps
      />

      <q-separator inset dark vertical />

      <q-route-tab
        :class="tab === 'Home' ? 'text-accent' : 'text-green-4'"
        :label="small ? undefined : 'About'"
        to="/"
        name="Home"
        icon="mdi-account"
        no-caps
      />

      <q-separator inset dark vertical />

      <q-route-tab
        :class="tab === 'Experience' ? 'text-accent' : 'text-green-4'"
        :label="small ? undefined : 'Experience'"
        to="/experience"
        name="Experience"
        icon="mdi-briefcase"
        no-caps
      />

      <q-separator inset dark vertical />

      <q-route-tab
        :class="tab === 'Education' ? 'text-accent' : 'text-green-4'"
        :label="small ? undefined : 'Education'"
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
  data() {
    return {
      tab: 'Home'
    }
  },
  computed: {
    small() {
      return this.$q.screen.lt.md
    }
  }
}
</script>
