 
    //This function write in the cell with 'x' (row, column) 
function writeX(x, y) {

    // Find a <table> element with id="myTable"
    var table = document.getElementById("myTable");
    
        //Find the cell
    var element = table.rows[x].cells.item(y);
       //write in HTML in the cell 
    element.innerHTML = `<i class="fas fa-times"></i>`;
};

function writeO(x, y) {

    // Find a <table> element with id="myTable"
    var table = document.getElementById("myTable");
    
        //Find the cell
    var element = table.rows[x].cells.item(y);

        //write in HTML in the cell 
    element.innerHTML = `<i class="far fa-circle"></i>`;
};

    //Mi problema es que quiero decir que a = 1 cada vez clicken en cell1
 function write1(){
    writeX(0,0);
};

function write2(){
    writeX(0,1);
};

function write3(){
    writeX(0,2);
};

function write4(){
    writeX(1,0);
};

function write5(){
    writeX(1,1);
};

function write6(){
    writeX(1,2);
};

function write7(){
    writeX(2,0);
};

function write8(){
    writeX(2,1);
};

function write9(){
    writeX(2,2);
};

    //Call to the element of the table
var cell1 = document.getElementById("cell1");
var cell2 = document.getElementById("cell2");
var cell3 = document.getElementById("cell3");
var cell4 = document.getElementById("cell4");
var cell5 = document.getElementById("cell5");
var cell6 = document.getElementById("cell6");
var cell7 = document.getElementById("cell7");
var cell8 = document.getElementById("cell8");
var cell9 = document.getElementById("cell9");

    //What's it happen when the user clicks on the cell?
cell1.addEventListener("click", write1);
cell2.addEventListener("click", write2);
cell3.addEventListener("click", write3);
cell4.addEventListener("click", write4);
cell5.addEventListener("click", write5);
cell6.addEventListener("click", write6);
cell7.addEventListener("click", write7);
cell8.addEventListener("click", write8);
cell9.addEventListener("click", write9);





