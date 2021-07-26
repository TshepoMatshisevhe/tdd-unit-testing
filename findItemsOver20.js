function findItemsOver20(objLst) {

    var lst = [];
    for (var i = 0; i < objLst.length; i++) {

        if (objLst[i].qty > 20) {
            lst.push(objLst[i]);
        }
    }
    return lst;
}


