
// Zmizení alertu
const promena = 'Alert';

$('#myAlert').on('closed.bs.alert', function () {
  console.log(`Nejaky text ${promena} zmizel`); // Novejsi zapis stringu
  console.log('Nejaky text ' + promena + ' zmizel'); // Klasicky zapis
})


// Popover init
$('[data-toggle="popover"]').popover();

// Tooltip init
$('[data-toggle="tooltip"]').tooltip()


// Sledování carouselu
$('#carouselExampleControls').on('slide.bs.carousel', function () {
  console.log($('#carouselExampleControls .active').index('#carouselExampleControls .carousel-item'));
  
  // Async call to php
  $.get("ajax.php", { idSlide: $('#carouselExampleControls .active').index('#carouselExampleControls .carousel-item') } , function( data ) {
    $("#carouselContent").html(data);
  });

})