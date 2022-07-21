<template>
    <div class="order-details flex">
        <div class="order-top flex justify-space-between">
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

            <div class="guests-modal flex column">
                <div class="guest-type-label flex space-between align-center">
                    <div class="guest-label flex column">
                        <span>Adults</span>
                        <span>Ages 13+</span>
                    </div>
                    <div class="guest-btns flex align-center space-between">
                        <button @click.stop="updateGuests('adults', -1)">
                            <span> - </span>
                        </button>
                        <span class="guests-num">{{ trip.guests.adults }}</span>
                        <button @click.stop="updateGuests('adults', 1)">
                            <span> + </span>
                        </button>
                    </div>
                </div>
                <div class="guest-type-label flex space-between align-center">
                    <div class="guest-label flex column">
                        <span>Children</span>
                        <span>Ages 2-12</span>
                    </div>
                    <div class="guest-btns flex align-center space-between">
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
        </div>
    </div>
    <pre>{{ trip }}</pre>
</template>

<script>
// import { ref } from 'vue'

export default {
    name: " order-details", props: { stay: { type: Object }, },
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
                    <!-- <style scoped>
.demo-date-picker {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
}

.demo-date-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    flex: 1;
}

.demo-date-picker .block:last-child {
    border-right: none;
}

.demo-date-picker .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}
</style> -->
