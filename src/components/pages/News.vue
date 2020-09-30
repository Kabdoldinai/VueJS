
<template>
  <div class="table">
    <b-table :items="posts" :fields="fields"></b-table>
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
        { key: "title" },
        { key: "body", sortable: true, variant: "info" }
      ]
    };
  },

  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(res => (this.posts = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style>
.table {
  padding: 10px 40px;
  margin-top: 20px;
}
</style>
