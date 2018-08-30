<template>
  <nav class="navbar navbar--black pd-10px" role="navigation" aria-label="main navigation" >
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <h1 class="title cl-white">SKE</h1>
      </a>
    </div>
    <div class="navbar-start">
      <router-link to="/" class="navbar-item title is-5 is-marginless">HOME</router-link>
      <router-link to="/map" class="navbar-item title is-5">MAP</router-link>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar--black {
  background: #191919;
}
/* DISABLE HOVER */
.navbar-item:hover {
  color: #33d6f3;
  background: #191919 !important;
}

</style>
