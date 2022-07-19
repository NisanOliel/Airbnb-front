<template>
  <div class="preview">
    <pre>
  {{ stay }}
  </pre>
    <!-- <img v-for="image in stay.imgUrls" src="../assets/Images/" {{stay.imgUrls}}> -->
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
};
</script>
