function countAllPaarl(strng){
    var lst = strng.split(",");
      var regNumbersForPaarl = [];
      var count = 0;
      for(var i = 0; i < lst.length; i++){
        
        if(lst[i].includes('CJ') == true){
          count++;
         regNumbersForPaarl.push(lst[i].trim());
      }
      }
      
      return count;
    
    }