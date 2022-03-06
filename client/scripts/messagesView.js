// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    MessagesView.$chats.on( 'click', '.chat', MessagesView.handleClick);

    setTimeout(function() {
      // console.log(Messages._data);
      MessagesView.render();
    }, 1000);
  },

  render: function() {
    // TODO: Render _all_ the messages.
    //I - none, use Messages._data
    //O - none
    //C - none
    //E - none

    //Psuedocode
    //iterate Messages._data up to latest 15 messages
    //pass current object over to renderMessage

    for ( var i = 0; i < 15; i++) {
      MessagesView.renderMessage(Messages._data[i]);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    //I - message (object)
    //O - none
    //C - none
    //E - may have to account for differnt rooms

    //Psuedocode
    //invoke MessagView.render and pass input object
    //create jquery variable with results of render_.template
    let renderedMessage = MessageView.render(message);
    var $message = $(renderedMessage);
    $message.addClass(message.username);
    MessagesView.$chats.append($message);

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    console.log('poop');
  }

};