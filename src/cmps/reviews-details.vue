<template>
  <div class="flex">
    {{ $filters.reviewsRateAvg(stay) }}
    &nbsp&nbsp&nbsp sadas
    <h4>{{ reviewsCount }} reviews</h4>&nbsp&nbsp&nbsp
  </div>

  <div>
    <ul class="clean-list reviews-list-container">
      <li class="review-preview-container" v-for="reviews in stay.reviews" :key="reviews">
        <div class="flex">
          <img :src="reviews.by.imgUrl" class="reviews-image" />

          <div class="reviews-by">
            <h3>{{ reviews.by.fullname }}</h3>
            <h3>{{ reviews.at }}</h3>
          </div>
        </div>

        <div>
          <h4> {{ reviews.txt }} </h4>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'reviews-details',
  props: {
    stay: { type: Object },
  },

  computed: {

    reviewsCount() {
      return this.stay.reviews.length;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
