
createGrid(16);

const btn = document.querySelector('button');

btn.addEventListener('click',() => {
    let number = prompt('Enter a number between 1 and 100 to great an N x N grid');
    let regex = /^[0-9]/;
    while (!regex.test(number) && number !== '' && number !==null){
        alert('No. Try again.');
        number = prompt('Number between 1 and 100 this time, please');
    }
    if(number > 100) alert('Ugh. I said between 1 and 100');
    removeCurrentGrid();
    createGrid(Number(number));
});

function removeCurrentGrid(){
    const divList = document.querySelectorAll('.square');
    divList.forEach((item) => item.remove());
}

function createGrid(num){
    console.log(`${num} is ${typeof num}`);
    const container = document.querySelector('.container');

    for(let i=0; i<num**2; i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add('square');
        let dimensions = 1000/num;
        newDiv.setAttribute('style', 
            `background-color: white; 
            width: ${dimensions}px; 
            height: ${dimensions}px; 
            padding: 0px; 
            margin: 0px;`);
        newDiv.addEventListener('mouseover', () => { newDiv.style.backgroundColor = 'black';});
        container.appendChild(newDiv);
    }
}

