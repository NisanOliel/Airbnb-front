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
            <el-input @focus="showInitModal" v-model="form.where" placeholder="Search destination" />
            <div v-show="showModal"></div>
          </el-form-item>
        </div>
        <div class="filter-option check">
          <el-form-item label="Check in">
            {{ addressMsg }}
          </el-form-item>
          <el-form-item label="Check out">
            {{ addressMsg }}
          </el-form-item>

          <el-form-item label="Check out">
            <el-date-picker unlink-panels="true" v-model="form.date" type="daterange" start-placeholder="Add address" />
          </el-form-item>
        </div>
        <div class="filter-option">
          <el-form-item label="Where">
            <el-input v-model="form.where" placeholder="Search destination" />
          </el-form-item>
          <button><img class="search" src="src/assets/search-icon.svg" /></button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'explore-filter',
    data() {
      return {
        form: {
          where: '',
          date: '',
        },
        msg: 'Hello form filter',
        filterPreview: true,
        addressMsg: 'Add address',
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
    },
    computed: {
      filterShow() {
        this.filterPreview = !this.filterPreview;
      },
      showInitModal() {
        this.showModal = !this.showInitModal;
      },
    },
  };
</script>
