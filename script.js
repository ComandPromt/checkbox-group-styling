/** Notice
The input MUST come before the label, or else the `checked` state will not work!
*/

/**
Vue js is not required for this, I am using it to show that the buttons do in fact work as expected.
*/
new Vue ({
  el: 'body',
  data: {
    checked: []
  },
  computed: {
    requiredErrorMsg: function () {
      return 'Required fruit !!'
    },
    minlengthErrorMsg: function () {
      return 'Please chose at least 1 fruit !!'
    },
    maxlengthErrorMsg: function () {
      return 'Please chose at most 2 fruits !!'
    }
  }
})