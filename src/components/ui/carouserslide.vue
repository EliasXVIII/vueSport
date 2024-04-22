<template>
    <transition :name="direction" mode="in-out">
        <div v-show="visibleSlide === index" class="carousel-slide">
            <!-- Contenido de la slide (imagen) -->
            <div class="slide-content">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: ['visibleSlide', 'index', 'direction'],
    data() {
        return {
            // Puedes añadir datos adicionales si es necesario
        };
    }
};
</script>

<style scoped>
.carousel-slide {
    position:relative;
    width: auto;
    height: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;  
    width: 100%;
    height: 100%; 
    margin-top: -1rem;
    padding-bottom: 2rem;
    
    
}

.slide-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
    /*overflow: hidden;*/ /* Ocultar el contenido que excede el tamaño del contenedor */
}

.carousel-slide img {
    width: 100%; /* Ajustar el ancho de la imagen automáticamente */
    height: 20rem; /* Ajustar el alto de la imagen automáticamente */
    
    object-fit: contain; /* Mantener la relación de aspecto y llenar el contenedor */
}
</style>

<style scoped>
.left-enter-active {
    animation: leftInAnimation 0.4s ease-in-out;
}

.left-leave-active {
    animation: leftOutAnimation 0.4s ease-in-out;
}

@keyframes leftInAnimation {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes leftOutAnimation {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
}

.right-enter-active {
    animation: rightInAnimation 0.4s ease-in-out;
}

.right-leave-active {
    animation: rightOutAnimation 0.4s ease-in-out;
}

@keyframes rightInAnimation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes rightOutAnimation {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100%);
    }
}
</style>

