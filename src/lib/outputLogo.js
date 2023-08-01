import logo from '../assets/images/zentick_logo.png';

console.log(logo);

export function outputLogo() {
    const output = document.querySelector('.output');

    output.innerHTML = `<img src="${logo}">`;
}