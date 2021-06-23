<template>
  <v-card>
    <v-card-title>Handicap</v-card-title>
    <v-card-actions>
      <v-btn @click="$router.push({name: 'CourseForm'})">Add Course</v-btn>
      <v-btn @click="$router.push({name: 'ScorecardForm'})">Add Scorecard</v-btn>
      <v-btn @click="$router.push({name: 'TeeForm'})">Add Tee</v-btn>
      <v-btn @click="$router.push({name: 'RoundForm'})">Add Round</v-btn>
      <v-btn @click="$router.push({name: 'HandicapHistory'})">Check Handicap</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
name: "HandicapHome"
}
</script>

<style scoped>

</style>