let inpNumber;
let counter = 0;
let number = Math.floor((Math.random() * 100) + 1);

document.getElementById("check").addEventListener("click", function(){
    check_number();
});

document.getElementById("inp_number").addEventListener("keyup",function(event){
    if (event.which === 13){
        check_number();
    };
});
    function check_number(){
        counter++
        document.getElementById("inp_counter").innerHTML= "Try :" +counter;
        inpNumber = document.getElementById("inp_number").value;
        
        if (inpNumber == number){
            if(counter>5){
                document.getElementById("answer").innerHTML= "You guess after"+ counter+"times";
            }else{
                setTimeout(() => {alert("You are actually talented You guess after"+ counter+"times")
                }, 100); 
            }
            setTimeout(() => {
                var onceMore = confirm("Do you wanna play again");
            },1000) 
                
            if (onceMore == true){
                counter = 0;
                number = Math.floor((Math.random()*100)+1);
                document.getElementById("answer").innerHTML = "";
                document.getElementById("inp_counter").innerHTML = "";
            }
            else {
                document.getElementById("answer").innerHTML= ""
                document.getElementById("inp_counter").innerHTML = ""
                alert("Have a good day")
            }
        }
        else if (inpNumber.indexOf('.') != -1 || inpNumber.indexOf(',') != -1){alert("This is not a natural number")}
        else if (inpNumber > 100 || inpNumber < 0 ){alert("between 0 and 100")}
        else if (isNaN(inpNumber) || inpNumber==""){alert("Not a number")}
        else if (inpNumber > number){document.getElementById("answer").innerHTML="I am thinking about lower number ";}
        else if (inpNumber < number){document.getElementById("answer").innerHTML="I am thinking about higher number ";}
    
    document.getElementById("inp_number").value= "";
    
    

    }