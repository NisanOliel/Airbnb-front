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
        <HistogramSlider :barRadius="0" @change="setPrice" :bar-height="64" :data="prices" :clip="false" :min="1"
          :barWidth="12" :max="800" hideFromTo="true" :barGap="0.01" :lineHeight="3" :primaryColor="primaryColor"
          :labelColor="labelColor" :holderColor="holderColor" />
        <div class="form-inputs">
          <div class="price-inner">
            <label for="min">min price</label>
            <div class="flex form-input">
              <span>$</span>
              <input name="min" @input="setFilter" v-model="filterBy.price.minPrice" type="number" min="1" />
            </div>
          </div>
          <div class="between-prices">-</div>
          <div class="price-inner">
            <label for="max"> max price</label>
            <div class="flex form-input">
              <span>$</span>
              <input name="max" @input="setFilter" v-model="filterBy.price.maxPrice" type="number" max="£800" />
            </div>
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
        <el-radio-group @click="changeClick" text-color="#ffffff" fill="#000000" @change="setFilter"
          v-model="filterBy.beds">
          <el-radio-button :class="{ activeBg: isActive }" :label="Any" />
          <el-radio-button v-for="(opt, idx) in numLabels" :key="idx" :label="opt" />
        </el-radio-group>
      </div>
      <div class="form-property-type">
        <h2>Property type</h2>
        <el-radio-group text-color="#ffffff" fill="#000000" @change="setFilter" v-model="filterBy.propertyType">
          <div class="property-type">
            <el-radio-button v-for="(opt, idx) in propertyType" :key="idx" :label="opt" />
          </div>
        </el-radio-group>
      </div>
      <div class="form-amenities">
        <div class="form-title-amenities">
          <h2>Amenities</h2>
        </div>
        <div class="essentials">
          <h3>Essentials</h3>
          <el-checkbox-group v-model="checkList">
            <el-checkbox v-for="(opt, idx) in essentials" @change="setAmenities(opt, $event)" :key="idx" :label="opt" />
          </el-checkbox-group>
        </div>
      </div>
      <div class="form-host-language">
        <div>
          <h2>Host language</h2>
        </div>
        <el-checkbox-group v-model="checkList">
          <el-checkbox v-for="(opt, idx) in language" @change="setLanguage(opt, $event)" :key="idx" :label="opt" />
        </el-checkbox-group>
      </div>
    </div>
    <div class="form-footer">
      <button @click="clearAll()">Clear all</button>
      <button @click="onSaveFilters($event)">Show stays {{ getStay }}</button>
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
      checkList: ref([]),
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
          minPrice: 1,
          maxPrice: 800,
        },
        prices: null,
        bedrooms: null,
        beds: null,
        amenities: [],
        hostLanguage: [],
        propertyType: null,
      }
    },
    setPrice(value) {
      // this.filterBy.price.minPrice = value.from;
      // this.filterBy.price.maxPrice = value.to;
      this.filterBy.price = {
        minPrice: value.from,
        maxPrice: value.to
      }
    },
    getStaysPrices() {
      const stays = this.$store.getters.getStays;
      const staysPrices = stays.map(stay => stay.price)
      this.prices = staysPrices
    },
    setFilter() {
      console.log(this.price);
      this.$store.dispatch({ type: 'setFilterBy', filterBy: this.filterBy });
    },
    components: {},
  }
}
</script>
