$('#exampleModal').on('show.bs.modal', function (event) {
    debugger
    let button = $(event.relatedTarget) // Button that triggered the modal
    let recipient1 = button.data('team1') 
    let recipient2 = button.data('team2')
    // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text(recipient1 + ' vs ' + recipient2)
    modal.find('.modal-body input').val(recipient1)
  })