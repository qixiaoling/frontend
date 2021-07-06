function invoiceRoundDown(number){
    return `${Math.round(number)}`;
}
export default invoiceRoundDown;

module.exports = {
    invoiceRoundDown: invoiceRoundDown,
}