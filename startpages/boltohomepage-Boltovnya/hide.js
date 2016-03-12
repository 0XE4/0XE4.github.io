$(function(){
    $('#searchb').on('keyup', function() {
        console.log($(this).val());
        if ($(this).val() == "Porn") 
            $('#porn').slideDown('fast')
        else 
            $('#porn').hide();
    });
});

$(function(){
    $('#pass').on('keyup', function() {
        console.log($(this).val());
        if ($(this).val() == "search") 
            $('#panel').slideDown('fast')
        else 
            $('#panel').hide();
    });
});

function cleartxt(){
    document.getElementByID("pass").value="";
}