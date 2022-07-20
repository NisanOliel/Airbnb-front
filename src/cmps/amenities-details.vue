<template>
    <section>
        <h2>What this place offers</h2>
        <ul>
            <li v-for="(amenity) in stay.amenities" :key="amenity">
                <div class="flex">
                    <img class="amenity-icons" :src=amenity.src>
                    <h4>
                        {{ amenity.name }}
                    </h4>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: "amenities-details",
    props: {
        stay: { type: Object },
    },

    computed: {

    },

}
</script>

<style lang="scss" scoped>
</style>