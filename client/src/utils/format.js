export function numberWithCommas(x) {
    x = x.toString();
    let [integerPart, decimalPart] = x.split(".");
    
    let lastThree = integerPart.substring(integerPart.length - 3);
    let otherNumbers = integerPart.substring(0, integerPart.length - 3);
    if (otherNumbers !== '' && otherNumbers !== '-') {
        lastThree = ',' + lastThree;
    }
    let formattedIntegerPart = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    
    if (decimalPart !== undefined) {
        return formattedIntegerPart + "." + decimalPart;
    } else {
        return formattedIntegerPart;
    }
}
