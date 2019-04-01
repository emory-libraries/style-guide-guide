// Register a Subnav-Viewall component.
Components.register('subnav-viewall', {

  props: {},

  data() {
    return {
      isDisabled: false,
      isActive: false,
      isHover: false,
      isFocus: false,
      isShowing: true,
      isDismissable: true
    };
  },

  methods: {

    click() {

      // Make the button dismissable.
      if( this.isDismissable ) this.isShowing = false;

      // Use `Components.extend` to register a different handler for your specific use case.

    },

    simclick( ) {

      // Simulate a native click.
      this.$el.click();

    }

  },

  filters: {}

});
