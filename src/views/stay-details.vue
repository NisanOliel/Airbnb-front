<template>
    <section v-if="stay">
        <h1>{{ stay.name }}</h1>
        <up-info-details :stay="stay" />

        <!-- <pre>{{ stay }}</pre> -->

    </section>
    <router-link to="/">Back</router-link>
</template>

<script>
import { stayService } from "../services/stay.service.js";
import upInfoDetails from "../cmps/up-info-details.vue";



export default {
    name: "stay-Details",
    components: {
        upInfoDetails
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
