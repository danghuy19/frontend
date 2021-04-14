$(document).ready(function () {
  $("#single_item").slick({
    dots: true 
  });

  $('#multiple_items').slick({
    dots:true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  $('#responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  $('#variable_width').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

  $('#adaptive_height').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $('#center').slick({
    dots:true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3
  });

  $('#lazy').slick({
    dots: true,
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1
  });

  $('#autoplay').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500
  });

  $('#fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  var slideIndex = $('#add_remove >div').length;
  $('#add_remove').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  $('#add_slide').on('click', function () {
    slideIndex++;
    $('#add_remove').slick('slickAdd', '<div><h1>' + slideIndex + '</h1></div>');
  });
  $('#remove_slide').on('click', function () {
    $('#add_remove').slick('slickRemove', slideIndex - 1);
    if (slideIndex !== 0) {
      slideIndex--;
    }
  });
});
