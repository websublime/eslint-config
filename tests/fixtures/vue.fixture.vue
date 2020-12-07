<template>
  <div v-else>
    Hello, {{ name }}!
    <div
      v-for="item of items"
      key="item.id"
    >
      {{ item.name}}
    </div>
    <button v-on:click="onClick">Button</button>
  </div>
</template>

<script>
export { Component as default } from './vue.fixture';
</script>
