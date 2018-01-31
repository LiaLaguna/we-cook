$(document).ready(function(){

  $('.btn-send').click(paintCommentInHtml);

// Función para mostrar comentarios
  function paintCommentInHtml(e){
    e.preventDefault();

    // Tomando valor del input y poniéndolo en una variable
    var $newComment = $(".comment").val();

    // Creando elementos con DOM
    var $commentRow = $('<div />', {'class' : 'row ml-2 mt-1'});
    var $commentCol = $('<div />', {'class' : 'col-12'});
    var $commentText = $('<p />', {'class' : 'txt08 mb-0'});

    // Asignando valores
    $commentText.text($newComment);
    $commentCol.append($commentText);
    $commentRow.append($commentCol);
    $('#comments-feed').append($commentRow);

    // Limpiando valores del form
    $(".comment").val(" ");

  }

});
