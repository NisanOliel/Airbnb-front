<template>
    <h3>INfO dettilas</h3>
    <div>
        <img src="../assets/icons/star.svg" style="height: 15px;">
        <!-- <h4>{{ reviewsRateAvg }}</h4> -->
    </div>
    <pre>{{ stay }}</pre>
</template>

<script>
export default {
    name: "up-info-details",
    props: {
        stay: { type: Object },
    },

    computed: {
        reviewsRateAvg() {
            var avgsSum = 0;
            this.stay.reviews.forEach((review) => {
                const sumRates = (obj) => Object.values(obj).reduce((a, b) => a + b);
                const currSum = sumRates(review.rate);
                const currSumAvg = currSum / 6;
                avgsSum += currSumAvg;
            });
            avgsSum = avgsSum / this.stay.reviews.length;
            return avgsSum.toFixed(1);
        },
        reviewsCount() {
            return this.stay.reviews.length;
        },
    },

}
</script>

<style lang="scss" scoped>
</style>