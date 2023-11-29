(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = "";
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click', function(e){
        screen.value = "";
    });

})();

document.addEventListener('DOMContentLoaded', function() {
    const screen = document.getElementById('calc-screen');
    
    document.addEventListener('keydown', function(event) {
        // Check if the key is a number or an allowed operator
        if ((event.key >= '0' && event.key <= '9') || ['+', '-', '*', '/', '.'].includes(event.key)) {
            screen.value += event.key;
        } else if (event.key === 'Enter' || event.key === '=') {
            // Calculate the result if Enter or = is pressed
            try {
                screen.value = eval(screen.value);
            } catch (e) {
                screen.value = 'Error';
            }
        } else if (event.key === 'Backspace') {
            // Implement backspace functionality
            screen.value = screen.value.slice(0, -1);
        } else if (event.key === 'Escape') {
            // Clear the screen if Esc is pressed
            screen.value = '';
        }
    });
});
