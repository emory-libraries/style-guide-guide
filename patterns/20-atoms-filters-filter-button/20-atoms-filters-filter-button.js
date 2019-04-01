Components.register('filter-button', {

  props: {
    index: {
      type: Array
    },
    config: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  data() {
    return {
      selected: 0,
      buttons: []
    };
  },

  methods: {

    filter() {

      // Remove previous filtering.
      this.fuzzy.unfilter();

      // Get the filter to be applied.
      const filter = this.buttons[this.selected].filter;

      // Make sure a filter is given.
      if( filter ) {

        // Filter the results.
        this.fuzzy.filter((item) => {

          // Test item against filters, and get the results.
          const results = _.map(filter, (value, key) => {

            // Determine if the item's key passes the filter test.
            return _.isArray(item[key]) ? item[key].includes(value) : item[key] == value;

          });

          // Determine if the item passed all the filter tests.
         return  _.every(results, (result) => result === true);

        });

      }

    },

    cancel() {

      // Clear the search results.
      this.fuzzy.unfilter();

    }

  },

  created() {

    // Initialize the search utility.
    this.fuzzy = new Fuzzy(this.index, this.config);

  }

});
