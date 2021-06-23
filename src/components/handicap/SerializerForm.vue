<template>
  <v-form>
    <component
        v-for="[field, fieldInfo] of Object.entries(formInfo)"
        :key="field"
        :is="fieldInfo.component"
        :label="fieldInfo.label"
        :items="fieldInfo.items"
        :clearable="fieldInfo.clearable"
        :rules="convertRules(fieldInfo.rules)"
        :type="fieldInfo.type"
        v-model="fieldInfo.value"
    ></component>
  </v-form>
</template>

<script>
import DjangoAPI from '../../services/api/DjangoService';
import { VTextField, VSelect, VCheckbox } from 'vuetify/lib';
import DateField from "@/components/handicap/DateField";
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: "SerializerForm",
  props: {
    serializer: {type: String, required: true},
    courseId: {type: Number, required: false, default: -1},
    scorecardId: {type: Number, required: false, default: -1},
    teeId: {type: Number, required: false, default: -1},
  },
  data: () => ({
    formInfo: {},
  }),
  components: {
    VTextField,
    VSelect,
    DateField,
    VCheckbox
  },
  computed: {
    dataToSend() {
      return Object.fromEntries(
          Object.entries(this.formInfo).map(
              ([k, v], i) => [k, this.formInfo[k].value]
          )
      );
    },
    ...mapGetters({
      getEnteredFormInfo: 'getEnteredFormInfo',
      getRoundDate: 'getRoundDate'
    }),
    enteredFormInfo: {
      get() {return this.getEnteredFormInfo},
      set() {this.setEnteredFormInfo(this.dataToSend)}
    }
  },
  methods: {
    ...mapMutations({
      setEnteredFormInfo: 'setEnteredFormInfo',
    }),
    async getFormInfo() {
      const response = await DjangoAPI.getSerializer(this.serializer);
      this.formInfo = response.data;
      if (this.courseId > -1) {
        this.formInfo.course.value = this.courseId;
      }
      if (this.scorecardId > -1) {
        this.formInfo.scorecard.value = this.scorecardId;
      }
      if (this.teeId > -1) {
        this.formInfo.tee.value = this.teeId;
      }
      if ('date' in this.formInfo) {
        this.formInfo.date.value = this.getRoundDate;
      }
    },
    convertRules(ruleObj) {
      if (ruleObj === undefined) {
        return [];
      }
      let rules = [];
      if ('required' in ruleObj && ruleObj.required) {
        rules.push(value => !!value || 'Required.');
      }
      if ('max_length' in ruleObj) {
        rules.push(value => (value || '').length <= ruleObj.max_length || `Max ${ruleObj.max_length} characters`);
      }
      return rules;
    }
  },
  beforeMount() {
    this.getFormInfo();
  },
  watch: {
    dataToSend() {
      this.enteredFormInfo = this.dataToSend;
    },
    getRoundDate() {
      this.formInfo.date.value = this.getRoundDate;
    }
  }
}
</script>

<style scoped>

</style>