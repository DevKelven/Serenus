const bubble = document.getElementById('bubble');
let isGrowing = false;

bubble.addEventListener('mousedown', () => {
    isGrowing = true;
    growBubble();
});

document.addEventListener('mouseup', () => {
    isGrowing = false;
    shrinkBubble();
});

function growBubble() {
    if (isGrowing) {
        bubble.style.transform = 'scale(1.5)';
        requestAnimationFrame(growBubble);
    }
}

function shrinkBubble() {
    if (!isGrowing) {
        bubble.style.transform = 'scale(1)';
    }
}
