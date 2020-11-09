$(document).ready(function() {
  $('.nice-select').niceSelect();
  $('#print').click(function(){
    window.print();
    return;
  });


  function datePickerSelect(date) {
    const selectedElement = $('.dp_selected')[0];
    if ($('.dp_selected .date-picker-tooltip').length === 0) {
      $('#tooltip').clone().removeAttr('id').appendTo(selectedElement);
    }
  }


  $('.date-picker').Zebra_DatePicker({
    always_visible: $('#date-picker-container'),
    days: ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ' ],
    months: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень', ],
    navigation: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    disabled_dates: ['29 10 2020', '30 10 2020', '31 10 2020', '1 11 2020', '2 11 2020', '3 11 2020', '4 11 2020'],
    select_other_months: true,
    onSelect: datePickerSelect,
  });

});