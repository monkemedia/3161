<template lang="pug">
  .google-map-container
    gmap-map.google-map(
      :center="centerMap()"
      :options="mapStyle"
      :zoom="16")
      gmap-marker(
        :animation="1"
        :position="{ lat: data.location.lat, lng: data.location.lon }"
        :icon="{ url: 'map-marker.svg' }"
        :clickable="false"
        :draggable="false"
        style="height: 50px;")
    .location-container
      h2.title We meet here
      span(v-html="$md.render(data.address)")
</template>

<script>
  export default {
    name: 'LocationMap',

    props: {
      data: {
        type: Object,
        required: true
      }
    },

    data () {
      return {
        mapStyle: {
          disableDefaultUI: true,
          styles: [
            {
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#f5f5f5'
                }
              ]
            },
            {
              'elementType': 'labels.icon',
              'stylers': [
                {
                  'visibility': 'off'
                }
              ]
            },
            {
              'elementType': 'labels.text.fill',
              'stylers': [
                {
                  'color': '#616161'
                }
              ]
            },
            {
              'elementType': 'labels.text.stroke',
              'stylers': [
                {
                  'color': '#f5f5f5'
                }
              ]
            },
            {
              'featureType': 'administrative.land_parcel',
              'elementType': 'labels.text.fill',
              'stylers': [
                {
                  'color': '#bdbdbd'
                }
              ]
            },
            {
              'featureType': 'poi',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#eeeeee'
                }
              ]
            },
            {
              'featureType': 'poi',
              'elementType': 'labels.text.fill',
              'stylers': [
                {
                  'color': '#757575'
                }
              ]
            },
            {
              'featureType': 'poi.park',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#e5e5e5'
                }
              ]
            },
            {
              'featureType': 'poi.park',
              'elementType': 'labels.text.fill',
              'stylers': [
                {
                  'color': '#9e9e9e'
                }
              ]
            },
            {
              'featureType': 'road',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#ffffff'
                }
              ]
            },
            {
              'featureType': 'road.arterial',
              'elementType': 'labels.text.fill',
              'stylers': [
                {
                  'color': '#757575'
                }
              ]
            },
            {
              'featureType': 'road.highway',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#dadada'
                }
              ]
            },
            {
              'featureType': 'road.highway',
              'elementType': 'labels.text.fill',
              'stylers': [
                {
                  'color': '#616161'
                }
              ]
            },
            {
              'featureType': 'road.local',
              'elementType': 'labels.text.fill',
              'stylers': [
                {
                  'color': '#9e9e9e'
                }
              ]
            },
            {
              'featureType': 'transit.line',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#e5e5e5'
                }
              ]
            },
            {
              'featureType': 'transit.station',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#eeeeee'
                }
              ]
            },
            {
              'featureType': 'water',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#c9c9c9'
                }
              ]
            },
            {
              'featureType': 'water',
              'elementType': 'labels.text.fill',
              'stylers': [
                {
                  'color': '#9e9e9e'
                }
              ]
            }
          ]
        }
      }
    },

    methods: {
      centerMap () {
        if (!process.client) {
          return {}
        }

        const wH = window.innerWidth

        if (wH >= 768) {
          return {
            lat: 51.617900,
            lng: -3.957000
          }
        } else {
          return {
            lat: 51.617100,
            lng: -3.953545
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../node_modules/sass-rem/rem';
  @import '~assets/css/utilities/variables.scss';
  @import '~assets/css/utilities/mixins.scss';
  @import '../../node_modules/sass-mq/mq';

  .google-map-container {
    position: relative;
    margin-top: 50px;

    .google-map {
      width: 100%;
      height: 400px;
    }

    .location-container {
      background-color: $white;
      width: 100%;
      position: absolute;
      left: 50%;
      margin-left: -150px;
      padding: 30px 40px;
      bottom: 20px;
      max-width: 300px;

      @include mq($from: tablet) {
        top: 50%;
        bottom: auto;
        left: 40px;
        margin-left: 0;
        margin-top: -130px;
        padding: 60px 40px;
      }

      .title {
        @include ExtraBoldUppercase();
        font-size: rem(22px);
        margin-bottom: 15px;
        color: $primary;
      }

      p {
        text-transform: uppercase;
      }
    }
  }
</style>
