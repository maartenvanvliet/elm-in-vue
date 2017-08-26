module.exports = function (elm) {
  return {
    props: {
      ports: {
        type: Function,
        required: false
      },
      flags: {
        type: Object,
        required: false
      }
    },
    render: function (createElement, _context) {
      return createElement('div')
    },
    mounted: function () {
      var node = this.$el
      var app = elm.embed(node, this.$props.flags)

      if (this.$props.ports) {
        this.$props.ports(app.ports);
      }
    }
  }
}
