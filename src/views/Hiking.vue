<template>
  <div>
    <!-- Text container overlapping the image -->
    <div class="absolute inset-0 flex items-center justify-center z-10">
      <figcaption class="text-6xl font-bold text-white" style="font-family: 'Ubuntu', sans-serif;">
      </figcaption>
    </div>
  </div>

  <figure class="relative flex flex-col items-center">
    <img class="img_hiking" src="/src/assets/images/hiking6.jpg" style="width: 100%; height: 35rem; object-fit: cover; object-position: center;">
    <figcaption class="absolute text-3xl font-bold text-white top-0 left-0 right-0 flex items-center justify-center h-full" style="font-family: 'Ubuntu', sans-serif;">
      <p>HIKING</p>
    </figcaption>
  </figure>

 
  <div class="video-container">
    <video class="background-video" autoplay loop muted>
      <source src="/src/assets/videos/hiking4.mp4" type="video/mp4">
      <div class="grid grid-cols-2 gap-4 container">
        <div class="p-4">
           <!-- Filters for distance and difficulty -->
          <SearchFilter/>
        </div>
        <div class="p-4">
          <GoogleMap/>
        </div>
      </div>
    </video>
    
   
      
      
    </div>
  
</template>

<style scoped>
  .video-container {
    position: relative;
    width: 100%;
    height: 100vh;
  }

  .background-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure video covers entire container */
    opacity: 0.3;
    z-index: 0; /* Set a negative value to place it behind components */
  }

  

  /* Additional styling for components if needed */
  .p-4 {
    /* Example: Add padding to components */
    padding: 1rem;
  }
</style>