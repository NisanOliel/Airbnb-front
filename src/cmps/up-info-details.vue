<template>
    <div class="flex">
        <img src="../assets/icons/star.svg" style="height: 15px;"> &nbsp&nbsp&nbsp
        <h4>{{ reviewsRateAvg }}</h4> &nbsp&nbsp&nbsp
        <h4>{{ reviewsCount }} reviews</h4>&nbsp&nbsp&nbsp
        <h4>{{ city }} ,{{ country }} </h4>
    </div>
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