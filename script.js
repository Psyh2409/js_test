
document.body = document.createElement('body')
let div = document.createElement('div');
document.body.style.padding = '10vw';
div.style.background = 'blue';
div.style.height = '50vh';
div.setAttribute('class', 'outer');
let header = document.createElement('header');
header.style.width = '100%';
document.body.append(div);
let outer = document.querySelector('div.outer')
let input1 = document.createElement('input');

let val1, val2;
outer.append(header);
div.append(document.createElement('hr'))
input1.setAttribute('id', 'in1');
input1.type = 'number';
input1.style.fontSize = '2vw';
div.append(input1);
div.append(document.createElement('br'));
div.append(document.createElement('br'));
let input2 = document.createElement('input');
input2.setAttribute('id', 'in2');
input2.type = 'number';
input2.style.fontSize = '2vw';
console.log(val2);
div.append(input2);
// div.append(document.createElement('br'));
// div.append(document.createElement('br'));
div.style.textAlign = 'center';
let h1 = document.createElement('h1');
let result = 0;
div.append(h1)
add = () => {
    val1 = document.getElementById('in1').value;
    val2 = document.getElementById('in2').value;
    result = parseInt(val1) + parseInt(val2);
    h1.textContent = result;
};
sub = () => {
    val1 = document.getElementById('in1').value;
    val2 = document.getElementById('in2').value;
    result = parseInt(val1) - parseInt(val2);
    h1.textContent = result;
};
mult = () => {
    val1 = document.getElementById('in1').value;
    val2 = document.getElementById('in2').value;
    result = parseInt(val1) * parseInt(val2);
    h1.textContent = result;
};
divis = () => {
    val1 = document.getElementById('in1').value;
    val2 = document.getElementById('in2').value;
    result = parseInt(val1) / parseInt(val2);
    h1.textContent = result;
};

for (let i = 0; i < 4; i++) {
    let button = document.createElement('button');
    button.style.width = '10%'
    button.style.fontSize = '5vw'
    button.style.margin = '5vh'
    switch (i) {
        case 0:
            button.textContent = '+';
            button.setAttribute('onclick', 'add()');
            break;
        case 1:
            button.textContent = '-';
            button.setAttribute('onclick', 'sub()');
            break;
        case 2:
            button.textContent = '*';
            button.setAttribute('onclick', 'mult()');
            break;
        case 3:
            button.textContent = '/';
            button.setAttribute('onclick', 'divis()');
            break;
    }
    header.append(button);
}

header.style.display = 'flex';
header.style.flexDirection = 'row';
header.style.justifyContent = 'space-around';
header.style.verticalAlign = 'middle';






