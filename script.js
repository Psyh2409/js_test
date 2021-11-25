
document.body = document.createElement('body')
let div = document.createElement('div');
document.body.style.padding = '10vw';
div.style.background = 'blue';
div.style.height = '60vh';
div.setAttribute('class', 'outer');
let header = document.createElement('header');
header.style.width = '100%';
div.append(document.createElement('hr'))
document.body.append(div);
let outer = document.querySelector('div.outer')
let input1 = document.createElement('input');
input1.type = 'number';
let val1 = input1.value;
div.append(input1);
div.append(document.createElement('br'));
div.append(document.createElement('br'));
let input2 = document.createElement('input');
input2.type = 'number';
let val2 = input2.value;
div.append(input2);
div.append(document.createElement('br'));
div.append(document.createElement('br'));
div.style.textAlign = 'center';
let h1 = document.createElement('h1');
let result = 0;
h1.textContent = result;
add = (x,y) => {result = x+y};
sub = (x,y) => {result = x-y};
mult = (x,y) => {result = x*y};
divis = (x,y) => {result = x/y};

for(let i = 0; i<4; i++){
    let button = document.createElement('button');
    button.style.width = '10%'
    button.style.fontSize ='5vw'
    switch (i) {
        case 0:
            button.textContent = '+';
            button.onclick = add(val1, val2);
            break;
    case 1:
        button.textContent = '-';
        button.onclick = sub(val1, val2);
            break;
    case 2:
        button.textContent = '*';
    button.onclick = mult(val1, val2);
    break;
    case 3:
        button.textContent = '/';
        button.onclick = divis(val1, val2);
          break;
    }
    header.append(button);
}
header.style.display = 'flex';
header.style.flexDirection = 'row';
header.style.justifyContent = 'space-around';
header.style.verticalAlign = 'middle';
div.append(result)
outer.append(header);


