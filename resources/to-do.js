var list_of_completed_items = [];
var indexes = [];


function addItem(){
    if($("#item").val() === ''){
        return;
    }
    $('ul').append('<li>'+$("#item").val()+'</li>');
    $('#item').val(''); //clear textbox for next input
}

function completeTask(){
    $('li').click(function() {
        list_of_completed_items.push($(this).text());
        $(this).wrap("<strike>"); //mark list item as complete
    });
}


function clearCompleted(){
    if(list_of_completed_items.length === 0){
        alert("There are no completed items.");
        return;
    }
    for(i=0; i<$('ul li').length; i++){
        if(list_of_completed_items.includes($('ul li').eq(i).text())){
            $('ul li').eq(i).remove();
        }
        if(list_of_completed_items.includes($('ul li:last-child').text())){
            $('ul li:last-child').remove();
        }
    }
    list_of_completed_items = [];
}

