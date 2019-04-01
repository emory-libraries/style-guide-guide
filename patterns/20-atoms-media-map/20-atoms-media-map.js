Components.register('map', {

  props: {},

  data() {
    return {
      location: null,
      coordinates: [],
      zoom: 18,
      fullscreen: true,
      map: null,
      marker: null,
      provider: 'CartoDB.Positron'
    };
  },

  methods: {},

  filters: {},

  mounted() {

    // Initialize the map.
    this.map = Leaflet.map(this.$el, {
      center: this.coordinates,
      zoom: this.zoom
    });

    // Add a tile layer to the map.
    Leaflet.tileLayer.provider(this.provider).addTo(this.map);

    // Add a marker to the map.
    this.marker = Leaflet.marker(this.coordinates).addTo(this.map);
    
    // Add a label to the marker.
    this.marker.bindPopup(this.location).openPopup();

  }

});
