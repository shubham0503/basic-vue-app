<template>
  <v-footer
    dark
    padless
    class="custom-footer"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="blue-grey darken-3">
        <span>Get connected with us on social networks!</span>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center footer-strip">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style scoped>
.custom-footer {
  margin-top: 40px;
}
.footer-strip {
  background: #263238 !important;
}
</style>
