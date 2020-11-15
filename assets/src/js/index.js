$(document).ready(function() {
  // nice-select init
  $('.nice-select').niceSelect();

  // print button handler
  $('#print').click(function(){
    window.print();
    return;
  });

  // date-picker init
  $('.date-picker').Zebra_DatePicker({
    always_visible: $('#date-picker-container'),
    days: ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ' ],
    months: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень', ],
    navigation: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    disabled_dates: ['29 10 2020', '30 10 2020', '31 10 2020', '1 11 2020', '2 11 2020', '3 11 2020', '4 11 2020'],
    select_other_months: true,
    onChange: initDateTooltip,
    onSelect: openModal,
  });

  // add listener for days
  function initDateTooltip() {
    $('.dp_daypicker.dp_body td').mouseover(function() {
      if ($(this).find('.date-picker-tooltip').length === 0) {
        $('#tooltip').clone().removeAttr('id').appendTo(this);
      }
    });
  }

  // openModal
  function openModal() {
    $("#calendarModal").modal()
  }

  // mobile navigation
  $('.burger').click(function(){
    $(this).toggleClass('open');
    $('.menu').toggleClass('open');
  });
  $('.burger').click(function(){
    $(this).toggleClass('open');
    $('.overlley').toggleClass('d-block');
  });

  // project cost show/hide icons
  $('.project-cost-main .btn-link').click(function(){
    $(this).find('.plus').toggleClass('d-none');
    $(this).find('.icon-block .done').toggleClass('d-block');
  });

  // wow init
  new WOW().init();

  // project-cost more button handler
  $('button.more').click(function(){
    $(this).toggleClass('rotate');
    $(this).find('span').toggleClass('d-none');
    $('.table .hidden').toggleClass('open');
  })
});