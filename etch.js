
const container = document.querySelector('.container');

for(let i=0; i<(16**2); i++){
    const newDiv = document.createElement('div');
    newDiv.setAttribute('style', 'display: flex; border-style: solid; border-width: 1px; border-color: blue; width: 60px; height: 60px; padding: 0px; margin: 0px;');
 
 
    //newDiv.textContent = 'hi';
    container.appendChild(newDiv);

}