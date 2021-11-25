document.body = document.createElement('body')
let div = document.createElement('div');
document.body.style.padding = '10vw';
div.style.background = 'blue';
div.style.height = '60vh';
div.setAttribute('class', 'outer');
let header = document.createElement('header');
header.style.width = '100%'
for(let i = 0; i<4; i++){
    let button = document.createElement('button');
    button.style.width = '10%'
    button.style.fontSize ='5vw'
    switch (i) {
        case 0:
            button.textContent = '+';
            button.onclick = (x,y) => {x+y};
            break;
    case 1:
        button.textContent = '-';
        button.onclick = (x,y) => {x-y};
            break;
    case 2:
        button.textContent = '*';
    button.onclick = (x,y) => {x*y};
    break;
    case 3:
        button.textContent = '/';
        button.onclick = (x,y) => {x/y};
          break;
    }
    header.append(button);
}
header.style.display = 'flex';
header.style.flexDirection = 'row';
header.style.justifyContent = 'space-around';
header.style.verticalAlign = 'middle';
div.append(header);
div.append(document.createElement('hr'))
// let body = document.body.innerHTML;
document.body.append(div);

