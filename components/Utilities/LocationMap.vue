<template lang="pug">
  .google-map-container
    gmap-map.google-map(
      :center="{lat:51.617957,lng:-3.953545}"
      :options="mapStyle"
      :zoom="16")
      gmap-marker.monkey(
        :animation="1"
        :position="marker.position"
        :icon="{ url: 'map-marker.svg' }"
        :clickable="false"
        :draggable="false"
        style="height: 50px;"
        @click="alert()")
    .location-container
      h2.title We meet here
      p <strong>Swansea Masonic Hall</strong> <br> 152 St Helen's Road <br> Swansea <br> SA1 4DF
    footer-main
    back-to-top
</template>

<script>
  export default {
    data () {
      return {
        marker: {
          name: 'House of Aleida Greve',
          description: 'description 1',
          content: 'Hello',
          date_build: '',
          position: {
            lat: 51.617957,
            lng: -3.953545
          }
        },
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
      max-width: 300px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -150px;
      margin-top: -130px;
      padding: 60px 40px;

      @include mq($from: tablet) {
        left: 40px;
        margin-left: 0;
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
