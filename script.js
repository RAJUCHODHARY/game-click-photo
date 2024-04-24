let btn = document.querySelector('.btn');
let box = document.querySelector('.box');
let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let imagearea = document.querySelector(".imagearea")

btn.addEventListener('click', coll);

function coll() {
    box1.classList.add('box2');
    box1.classList.remove('box1');
    box2.classList.remove('box2');
    box2.classList.add('box1')
    let div = document.createElement('div');
    div.classList.add('div');
    let img1 = document.createElement('img');
    img1.src = "thor.png";
    img1.classList.add('img1');
    div.append(img1)
    let btn1 = document.createElement('button');
    btn1.innerText = "start game"
    btn1.classList.add('btn')
    div.append(btn1);
    box2.append(div);
    btn1.addEventListener('click', add);
}


let clears,h1,htag;

function add() {
    box2.classList.add('box2');
    // box3.classList.remove('box3');
    box3.classList.add('imagearea')
    
     h1=document.createElement('h1')
     htag=document.createElement('h1');
     box3.append(htag)
    box3.append(h1);
    
    
     clears = setInterval(hello, 1000)
}

let counts = 0,num=0;

function hello() {
    counts++;
    const x=box3.clientHeight;
        const y=box3.clientWidth;
        console.log(x,y)
    if (counts <= 60) {
                    
       
        h1.innerText=counts;
       let  icon = document.createElement('img');
        icon.src = "thor1.png"
        icon.classList.add('icon')
        icon.style.top=getrand(x,y)[1]+"px";
        icon.style.left=getrand(x,y)[0]+"px";
        box3.append(icon);
       
        icon.addEventListener('click',colls)
    }
    if (counts === 20) {
        clearInterval(clears);
        
        let divs=document.createElement('div');
        divs.innerText="Game over thank you"
        divs.classList.add('div1')
        box.append(divs);
        }

}

function getrand(x,y){
const xcoord=Math.random() * x;
const ycoord=Math.random() * y;
console.log(xcoord,ycoord)
return [xcoord,ycoord]
    
}

function colls(evet){
    num++;
    htag.innerText=num;
    evet.target.remove();
}