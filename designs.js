// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(function(){

	//code goes here

	function makeGrid(height, width) {
        //create inside table tags
       const tRowBegin = "<tr>";
       const tRowClose = "</tr>";
       const tableData = "<td></td>";
       //
       let table = "";
       let i = 0;
       
       while (i < height) {
           table += tRowBegin;
           for (let x = 0; x < width; x++) {
               table += tableData;
           }
           table += tRowClose;
           i++;
       }
       $("#pixelCanvas").html(table);

   }

   //
   $("#sizePicker").submit(function (event) {
       event.preventDefault();
       let width = Number($("#inputWidth").val());
       let height = Number($("#inputHeight").val());
       makeGrid(height, width);
   });

   //attach an event to all td's
   $("table").on("click", "td", function () {
       let color = $("#colorPicker").val();
       $(this).css("background", color);
   });





})

