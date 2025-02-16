<script setup lang="ts">
import HCopyLabel from "@/components/HCopyLabel.vue";
</script>

<template>
  <HCopyLabel text="Hello HCopyLabel 1"/><br>
  <HCopyLabel text="Hello HCopyLabel 2"/><br>
  <HCopyLabel text="Hello HCopyLabel 3"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
