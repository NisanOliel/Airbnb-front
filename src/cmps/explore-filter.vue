<template>
  <div class="search-wrapper flex" :class="{ expend: !filterPreview }">
    <div v-show="filterPreview" @click="expendForm($event)" class="filter-preview flex align-center">
      <div class="filter btn header-location">Anywhere</div>
      <div class="filter btn header-time">Any week</div>
      <div class="filter btn header-guests search" value="hellow"
        >Add guests <span><img src="src/assets/search-icon.svg" /></span>
      </div>
    </div>

    <div v-show="!filterPreview" class="filter-expend flex">
      <el-form :model="form" @submit.prevent="formSubmit">
        <div class="filter-option">
          <label for="where">Where</label>
          <!-- <input name="where" @focus="showInitModal($event)" v-model="form.where" placeholder="Search destination" /> -->
          <input name="where" v-model="form.where" placeholder="Search destination" />

          <!-- <div v-if="showModal">dflkgjldfkjgdlsfgjdfslkgjdfsljl</div> -->
        </div>
        <div class="filter-option check">
          <div class="labels-wrap">
            <v-date-picker :columns="2" v-model="form.date" is-range>
              <template v-slot="{ inputValue, inputEvents }">
                <div class="flex justify-center items-center">
                  <div class="checkin">
                    <label for="checkin">Check in</label>
                    <input
                      name="checkin"
                      :value="inputValue.start"
                      v-on="inputEvents.start"
                      placeholder="Add dates"
                      class="border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300"
                    />
                  </div>
                  <div class="checkout">
                    <label for="checkout">Check out</label>
                    <input
                      name="checkout"
                      :value="inputValue.end"
                      v-on="inputEvents.end"
                      placeholder="Add dates"
                      class="border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300"
                    />
                  </div>
                </div>
              </template>
            </v-date-picker>
          </div>
        </div>
        <div class="filter-option guest-dropdown">
          <div @click.stop="dropDownMenu" class="add-guest-wrapper">
            <label for="add-guest">Who</label>
            <input disabled type="text" placeholder="Add guests" />
          </div>

          <div class="order-container header-filter-search">
            <div class="btn-container on-filter">
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="content filter-content">
                <button class="action-btn">
                  <div class="material-icons search"> search </div>
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </el-form>
    </div>
  </div>

  <div v-show="showModal" class="guests-modal dropdown-card order-container">
    <div class="row-card">
      <div class="lft-crd">
        <span class="title-sm"> Adults</span>
        <span class="txt-sm">Ages 13 or above</span>
      </div>
      <div class="rit-crd guests-btns">
        <button @click.stop="updateGuests('adults', -1)">
          <span> - </span>
        </button>
        <span>{{ form.guests.adults }}</span>
        <button @click.stop="updateGuests('adults', 1)">
          <span> + </span>
        </button>
      </div>
    </div>
    <div class="row-card">
      <div class="lft-crd">
        <span class="title-sm"> Adults</span>
        <span class="txt-sm">Ages 13 or above</span>
      </div>
      <div class="rit-crd guests-btns">
        <button @click.stop="updateGuests('adults', -1)">
          <span> - </span>
        </button>
        <span>{{ form.guests.adults }}</span>
        <button @click.stop="updateGuests('adults', 1)">
          <span> + </span>
        </button>
      </div>
    </div>
    <div class="row-card">
      <div class="lft-crd">
        <span class="title-sm"> Adults</span>
        <span class="txt-sm">Ages 13 or above</span>
      </div>
      <div class="rit-crd guests-btns">
        <button @click.stop="updateGuests('adults', -1)">
          <span> - </span>
        </button>
        <span>{{ form.guests.adults }}</span>
        <button @click.stop="updateGuests('adults', 1)">
          <span> + </span>
        </button>
      </div>
    </div>
    <div class="row-card">
      <div class="lft-crd">
        <span class="title-sm"> Adults</span>
        <span class="txt-sm">Ages 13 or above</span>
      </div>
      <div class="rit-crd guests-btns">
        <button @click.stop="updateGuests('adults', -1)">
          <span> - </span>
        </button>
        <span>{{ form.guests.adults }}</span>
        <button @click.stop="updateGuests('adults', 1)">
          <span> + </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  // import { ref } from 'vue';
  export default {
    name: 'explore-filter',
    data() {
      return {
        form: {
          where: '',
          date: [],
          guests: {
            adults: 0,
            children: 0,
            infants: 0,
            pets: 0,
          },
        },
        filterPreview: true,
        showModal: false,
      };
    },
    methods: {
      formSubmit() {
        console.log('hellow');
      },
      expendForm(ev) {
        console.log('ev', ev.target.innerText);
        console.log('ev', ev);
        this.filterShow;
      },
      showInitModal(ev) {
        console.log('show modal', ev);
        this.showModal = !this.showModal;
        console.log(this.showModal);
      },
      dropDownMenu() {
        this.showModal = !this.showModal;
        console.log('dropdown');
        console.log(this.showModal);
      },
      updateGuests(type, number) {
        this.form.guests[type] += number;
      },
    },
    computed: {
      filterShow() {
        this.filterPreview = !this.filterPreview;
      },
    },
  };
</script>
