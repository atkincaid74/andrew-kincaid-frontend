<template>
  <v-card>
    <v-card-title>Add New Scorecard</v-card-title>
    <v-card-text>
      <SerializerForm serializer="scorecard"></SerializerForm>
    </v-card-text>
    <v-card-actions>
      <v-btn
          @click="submit"
          :loading="loading"
      >Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import SerializerForm from "@/components/handicap/SerializerForm";
import {mapGetters, mapMutations} from "vuex";
import DjangoService from "@/services/api/DjangoService";

export default {
  name: "ScorecardForm",
  data: () => ({
    loading: false,
  }),
  components: {
    SerializerForm
  },
  computed: {
    ...mapGetters({
      getFormInfo: 'getEnteredFormInfo',
    })
  },
  methods: {
    ...mapMutations({
      toggleDisplaySnackbar: 'toggleDisplaySnackbar',
      setSnackbarMessage: 'setSnackbarMessage',
      setSnackbarColor: 'setSnackbarColor',
      setNewScorecardID: 'setNewScorecardID',
    }),
    async submit() {
      this.loading = true;
      try {
        const response = await DjangoService.postScorecard(this.getFormInfo);
        this.setNewScorecardID(response.data.id);
        await this.$router.push({name: 'TeeForm'});
      } catch (e) {
        let message = '';
        for (const [key, val] of Object.entries(e.data)) {
          message += `${key} - ${val}\n`
        }
        this.setSnackbarMessage(message);
        this.setSnackbarColor('error');
        this.toggleDisplaySnackbar();
      }
      this.loading = false;
    }
  }
}
</script>

<style scoped>

</style>