const grid = document.querySelector('.grid');
const button = document.querySelector('button');

createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div);
    }
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function getSize(){
    const size = prompt('Enter a number between 1 and 100');
    return size;
}
    
button.addEventListener('click', function(){
    const size = getSize();
    if(size > 100 || size < 1) {
        alert('Not a valid number');
    }
    else {
        removeAllChildNodes(grid);
        grid.setAttribute('style', `grid-template-columns: repeat(${size}, 2fr); grid-template-rows: repeat(${size}, 2fr);`);
        for (let i = 0; i < size * size; i++) {
            const div = document.createElement('div');
            div.classList.add('cell');
            div.addEventListener('mouseover', function(event){
                event.target.style.backgroundColor = 'black';
            })
            grid.appendChild(div);
        }

    }
})

createGrid();