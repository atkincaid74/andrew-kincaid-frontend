<template>
  <v-card
      max-width="95%"
      class="mx-auto mt-2"
  >
    <v-card-title>
      <div class="mt-3">{{ name }}</div>
      <v-divider v-if="cut"></v-divider>
      <div
          class="mt-2"
          v-if="cut"
      >
        {{ cutTitle }} {{ cut }}
      </div>
    </v-card-title>
    <v-card-text>
      <v-data-table
          :headers="headers"
          :items="items"
          :loading="loading"
          dense
          hide-default-footer
          :mobile-breakpoint="0"
      ></v-data-table>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="$router.push('/golf')">Back to Leaderboard</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: "Details",
  data: () => ({
    loading: false,
    rawData: null,
    cut: null,
    projected: null,
  }),
  computed: {
    cutTitle () {
      return this.projected ? 'Projected Cut' : 'Cut';
    },
    name()  {
      return this.$route.path.split('/').slice(-1)[0].replace('_', ' ')
    },
    headers () {
      if (this.rawData) {
        return [{text: 'Tier', align: 'left', value: 'tier'}].concat(
            Object.keys(this.rawData["Tier 1"]).map(key => ({text: key, align: 'left', value: key}))
        )
      } else {
        return []
      }
    },
    items() {
      if (this.rawData) {
        return Object.keys(this.rawData).map(key => ({
          tier: key, ...this.rawData[key]
        }))
      } else {
        return [];
      }
    },
  },
  methods: {
    async getDetails() {
      this.loading = true;
      const response = await this.$store.dispatch('getPickDetails');
      this.rawData = JSON.parse(response.data[this.name]);
      this.loading = false;
    },
    async getProjectedCut() {
      const response = await this.$store.dispatch('getProjectedCut');
      this.cut = response.data[1];
      this.projected = response.data[0];
    },
  },
  beforeMount() {
    this.getDetails();
    this.getProjectedCut();
  },
}
</script>

<style scoped>

</style>