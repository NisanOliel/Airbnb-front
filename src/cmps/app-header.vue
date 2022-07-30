<template>
  <div v-if="isExpend" class="overlay"></div>

  <!-- <Transition name="bounce"> </Transition> -->
  <header class="main-header flex column" :class="{ sticky: isSticky }">
    <div class="nav-wrapper" :class="{ expend: isExpend }">
      <div :class="{ container: headerLocation, 'inner-container': !headerLocation }">
        <nav class="top-nav flex justify-space-between align-center">
          <router-link class="logo" to="/">
            <div class="main-logo flex">
              <div><img class="logo-img" src="@/assets/airbnb-logo.svg" /></div>
              <h1>air2b</h1>
            </div>
          </router-link>
          <div class="explore-filter">
            <explore-filter :isExpend="isExpend" @expend-form="expendForm" />
          </div>
          <div class="last-section-nav flex align-center">
            <a class="right-header become-host" href="/#/login">Become a host</a>

            <a class="right-header" href="/#/explore"><img class="explore-btn" src="../assets/icons/en.svg" /></a>
            <div class="user-menu-btn">
              <button @click="showMenu = !showMenu" class="nav-btn expend flex">
                <img class="menu-btn" src="@/assets/icons/menu.svg" />
                <img class="host-image" :src="userImg" />
              </button>
            </div>
            <div class="user-nav" v-if="showMenu" v-click-away="onClickAway">
              <div class="user-nav-in">
                <a href="#/login" @click="showMenu = !showMenu" v-if="!getLogInUser">Log in</a>
                <a href="#/" @click="logDemo" v-if="!getLogInUser">Log Demo</a>
                <a href="#/wishList" @click="showMenu = !showMenu" class="a1" v-if="getLogInUser">Wish List</a>
                <a href="#/dashboard" @click="showMenu = !showMenu" v-if="getLogInUser">Dashboard</a>
                <a @click="logout" v-if="getLogInUser">Logout</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <div v-if="headerLocation" :class="{ 'hide-expend': isExpend }" class="header-labels flex justify-space-between align-center">
      <div class="container">
        <div class="header-bottom flex justify-space-between">
          <explore-labels v-if="!isExplore" />

          <div class="stand-alone-filter">
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="display: block; height: 14px; width: 14px; fill: currentcolor"
            >
              <path
                d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
              ></path>
            </svg>
            <path
              d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
            >
            </path>
            <a @click="isShow = !isShow">Filter</a>
            <Transition duration="200" name="nested">
              <standAlone-filter @closeFilersForm="closeModal" v-if="isShow" v-click-away="onClickAway" />
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div v-if="isShow" class="overlay"></div>
</template>
<script>
  import exploreFilter from './explore-filter.vue';
  import exploreLabels from './explore-labels.vue';
  import standAloneFilter from './standAlone-filter.vue';
  import { eventBus } from '../services/event-bus.service.js';

  export default {
    data() {
      return {
        isShow: false,
        location: false,
        isSticky: false,
        isExpend: false,
        showMenu: false,
        isExplore: false,
      };
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
    },

    computed: {
      headerLocation() {
        let { params, path } = this.$route || {};

        this.isExplore = path !== '/';

        let isEmpty = Object.keys(params).length === 0;
        console.log('is empty', isEmpty);
        return isEmpty;
      },
      // headerLocation() {
      //   let params = this.$route.params;
      //   const queryString = window.location.search;
      //   if (queryString.includes('where')) {
      //     this.isExplore = true;
      //   }

      //   let isEmpty = Object.keys(params).length === 0;
      //   return isEmpty;
      // },
      userImg() {
        var user = this.$store.getters.loggedinUser;
        return user ? user.imgUrl : 'https://res.cloudinary.com/nisan/image/upload/v1658872030/air2b/unprofile_ji7zus.png';
      },
      getLogInUser() {
        var user = this.$store.getters.loggedinUser;
        return user ? true : false;
      },
    },

    methods: {
      expendForm(value) {
        console.log('value', value);
        console.log('expend clickd');
        this.isExpend = value;
      },
      closeModal() {
        this.isShow = false;
      },
      logout() {
        this.$store.dispatch({ type: 'logout' });
        // this.$router.push("/")
        this.loggedinUser = null;
        this.showMenu = false;
      },
      async logDemo() {
        const demo = {
          password: 'demo',
          username: 'demo',
        };
        try {
          await this.$store.dispatch({ type: 'login', userCred: demo });
          this.$router.push('/');
          this.showMenu = false;
        } catch (err) {
          console.log(err);
          this.msg = 'Failed to login';
        }
      },
      onClickAway() {
        this.isShow = false;
        this.showMenu = false;
      },
      handleScroll(ev) {
        let pos = window.scrollY;
        if (pos === 0) {
          this.isSticky = false;
          this.isExpend = false;
        }

        if (pos > 0) {
          this.isSticky = true;
          this.isShow = false;

          eventBus.emit('overlay', this.isShow);
        }

        if (this.isExpend) {
          this.isExpend = false;
          eventBus.emit('closeModal', this.isExpend);
        }
      },
    },

    watch: {
      isShow: function () {
        if (this.isShow) {
          document.documentElement.style.overflow = 'hidden';
          return;
        }
        document.documentElement.style.overflow = 'auto';
      },
    },
    mounted() {
      // const observer = new IntersectionObserver(entries => {
      //   const [entry] = entries;
      //   console.log('entry', entry);
      //   if (entry.intersectionRatio > 0) {
      //     mainHeader.value = entry.target.getAttribute('header');
      //   }
      // });
    },
    components: {
      exploreFilter,
      exploreLabels,
      standAloneFilter,
      eventBus,
    },
    setup() {},
  };
</script>
