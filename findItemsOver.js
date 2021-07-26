
function findItemsOver(objLst, thrsh) {
    var lst = [];
    for (var i = 0; i < objLst.length; i++) {
        var listItem = objLst[i];
        if (listItem.qty > thrsh) {

            lst.push(listItem);
        }
    }

    return lst;

}