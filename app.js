var variable1; var operator; var variable2;
function operate(id) {
    if (operator != undefined && operator != " " && variable1 != undefined) {
        if (variable2 == undefined || variable2 == " ") {
            variable2 = id;
            variable2 = document.getElementById("demo").innerHTML = variable2;
        }
        else {
            variable2 = variable2 + id;
            document.getElementById("demo").innerHTML = variable2;
        }
    } else {
        variable1 = document.getElementById("demo").innerHTML;
        if (variable1 == " ") {
            variable1 = document.getElementById("demo").innerHTML = id;
        }
        else {
            variable1 = document.getElementById("demo").innerHTML = variable1 + id;
        }
    }
}
// for getting the operator values 
function calc(id) {
    if (operator != undefined && operator != " ") {
        if(variable2 == undefined) {
            operator = id;
        } else {
            $.ajax({
                url : "ajax.php",
                method : "POST",
                data : {data: id, operator : operator, tempVar: variable1, nextVar : variable2},
                dataType : "json"
            }).done(function(msg){
                document.getElementById("demo").innerHTML = msg.arr[0] ;
                variable1 = msg.arr[0];
                operator = msg.arr[3];
                console.log(operator);
                variable2 = undefined;
            });
        }
        
    } else {
        operator = id;
    }
}
// for calculating the values
function calculate() {
    $.ajax({
        url : "ajax.php",
        method : "POST",
        data : {data: operator, operator : operator, tempVar: variable1, nextVar : variable2},
        dataType : "json"
    }).done(function(msg){
        document.getElementById("demo").innerHTML = msg.arr[0] ;
        variable1 = msg.arr[0];
        operator = undefined;
        console.log(operator);
        variable2 = undefined;
    });
}
// for clearing the screen
function clear_screen() {
    variable1 = " ";
    operator = " ";
    variable2 = " ";
    document.getElementById("demo").innerHTML = variable1;
}