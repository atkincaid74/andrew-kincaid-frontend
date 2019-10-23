<template>
    <v-card>
        <v-card-title>
            <v-text-field
                v-model="search"
                :append-icon="searchIcon"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="items"
            :search="search"
            dense
        >
            <template v-slot:item.andrewsPick="{ item }">
                <v-chip :color="getColor(item.andrewsPick, item.winner)" dark>{{ item.andrewsPick }}</v-chip>
            </template>
            <template v-slot:item.stevesPick="{ item }">
                <v-chip :color="getColor(item.stevesPick, item.winner)" dark>{{ item.stevesPick }}</v-chip>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
    import {mdiMagnify} from '@mdi/js';

    export default {
        name: "ResultsTable",
        data: () => ({
            headers: [],
            items: [],
            search: '',
            searchIcon: mdiMagnify
        }),
        beforeMount() {
            this.getResults();
        },
        methods: {
            async getResults() {
                const a = JSON.parse(await this.$store.dispatch('getResults', {}));
                this.headers = Object.keys(a[0]).map(x => { return {
                    text: x,
                    align: 'center',
                    value: this.camelize(x),
                } });
                this.items = a.map(
                    x => {
                        let key, keys = Object.keys(x);
                        let n = keys.length;
                        let newObj = {};
                        while (n--) {
                            key = keys[n];
                            newObj[this.camelize(key)] = x[key]
                        }
                        return newObj
                    }
                );
            },
            getColor(pick, winner) {
                return pick === winner ? 'green' : 'red'
            }
        },
    }
</script>

<style scoped>

</style>