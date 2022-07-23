<template>
  <form class="form-filter" @submit.prevent>
    <div class="form-header">
      <button @click="closeForm">x</button>
      <h2>Filters</h2>
    </div>
    <div class="form-price">
      <h2>Price range</h2>
      <p>The average nightly price is 100$</p>
      <div class="form-inputs">
        min price
        <input @input="setFilter" v-model="filterBy.price.minPrice" type="number" min="0">
        max price
        <input @input="setFilter" v-model="filterBy.price.maxPrice" type="number" max="1000">
      </div>
    </div>
    <div class="form-rooms-and-beds">
      <h2>Rooms and beds</h2>
      <h3>BedRooms</h3>
      <el-radio-group @change="setFilter" v-model="filterBy.bedrooms">
        <el-radio-button label="Any" />
        <el-radio-button label="1" />
        <el-radio-button label="2" />
        <el-radio-button label="3" />
        <el-radio-button label="4" />
        <el-radio-button label="5" />
        <el-radio-button label="6" />
        <el-radio-button label="7" />
      </el-radio-group>
      <h3>beds</h3>
      <el-radio-group @change="setFilter" v-model="filterBy.beds">
        <el-radio-button label="Any" />
        <el-radio-button label="1" />
        <el-radio-button label="2" />
        <el-radio-button label="3" />
        <el-radio-button label="4" />
        <el-radio-button label="5" />
        <el-radio-button label="6" />
        <el-radio-button label="7" />
      </el-radio-group>
    </div>
    <div class="form-property-type">
      <h2>Property type</h2>
      <el-radio-group @change="setFilter" v-model="filterBy.propertyType">
        <el-radio-button label="House" />
        <el-radio-button label="Apartment" />
        <el-radio-button label="Guesthouse" />
        <el-radio-button label="Hotel" />
        <el-radio-button label="Townhouse" />
      </el-radio-group>
    </div>
    <div class="form-amenities">
      <div>
        <h2>Amenities</h2>
      </div>
      <div class="Essentials">
        <h3>Essentials</h3>
        <div class="wifi">
          <el-checkbox @change="setAmenities('Wifi', $event)" label="Wifi" />
        </div>
        <div class="washer">
          <el-checkbox @change="setAmenities('Washer', $event)" label="Washer" />
        </div>
        <div class="air-conditioning">
          <el-checkbox @change="setAmenities('Air conditioning', $event)" label="Air conditioning" />
        </div>
        <div class="Kitchen">
          <el-checkbox @change="setAmenities('Kitchen', $event)" label="Kitchen" />
        </div>
        <div class="dryer">
          <el-checkbox @change="setAmenities('Dryer', $event)" label="Dryer" />
        </div>
      </div>
    </div>
    <div class="form-host-language">
      <div>
        <h2>Host language</h2>
      </div>
      <el-checkbox @change="setLanguage('english', $event)" label="English" />
      <el-checkbox @change="setLanguage('german', $event)" label="German" />
      <el-checkbox @change="setLanguage('english', $event)" label="French" />
      <el-checkbox @change="setLanguage('english', $event)" label="Japanese" />
    </div>
    <div class="form-footer">
      <button @click="clearAll()">Clear all</button>
      <button @click="onSaveFilters()">Save Information</button>
    </div>
  </form>
</template>


<script>
import { property } from 'lodash';
import { ref } from 'vue'
export default {
  name: 'standAlone-filter',
  data() {
    return {
      filterBy: this.getInitialFilterState(),
    }
  },
  methods: {
    getInitialFilterState() {
      return {
        price: {
          minPrice: 0,
          maxPrice: 1000
        },
        bedrooms: null,
        beds: null,
        amenities: [],
        hostLanguage: [],
        propertyType: null,
      }
    },
    setFilter() {
      this.$store.dispatch({ type: 'setFilterBy', filterBy: this.filterBy })
    },
    setAmenities(currAmenity, isChecked) {
      if (isChecked) {
        this.filterBy.amenities.push(currAmenity);
      } else {
        this.filterBy.amenities = this.filterBy.amenities.filter(amenity => amenity !== currAmenity)
      }
      this.$store.dispatch({ type: 'setFilterBy', filterBy: this.filterBy })
    },
    setAmenities(currAmenity, isChecked) {
      if (isChecked) {
        this.filterBy.amenities.push(currAmenity);
      } else {
        this.filterBy.amenities = this.filterBy.amenities.filter(amenity => amenity !== currAmenity)
      }
      this.$store.dispatch({ type: 'setFilterBy', filterBy: this.filterBy })
    },

    onSaveFilters() {
      this.$store.dispatch({ type: 'setFilteredStays' })
      this.closeForm();
    },
    clearAll() {
      this.filterBy = this.getInitialFilterState()
      this.$store.dispatch({ type: 'setFilterBy', filterBy: this.filterBy })
    },
    closeForm() {
      this.$emit('closeFilersForm')
    }
  },
  // created() {
  //   this.labels = this.$store.getters.getLabels;
  // },
  computed: {}
}
</script> 
















    <!-- 
    <div class="form-property-type">
      <h2>Property type</h2>
      <div @click="filter($event)" class="house">
        <button></button>
        <span>House</span>
      </div>
      <div @click="filter($event)" class="apartment">
        <button></button>
        <span>Apartment</span>
      </div>
      <div @click="filter($event)" class="guesthouse">
        <button></button>
        <span>Guesthouse</span>
      </div>
      <div @click="filter($event)" class="hotel">
        <button></button>
        <span>Hotel</span>
      </div>
    </div>
    <div class="form-amenities">
      <div>
        <h2>Amenities</h2>
      </div>
      <div class="Essentials">
        <h3>Essentials</h3>
        <div class="wifi">
          <input @input="filter" name="wifi-checkbox" type="checkbox">
          <span>Wifi</span>
        </div>
        <div class="washer">
          <input @input="filter" name="washer-checkbox" type="checkbox">
          <span>Washer</span>
        </div>
        <div class="air-conditioning">
          <input @input="filter" name="air-checkbox" type="checkbox">
          <span>Air-conditioning</span>
        </div>
        <div class="kitchen">
          <input @input="filter" name="kitchen-checkbox" type="checkbox">
          <span>Kitchen</span>
        </div>
        <div class="dryer">
          <input @input="filter" name="dryer-checkbox" type="checkbox">
          <span>Dryer</span>
        </div>
      </div>
    </div> -->
    <!-- <div class="form-host-language">
    <div>
      <h2>Host language</h2>
    </div>
      <div class="english">
        <input @input="filter" name="english-checkbox" type="checkbox">
        <span>English</span>
      </div>
      <div class="german">
        <input @input="filter" name="english-checkbox" type="checkbox">
        <span>German</span>
      </div>
      <div class="french">
        <input @input="filter" name="english-checkbox" type="checkbox">
        <span>French</span>
      </div>
      <div class="japanese">
        <input @input="filter" name="english-checkbox" type="checkbox">
        <span>Japanese</span>
      </div>
    </div>
    <div class="form-footer">
      <button>Clear all</button>
      <input type="submit" value="Save Information" />
    </div>
  </form> -->
<!-- </template> -->
<!-- <script>
export default {
  name: 'standAlone-filter',
  data() {
    return {
      filterBy: {
        price: {
          minPrice: 0,
          maxPrice: 1000
        },
        bedRooms: null,
        beds: null
      }
    }
  },
  methods: {
    setFilter() {
      console.log(' this.filterBy:', this.filterBy)
      this.$store.dispatch({ type: 'setFilterBy', filterBy: this.filterBy })
    }
  },
  // created() {
  //   this.labels = this.$store.getters.getLabels;
  // },
  computed: {
  }
}
</script> 
 -->
