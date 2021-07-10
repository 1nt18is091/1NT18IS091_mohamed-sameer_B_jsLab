let heritage=[
    {
        id:1,
        name:"ABC",
        location:"Hampi",
        built_on:"1977",
        built_by:"XYZ",
        maintain:"Kartantake State"
    }
]

document.querySelector(".btn").addEventListener("click",function(event){
    event.preventDefault();
    let id=document.querySelector(".id").value;
    let name=document.querySelector(".name").value;
    let location=document.querySelector(".location").value;
    let year=document.querySelector(".year").value;
    let built_by=document.querySelector(".built_by").value;
    let maintain=document.querySelector(".maintain").value;


    let idRegex=/(KE|ke|Ke|kE)([0-9]{3})/g;
    let idcheck=idRegex.test(id);
    console.log(idcheck);
    if(idcheck==false){
        alert("Enter a ID in the form of KE003/KE101");
        return false;
    }

    let yearRegex=/(?:(?:19|18|17)[0-9]{2})/g;
    let yearcheck=yearRegex.test(year);
    console.log(yearcheck);
    if(yearcheck==false){
        alert("Enter Year from 1700-1999");
        return false;
    }

    heritageObj={
        "name":name,
        "location":location,
        "year":year,
        "built_by":built_by,
        "year":year,
        "maintain":maintain
    }
    heritage.push(heritageObj);
    console.log(heritageObj);
    console.log(heritage);
})

document.querySelector(".search").addEventListener("click",function(event){
    event.preventDefault();
    let search_name=document.querySelector(".name_search").value;
    heritage.forEach(element => {
        if(element.name.toLocaleLowerCase()=== search_name.toLocaleLowerCase()){
            document.querySelector(".content-name").innerHTML= element.name;
            document.querySelector(".content-location").innerHTML= element.location;
            document.querySelector(".content-year").innerHTML= element.year;
            document.querySelector(".content-built-by").innerHTML= element.built_by;
            document.querySelector(".content-maintain").innerHTML= element.maintain;
        }
        else{
            document.querySelector(".content-name").innerHTML= "Sorry not found in the db";
            
        }
    });
})