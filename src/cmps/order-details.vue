<template>
  <section class="order-container sticky">
    <div class="order-form-header">
      <p><span class="cost">${{ stay.price }}</span> / night</p>
      <p class="stared">
        {{ $filters.reviewsRateAvg(stay) }} <span class="reviews"> ({{ reviewsCount }})</span></p>
    </div>



    <!-- Date !! -->
    <div class="order-data">
      <v-date-picker v-model="trip.dates" is-range :columns="2">
        <template v-slot="{ inputValue, inputEvents }">
          <div class="flex justify-center items-center">

            <div class="date-picker">
              <div class="date-input">
                <label>check in</label>
                <input :placeholder="checkIn" :value="inputValue.start" v-on="inputEvents.start"
                  class="border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300" />
              </div>


              <div class="date-input">
                <label>check out</label>
                <input :placeholder="checkOut" :value="inputValue.end" v-on="inputEvents.end"
                  class="border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300" />
              </div>
            </div>

          </div>
        </template>
      </v-date-picker>
      <!--  -->


      <div @click="isShow = !isShow" class="guest-input">
        <label>guests
          <div class="expand-order">
            <span class="material-icons-outlined" :class="{ flip: !isShow }">
              expand_less
            </span>
          </div>
        </label>
        <input disabled :placeholder="guestsCount" />
      </div>
    </div>

    <div class="cell"></div>
    <div class="cell"></div>
    <div class="btn-container">
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
      <div class="content">
        <button class="action-btn">
          <span>Reserve</span>
        </button>
      </div>
    </div>


    <div class="flex column" v-if="isShow">
      <div class="guests-container flex justify-space-between align-center">
        <div class="flex column">
          <h5>Adults</h5>
          <span>Ages 13+</span>
        </div>
        <div class="guests-btns flex align-center justify-space-between">
          <button @click.stop="updateGuests('adults', -1)">
            <span> - </span>
          </button>
          <span>{{ trip.guests.adults }}</span>
          <button @click.stop="updateGuests('adults', 1)">
            <span> + </span>
          </button>
        </div>
      </div>
      <div class="guests-container flex justify-space-between align-center">
        <div class="flex column">
          <h5>Children</h5>
          <span>Ages 2-12</span>
        </div>
        <div class="guests-btns flex align-center justify-space-between">
          <button @click.stop="updateGuests('children', -1)">
            <span> - </span>
          </button>
          <span>{{ trip.guests.children }}</span>
          <button @click.stop="updateGuests('children', 1)">
            <span> + </span>
          </button>
        </div>
      </div>

    </div>

    <div class="pricing" v-if="dateCheck">
      <h4>You won't be charged yet</h4>
      <p>
        <span>Total</span><span> ${{ totalPrice }}</span>
      </p>
    </div>
  </section>
</template>

<script>
import { ElMessage } from 'element-plus'

export default {

  name: ' order-details',
  props: { stay: { type: Object } },
  data() {
    return {
      isShow: false,
      trip: {
        guests: {
          adults: 0,
          children: 0,
        },
        dates: {},
      },
    };
  },
  computed: {
    reviewsCount() {
      return this.stay.reviews.length;
    },
    dateCheck() {
      return Object.keys(this.trip.dates).length
    },

    guestsCount() {
      const guestsCount = this.trip.guests.children + this.trip.guests.adults;
      if (guestsCount >= 1) return guestsCount + ' guests';
      else return 'Add guests';
    },
    checkIn() {
      return this.trip.dates[0];
    },
    checkOut() {
      return this.trip.dates[1];
    },
    totalPrice() {
      let size = Object.keys(this.trip.dates).length;
      if (size > 1) {
        const time = JSON.parse(JSON.stringify(this.trip.dates))
        const { start, end } = time

        const timeDiff = (new Date(end).getTime() - new Date(start).getTime()) / (1000 * 3600 * 24);
        return Number(parseInt(this.stay.price * timeDiff)).toLocaleString();
      }
    },

  },
  methods: {
    updateGuests(type, number) {
      const guestsCount = this.trip.guests.children + this.trip.guests.adults;
      if (this.trip.guests[type] === 0 && number === -1) return;
      if (this.stay.capacity === guestsCount && number == 1) return ElMessage.error('You over the guests capacity')

      this.trip.guests[type] += number;
    },

  },
};
</script>
