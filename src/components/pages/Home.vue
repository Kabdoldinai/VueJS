<template>
  <div class="d-flex justify-content-center" id="center">
    <div style="font-size: 10rem;">
      <b-icon
        icon="clock"
        animation="spin"
        shift-v="8"
        class="rounded-circle rounded p-2"
        variant="info"
      ></b-icon>
    </div>
  </div>
</template>


<script>
export default {
  name: "Home"
};
</script>

<style>
#center {
  padding: 400px 40px;
}
</style>