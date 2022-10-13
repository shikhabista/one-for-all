<template>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title">
        Vue
      </h5>
      <form action="" @submit.prevent="onSubmit">
        <input type="text" class="input" v-model="item"/>
      </form>
    </div>
    <ul>
      <li v-for="singleItem in items" class='todo-item'>{{singleItem}}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";

const item = ref<string>("");
const items = ref<Array<string>>([]);

const onSubmit = () => {
  items.value = [
    item.value,
    ...items.value
  ];
  item.value = "";
}
</script>
