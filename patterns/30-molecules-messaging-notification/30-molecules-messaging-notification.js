// Register a Notification component.
Components.register('notification', {

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

      // Dismiss the notification for the remainder of the session.
      this.state.dismissed = true;

      // Save the notification's state.
      Store.set(`notifications.${this.uid}`, this.state);

    }

  },

  filters: {},

  created() {

    // Initialize state data for all notifications.
    if( !Store.get('notifications') ) Store.set('notifications', {});

    // Initialize state data for the current notification.
    if( !Store.get(`notifications.${this.uid}`) ) Store.set(`notifications.${this.uid}`, this.state);

    // Otherwise, retrieve the state data.
    else this.state = Store.get(`notifications.${this.uid}`);

  },

  computed: {

    showing() {

      return !(this.isDismissible && this.state.dismissed);

    }

  }

});
