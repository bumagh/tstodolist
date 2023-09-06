<script setup lang="ts">
import useStore from "../store";
const { todolist } = useStore();
todolist.getList();
</script>

<template>
  <div v-for="item in todolist.list" :key="item.id">
    <input type="text" :value="item.name" placeholder="input something" />
    <input type="checkbox" name="" id="">
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
