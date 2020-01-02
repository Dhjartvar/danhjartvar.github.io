<template>
  <q-item>
    <q-item-section avatar style="height: 32px;">
      <q-icon color="accent" name="mdi-pencil" />
    </q-item-section>
    <q-item-section>{{ label }}</q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'Course',
  props: ['label']
}
</script>
