function increaseSize() {
  document.getElementsByClassName('title')[0].style.fontSize = '40px';
}

function defaultSize() {
  document.getElementsByClassName('title')[0].style.fontSize = '24px';
}

// Question 1 : Create an anchor tag with href attribute using Theme function in jQuery.
jQuery('.addData').append('<b>Question 1:</b><br>');
//This adds a link to the content
Drupal.theme.link = function () {
  var markup = '<a href="http://tothenew.com">This is a link!</a><br>';
  return markup;
};
var ans1 = Drupal.theme('link');
jQuery('.addData').append(ans1);

// Question 2 : Create a simple button and one(or two?) paragraph with text “Hi”.
// Once the button is clicked, the paragraph text should change to “Hello”.
// If button is clicked once again, the paragraph text should again change to “Hi”.
// This process must repeat on subsequent clicks.

jQuery('.addData').append('<br><b>Question 2:</b><br>');
Drupal.theme.buttonClick = function () {
  var markup = '<p id="changeText">Hi</p><button id="click">Click to change text</button><br><br>';
  return markup;
};

var ans2 = Drupal.theme('buttonClick');
jQuery('.addData').append(ans2);

jQuery('#click').click(function () {
  jQuery('#changeText').text(jQuery('#changeText').text() == 'Hi' ? 'Hello' : 'Hi');
})

// Question 3 : Show text value of Textbox in a <p></p> tag when user press Enter key.
jQuery('.addData').append('<b>Question 3:</b><br>');
Drupal.theme.link = function () {
  var markup = '<input type="text" id="paraText"><p id="addTextPara"></p>';
  return markup;
};

var ans3 = Drupal.theme('link');
jQuery('.addData').append(ans3);

jQuery('#paraText').keydown(function (e) {
  var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
  if (key == 13) {
    e.preventDefault();
    jQuery('#addTextPara').text(jQuery('#paraText').val());
  }
});

// Question 4 : Pass a variable & its value in Drupal behaviors settings
jQuery('.addData').append('<b>Question 4:</b><br>');
jQuery('.addData').append('<p id="abc"></p>');

(function ($) {
  'use strict';

  Drupal.behaviors.settingsExample = {
    attach: function (context, settings) {
      settings = settings || Drupal.settings;
      // console.log(settings.vartest);
      jQuery('#abc').once().append('<pre><b>' + JSON.stringify(settings.vartest, null, 4) + '</b></pre>');
    }
  };
}(jQuery));

// Question 5 : Add jquery validate to theme (http://cdn.jsdelivr.net/jquery.validation/1.15.0/jquery.validate.js)
// Link added in twig_theme.libraries.yml

// Question 6 : Validate textfield for required & minlength using validate jquery.
jQuery('.addData').append('<b>Question 6:</b><br>');
var form = '<form id="validateForm"><input type="text" id="validateField" name="inputField"/><input type="submit"></form>';
jQuery('.addData').append(form);
jQuery("#validateForm").validate({
  rules: {
    'inputField': {
      required: true,
      minlength: 5
    }
  },
});
