<template>
  <v-card>
    <v-card-title>Add New Round</v-card-title>
    <v-card-text>
      <SerializerForm
          serializer="round"
          :tee-id="getNewTeeID"
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
  name: "RoundForm",
  data: () => ({
    loading: false,
  }),
  components: {
    SerializerForm,
  },
  computed: {
    ...mapGetters({
      getNewTeeID: 'getNewTeeID',
      getFormInfo: 'getEnteredFormInfo',
    })
  },
  methods: {
    ...mapMutations({
      toggleDisplaySnackbar: 'toggleDisplaySnackbar',
      setSnackbarMessage: 'setSnackbarMessage',
      setSnackbarColor: 'setSnackbarColor',
    }),
    async submit() {
      this.loading = true;
      try {
        await DjangoService.postRound(this.getFormInfo);
        await this.$router.push({name: 'HandicapHistory'});
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