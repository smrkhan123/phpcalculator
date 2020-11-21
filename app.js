var temp;
var opt;
var z;
function operate(id) {
    if (opt != undefined && opt != " ") {
        if (z == undefined || z == " ") {
            z = id;
            document.getElementById("demo").innerHTML = " ";
            z = document.getElementById("demo").innerHTML = z;
            z = parseInt(z);
        }
        else {
            z = z + id;
            document.getElementById("demo").innerHTML = " ";
            document.getElementById("demo").innerHTML = z;
            z = parseInt(z);
        }
    }
    else {
        temp = document.getElementById("demo").innerHTML;
        if (temp == " ") {
            temp = document.getElementById("demo").innerHTML = id;
        }
        else {
            temp = document.getElementById("demo").innerHTML = temp + id;
            temp = parseInt(temp);
        }
    }
}

// for getting the operator values 
function calc(id) {
    if (opt != undefined && opt != " ") {
        $.ajax({
            url : "ajax.php",
            method : "POST",
            data : {data: id, operator : opt, tempVar: temp, nextVar : z},
            dataType : "json"
        }).done(function(msg){
            document.getElementById("demo").innerHTML = msg.arr[0] ;
            temp = msg.arr[0];
            opt = msg.arr[3];
            console.log(opt);
            z = undefined;
        });
        
    } else {
        opt = id;
    }
}

// for calculating the values

function calculate() {
    $.ajax({
        url : "ajax.php",
        method : "POST",
        data : {data: opt, operator : opt, tempVar: temp, nextVar : z},
        dataType : "json"
    }).done(function(msg){
        document.getElementById("demo").innerHTML = msg.arr[0] ;
        temp = msg.arr[0];
        opt = undefined;
        console.log(opt);
        z = undefined;
    });
}

// for clearing the screen

function clear_screen() {
    temp = " ";
    opt = " ";
    z = " ";
    document.getElementById("demo").innerHTML = temp;
}