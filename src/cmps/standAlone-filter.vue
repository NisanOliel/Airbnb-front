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
      <el-checkbox v-for="(opt, idx) in language" @change="setLanguage(opt, $event)" :key="idx" :label="opt" />
    </div>
    <div class="form-footer">
      <button @click="clearAll()">Clear all</button>
      <button @click="onSaveFilters()">Save Information</button>
    </div>
  </form>
</template>


<script>
export default {
  name: 'standAlone-filter',
  data() {
    return {
      filterBy: this.getInitialFilterState(),
      numLabels: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      propertyType: ["House", "Apartment", "Guesthouse", "Hotel", "Townhouse"],
      language: ["English", "German", "French", "Japanese"],
      Essentials: ["Wifi", "Washer", "Air conditioning", "Kitchen", "Dryer"]
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
    setLanguage(currLanguage, isChecked) {
      if (isChecked) {
        this.filterBy.hostLanguage.push(currLanguage);
      } else {
        this.filterBy.hostLanguage = this.filterBy.hostLanguage.filter(language => language !== currLanguage)
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
