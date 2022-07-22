<template>
  <form class="form-filter" @submit.prevent>
    <div class="form-header">
      <button>x</button>
      <h2>Filters</h2>
    </div>
    <div class="form-price">
      <h2>Price range</h2>
      <p>The average nightly price is 100$</p>
      <div class="form-inputs">
        min price
        <input @input="filter" v-model="filterBy.price.minPrice" type="number" min="0">
        max price
        <input @input="filter" v-model="filterBy.price.maxPrice" type="number" max="1000">
      </div>
    </div>
    <h3>bedRooms</h3>

    <div>
      <el-radio-group fill="red" text-color="yellow" @change="setFilter()" v-model="filterBy.bedRooms" size="large">
        <el-radio-button size="small" label="1" />
        <el-radio-button size="small" label="2" />
        <el-radio-button label="3" />
        <el-radio-button label="4" />
        <el-radio-button label="5" />
        <el-radio-button label="6" />
        <el-radio-button label="7" />
        <el-radio-button label="8" />
      </el-radio-group>
    </div>

    <div>
      <h3>beds</h3>

      <el-radio-group @change="setFilter" v-model="filterBy.beds" size="large">
        <el-radio-button label="1" />
        <el-radio-button label="2" />
        <el-radio-button label="3" />
        <el-radio-button label="4" />
        <el-radio-button label="5" />
        <el-radio-button label="6" />
        <el-radio-button label="7" />
        <el-radio-button label="8" />
      </el-radio-group>
    </div>

    <el-checkbox-group @change="setFilter" v-model="filterBy.hostlanguage">
      <el-checkbox label="English" />
      <el-checkbox label="German" />
      <el-checkbox label="French" />
      <el-checkbox label="Japanese" />
    </el-checkbox-group>








    <div class="form-rooms-and-beds">
      <h2>Rooms and beds</h2>
      <h3>Bedrooms</h3>
      <button @click="filter(value)" class="Any" :value="0">Any</button>
      <button @click="filter($event)" class="rooms-and-beds-btn" value="1">1</button>
      <button @click="filter($event)" class="rooms-and-beds-btn">2</button>
      <button @click="filter($event)" class="rooms-and-beds-btn">3</button>
      <button @click="filter($event)" class="rooms-and-beds-btn">4</button>
      <button @click="filter($event)" class="rooms-and-beds-btn">5</button>
      <button @click="filter($event)" class="rooms-and-beds-btn">6</button>
      <button @click="filter($event)" class="rooms-and-beds-btn">7</button>
      <button @click="filter($event)" class="rooms-and-beds-btn">8+</button>
      <button @v-model="filterBy.beds" @click="setFilter()" :value="810">810+</button>
      <h3>Beds</h3>
      <button @click="filter($event)" class="Any">Any</button>
      <button @click="filter($event)" class="rooms-and-beds-btn">1</button>
      <button @click="filter($event)" class="rooms-and-beds-btn">2</button>
      <button @click="filter($event)" class="rooms-and-beds-btn">3</button>
      <button @click="filter($event)" class="rooms-and-beds-btn">4</button>
      <button @click="filter($event)" class="rooms-and-beds-btn">5</button>
      <button @click="filter($event)" class="rooms-and-beds-btn">6</button>
      <button @click="filter($event)" class="rooms-and-beds-btn">7</button>
      <button @click="filter($event)" class="rooms-and-beds-btn">8+</button>
    </div>
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
    </div>
    <div class="form-host-language">
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
  </form>
</template>
<script>
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

