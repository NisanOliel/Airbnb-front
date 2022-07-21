<template>
    <!-- <div class="order-details flex">
        <div class="order-top flex justify-justify-space-between">
            <h1>{{ stay.price }}$ <span>night</span></h1>
            <div class="flex">
                <img src="../assets/icons/star.svg" style="height: 15px;"> &nbsp&nbsp&nbsp
                <h4>{{ reviewsRateAvg }}</h4> &nbsp&nbsp&nbsp
                <h4>{{ reviewsCount }} reviews</h4>&nbsp&nbsp&nbsp
            </div>
        </div>

        <div class="date-picker">
            <div class="block">
                <el-date-picker v-model="trip.dates" type="daterange" range-separator="" start-placeholder="Start date"
                    end-placeholder="End date" size="large" />
            </div>

            <div class="flex column">
                <div class="flex justify-space-between align-center">
                    <div class="flex column">
                        <span>Adults</span>
                        <span>Ages 13+</span>
                    </div>
                    <div class=" flex align-center justify-space-between">
                        <button @click.prevent="updateGuests('adults', -1)">
                            <span> - </span>
                        </button>
                        <span>{{ trip.guests.adults }}</span>
                        <button @click.prevent="updateGuests('adults', 1)">
                            <span> + </span>
                        </button>
                    </div>
                </div>
                <div class="flex justify-space-between align-center">
                    <div class="flex column">
                        <span>Children</span>
                        <span>Ages 2-12</span>
                    </div>
                    <div class="flex align-center justify-space-between">
                        <button @click.prevent="updateGuests('children', -1)">
                            <span> - </span>
                        </button>
                        <span>{{ trip.guests.children }}</span>
                        <button @click.prevent="updateGuests('children', 1)">
                            <span> + </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div> -->


    <section class="order-container">
        <div class="order-form-header">
            <p><span class="cost">${{ stay.price }}</span> / night</p>
            <p>{{ reviewsRateAvg }} <span class="reviews">({{ reviewsCount }})</span></p>
        </div>

        <div class="order-data">
            <div class="date-picker">
                <div class="date-input">
                    <label>check in</label>
                    <input placeholder="Tue Sep 07 2021">
                </div>
                <div class="date-input">
                    <label>check out</label>
                    <input placeholder="Tue Sep 07 2021">
                </div>
            </div>

            <div class="guest-input">
                <label>guests</label>
                <input :placeholder="guestsCount">
            </div>
        </div>


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
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="content">
                <button class="action-btn">
                    <span>Reserve</span>
                </button>
            </div>
        </div>
    </section>



    <pre>{{ trip }}</pre>
</template>

<script>
// import { ref } from 'vue'

export default {
    name: " order-details",
    props: { stay: { type: Object }, },
    data() {
        return {
            trip: {
                guests: {
                    adults: 0,
                    children: 0,
                },
                dates: {},
            },

        }
    }, computed: {
        reviewsRateAvg() {
            var sum = 0; this.stay.reviews.forEach((review) => {
                sum += review.rate;
            });
            sum = sum / this.stay.reviews.length;
            return sum.toFixed(1);
        },
        reviewsCount() {
            return this.stay.reviews.length;
        },
        guestsCount() {
            const guestsCount = this.trip.guests.children + this.trip.guests.adults;
            if (guestsCount >= 1) return guestsCount + " guests";
            else return "Add guests";
        }
    },
    methods: {
        updateGuests(type, number) {
            if (this.trip.guests[type] === 0 && number === -1) return;
            this.trip.guests[type] += number;
        },
    }
}



</script>
