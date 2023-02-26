const body = document.querySelector('body');
const ash = document.querySelector('.character');

function getHorizontalPosition() {
    return parseInt(ash.style.right.split('px')[0]) || 2;
}

function getVerticalPosition() {
    return parseInt(ash.style.top.split('px')[0]) || 2;
}

body.addEventListener('keydown', (event) => {
    event.stopPropagation();

    switch (event.key) {

        case 'ArrowLeft':
            ash.src = './assets/left.png';

            if (getHorizontalPosition() < 770) {
                ash.style.right = `${getHorizontalPosition() + 8}px`;
            }
            break;

        case 'ArrowRight':
            ash.src = './assets/right.png';

            if (getHorizontalPosition() > 2) {
                ash.style.right = `${getHorizontalPosition() - 8}px`;
            }
            break;

        case 'ArrowDown':
            ash.src = './assets/front.png';

            if (getVerticalPosition() < 450) {
                ash.style.top = `${getVerticalPosition() + 8}px`;
            }
            break;

        case 'ArrowUp':
            ash.src = './assets/back.png';

            if (getVerticalPosition() > 2) {
                ash.style.top = `${getVerticalPosition() - 8}px`;
            }
            break;

        default:
            break;
    }

});