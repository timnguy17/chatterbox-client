// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done

    setTimeout(function() {
      RoomsView.render();
    }, 1000);

    RoomsView.$button.on( 'click', null, RoomsView.handleClick);
    RoomsView.$select.on( 'click', 'value', RoomsView.handleChange);

  },

  render: function() {
    console.log(Rooms._data);
    Rooms._data.forEach((roomName) => this.renderRoom(roomName));
    // TODO: Render out the list of rooms.
  },

  renderRoom: function(roomname) {
    var $roomName = $('<option></option>').attr('value', roomname).text(roomname);

    this.$select.append($roomName);

    // TODO: Render out a single room.
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    console.log('Pizza');
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    //invoke the add room function
    console.log('poop');
  }

};
