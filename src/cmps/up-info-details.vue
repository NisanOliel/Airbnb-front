<template>
    <section class=" up-info flex">
        <img src="../assets/icons/star.svg" style="height: 15px;">
        <h4>{{ reviewsRateAvg }}</h4>
        <h4 class="under-line">{{ reviewsCount }} reviews</h4>
        <span class="gray">•</span>
        <h4 class="under-line">{{ city }} ,{{ country }} </h4>
    </section>
</template>

<script>
export default {
    name: "up-info-details",
    props: {
        stay: { type: Object },
    },

    computed: {
        reviewsRateAvg() {
            var sum = 0;
            this.stay.reviews.forEach((review) => {
                sum += review.rate;
            });
            sum = sum / this.stay.reviews.length;
            return sum.toFixed(1);
        },
        reviewsCount() {
            return this.stay.reviews.length;
        },

        city() {
            return this.stay.address.city
        },
        country() {
            return this.stay.address.country
        }
    },

}
</script>

<style lang="scss" scoped>
</style>