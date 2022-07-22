<template>
  <section class="order-container sticky">
    <div class="order-form-header">
      <p><span class="cost">${{ stay.price }}</span> / night</p>
      <p>
        {{ $filters.reviewsRateAvg(stay) }} <span class="reviews"> ({{ reviewsCount }})</span></p>
    </div>

    <div class="order-data">
      <div class="date-picker">
        <div class="date-input">
          <label>check in</label>
          <input :placeholder="checkIn" />
        </div>
        <div class="date-input">
          <label>check out</label>
          <input :placeholder="checkOut" />
        </div>
      </div>

      <div class="guest-input">
        <label>guests</label>
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
    <div class="flex column">
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

      <div class="pricing" if="">
        <h4>You won't be charged yet</h4>
        <p>
          <span>Total</span><span> ${{ totalPrice }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: ' order-details',
  props: { stay: { type: Object } },
  data() {
    return {
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
      var size = Object.keys(this.trip.dates).length;
      if (size > 1) {
        const timeDiff = (this.trip.dates[1].getTime() - this.trip.dates[0].getTime()) / (1000 * 3600 * 24);
        return Number(parseInt(this.stay.price * timeDiff)).toLocaleString();
      }
    },
  },
  methods: {
    updateGuests(type, number) {
      console.log('number:', number);
      console.log('type:', type);
      if (this.trip.guests[type] === 0 && number === -1) return;
      this.trip.guests[type] += number;
    },
    updateChildren(number) {
      if (this.trip.guests.children === 0 && number === -1) return;
      this.trip.guests.children += number;
    },
  },
};
</script>
