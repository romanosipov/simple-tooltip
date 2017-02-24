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

    var target = $(e.target);

    var x = target.offset().left + target.width() + 20;
    var y = target.offset().top + (target.height() / 2) - (tooltip.height() / 2) - 10;

    tooltip.css({left: x, top: y});
  });

  $('.masterTooltipUp').hover(function(){
    if ($(this).attr("tooltip")) {
      $(this).attr("title", $(this).attr("tooltip"));
    }
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

    var target = $(e.target);

    var x = target.offset().left + (target.width() / 2) - ((tooltip.width()+ 20) / 2);
    var y = target.offset().top - target.height() - tooltip.height() - 10;

    tooltip.css({left: x, top: y});
  });
});
