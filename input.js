$(document).ready(function() {
	
	var d = new Date();
	document.getElementById("date").innerHTML = d.toDateString();
	
    $('.listItemInput').focus();

    $(document)
    // Add to  monday list
    .on('click', '#addMonday', function() {
        var itemToAdd = $('input[id="monItemInput"]').val().trim();
        if ( itemToAdd ) {
            $('.monlistItems').append('<div class="input"><input type="checkbox" name="item" class="item" value="' + itemToAdd + '" /> '+ itemToAdd +'</div>');
        }
        $('#monItemInput').val('').focus();
		
    })
	
    $(document)
    // Add to  tuesday list
    .on('click', '#addTuesday', function() {
        var itemToAdd = $('input[id="tuesItemInput"]').val().trim();
        if ( itemToAdd ) {
            $('.tueslistItems').append('<div class="input"><input type="checkbox" name="item" class="item" value="' + itemToAdd + '" /> '+ itemToAdd +'</div>');
        }
        $('#tuesItemInput').val('').focus();
		
    })	

    $(document)
    // Add to  wednesday list
    .on('click', '#addWednesday', function() {
        var itemToAdd = $('input[id="wedItemInput"]').val().trim();
        if ( itemToAdd ) {
            $('.wedlistItems').append('<div class="input"><input type="checkbox" name="item" class="item" value="' + itemToAdd + '" /> '+ itemToAdd +'</div>');
        }
        $('#wedItemInput').val('').focus();
		
    })	
	
    $(document)
    // Add to  thursday list
    .on('click', '#addThursday', function() {
        var itemToAdd = $('input[id="thursItemInput"]').val().trim();
        if ( itemToAdd ) {
            $('.thurslistItems').append('<div class="input"><input type="checkbox" name="item" class="item" value="' + itemToAdd + '" /> '+ itemToAdd +'</div>');
        }
        $('#thursItemInput').val('').focus();
		
    })
	
    $(document)
    // Add to  friday list
    .on('click', '#addFriday', function() {
        var itemToAdd = $('input[id="friItemInput"]').val().trim();
        if ( itemToAdd ) {
            $('.frilistItems').append('<div class="input"><input type="checkbox" name="item" class="item" value="' + itemToAdd + '" /> '+ itemToAdd +'</div>');
        }
        $('#friItemInput').val('').focus();
		
    })
	
	
    // Add to list
    .on('click', '.addToList', function() {
        var itemToAdd = $('input[name="listItemInput"]').val().trim();
        if ( itemToAdd ) {
            $('.listItems').append('<div class="input"><input type="checkbox" name="item" class="item" value="' + itemToAdd + '" /> '+ itemToAdd +'</div>');
        }
        $('.listItemInput').val('').focus();
		
    })
    
    // Remove from list
    .on('change', '.item', function() {
        if( $(this).is(':checked') ){
            var parentElem = $(this).parent();
                parentElem.remove();
        }
    });
    
    $('.addToListForm').submit( function(e) {
        e.preventDefault();
        return false;
    }); 
	


});
