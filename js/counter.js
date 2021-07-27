// console.log(document.querySelector('.neu-input'));

function counter(){
    var countTill = document.querySelector('.neu-input').value;
    let count = parseInt(countTill);
    console.log(count);
    if( !count || count < 0){
        window.alert('Please Enter a Valid integer');
        return;
    }
    document.querySelector('#current').innerHTML = count;
    var interval = setInterval(function(){
        if(count == 0){
            window.alert("Time Up");
            clearInterval(interval);
            return;
        }
        count--;
        console.log(count);
        document.querySelector('#current').innerHTML = count;
        // console.log('button pressed');
    },1000);
    return;
        
}