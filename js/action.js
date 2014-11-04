 $(function() {

        $('#action_form').bind('submit', function(e){
            var form = $(this);
            var buttons = form.find('button[type=submit]');


            buttons.attr('disabled', 'disabled').text('Working...');
            
            $.post(form.attr('action'), form.serialize(), function(data){
                $action_widget = document.getElementById('action_widget');
                $action_widget.className = ( $action_widget.className == 'share-widget' )? '' : 'share-widget';
            });

            e.preventDefault(); 
        }); 
        

});

/*
$(document).ready(function() {
     $('button[type="submit"]').attr('disabled','disabled');
     $('input[type="text"]').keyup(function() {
        if( $('#input-name').val() != '' && $('#input-email').val().indexOf('@') >= 0)  {
           $('button[type="submit"]').removeAttr('disabled');
          }
       });
     });
 */
