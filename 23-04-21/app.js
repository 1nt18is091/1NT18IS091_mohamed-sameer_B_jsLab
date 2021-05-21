var arr=[];
document.querySelector(".a1").addEventListener(("click"),function(){
    var x=document.querySelector(".a1").innerHTML;
    document.querySelector(".a1").remove();
    arr.push(x);
    alert(arr);
});
document.querySelector(".a2").addEventListener(("click"),function(){
    var x=document.querySelector(".a2").innerHTML;
    document.querySelector(".a2").remove();
    arr.push(x);
    alert(arr[1]);
});
document.querySelector(".a3").addEventListener(("click"),function(){
    var x=document.querySelector(".a3").innerHTML;
    document.querySelector(".a3").remove();
    arr.push(x);
    alert(arr[2]);
});
