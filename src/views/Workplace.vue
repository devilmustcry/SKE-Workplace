<template>
  <div class="workplace">
    <gmap-map :center="center" :zoom="12" style="width: 1440px; height: 710px">
      <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="false" @click="center=m.position">
      </gmap-marker>
    </gmap-map>

    <!-- <GmapMap
      :center="{lat:10, lng:10}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap> -->
  </div>
</template>

<script>
export default {
  name: 'Workplace',
  data () {
    return {
      msg: 'MAP',
      center: {lat: 13.754, lng: 100.5014},
      markers: [{
        position: {lat: 13.754, lng: 100.5014}
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
