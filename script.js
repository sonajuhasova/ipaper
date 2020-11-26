function ipValue() {
    let ipapers = document.querySelector('#ip-slider').value;
    document.querySelector('.ipaper-slider-value').innerHTML = ipapers;
}

function visValue() {
    let visitors = document.querySelector('#vis-slider').value;
    document.querySelector('.visitors-slider-value').innerHTML = visitors + '000';

}


function calcPrice() {
    let ipapers = document.querySelector('#ip-slider').value;
    let visitors = document.querySelector('#vis-slider').value;

    console.log('iPapers: '+ipapers + ' Expected visitors: ' + visitors+'000');

    let price = null;
    let visitorsIP = null;

    if (ipapers <= 5) {
        price = ipapers * 39;
        visitorsIP = ipapers * 2000;
        console.log('Price for iPapers: '+price);
        console.log('Visitors in price: '+visitorsIP);
    }

    else if (5 < ipapers && ipapers<= 10) {
        price = (ipapers - 5) * 19 + 5 * 39;
        visitorsIP = (ipapers - 5) * 1000 + 5 * 2000;
        console.log('Price for iPapers: '+price);
        console.log('Visitors in price: '+visitorsIP);
    }

   else if (10 < ipapers && ipapers <= 25) {
        price = (ipapers - 10) * 9 + 5 * 39 + 5 * 19;
        visitorsIP = (ipapers - 10) * 250 + 5 * 1000 + 5 * 2000;
        console.log('Price for iPapers: '+price);
        console.log('Visitors in price: '+visitorsIP);
    }
    
    let extra = visitors * 1000 - visitorsIP; 
    let extraFloor = Math.floor(extra / 1000);
    console.log(extraFloor);
    let finalPrice = null;
    
    console.log('Extra: '+extra);

    if (extra <= 0) {
        finalPrice = price;
        console.log('Final Price: '+finalPrice);
        

    } else if (0 < extra && extra <= 10000) {
        finalPrice = price + (extraFloor * 10);
        console.log('Final Price: '+finalPrice);
        

    } else

        if (11000 < extra && extra <= 50000) {
            finalPrice = price + ((extraFloor - 10) * 7) + 10 * 10;
        console.log('Final Price: '+finalPrice);

    } else

    if (50000 < extra && extra <= 100000) {
            finalPrice = price + ((extraFloor - 50) * 6) + 10 * 10 + 40*7;
        console.log('Final Price: '+finalPrice);

    }


    document.querySelector('#estimated-price').innerHTML = finalPrice + ' dkk';
}

calcPrice(); 