<template>
    <div class="carousel" v-on="$listeners">
        <slot></slot>

        <button @click="next" class="next">Next</button>
        <button @click="prev" class="prev">Prev</button>
    </div>
</template>



<script>
    export default {
        data() {
            return
        },
        methods: {
            next(){
                this.$emit('next')
            },
            prev(){
                this.$emit('prev')
            }
        }
    }
</script>
<style>
    .carousel {
        position: relative;
        width: 600px;
        height: 350px;
        overflow:hidden;
        margin-bottom: 10rem;
    }
    button{
        position:absolute;
        height: 40px;
        width: 50px;
        top: calc(50px - 20px);
        background-color: rgb(216, 205, 205);
        border-radius: 70%;
        border-radius: 70%;
        border:none;
        color:black;
    }
    bottom :focus, button:hover {
        outline: none;
        cursor: pointer;

    }
    .next {
        right: 0;
    }
    .prev{
        left:0;
    }
</style>
