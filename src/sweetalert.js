var React = require('react');

var SweetAlert = React.createClass({

  propTypes: {
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string,
    type: React.PropTypes.oneOf(['warning', 'error', 'success', 'info']),
    allowOutsideClick: React.PropTypes.bool,
    showCancelButton: React.PropTypes.bool,
    confirmButtonText: React.PropTypes.string,
    confirmButtonColor: React.PropTypes.string,
    cancelButtonText: React.PropTypes.string,
    closeOnConfirm: React.PropTypes.bool,

  },

  getDefaultProps: function() {
    return {
      text: '',
      type: null,
      allowOutsideClick: false,
      showCancelButton: false,
      closeOnConfirm: true,
      closeOnCancel: true,
      confirmButtonText: 'OK',
      confirmButtonColor: '#AEDEF4',
      cancelButtonText: 'Cancel',
      imageUrl: null,
      imageSize: null,
      timer: null,
      customClass: '',
      html: false,
      animation: true,
      allowEscapeKey: true
    };
  },

  render: function() {
    return (
      <div>
        SweetAlert
      </div>
    );
  }

});

module.exports = SweetAlert;