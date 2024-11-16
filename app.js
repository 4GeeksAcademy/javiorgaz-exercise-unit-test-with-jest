const sum = (a,b) => {
    return a + b;
}

const fromEurToDollar = (eur) => {
    return eur * 1.07;
}

const fromDollartoYen = (dollar) => {
    return dollar * 154.33;
}

const fromYenToPound = (yen) => {
    return yen * 0.0051;
}


module.exports = {sum,fromEurToDollar,fromDollartoYen,fromYenToPound};