function answer1(){
    if(document.querySelector(".q1").value=="sameer")
        document.querySelector(".answer-check").innerHTML="correct";
    else{
        document.querySelector(".answer-check").innerHTML="wrong";
    }
}
function answer2(){
    if(document.querySelector(".q2").value=="nothing")
    {
        document.querySelector(".answer-check2").innerHTML="correct";
        document.querySelector(".q2").remove();
    }
    else{
        document.querySelector(".answer-check2").innerHTML="wrong";
    }
}
function answer3(){
    if(document.querySelector(".q3").value=="waste")
    {
        document.querySelector(".answer-check3").innerHTML="correct";
        document.querySelector(".answer-check3").classList.add("invisible")
    }
    else{
        document.querySelector(".answer-check3").innerHTML="wrong";
    }
}