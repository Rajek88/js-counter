// console.log(document.querySelector('.neu-input'));

var audio = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
function counter(btn){
    var countTill = document.querySelector('.neu-input').value;
    let count = parseInt(countTill);
    console.log(count);
    if( !count || count < 0){
        window.alert('Please Enter a Valid integer');
        return;
    }
    document.querySelector('#current').innerHTML = count;
    btn.disabled = true;
    var startBtn = document.getElementById('startBtn');
    startBtn.className = 'start-btn-clicked';
    var interval = setInterval(function(){
        if(count == 0){
            // document.querySelector('.counter').style.backgroundColor = 'tomato';
            // document.querySelector('.counter').style.color='white';
            audio.play();
            window.alert("Time Up");
            clearInterval(interval);
            btn.disabled = false;
            startBtn.className = 'start-btn';
            return;
        }
        count--;
        console.log(count);
        document.querySelector('#current').innerHTML = count;
        // console.log('button pressed');
    },1000);
    return;
        
}