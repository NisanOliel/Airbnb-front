<template>
  <div class="preview" @click="goToDetails">
    <div class="like">
      <span class="material-icons favorite" :class="{ active: isLiked }" @click.stop="toggleWishList"> favorite </span>
    </div>
    <el-carousel trigger="click" :autoplay="false">
      <el-carousel-item v-for="image in images" :key="image">
        <img :src="image" />
      </el-carousel-item>
    </el-carousel>

    <div class="preview-info">
      <div class="location-info flex justify-space-between">
        <span>{{ stay.address.city }}, {{ stay.address.country }}</span>
        <span class="stared">{{ $filters.reviewsRateAvg(stay) }}</span>
      </div>
      <div>{{ stay.name }} </div>
      <div>{{ stay.beds }} beds </div>
      <div>£{{ stay.price }} night </div>
    </div>
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
        isLiked: false,
      };
    },
    methods: {
      goToDetails() {
        this.$router.push('/stay/' + this.stay._id);
      },
      toggleWishList() {
        this.isLiked = !this.isLiked;
        console.log('heart is active', this.isLiked);
      },
    },
  };
</script>
