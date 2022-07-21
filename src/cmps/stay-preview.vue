<template>
  <div class="preview" @click="goToDetails">
    <el-carousel trigger="click" :autoplay="false">
      <el-carousel-item v-for="image in images" :key="image">
        <img :src="image" />
      </el-carousel-item>
    </el-carousel>

    <!-- <img v-for="image in stay.imgUrls" :src="`src/assets/Images/${image}`"> -->
    <div
      ><span>{{ stay.propertyType }} in {{ stay.address.city }}, {{ stay.address.country }}</span
      ><span>{{ $filters.reviewsRateAvg(stay) }}</span></div
    >
    <div>{{ stay.name }} </div>
    <div>{{ stay.beds }} beds </div>
    <div>{{ stay.price }}$ / night </div>||
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
    methods: {
      goToDetails() {
        this.$router.push('/stay/' + this.stay._id);
      },
    },
  };
</script>
