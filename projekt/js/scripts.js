// Custom scripts

var form = document.getElementById('bookForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  event.stopPropagation;

  $.get( "https://www.lukassvoboda.cz/coding/bootstrap2020/ajax.php", $( "#bookForm" ).serialize() ,function( data ) {
    $( ".result" ).html( data );
    $( "#bookForm" ).hide();
  });
  
});

// Modal open
$('#bookModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget);
  var estateId = button.data('flat');

  console.log('open modal');

  var modal = $(this);
  modal.find('#bytID').html(estateId);
  modal.find('#flatID').val(estateId);
})

