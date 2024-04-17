 <template>
  <div class="cardhero">
    <div class="cardhero__Hiking" @click="showHiking">
      <router-link to="/hiking">
        <img class="cardhero__imagen" src="../../../src/assets/images/hiking7.jpg" alt="" ref="HikingImage" @mouseover="scaleElement($refs.HikingImage)" @mouseleave="unscaleElement($refs.HikingImage)">
        <h3 class="cardhero__title">Hiking</h3>
        <button type="submit"class="cardhero__button" >Search</button>
        <p class="cardhero__p">live a good experience with our plans</p>
      </router-link>
    </div>
    <div class="cardhero__Biking"  @click="showBiking">
      <router-link to="/biking" >
        <img class="cardhero__imagen" src="../../../src/assets/images/biking7.jpg" alt="" ref="BikingImage" @mouseover="scaleElement($refs.BikingImage)" @mouseleave="unscaleElement($refs.BikingImage)">
        <h3 class="cardhero__title">Biking</h3>
        <button type="submit"class="cardhero__button" >Search</button>
        <p class="cardhero__p">live a good experience with our plans</p>
      </router-link>
    </div>
  </div>
  <div class="cardhero__linea"></div> 

  <router-view></router-view>
</template>

<!-- <script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const showHiking = () => {
  router.push('/hiking'); 
};

const showBiking = () => {
  router.push('/biking'); 
};

const scaleElement = (imageRef) => {
  imageRef.style.transition='transform 0,3 ease';
  imageRef.style.transform = 'scale(1.05)';
};

const unscaleElement = (imageRef) => {
  imageRef.style.transition='transform 0,3 ease';
  imageRef.style.transform = 'scale(1)';
};
</script>-->

<style scoped>
.cardhero {
  display: flex;
  
}

.cardhero__Hiking,
.cardhero__Biking {
  flex: 1;
  position: relative;
  
}

.cardhero__imagen {
  width: 100%;
  height: 20rem;
  margin-bottom: 1rem;
  transition: transform 0.5s ease; 
}

.cardhero__title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 3rem;
  color: white;
  font-weight: bold;
  transition: transform 0.5s ease; 
  transform-origin: center; 
}
.cardhero__button{
 
 width:7rem ;
 height: 3rem;
  position: absolute;
  left: 5%;
  top: 70%;
  background-color: white;
  border-radius: 0.3rem;
  text-align: center;
  font-size: 1rem;
  color: black;
  font-weight: bold;
 
 
}
.cardhero__p{
  position: absolute;
  top: 85%;
  left: 5%;
  
  font-size: 1rem;
  color: white;
  font-weight: bold;
 
}


</style> 














