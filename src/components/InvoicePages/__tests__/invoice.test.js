import invoiceRoundDown from "../../../helpers/roundDown";

test('the invoiceRoundDown function should return a integer', ()=>{
    //Arrange
    const number = 99.23;

    //Act
    const result = invoiceRoundDown(number);

    //Assert
    expect(result).toBe('99');

})