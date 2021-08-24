

function CalcPrem( ) {
    var sum = document.querySelector('#input').value;
    var term = document.querySelector('#term').value;
    var cgst = 8.97;
    var sgst = 8.97;
    var sduty = 0.039;
    var one =  ( sum * ( 0.056 ) ) / 1000 ;
    console.log(one);
    var two =  ( sum * ( 0.05 ) ) / 1000 ;
    console.log(two);
    var three = ( sum * ( 0.075 ) ) / 1000 ;
    console.log(three);
    var four = ( sum * ( 0.08 ) ) / 1000 ;
    console.log(four);

    var isum = one + two + three + four;
    console.log(isum);

    var taxc = ( isum * cgst ) / 100;
    console.log(taxc);
    var taxs = (isum * sgst) / 100;
    console.log(taxs);
    var duty = (isum * sduty) / 100;
    console.log(duty);

    var premium = isum + taxc + taxs + duty;
    console.log(premium);
    // alert(premium);
   document.getElementById('premium').innerHTML = Math.ceil(premium) * term ;

}