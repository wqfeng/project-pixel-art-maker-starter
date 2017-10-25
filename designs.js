// Select color input
let color = null;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
    event.preventDefault();
    const height = $('#input_height').val();
    const width = $('#input_width').val();
    color = $('#colorPicker').val();

    makeGrid(height, width);
});

$('#colorPicker').change(function(event){
    color = $('#colorPicker').val();
});


function makeGrid(height, width) {
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
