function renderText() {
    let text = document.getElementById('text-input').value;
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;    
    let font = document.getElementById('fonts').value; 
    let transformed = ((height / 100) * width) / 100;
    console.log(transformed);
    
    document.getElementById('rendered').innerHTML = text;
    document.getElementById('rendered').style.width = width +'px';
    document.getElementById('rendered').style.fontFamily = font;
    document.getElementById('rendered').style.fontSize = height + 'px';

}