// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    //Psuedocode
    //We need to get the username
    //We need to get the current room
    //We need to get the text from input field

    //We need to create an object using the above info, with each
    //piece of information as its own property

    //Send the info object to the Parse.create() methhod as an argument

    //Use parse.ReadAll the same way that it was used in App.js
    //create cb function in parameter
    //get first property of data object and render it to the messages page
    // Stop the browser from submitting the form
    event.preventDefault();
    console.log(window);
    console.log(event);

    var username = window.App.username;
    var room = $('option:selected')[0].innerText;
    var inputmessage = $('#message')[0].value;

    let message = {
      roomname: room,
      text: inputmessage,
      username: username
    };

    Parse.create(message);

    // Parse.readAll((data) => {
    //   for (var key in data)



    // };
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

    console.log('click!');
    // console
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('enabled', status);
  }

};