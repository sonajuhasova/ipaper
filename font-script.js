function renderText() {
    let text = document.getElementById('text-input').value;
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;    
    let font = document.getElementById('fonts').value;  

     
    document.getElementById('rendered').innerHTML = text;
    document.getElementById('rendered').style.width = width +'px';
    document.getElementById('rendered').style.fontFamily = font;
    document.getElementById('rendered').style.fontSize = height + 'px';
    document.getElementById('rendered').style.heigth = height + 'px'; 

    while (document.getElementById('rendered').scrollWidth > width) {
        height = height - 1;
         
        document.getElementById('rendered').style.fontSize = height + 'px';
        
     }

}