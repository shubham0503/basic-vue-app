<template>
    <v-app-bar
      app
      color="indigo darken-4"
      dark
    >
        <div class="d-flex align-center">
            <v-img
                alt="Logo"
                class="shrink mt-1 hidden-sm-and-down"
                contain
                min-width="100"
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
                width="100"
            />
        </div>

        <v-spacer></v-spacer>

        <v-btn
            text
            theme--light
            to="/register"
        >
            <span class="mr-2">Register</span>
            <v-icon>mdi-login</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>

</style>