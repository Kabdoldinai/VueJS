<template>
  <div>
    <b-sidebar class="sidebar-background center-block" id="sidebar-1" shadow>
      <div class="px-3 py-2">
        <div class="side-menu">
          <b-link id="text" :to="'news'">News</b-link>
          <br />
          <b-link id="text" :to="'users'">Users</b-link>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "sidebar"
};
</script>





<style>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap");

.side-menu {
  text-decoration: none !important;
  color: white !important;
  font-size: 18px !important;
  font-family: "Mulish", sans-serif !important;
  text-align: center;
  margin: auto;
  width: 50%;
  padding: 200px 40px;
  font-weight: 600 !important;
}

#sidebar-1 {
  background: #17a2b8 !important;
}

#btn-style {
  background: none !important;
  border-color: #17a2b8 !important;
  box-shadow: none !important;
}

#text {
  text-decoration: none !important;
  color: white;
}
</style>

