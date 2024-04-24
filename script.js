let btn = document.querySelector('.btn');
let box = document.querySelector('.box');
let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let imagearea = document.querySelector(".imagearea");
btn.addEventListener('click', coll);
let arr = ["thor1.png", "hulk.jpg", "spider.jpg"];
function coll() {
    box1.remove();
    box2.classList.remove('box2');
    box2.classList.add('box1');
    for (let i = 0; i < 3; i++) {
        let div = document.createElement('div');
        div.classList.add('div');
        let img1 = document.createElement('img');
        img1.src = arr[i];
        img1.classList.add('img1');
        div.append(img1);
        box2.append(div);
    }
    box2.children[0].addEventListener('click', add);
    box2.children[1].addEventListener('click', add);
    box2.children[2].addEventListener('click', add);
}
let clears, h1, htag, imgs;
function add(e) {
    box2.remove();
    box3.classList.add('imagearea');
    let pera = document.createElement('p')
    pera.classList.add('pera');
    h1 = document.createElement('h1');
    htag = document.createElement('h1');
    pera.append(htag);
    pera.append(h1);
    box3.append(pera);
    imgs = e.target.getAttribute("src");
    clears = setInterval(hello, 1000);
}
let counts = 0, num = 0;
function hello() {
    counts++;
    const y = box3.clientHeight;
    const x = box3.clientWidth;
    if (counts <= 60) {
        h1.innerText = ` Total = ${counts}`;
        let icon = document.createElement('img');
        icon.src = imgs;
        icon.classList.add('icon')
        icon.style.top = getrand(x, y)[1] + "px";
        icon.style.left = getrand(x, y)[0] + "px";
        box3.append(icon);
        icon.addEventListener('click', colls);
    }
    if (counts === 60) {
        box3.remove();
        clearInterval(clears);
        let divs = document.createElement('div');
        divs.innerText = "Game over thank you";
        divs.classList.add('div1');
        box.append(divs);
        box.classList.add('box1')
    }
}
function getrand(x, y) {
    const xcoord = Math.random() * x;
    const ycoord = Math.random() * y;
    return [xcoord, ycoord];
}
function colls(evet) {
    num++;
    htag.innerText = `Score = ${num}`;
    evet.target.remove();
}