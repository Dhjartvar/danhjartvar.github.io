<template>
  <q-page :class="small ? 'smallPage' : 'page'">
    <EducationTimeline />
  </q-page>
</template>

<style>
.card {
  margin-bottom: 2%;
}
</style>

<script>
import EducationTimeline from '../components/education/EducationTimeline'

export default {
  name: 'EducationPage',
  components: {
    EducationTimeline
  },
  computed: {
    small() {
      return this.$q.screen.lt.md
    }
  }
}
</script>
