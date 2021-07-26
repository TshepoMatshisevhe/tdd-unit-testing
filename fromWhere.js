function fromWhere(regNo) {

    if (regNo.startsWith('CY') === true) {

        return 'Bellville';
    } else if (regNo.startsWith('CJ') === true) {
        return 'Paarl';
    } else if (regNo.startsWith('CA') === true) {
        return 'Cape Town'
    } else {

        return 'Some other place!'
    }

}