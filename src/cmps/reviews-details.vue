<template>
    <div class="flex">
        <img src="../assets/icons/star.svg" style="height: 15px;"> &nbsp&nbsp&nbsp
        <h4>{{ reviewsRateAvg }}</h4> &nbsp&nbsp&nbsp
        <h4>{{ reviewsCount }} reviews</h4>&nbsp&nbsp&nbsp
    </div>

    <div>
        <ul class="clean-list reviews-list-container">
            <li class="review-preview-container" v-for="(reviews) in stay.reviews" :key="reviews">
                <div class="flex">
                    <img :src=reviews.by.imgUrl class="reviews-image">

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
    name: "reviews-details",
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
        }
    },

}
</script>

<style lang="scss" scoped>
</style>