$(document).ready(function() {
  // Tooltip only Text
  $('.masterTooltip').hover(function(){
    // Hover over code
    var title = $(this).attr('title');
    $(this).data('tipText', title).removeAttr('title');
    $('<p class="tooltip"></p>')
    .text(title)
    .appendTo('body')
    .fadeIn('slow');
  }, function() {
    // Hover out code
    $(this).attr('title', $(this).data('tipText'));
    $('.tooltip').remove();
  }).mousemove(function(e) {
    var mousex = e.pageX + 20; //Get X coordinates
    var mousey = e.pageY + 10; //Get Y coordinates
    $('.tooltip').css({ top: mousey, left: mousex })
  });

  $('.masterTooltipRight').hover(function(){
    var title = $(this).attr('title');
    $(this).data('tipText', title).removeAttr('title');
    $('<p class="tooltip" style="position: absolute;"></p>')
    .text(title)
    .appendTo('body')
    .fadeIn('slow');
  }, function() {
    $(this).attr('title', $(this).data('tipText'));
    $('.tooltip').remove();
  }).mousemove(function(e) {
    var tooltip = $('.tooltip');

    var x = e.target.offsetLeft + e.target.offsetWidth + 20;
    var y = e.target.offsetTop - tooltip.height() / 2 - e.target.offsetHeight;

    tooltip.css({left: x, top: y});
  });

  $('.masterTooltipUp').hover(function(){
    var title = $(this).attr('title');
    $(this).data('tipText', title).removeAttr('title');
    $('<p class="tooltip" style="position: absolute;"></p>')
    .text(title)
    .appendTo('body')
    .fadeIn('slow');
  }, function() {
    $(this).attr('title', $(this).data('tipText'));
    $('.tooltip').remove();
  }).mousemove(function(e) {
    var tooltip = $('.tooltip');

    var x = e.target.offsetLeft - tooltip.width() / 2;
    var y = e.target.offsetTop - e.target.offsetHeight - tooltip.height() - 30;

    tooltip.css({left: x, top: y});
  });
});
