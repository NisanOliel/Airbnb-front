<template>
  <!-- <div v-if="isShow" class="overlay"></div> -->
  <div class="preview" @click="goToDetails">

    <div v-if="isShow" class="wish-container form-filter">
      <header class="flex justify-center">
        <span @click.stop="toggleWishModal" class="material-icons-outlined gray">
          close
        </span>
        <h1>Your wishlists</h1>
      </header>
    </div>

    <div class="like">
      <span @click="toggleWishModal" class="material-icons favorite" :class="{ active: isLiked }"
        @click.stop="toggleWishList"> favorite </span>
    </div>
    <el-carousel trigger="click" :autoplay="false">
      <el-carousel-item v-for="image in images" :key="image">
        <img :src="image" />
      </el-carousel-item>
    </el-carousel>

    <div class="preview-info">
      <div class="location-info flex justify-space-between">
        <span>{{ stay.address.city }}, {{ stay.address.country }}</span>
        <span class="stared">{{ $filters.reviewsRateAvg(stay) }} <span class="gray"> ({{ reviewsCount }})</span></span>
      </div>
      <div class="gray">

        <div>{{ stay.name }} </div>
        <div>{{ stay.beds }} beds </div>
      </div>
      <div><span class="bold">${{ stay.price }}</span> night </div>

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
      isShow: false,
    };
  },
  computed: {
    reviewsCount() {
      return this.stay.reviews.length;
    },
  },
  methods: {
    goToDetails() {
      this.$router.push('/stay/' + this.stay._id);
    },
    toggleWishList() {
      this.isLiked = !this.isLiked;
      console.log(this.isShow);
      console.log('heart is active', this.isLiked);
    },

    toggleWishModal() {
      this.isShow = !this.isShow
    }
  },
  watch: {
    isShow: function () {
      if (this.isShow) {
        document.documentElement.style.overflow = 'hidden';
        return;
      }

      document.documentElement.style.overflow = 'auto';
    },
  },
};
</script>
