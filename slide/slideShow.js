'use strict';

const images = [
    { 'id': '1', 'url':'https://www.tibiabr.com/wp-content/uploads/2017/07/gustavo-santiago-boss-ferumbras-ascending.jpg' },
    { 'id': '2', 'url':'https://www.tibiabr.com/wp-content/uploads/2018/11/ferumbras_noob.png' },
    { 'id': '3', 'url':'https://e0.pxfuel.com/wallpapers/606/895/desktop-wallpaper-tibia-tibia-tibia-ferumbras-and-tibia-game.jpg' },
    { 'id': '4', 'url':'https://preview.redd.it/ferumbras-revamped-v0-4dljghm0zf0b1.png?auto=webp&s=3b5d09f24b1be5a4fa9afb181e8095272c9bd5a1' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);