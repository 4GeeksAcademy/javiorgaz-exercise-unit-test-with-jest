const {sum,fromEurToDollar,fromDollartoYen,fromYenToPound} = require('./app.js');

test('Suma 7 y 3 que da 10',()=>{

    const result = sum(7,3);
    const expectedResult = 10;
    expect(result).toBe(expectedResult);

})

//FROM EUR TO DOLLAR
test ("Convierte 2 euros a dolares que da 2.14",()=>{
    const input = 2;
    const result = fromEurToDollar(input);

    const expectedResult = 2.14;

    expect(result).toBe(expectedResult);
})

//FROM DOLLAR TO YEN

test ("Convierte 2 dolares a yen que da 308.66",()=>{
    const input = 2;
    const result = fromDollartoYen(input);

    const expectedResult = 308.66;

    expect(result).toBe(expectedResult);
})

//FROM YEN TO POUND 
test("Convierte 100 yenes a libras que deberia dar 0.51",()=>{
    const result = fromYenToPound(100);
    
    const expectedResult = 0.51;

    expect(result).toBe(expectedResult);
})