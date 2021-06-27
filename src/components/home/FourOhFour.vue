<template>
  <div>
    <span class="text-h1 white--text">404</span>
    <v-spacer></v-spacer>
    <span class="text-h5 white--text">
      Cannot find the page you are looking for.
    </span>
    <v-spacer></v-spacer>
    <v-btn small rounded :to="{ name: 'Home' }">Home</v-btn>
  </div>
</template>

<script>
export default {
  name: "FourOhFour",
};
</script>

<style scoped></style>
