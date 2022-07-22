<template>
  <section class="up-info flex">
    <span class="stared"> {{ $filters.reviewsRateAvg(stay) }}</span>
    <span>
      <a class="under-line">{{ reviewsCount }} reviews</a></span
    >

    <span class="gray">•</span>
    <span>
      <a class="under-line">{{ city }} ,{{ country }} </a></span
    >
  </section>
</template>

<script>
  export default {
    name: 'up-info-details',
    props: {
      stay: { type: Object },
    },

    computed: {
      // reviewsRateAvg() {
      //     var sum = 0;
      //     this.stay.reviews.forEach((review) => {
      //         sum += review.rate;
      //     });
      //     sum = sum / this.stay.reviews.length;
      //     return sum.toFixed(1);
      // },
      reviewsCount() {
        return this.stay.reviews.length;
      },

      city() {
        return this.stay.address.city;
      },
      country() {
        return this.stay.address.country;
      },
    },
  };
</script>

<style lang="scss" scoped></style>
