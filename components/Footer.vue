<template>
  <small>&copy; 2021-{{ currentYear }} Jasmine YEUNG & Bryan YEUNG</small>
</template>

<script lang="ts" setup>
import moment from "moment";
const currentYear: string = moment().format("YYYY");
</script>
