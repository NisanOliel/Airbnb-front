<template>
  <div class="search-wrapper flex">
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
          <el-form-item label="Where">
            <el-input @focus="showInitModal($event)" v-model="form.where" placeholder="Search destination" />
          </el-form-item>
          <div v-if="showModal">dflkgjldfkjgdlsfgjdfslkgjdfsljl</div>
        </div>
        <div @click="activeDateModal" class="filter-option check">
          <div class="labels-wrap">
            <span>Check in</span>
            <span>Check out</span>
          </div>

          <el-date-picker
            ref="datePicker"
            v-model="form.date"
            type="daterange"
            :default-time="defaultTime"
            start-placeholder="Add dates"
            end-placeholder="Add dates"
            format="MMM D"
            range-separator=""
          />

          <!-- {{ form.date }} -->
        </div>
        <div class="filter-option">
          <button><img class="search" src="src/assets/search-icon.svg" /></button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';
  export default {
    name: 'explore-filter',
    data() {
      return {
        form: {
          where: '',
          date: '',
          start: 'Add address',
          end: 'Add address',
        },
        msg: 'Hello form filter',
        filterPreview: true,
        addressMsg: 'Add address',
        showModal: false,
        defaultTime: ref([new Date(2000, 1, 1, 0, 0, 0), new Date(2000, 2, 1, 23, 59, 59)]),
        lab: 'test',
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
      activeDateModal() {
        this.$refs.datePicker.focus();
      },
    },
    computed: {
      filterShow() {
        this.filterPreview = !this.filterPreview;
      },
    },
  };
</script>
