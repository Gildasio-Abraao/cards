function randomColor(x) {
    let num = Math.floor(Math.random() * 9999);
    x.style = `background: #${num};)`;
}