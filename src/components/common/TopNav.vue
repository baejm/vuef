<template>
  <v-toolbar-title>{{ this.title }}</v-toolbar-title>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style></style>
