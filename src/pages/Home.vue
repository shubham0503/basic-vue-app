<template>
    <div id="home">
        <v-container fluid class="custom-carousel">
            <v-row>
                <Carousel />
            </v-row>
        </v-container>
        <v-container class="page-section">
            <v-card-title class="headline text-center">
              About Us
            </v-card-title>
            <About />
        </v-container>
        <v-container class="page-section">
            <v-card-title class="headline text-center">
              Portfolio
            </v-card-title>
            <Portfolio />
        </v-container>
        <v-container class="page-section">
            <v-card-title class="headline text-center">
              Contact Us
            </v-card-title>
            <Contact />
        </v-container>
    </div>
</template>

<script>
import Carousel from '@/components/organisms/Carosuel'
import Portfolio from '@/components/organisms/Portfolio'
import About from '@/components/organisms/About'
import Contact from '@/components/organisms/Contact'

export default {
    components: {
        Carousel,
        Portfolio,
        About,
        Contact
    }
}
</script>

<style scoped>
.page-section {
    margin-top: 40px;
}
.custom-carousel {
    padding-top: 0px !important;
}
.text-center {
    justify-content: center !important;
}
.headline {
    font-weight: 600;
}
</style>