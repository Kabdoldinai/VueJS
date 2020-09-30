<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="info">
      <b-button class="button-menu" variant="primary" v-b-toggle.sidebar-1>Menu</b-button>
      <b-button class="button-menu" variant="primary" router-link to="/Home">Home</b-button>
    </b-navbar>
  </div>
</template> 



<script>
export default {
  name: "Navbar"
};
</script>


<style>
.ml-auto {
  color: #fff !important;
  font-size: 18px !important;
  font-family: "Mulish", sans-serif !important;
}

.button-menu {
  background: none !important;
  border-color: white !important;
  box-shadow: none !important;
  margin-right: 5px !important;
}
</style>