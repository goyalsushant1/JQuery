function increaseSize() {
  // document.getElementsByClassName('title')[0].style.fontSize = '40px';
}

function defaultSize() {
  // document.getElementsByClassName('title')[0].style.fontSize = '24px';
}

// // Question 1
// Drupal.theme.link = function () {
//   var markup = '<a href="#">This is a link!</a>';
//   return markup;
// };

// var ans1 = Drupal.theme('link');
// jQuery('.addData').append(ans1);

// // Question 2
// Drupal.theme.buttonClick = function () {
//   var markup = '<p id="changeText">Hi</p><button id="click">Click to change text</button><br><br>';
//   return markup;
// };

// var ans2 = Drupal.theme('buttonClick');
// jQuery('.addData').append(ans2);

// jQuery('#click').click(function () {
//   jQuery('#changeText').text(jQuery('#changeText').text() == 'Hi' ? 'Hello' : 'Hi');
// })

// // Question 3
// Drupal.theme.link = function () {
//   var markup = '<input type="text" id="paraText"><p id="addTextPara"></p>';
//   return markup;
// };

// var ans3 = Drupal.theme('link');
// jQuery('.addData').append(ans3);

// jQuery('#paraText').keydown(function (e) {
//   var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
//   if (key == 13) {
//     e.preventDefault();
//     jQuery('#addTextPara').text(jQuery('#paraText').val());
//   }
// });

// // Question 4

// (function ($) {
//   'use strict';

//   Drupal.behaviors.awesome = {
//     attach: function (context, settings) {
//       settings = settings || Drupal.settings;
//       console.log(settings.vartest);
//     }
//   };

// }(jQuery));
