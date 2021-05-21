let x=0;
let i=0;
var ar=[{}];
document.querySelector(".name").innerHTML;
alert("hi")
function deter () {
    var x=Math.random();
    x=x*100;
    x=Math.floor(x)+1;
    var n=document.querySelector(".name").value;
    ar=[{
        id:(i+1),
        name:n,
        Horoscope:document.querySelector(".hor").value,
        luckn:x,
        log:ar=[],
        show:function ()
        {
            console.log(name);
            console.log(this);
        }
    }]
    alert(ar[0].name+" Your new luck number "+ar[0].luckn);
}


