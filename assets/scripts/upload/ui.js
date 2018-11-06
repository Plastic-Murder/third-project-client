'use strict'

const store = require('../store.js')

const signUpSuccess = function () {
  $('#display-message').html('Sign Up Successful! Please log in')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  $('#signInBox').removeClass('hidden')
  $('#signUpBox').addClass('hidden')
}

const signUpFailure = function () {
  $('#display-message').html('Sign Up Failure, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#display-message').html('Signed In As: ' + store.user.email + ', User ID: ' + store.user.id)
  $('#display-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').addClass('hidden')
  $('#signInBox').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('.database').removeClass('hidden')
  // $('#indexBikes').removeClass('hidden')
  // $('#create-bike-form').removeClass('hidden')
  // $('#show-bike-form').removeClass('hidden')
  // $('#update-bike-form').removeClass('hidden')
  // $('#delete-bike-form').removeClass('hidden')
}

const signInFailure = function () {
  $('#display-message').html('Sign In Failure, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#display-message').html('Sign Out successful')
  $('#display-message').css('color', 'green')
  $('#signInBox').removeClass('hidden')
  // $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#upload-form').addClass('hidden')
}

const changePasswordSuccess = function () {
  $('#display-message').html('Password Change Successful')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#display-message').html('Password Change Failure, please try again')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  signUpFailure,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
}