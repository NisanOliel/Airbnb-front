<template>
  <form class="form-filter" @submit.prevent>
    <div class="form-header">
      <div class="close-filter">
        <span @click="closeForm" class="material-icons-outlined"> close </span>
      </div>
      <h2>Filters</h2>
    </div>
    <div class="form-wrapper">
      <div class="form-price">
        <h2>Price range</h2>
        <p>The average nightly price is 100$</p>

        <HistogramSlider :width="360" :bar-height="100" :data="prices" :clip="false" :min="10" :max="1000" :barGap="1"
          :barRadius="2" :lineHeight="2" :primaryColor="primaryColor" :labelColor="labelColor"
          :handleColor="handleColor" :holderColor="holderColor" @finish="sliderChanged" />

        <div class="form-inputs">
          min price
          <input @input="setFilter" v-model="filterBy.price.minPrice" type="number" min="0" />
          max price
          <input @input="setFilter" v-model="filterBy.price.maxPrice" type="number" max="1000" />
        </div>
      </div>
      <div class="form-rooms-and-beds">
        <h2>Rooms and beds</h2>
        <h3>BedRooms</h3>
        <el-radio-group @change="setFilter" v-model="filterBy.bedrooms">
          <el-radio-button label="Any" />
          <el-radio-button v-for="(opt, idx) in numLabels" :key="idx" :label="opt" />
        </el-radio-group>

        <h3>beds</h3>
        <el-radio-group @change="setFilter" v-model="filterBy.beds">
          <el-radio-button label="Any" />
          <el-radio-button v-for="(opt, idx) in numLabels" :key="idx" :label="opt" />
        </el-radio-group>
      </div>

      <div class="form-property-type">
        <h2>Property type</h2>
        <el-radio-group @change="setFilter" v-model="filterBy.propertyType">
          <el-radio-button v-for="(opt, idx) in propertyType" :key="idx" :label="opt" />
        </el-radio-group>
      </div>

      <div class="form-amenities">
        <div>
          <h2>Amenities</h2>
        </div>
        <div class="Essentials">
          <h3>Essentials</h3>
          <el-checkbox v-for="(opt, idx) in Essentials" @change="setAmenities(opt, $event)" :key="idx" :label="opt" />
        </div>
      </div>
      <div class="form-host-language">
        <div>
          <h2>Host language</h2>
        </div>
        <el-checkbox v-for="(opt, idx) in language" @change="setAmenities(opt, $event)" :key="idx" :label="opt" />
      </div>
    </div>

    <div class="form-footer">
      <button @click="clearAll()">Clear all</button>
      <button @click="onSaveFilters()">Save Information</button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'standAlone-filter',
  data() {
    return {
      filterBy: this.getInitialFilterState(),
      numLabels: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      propertyType: ['House', 'Apartment', 'Guesthouse', 'Hotel', 'Townhouse'],
      language: ['english', 'german', 'french', 'japanese'],
      Essentials: ['Wifi', 'Washer', 'Air conditioning', 'Kitchen', 'Dryer'],
      checked: ref(false),
      prices: null,
      primaryColor: '#ff385c',
      holderColor: '#b0b0b0',
      labelColor: '#e7da0e',
      handleColor: '#0ecde7',
    };
  },
  created() {
    this.getStaysPrices();
  },
  methods: {
    getInitialFilterState() {
      return {
        price: {
          minPrice: 0,
          maxPrice: 1000,
        },
        bedrooms: null,
        beds: null,
        amenities: [],
        hostLanguage: [],
        propertyType: null,
      };
    },

    getStaysPrices() {
      const stays = this.$store.getters.getStays;
      const staysPrices = stays.map(stay => stay.price);
      this.prices = staysPrices;
      console.log('staysPrices:', staysPrices);
      console.log(' this.prices:', this.prices);
    },
    setFilter() {
      this.$store.dispatch({ type: 'setFilterBy', filterBy: this.filterBy });
    },
    setAmenities(currAmenity, isChecked) {
      if (isChecked) {
        this.filterBy.amenities.push(currAmenity);
      } else {
        this.filterBy.amenities = this.filterBy.amenities.filter(amenity => amenity !== currAmenity);
      }
      this.$store.dispatch({ type: 'setFilterBy', filterBy: this.filterBy });
    },
    onSaveFilters() {
      this.$store.dispatch({ type: 'setFilteredStays' });
      this.closeForm();
    },
    clearAll() {
      this.filterBy = this.getInitialFilterState();
      this.$store.dispatch({ type: 'setFilterBy', filterBy: this.filterBy });
    },
    closeForm() {
      this.$emit('closeFilersForm');
    },
  },
  // created() {
  //   this.labels = this.$store.getters.getLabels;
  // },
  computed: {},
  components: {
    // ref,
  },
};
</script>
