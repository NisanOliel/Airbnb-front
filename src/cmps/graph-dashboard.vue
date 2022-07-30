<template>
    <h2>dashboard page</h2>
    <!-- <DoughnutChart :chartData="testData" /> -->

</template>

<script>
import { defineComponent } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);


export default {
    name: 'graph-dashboard',
    props: { hostOrders: { type: Object } },

    components: { DoughnutChart },


    data() {
        return {
            testData: {
                labels: ["Pending", "Approved", "Declined"],
                datasets: [
                    {
                        data: null,
                        backgroundColor: ['red', '#0079AF', '#123E6B',]
                    },
                ],
            }
        }
    },
    created() {
        this.datasets.data = this.chartStatus

    },
    computed: {
        pendingOrders() {
            var ordersCount = 0;
            if (this.hostOrders.length > 0) {
                this.hostOrders.forEach((order) => {
                    if (order.status === "pending") {
                        ordersCount++;
                    }
                });
                return ordersCount;
            }
        },
        approvedOrders() {
            var ordersCount = 0;
            if (this.hostOrders.length > 0) {
                this.hostOrders.forEach((order) => {
                    if (order.status === "approved") {
                        ordersCount++;
                    }
                });
                return ordersCount;
            }
        },
        declinedOrders() {
            var ordersCount = 0;
            if (this.hostOrders.length > 0) {
                this.hostOrders.forEach((order) => {
                    if (order.status === "declined") {
                        ordersCount++;
                    }
                });
                return ordersCount;
            }
        },

        chartStatus() {
            return [this.pendingOrders, this.approvedOrders, this.declinedOrders]

        }
    },


}

</script>

<style lang="scss" scoped>
</style>