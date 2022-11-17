import './style.css';

function compo(){

    const element = document.createElement('div');
    element.innerHTML = "starter"
    return element;
    
}

document.body.appendChild( compo( ) );

