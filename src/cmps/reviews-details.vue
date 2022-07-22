<template>
  <section class="reviews-container box-padding">
    <div class="flex">
      <h2>
        {{ $filters.reviewsRateAvg(stay) }}
        <span>··</span>
        {{ reviewsCount }} reviews
      </h2>
    </div>

    <div>
      <ul class="clean-list reviews-list-container">
        <li class="review-preview-container" v-for="reviews in stay.reviews" :key="reviews">
          <div class="flex header-review">
            <img :src="reviews.by.imgUrl" class="host-image" />

            <div class="reviews-by">
              <h3>{{ reviews.by.fullname }}</h3>
              <h5>{{ new Date(reviews.at).toLocaleDateString() }}</h5>
            </div>
          </div>

          <div>
            <span> {{ reviews.txt }} </span>
          </div>
        </li>
      </ul>
    </div>
  </section>
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

<style lang="scss" scoped></style>
