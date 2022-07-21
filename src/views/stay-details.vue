<template>
    <section v-if="stay" class="details-layout">
        <h1>{{ stay.name }}</h1>
        <up-info-details :stay="stay" />
        <gallery-details :stay="stay" />

        <section class="flex">
            <div>
                <h3>{{ stay.roomType }} by {{ stay.host.fullname }}</h3>
                <h4>{{ stay.capacity }} guests {{ stay.bedrooms }} bedrooms {{ stay.beds }} beds </h4>
            </div>
            <img :src="stay.host.thumbnailUrl">
        </section>

        <features-details />

        <section>
            <h2>Description</h2>
            <p>{{ stay.summary }}</p>
        </section>
        <amenities-details :stay="stay" />
        <reviews-details :stay="stay" />
        <date-picker></date-picker>

        <!-- <pre>{{ stay }}</pre> -->

    </section>
    <router-link to="/">Back</router-link>
</template>

<script>
import { stayService } from "../services/stay.service.js";
import upInfoDetails from "../cmps/up-info-details.vue";
import galleryDetails from "../cmps/gallery-details.vue";
import featuresDetails from "../cmps/features-details.vue";
import amenitiesDetails from "../cmps/amenities-details.vue";
import reviewsDetails from "../cmps/reviews-details.vue";
import datePicker from "../cmps/date-picker.vue";



export default {
    name: "stay-Details",
    components: {
        upInfoDetails,
        galleryDetails,
        featuresDetails,
        amenitiesDetails,
        reviewsDetails,
        datePicker
    },

    data() {
        return {
            stay: null
        }
    },
    created() {
        const { stayId } = this.$route.params
        stayService.getById(stayId).then(stay => {
            this.stay = stay
        })

    },
    methods: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
</style>
