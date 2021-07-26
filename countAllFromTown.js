function countAllFromTown(strng, strtStrng){

    var lst = strng.split(",");
    var twnLst = [];  var count = 0;
      
        for(var i=0; i<lst.length; i++){
            if(lst[i].includes(strtStrng)===true){
              count++;
                   twnLst.push(lst[i].trim());
            }
    
        } 
      return count;
     
    }