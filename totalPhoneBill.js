function totalPhoneBill(strng){

var dt = strng.split(",");
var smsCount=0;
var callCount=0;
  for(var i=0; i < dt.length; i++){
	if(dt[i].trim() === 'call'){
    	callCount = callCount + 1;
    }
  else{
    	smsCount = smsCount+1;
    }
}
var totCall = callCount*2.75;
var totSms = smsCount*0.65; 
var Total = totCall + totSms;
return "R" + Total.toFixed(2);
  	//console.log(callCount)
	//console.log(smsCount)
}