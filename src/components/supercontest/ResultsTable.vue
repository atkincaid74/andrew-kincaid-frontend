<template>
    <v-card>
        <v-card-title>

            <v-container>
                <v-row>Game by Game Results</v-row>
                <v-row>
                    <v-btn
                        color="warning"
                        @click="updateGames"
                        :loading="loading"
                        class="mt-3"
                    >Update Games
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="search"
                        :append-icon="searchIcon"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-row>
            </v-container>
        </v-card-title>
        <v-card-text>
            <v-data-table
                :headers="headers"
                :items="items"
                :search="search"
                :loading="loading"
                dense
            >
                <template
                    v-slot:item.andrewsPick="{ item }"
                >
                    <v-chip
                        :color="getColor(item.andrewsPick, item.winner)"
                        dark
                    >{{ item.andrewsPick }}
                    </v-chip>
                </template>
                <template
                    v-slot:item.stevesPick="{ item }"
                >
                    <v-chip
                        :color="getColor(item.stevesPick, item.winner)"
                        dark
                    >{{ item.stevesPick }}
                    </v-chip>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
    import { mdiMagnify } from '@mdi/js';

    export default {
        name: "ResultsTable",
        data: () => ({
            headers: [],
            items: [],
            search: '',
            searchIcon: mdiMagnify,
            loading: true,
        }),
        beforeMount() {
            this.getResults();
        },
        methods: {
            async getResults() {
                this.loading = true;
                try {
                    const response = await this.$store.dispatch('getResults', {});
                    const a = JSON.parse(response.data);
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
                    this.loading = false;
                } catch(err) {
                    console.log(err);
                    this.loading = false;
                }

            },
            getColor(pick, winner) {
                return pick === winner ? 'green' : 'red'
            },
            async updateGames() {
                this.loading = true;
                await this.$store.dispatch('updateGames');
                await this.getResults();
                this.loading = false;
            },
        },
    }
</script>

<style scoped>

</style>