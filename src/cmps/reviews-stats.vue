<template>
  <el-progress :show-text=false :percentage="80" />

  <pre>{{ stay.reviewScores }}</pre>

</template>

<script>


export default {
  name: 'reviews-stats',
  props: {
    stay: { type: Object },
  },
  data() {
    return {
      Cleanliness: 0,
      Communication: 0,
      CheckIn: 0,

      Accuracy: 0,
      Location: 0,
      Value: 0,
    };
  },
  created() {
  },
  components: {},

  computed: {
    reviewsCount() {
      return this.stay.reviews.length;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
