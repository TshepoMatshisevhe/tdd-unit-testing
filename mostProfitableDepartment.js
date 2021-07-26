function mostProfitableDepartment(salesData) {
    const depProfit = {};
    for (var i = 0; i < salesData.length; i++) {
        const prod = salesData[i];
        depProfit[prod.department] = 0;
    }

    for (var i = 0; i < salesData.length; i++) {
        const prod = salesData[i];
        var currTotalPerDep = depProfit[prod.department];
        currTotalPerDep += prod.sales;
        depProfit[prod.department] = currTotalPerDep;
    }
    //console.log(depProfit)
    var currMaxSales = 0;
    var currDepartment = ' ';
    for (const departmentSales in depProfit) {
        const currDepSales = depProfit[departmentSales];
        if (currDepSales > currMaxSales) {
            currMaxSales = currDepSales;
            currDepartment = departmentSales;
        }
    }
    return currDepartment;
}

function mostProfitableDay(salesData) {
    const profitDay = {};
    for (var i = 0; i < salesData.length; i++) {
        const prod1 = salesData[i];
        profitDay[prod1.day] = 0;
    }

    for (var i = 0; i < salesData.length; i++) {
        const prod1 = salesData[i];
        var currTotalPerDay = profitDay[prod1.day];
        currTotalPerDay += prod1.sales;
        profitDay[prod1.day] = currTotalPerDay;
    }

    var crrMaxSales = 0;
    var crrDay = '';
    for (const salesPerDay in profitDay) {
        const crrDaySales = profitDay[salesPerDay];
        if (crrDaySales > crrMaxSales) {
            crrMaxSales = crrDaySales;
            crrDay = salesPerDay;
        }
    }
    return crrDay;

}