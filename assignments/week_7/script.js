$(document).ready(function () {
  
   setTimeout(function () {
    var myBox = $("#box");   
    myBox.css("background-color", "red");
   }, 3000);

    setTimeout(function () {
        var myBox = $("#box");
        myBox.css("background-color", "green");
    }, 6000);

    var orangeButton = $("#orange-button");

    orangeButton.click(function () {
        $("#box").css("background-color", "orange");
    });

    var purpleButton = $("#purple-button");

    purpleButton.click(function () {
        $("#box").css("background-color", "purple");
    });

    $("#pink-button").click(function () {
        $("#box").css("background-color", "pink");
    });

    // var element saves time, as opposed to using it individually like in lines 9, 10.
    // var myBox = $("#box"); // jQuery();
    // myBox.css("background-color", "red");
    
    // myBox.css();

    //$("#box").css();
    //$("#box").css();

});