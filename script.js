// a function that creates div grids

function divGrid(x) {
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            const container = document.querySelector('.container');
            const div = document.createElement('div');
            container.appendChild(div);
        }
    }
    

}