<template>
    <section class="user-details" v-if="stay">
        <pre>{{ stay }}</pre>

    </section>
    <router-link to="/">Back</router-link>
</template>

<script>
import { stayService } from "../services/stay.service.js";

export default {
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
