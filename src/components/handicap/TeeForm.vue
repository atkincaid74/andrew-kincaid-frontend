<template>
  <v-card>
    <v-card-title>Add New Tee</v-card-title>
    <v-card-text>
      <SerializerForm
          serializer="tee"
          :course-id="getNewCourseID"
          :scorecard-id="getNewScorecardID"
      ></SerializerForm>
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
  name: "TeeForm",
  data: () => ({
    loading: false,
  }),
  components: {
    SerializerForm
  },
  computed: {
    ...mapGetters({
      getNewCourseID: 'getNewCourseID',
      getNewScorecardID: 'getNewScorecardID',
      getFormInfo: 'getEnteredFormInfo',
    })
  },
  methods: {
    ...mapMutations({
      toggleDisplaySnackbar: 'toggleDisplaySnackbar',
      setSnackbarMessage: 'setSnackbarMessage',
      setSnackbarColor: 'setSnackbarColor',
      setNewTeeID: 'setNewTeeID',
    }),
    async submit() {
      this.loading = true;
      try {
        const response = await DjangoService.postTee(this.getFormInfo);
        this.setNewTeeID(response.data.id);
        await this.$router.push({name: 'RoundForm'});
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