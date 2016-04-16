/**
 * Created by black on 4/16/16.
 */


var minClickInterval = 1000; //1 sec
var maxClickInterval = 3000;
var maxCalls = 200;

clickConnectBtn(0);

function clickConnectBtn(cCalls)
{
    window.scrollTo(0, 10000);
    var connectBtns = document.getElementsByClassName('bt-request-buffed');
    if (maxCalls>=cCalls && connectBtns.length) {
        if (connectBtns.length) connectBtns[0].click();
        setTimeout( function(){ clickConnectBtn(++cCalls); }, getRandomClickInterval(minClickInterval, maxClickInterval));
    } else console.log("done");
}

function getRandomClickInterval(min, max)
{
    return Math.round(min+Math.random()*(max-min));
}
