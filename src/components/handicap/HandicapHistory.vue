<template>
  <div>
    <v-card>
      <v-card-title>
        Current Handicap
      </v-card-title>
      <v-card-subtitle>
        {{ currentHandicap }}
      </v-card-subtitle>
    </v-card>
    <v-card>
      <v-card-title>
        Low Handicap (last 365 days)
      </v-card-title>
      <v-card-subtitle>
        {{ lowHandicap }}
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
import DjangoAPI from '../../services/api/DjangoService';

export default {
  name: "Handicap",
  data: () => ({
    currentHandicap: null,
    lowHandicap: null
  }),
  methods: {
    async getHandicap() {
      const response = await DjangoAPI.getHandicap();
      if (response.status === 204) {
        return
      }
      this.currentHandicap = response.data.current;
      this.lowHandicap = response.data.low;
    }
  },
  beforeMount() {
    this.getHandicap();
  }
}
</script>

<style scoped>

</style>