<template>
  <div class="preview">
    <!-- <pre>
  {{ stay }}
  </pre> -->

<<<<<<< HEAD
    <!-- <pre>{{ images }}</pre> -->

    <div>
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="image in images" :key="image">
          <h3 class="small justify-center" text="2xl">{{ image }}</h3>
=======

    <div>
      <el-carousel trigger="click" :autoplay="false" height="200px">
        <el-carousel-item v-for="image in  images " :key="image">
          <img :src="image" />
>>>>>>> a0b5eec1e1febf5810f6671339181ad9b985a91c
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- <img v-for="image in stay.imgUrls" :src="`src/assets/Images/${image}`"> -->
    <div>{{ stay.propertyType }} in {{ stay.address.city }}, {{ stay.address.country }}</div>
    <div>{{ stay.name }} </div>
    <div>{{ stay.beds }} beds </div>
    <div>{{ stay.price }}$ / night </div>||
    <!-- <div>{{ stay.price }}</div> -->

    <!-- <router-link :to="'/toy/details/' + toy._id">Details</router-link>
    <router-link :to="'/toy/edit/' + toy._id">Edit</router-link> -->
  </div>
</template>

<script>
  export default {
    name: 'stay-preview',
    props: {
      stay: Object,
    },
    data() {
      return {
        images: [
          `src/assets/Images/${this.stay.imgUrls[0]}`,
          `src/assets/Images/${this.stay.imgUrls[1]}`,
          `src/assets/Images/${this.stay.imgUrls[2]}`,
          `src/assets/Images/${this.stay.imgUrls[3]}`,
        ],
      };
    },
  };
</script>
