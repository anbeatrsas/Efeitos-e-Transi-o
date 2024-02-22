$(".miniatura").on("mouseover", function (){

    var src = $(this).attr("src");

    $("#principal").attr("src", src);

});