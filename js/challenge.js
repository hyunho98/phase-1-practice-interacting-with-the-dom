document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter');
    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus');
    const heart = document.getElementById('heart');
    const pause = document.getElementById('pause');
    const submit = document.getElementById('comment-form');
})

let intervalNum;
intervalNum = setInterval(countUp, 1000);

function countUp(e) {
    counter.innerText = parseInt(counter.innerText) + 1;
}

function countDown(e) {
    counter.innerText = parseInt(counter.innerText) - 1;
}

function hearted(e) {
    current = document.querySelector(`#l${counter.innerText}`);
    if (current) {
        console.log('current ran');
        current.className = parseInt(current.className) + 1;
        current.innerText = `${current.id.slice(1)} has been liked ${current.className} times`;
    } else {
        console.log('created new');
        let item = document.createElement('li');
        item.id = `l${counter.innerText}`;
        item.className = 1;
        item.innerText = `${item.id.slice(1)} has been liked ${item.className} time`;
        document.querySelector('ul').append(item);
    }

}

function pauseResume(e) {
    if (pause.innerText == 'pause') {
        clearInterval(intervalNum);
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        submit.disabled = true;
        pause.innerText = 'resume';
    } else {
        intervalNum = setInterval(countUp, 1000);
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        submit.disabled = false;
        pause.innerText = 'pause';
    }
}

minus.addEventListener('click', countDown);
plus.addEventListener('click', countUp);
heart.addEventListener('click', hearted);
pause.addEventListener('click', pauseResume);
submit.addEventListener('submit', (e) => {})

onsubmit = ((e) => {
    const boxVal = document.getElementById('comment-input').value;
    e.preventDefault()
    if (boxVal.length > 0) {
        list = document.getElementById('list');
        let newItem = document.createElement('p');
        newItem.innerText = boxVal;
        list.append(newItem);
        }
    });