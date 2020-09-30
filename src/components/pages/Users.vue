
<template>
  <div class="t-s">
    <b-table hover :items="posts" :fields="fields"></b-table>
    <template slot="name" slot-scope="data">{{ data.value.userId }}</template>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
      fields: [
        { key: "id" },
        { key: "name" },
        { key: "username" },
        { key: "email" },
        { key: "address", sortable: true, variant: "info" }
      ]
    };
  },

  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users?_limit=5")
      .then(res => (this.posts = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style>
.t-s {
  padding: 10px 40px;
  margin-top: 20px;
}
</style>
