<template>
    <v-data-table>

    </v-data-table>
</template>

<script>
    export default {
        name: "ResultsTable",
        data: () => ({
            headers: {},
            items: {},
        }),
        mounted() {
            this.getResults();
        },
        methods: {
            async getResults() {
                const a = this.$store.dispatch('getResults', {});
                console.log(a);
            },
        },
    }
</script>

<style scoped>

</style>