let studArr=[{
    "gameId":1,
    "gameName":"Sameer",
    "rating":"shgsags",
    "genre":["FPS","Adventure"],
    "year":"2011"
}];
document.querySelector(".btn").addEventListener("click",function (event){
    event.preventDefault();
    let genre=[];
    let gameId=document.querySelector(".gameId").value;
    let gameName=document.querySelector(".gameName").value;
    let rating=document.querySelector(".rating").value;
    let year=document.querySelector(".year").value;

    if(document.querySelector('#fps:checked') !==null){
        genre.push(document.querySelector('#fps:checked').value);
    }

    if(document.querySelector('#adv:checked') !==null){
        genre.push(document.querySelector('#adv:checked').value);
    }

    if(document.querySelector('#act:checked') !==null){
        genre.push(document.querySelector('#act:checked').value);
    }

    if(document.querySelector('#puz:checked') !==null){
        genre.push(document.querySelector('#puz:checked').value);
    }

    let gameIdReg=/[0-9]{3}/g;
    let idcheck=gameIdReg.test(gameId);
    console.log(idcheck);
    if(idcheck==false){
        alert("Only 3 digits");
        return false;
    }

    let gameNameReg=/(GA|ga)([A-Z]{2})([0-9]{3})/g;
    let namecheck=gameNameReg.test(gameName);
    console.log(namecheck);
    if(namecheck==false){
        alert("Enter correct format eg:GAEA091 or gaGY011");
        return false;
    }

    let gameRatingReg=/[0-5]{1}/g;
    let ratingcheck=gameRatingReg.test(rating);
    console.log(ratingcheck);
    if(ratingcheck==false){
        alert("between [0-5]");
        return false;
    }

    let gameYearReg=/(20)([0-9]{2})/g;
    let yearcheck=gameYearReg.test(year);
    console.log(yearcheck);
    if(yearcheck==false){
        alert("enter an year");
        return false;
    }

    studObj={
        "gameId":gameId,
        "gameName":gameName,
        "rating":rating,
        "genre":genre,
        "year":year
    }
    studArr.push(studObj);
    console.log(studObj);
    console.log(studArr);
});


