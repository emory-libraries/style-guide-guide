// Register an Alert component.
Components.register('alert', {

  props: {
    uid: String
  },

  data() {
    return {
      isDismissible: true,
      state: {
        dismissed: false
      }
    };
  },

  methods: {

    dismiss() {

      // Dismiss the alert for the remainder of the session.
      this.state.dismissed = true;

      // Save the alert's state.
      Store.set(`alerts.${this.uid}`, this.state);

    }

  },

  filters: {},

  created() {

    // Initialize state data for all alerts.
    if( !Store.get('alerts') ) Store.set('alerts', {});

    // Initialize state data for the current alert.
    if( !Store.get(`alerts.${this.uid}`) ) Store.set(`alerts.${this.uid}`, this.state);

    // Otherwise, retrieve the state data.
    else this.state = Store.get(`alerts.${this.uid}`);

  },

  computed: {

    showing() {

      return !(this.isDismissible && this.state.dismissed);

    }

  }

});
