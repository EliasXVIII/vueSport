<template>
    <div class="app">
        <h1 class="text-4xl font-bold text-center text-custom-green mt-5" style="font-family: 'Ubuntu', sans-serif;">Most Rated Routes</h1>
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
            
                '/src/assets/card slider/card1.png',
                '/src/assets/card slider/card2.png',
                '/src/assets/card slider/card3.png',
                '/src/assets/card slider/card4.png',
                
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  vertical-align: center;
  width: 100%; /* Ancho del viewport */
  height: 100%; /* Alto del viewport */
  

}
h1{
    padding: 3rem;
}


</style>
