// Register a Button component.
Components.register('button', {

  props: {},

  data() {
    return {
      isDisabled: false,
      isActive: false,
      isHover: false,
      isFocus: false
    };
  },

  methods: {

    click() {

      // Use `Components.extend` to register a handler for your specific use case.

    }

  },

  filters: {}

});
