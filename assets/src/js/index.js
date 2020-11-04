$(document).ready(function() {
  $('.nice-select').niceSelect();
  $('#print').click(function(){
    window.print();
    return;
  });
  $('.datepicker').Zebra_DatePicker({
    always_visible: $('#date-picker-container')
  });;

});