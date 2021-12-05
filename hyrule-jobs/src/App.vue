<template>
  <div class="app">
    <p>{{ name }}</p>
    <button @click="changeName([1, 1, 2])">chnage name</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {},
  data() {
    return {
      name: 'Link',
      age: 25,
    };
  },

  methods: {
    changeName(name: string) {
      this.name = name;
      return name;
    },
  },
});
</script>

<style></style>
