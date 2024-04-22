

 <template>
  <div class="cardhero">
    <div class="cardhero__Hiking" @click="showHiking">
      <router-link to="/hiking">
        <img class="cardhero__imagen" src="../../../src/assets/images/hiking7.jpg" alt="" ref="HikingImage" @mouseover="scaleElement($refs.HikingImage)" @mouseleave="unscaleElement($refs.HikingImage)">
        <h3 class="cardhero__title">Hiking</h3>
      </router-link>
    </div>
    <div class="cardhero__Biking"  @click="showBiking">
      <router-link to="/biking" >
        <img class="cardhero__imagen" src="../../../src/assets/images/biking7.jpg" alt="" ref="BikingImage" @mouseover="scaleElement($refs.BikingImage)" @mouseleave="unscaleElement($refs.BikingImage)">
        <h3 class="cardhero__title">Biking</h3>
      </router-link>
    </div>
  </div>
  <div class="cardhero__linea"></div> 

  <router-view></router-view>
</template>

<script setup>
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
</script>

<style scoped>
.cardhero {
  display: flex;
  justify-content: space-between;
  background-color: #78966F;
}

.cardhero__Hiking,
.cardhero__Biking {
  flex: 1;
  position: relative;
  margin: 1rem;
}

.cardhero__imagen {
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  transition: transform 0.2s ease; 
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
  transition: transform 0.2s ease; 
   
}

.cardhero__linea {
  width: 100%;
  height: 2rem;
  background-color: #3F402B;
}


</style>








