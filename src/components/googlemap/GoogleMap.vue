<template>
  <div class="full-width flex__one">
    <div class="contact__map">
      <h2>How To reach US</h2>
      <GMapMap
        :center="center"
        :zoom="12"
        map-type-id="terrain"
        style="width: 600px; height: 300px; margin: 0 auto"
      >
        <GMapCluster>
          <GMapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center = m.position"
          />
        </GMapCluster>
      </GMapMap>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 52.15733351715033, lng: 20.940302645284405 },
      markers: [
        {
          position: {
            lat: 52.15733351715033,
            lng: 20.940302645284405,
          },
        },
      ],
    };
  },
};
</script>
