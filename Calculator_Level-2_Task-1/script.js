let screen = document.getElementById('display-box');
buttons = document.getElementsByClassName('button');

for (button of buttons) {
    button.addEventListener('click', (e) => {
        buttonText = e.target.innerHTML;
        try {
            if (buttonText === 'x') {
                buttonText = '*';
                screen.innerHTML += buttonText;
            } else if (buttonText === 'del') {
                screen.innerHTML = screen.innerHTML.slice(0, screen.innerHTML.length - 1);
            } else if (buttonText === 'clear') {      
                screen.innerHTML = '';
            } else if (buttonText === 'ENTER' || buttonText === 'ans') {
                if (screen.innerHTML === '') {   //If result is blank.
                    //Do Nothing
                } else {
                    screen.innerHTML = eval(screen.innerHTML);
                    if(screen.innerHTML === 'Infinity') {    //If result is Infinity.
                        alert('Infinity');
                        screen.innerHTML = '';
                    }
                }
            } else if (buttonText === '÷') {
                buttonText = '/';
                screen.innerHTML += buttonText;
            } else if (buttonText === '√') {
                screen.innerHTML += buttonText;
                screen.innerHTML = Math.sqrt(parseFloat(screen.innerHTML));
            } else if (buttonText === '∓') {
                if (screen.innerHTML.endsWith('+')) {
                    screen.innerHTML = screen.innerHTML.slice(0, screen.innerHTML.length - 1).concat('-');
                } else if (screen.innerHTML.endsWith('-')) {
                    screen.innerHTML = screen.innerHTML.slice(0, screen.innerHTML.length - 1).concat('+');
                } else {
                    alert('Invalid Syntax');
                }
            } else {
                screen.innerHTML += buttonText;
            }
        } catch {
            alert('Invalid Syntax');
            screen.innerHTML = '';
        }
    })
}