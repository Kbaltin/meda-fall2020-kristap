$(document).ready(function () {

    $("#textbox").keypress(function (event){
        
        console.log("Type")
      
        // Detects if the key 97 (lowercase a) is clicked then run the following codeblock.
        if (event.which === 97) {
            // .preventDefault() does not allow the normal action of the event, in this case, write a leter a in the textbox.
            event.preventDefault();

            // Assigns value to the textbox.
            $("#textbox").val("append");
        }
    });

    $(document).keypress(function (event) {
        
        // We place the value of the key pressed into a variable.
        var keyPressed = event.which;
        console.log(keyPressed);
        //Shows entire event for the speecific event.
        console.log(event);
        
    //    $("body").append(`<p>The ${keyPressed} key was pressed!</p>`);
    
    if (event.which === 103) {
        $("body").append("<div style='width: 100px; height: 100px; background-color: green; display: inline-block'></div>");
    }

        if (event.which === 98) {
        $("body").append("<div style='width: 100px; height: 100px; background-color: blue; display: inline-block'></div>");
    }

        if (event.which === 114) {
        $("body").append("<div style='width: 100px; height: 100px; background-color: red; display: inline-block'></div>");

    }

    });

});





// $.get();
// $.post();