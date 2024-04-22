<template>
    <div class="app">
        <carousel @next="next" @prev="prev">
            <carouselslide
                v-for="(slide, index) in slides"
                :key="index"
                :index="index"
                :visibleSlide="visibleSlide"
                :direction="direction"
            >
                <img :src="slide" />
            </carouselslide>
        </carousel>
    </div>
</template>

<script>
import Carousel from './carousel.vue';
import Carouselslide from './carouserslide.vue';
/*import Card from './Card.vue';*/

export default {
    components: {
        Carousel,
        Carouselslide
        
    },
    data() {
        return {
            slides: [
            
                '/src/assets/Card-Image/Imagen_Biking_id001.png',
                '/src/assets/Card-Image/Imagen_Biking_id002.png',
                '/src/assets/Card-Image/Imagen_Biking_id003.png',
                '/src/assets/Card-Image/Imagen_Biking_id004.png',
                '/src/assets/Card-Image/Imagen_Biking_id005.png',
                '/src/assets/Card-Image/Imagen_Biking_id006.png',
            ],
            visibleSlide: 0,
            direction: 'left'
        };
    },
    computed: {
        slideslen() {
            return this.slides.length;
        }
    },
    methods: {
        next() {
            if (this.visibleSlide >= this.slideslen - 1) {
                this.visibleSlide = 0;
            } else {
                this.visibleSlide++;
            }
            this.direction = 'left';
        },
        prev() {
            if (this.visibleSlide <= 0) {
                this.visibleSlide = this.slideslen - 1;
            } else {
                this.visibleSlide--;
            }
            this.direction = 'right';
        }
    }
};
</script>

<style>
.app {
    display: flex;
    justify-content: center;
}
</style>
