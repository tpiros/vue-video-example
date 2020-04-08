<template>
  <div id="app">
    <p>Video Test</p>
    <video id="doc-player" controls  muted  class="cld-video-player cld-fluid"></video>
  </div>
</template>

<script>
import cloudinary from 'cloudinary-core';
import "../node_modules/cloudinary-video-player/dist/cld-video-player.min.js";

export default {
  name: 'App',
  mounted: () => {
    const cld = cloudinary.Cloudinary.new({ cloud_name: 'tamas-demo' });
    const demoplayer = cld.videoPlayer('doc-player').width(600);
    demoplayer.source('web-perf/IMG_0460')
  }
}
</script>

<style>
</style>
