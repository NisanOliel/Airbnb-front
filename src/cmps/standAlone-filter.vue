<template>
  <form @change="onSaveFilters" class="form-filter" @submit.prevent>
    <div class="form-header">
      <div class="close-filter">
        <span @click="closeForm" class="material-icons-outlined"> close </span>
      </div>
      <h2>Filters</h2>
    </div>
    <div class="form-wrapper">
      <div class="form-price">
        <h2>Price range</h2>
        <p>The average nightly price is {{ getPricesAvg }}</p>
        <HistogramSlider
          @change="setPrice"
          :width="360"
          :bar-height="100"
          :data="prices"
          :clip="false"
          :min="0"
          :max="800"
          :barGap="1"
          :barRadius="2"
          :lineHeight="2"
          :primaryColor="primaryColor"
          :labelColor="labelColor"
          :handleColor="handleColor"
          :holderColor="holderColor"
        />
        <div class="form-inputs">
          <div class="price-inner">
            <label for="min">min price</label>
            <input name="min" @input="setFilter" v-model="filterBy.price.minPrice" type="number" min="1" />
          </div>
          <div class="price-inner">
            <label for="max"> max price</label>
            <input name="max" @input="setFilter" v-model="filterBy.price.maxPrice" type="number" max="£800" />
          </div>
        </div>
      </div>
      <div class="form-rooms-and-beds">
        <h2>Rooms and beds</h2>
        <h3>BedRooms</h3>
        <el-radio-group text-color="#ffffff" fill="#000000" @change="setFilter" v-model="filterBy.bedrooms">
          <el-radio-button label="Any" />
          <el-radio-button v-for="(opt, idx) in numLabels" :key="idx" :label="opt" />
        </el-radio-group>
        <h3>beds</h3>
        <el-radio-group text-color="#ffffff" fill="#000000" @change="setFilter" v-model="filterBy.beds">
          <el-radio-button label="Any" />
          <el-radio-button v-for="(opt, idx) in numLabels" :key="idx" :label="opt" />
        </el-radio-group>
      </div>
      <div class="form-property-type">
        <h2>Property type</h2>
        <el-radio-group text-color="#ffffff" fill="#000000" @change="setFilter" v-model="filterBy.propertyType">
          <el-radio-button v-for="(opt, idx) in propertyType" :key="idx" :label="opt" />
        </el-radio-group>
      </div>
      <div class="form-amenities">
        <div>
          <h2>Amenities</h2>
        </div>
        <div class="Essentials">
          <h3>Essentials</h3>
          <el-checkbox v-for="(opt, idx) in essentials" @change="setAmenities(opt, $event)" :key="idx" :label="opt" />
        </div>
      </div>
      <div class="form-host-language">
        <div>
          <h2>Host language</h2>
        </div>
        <el-checkbox v-for="(opt, idx) in language" @change="setLanguage(opt, $event)" :key="idx" :label="opt" />
      </div>
    </div>
    <div class="form-footer">
      <button @click="clearAll()">Clear all</button>
      <button @click="onSaveFilters">Show stays {{ getStay }}</button>
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
        language: ['English', 'German', 'French', 'Japanese'],
        essentials: ['Wifi', 'Washer', 'Air conditioning', 'Kitchen', 'Dryer'],
        checked: ref(false),
        prices: null,
        primaryColor: '#b0b0b0',
        holderColor: '#dddddd',
        labelColor: '#bdd6f8',
        handleColor: '#dddddd',
        propertyNum: null,
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
            maxPrice: 800,
          },
          bedrooms: null,
          beds: null,
          amenities: [],
          hostLanguage: [],
          propertyType: null,
        };
      },
      setPrice(value) {
        this.filterBy.price.minPrice = value.from;
        this.filterBy.price.maxPrice = value.to;
      },
      getStaysPrices() {
        const stays = this.$store.getters.getStays;
        const staysPrices = stays.map(stay => stay.price);
        this.prices = staysPrices;
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
      setLanguage(currLanguage, isChecked) {
        if (isChecked) {
          this.filterBy.hostLanguage.push(currLanguage);
        } else {
          this.filterBy.hostLanguage = this.filterBy.hostLanguage.filter(language => language !== currLanguage);
        }
        this.$store.dispatch({ type: 'setFilterBy', filterBy: this.filterBy });
      },
      onSaveFilters(value) {
        this.$store.dispatch({ type: 'setFilteredStays' });
        this.propertyNum = this.$store.getters.getStays.length;
        console.log('change form stand', this.propertyNum);
        // this.closeForm();
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
    computed: {
      getPricesAvg() {
        if (!this.prices) return '0$';
        var Sum = this.prices.reduce((a, b) => a + b);
        Sum = Sum / this.prices.length;
        Sum = Sum.toFixed(0);
        return Sum + '$';
      },
      getStay() {
        console.log('stays', this.$store.getters.getFilteredStays.length);
        return this.$store.getters.getFilteredStays.length;
      },
    },
    components: {},
  };
</script>
