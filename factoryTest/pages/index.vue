<template>
  <div class="container bg-red-500">des123 {{ test }}</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import { useMainStore } from "~/store/mainStore";
export default defineComponent({
  name: "MainPage",
  setup() {
    const { test } = useMainStore();
    return { test };
  },
});
</script>

<style scoped></style>
