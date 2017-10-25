// Select color input
let color = null;

// Select size input
let height = 1, width = 1;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
    event.preventDefault();
    height = $('#input_height').val();
    width = $('#input_width').val();
    color = $('#colorPicker').val();

    makeGrid(height, width, color);
});


function makeGrid(height, width, color) {
    // clear the canvas
     $('#pixel_canvas').empty();

    for(let i = 0; i < height; i++){
        const tr = $("<tr></tr>");
        $('#pixel_canvas').append(tr)
        for(let j = 0; j < width; j++){
            const td = $("<td></td>");
            td.click(function(event){
                td.css("background-color", color);
            });
            tr.append(td);
        }
    }
}
