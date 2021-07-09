import invoiceRoundDown from "../../../helpers/roundDown";

const roundDown = require('../../../helpers/roundDown').invoiceRoundDown();

test('the invoiceRoundDown function should return a integer', ()=>{
    //Arrange
    const number = 99.999;

    //Act
    const result = invoiceRoundDown(number);

    //Assert
    expect(result).toBe(99);

})