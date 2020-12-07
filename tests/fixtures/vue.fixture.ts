import Vue from 'vue';
import { Provider } from './my.provider';
import { Service } from './my.service';

export const Component = Vue.extends({
  name: 'App',
  data: {
    name: 'World',
    items: [
      {id: 1, name: "a"},
      {id: 2, name: "b"},
      {id: 3, name: "c"}
    ]
  },
  methods: {
    onClick() {
      this.$router.push({
        name: 'Home'
      });
    },
    init() {
      Provider();
    }
  }
});
