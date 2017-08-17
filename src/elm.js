module.exports = function (elm) {
  return {
    props: {
      ports: { required: false },
      reference: { required: true }
    },
    render: function (createElement, _context) {
      return createElement('div', { ref: this.$props.reference })
    },
    mounted: function () {
      var node = this.$refs[this.$props.reference]
      var app = elm.embed(node)

      if (this.$props.ports) {
        this.$props.ports(app.ports);
      }
    }
  }
}
