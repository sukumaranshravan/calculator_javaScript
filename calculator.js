num_list = []
last_num = num_list.length
function number(value){
    var text = value
       if(value<='9'){
        document.getElementById("screen").value += text 

       }else if(value==='Math.sqrt'){
        var num_for_sqrt = document.getElementById("screen").value
        if(num_for_sqrt===""){
            document.getElementById("screen").value ="Enter Number"
            // setTimeout='100'
        }else{
            document.getElementById("screen").value = Math.sqrt(parseFloat(num_for_sqrt))
        }        
       }
    }

function result(){
    var answer=document.getElementById("screen").value
    document.getElementById("screen").value =eval(answer)
}

function fun(value){
    if(value==='on'){
        document.getElementById("screen").value=""
    } 
    else if(value ==='ac'){
        document.getElementById("screen").value=""
    }
}

