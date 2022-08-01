<template>
  <span class="shadow-left"></span>
  <carousel :transition="330" :items-to-show="20" snapAlign="start">
    <slide v-for="(label, idx) in labelsList" ref="labels" :key="label" @click="filter(label.propertyType)">
      <div class="labels">
        <img class="property-type-img" :src="utilService.getImgUrlFilter(label.src)" />
        <span>{{ label.propertyType }}</span>
      </div>
    </slide>

    <template #addons>
      <span class="shadow-right"></span>
      <navigation ref="el" />
    </template>
  </carousel>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const el = ref();

onMounted(() => {
  const prev = document.querySelector('.carousel__prev');
  prev.style.visibility = 'hidden';
  const next = document.querySelector('.carousel__next');
  next.addEventListener('click', e => {
    prev.style.visibility = 'visible';
  });
});
</script>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { utilService } from '../services/util.service.js';

export default {
  name: 'explore-labels',
  data() {
    return {
      labelsList: [
        {
          propertyType: "Beach",
          src: "10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
        },
        {
          propertyType: "amazing views",
          src: "3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
        },
        {
          propertyType: "Apartment",
          src: "Apartment.jpg"
        },
        {
          propertyType: "House",
          src: "house.jpg"
        },
        {
          propertyType: "Townhouse",
          src: "aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
        },
        {
          propertyType: "Amazing pools",
          src: "3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
        },
        {
          propertyType: "Arctic",
          src: "8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg"
        },
        {
          propertyType: "Islands",
          src: "8e507f16-4943-4be9-b707-59bd38d56309.jpg"
        },
        {
          propertyType: "Off-the-grid",
          src: "9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg"
        },
        {
          propertyType: "Vineyards",
          src: "60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg"
        },
        {
          propertyType: "Lakefront",
          src: "677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"
        },
        {
          propertyType: "Historical homes",
          src: "33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg"
        },
        {
          propertyType: "Boats",
          src: "687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg"
        },
        {
          propertyType: "Ski-in/out",
          src: "757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg"
        },
        {
          propertyType: "Treehouses",
          src: "4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg"
        },
        {
          propertyType: "Surfing",
          src: "957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg"
        },
        {
          propertyType: "Creative spaces",
          src: "8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg"
        },
        {
          propertyType: "Golfing",
          src: "6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg"
        },
        {
          propertyType: "Desert",
          src: "a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg"
        },
        {
          propertyType: "Campers",
          src: "31c1d523-cc46-45b3-957a-da76c30c85f9.jpg"
        },
        {
          propertyType: "Iconic cities",
          src: "ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg"
        },
        {
          propertyType: "Windmills",
          src: "5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg"
        },
        {
          propertyType: "Shepherd's huts",
          src: "747b326c-cb8f-41cf-a7f9-809ab646e10c.jpg"
        },
        {
          propertyType: "Ryokans",
          src: "827c5623-d182-474a-823c-db3894490896.jpg"
        }
      ],
      filterBy: {
        propertyType: [],
      },
      index: null,
    };
  },
  methods: {
    filter(value) {

      this.filterBy.propertyType = []
      this.filterBy.propertyType.push(value)
      this.$store.dispatch({ type: 'setFilterBy', filterBy: this.filterBy });
      this.$store.dispatch({ type: 'setFilteredStays' });
    },
  },

  created() {
    this.labels = this.$store.getters.getLabels;
  },
  computed: {
    getLabels() {
      return this.labels;
    },

  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>
