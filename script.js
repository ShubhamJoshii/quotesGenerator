let i=0;
let dataQ, dataQAuthor;
const next=() => {
    i++
    fetch("https://type.fit/api/quotes")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data[i]);
        dataQ = data[i].text
        dataQAuthor = data[i].author
        document.getElementById('thoughts').innerHTML=dataQ;
        document.getElementById('thoughtsAuthor').innerHTML="~ " + dataQAuthor;
    });
}
const previous=() => {
    i--;
    fetch("https://type.fit/api/quotes")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data[i]);
        dataQ = data[i].text
        dataQAuthor = data[i].author
        document.getElementById('thoughts').innerHTML=dataQ;
        document.getElementById('thoughtsAuthor').innerHTML="~ " + dataQAuthor;
    });
}

next();
let a = 0;
const changeON = ()=>{
    if(a%2 == 0){
        document.getElementById('like').src="./Picture/likeRed.jpg";
        a++;
    }
    else{
        document.getElementById('like').src="./Picture/like.jpg";
        a++;
    }
}

let b = 0;
const Save_change = ()=>{
    if(b%2 == 0){
        document.getElementById('save').src="./Picture/saveon.png";
        b++;
    }
    else{
        document.getElementById('save').src="./Picture/save.png";
        b++;

    }
}


const loading = ()=>{
    setTimeout(()=>{
        document.getElementById('loading').style.display="none";
    },5000)
}
