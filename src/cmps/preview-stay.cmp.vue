
<template>
  <div class="preview">
    <!-- <pre>
  {{ stay }}
  </pre> -->
    <!-- 
    <div>
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="image in stay.reviews.imgUrl" :key="image">
        </el-carousel-item>
      </el-carousel>

    </div> -->

    <img v-for="image in stay.imgUrls" :src="`src/assets/Images/${image}`">
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
  methods: {

  }
};
</script>

