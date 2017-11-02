import { Observable } from 'rxjs';

// let circle = document.getElementById('circle');
let output = document.getElementById('output');
let button = document.getElementById('button');

// let source = Observable.fromEvent(document, 'mousemove')
//     .map((e: MouseEvent) => {
//         return {
//             x: e.clientX,
//             y: e.clientY
//         }
//     })
//     .filter(value => value.x < 500)
//     .delay(300);

let click = Observable.fromEvent(button, 'click')

click.subscribe(
    e => load('movies.json'),
    e => console.log(`error: ${e}`),
    () => console.log('complete')
);

// function onNext(value) {
//     circle.style.left = value.x + 'px';
//     circle.style.top = value.y + 'px';
//     console.log(value);
// }

function load(url: string) {
    console.log(url);
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('load', () => {
        let movies = JSON.parse(xhr.responseText);
        movies.forEach(m => {
            let div = document.createElement('div');
            div.innerText = m.title;
            output.appendChild(div);
        });
    });

    xhr.open('GET', url);
    xhr.send();
}