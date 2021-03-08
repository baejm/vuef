<template>
  <v-footer padless app absolute>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>{{ this.footer }}</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  props: {
    footer: {
      type: String,
      requierd: true
    }
  }
};
</script>

<style></style>
