$(document).ready(function(){ 
    const target = document.getElementById('least_button');
    target.disabled = true;
    $('#least').on('keyup', function() {
        $('#least_count').html("( "+$(this).val().length+" ) You must enter at least 30 characters.");
        if($(this).val().length >= 30) {
            target.disabled = false;
        }
        else{
            target.disabled = true;
        }
    });
});
