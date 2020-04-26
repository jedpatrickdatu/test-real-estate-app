export function shortenPrice(price) {
    var newPrice = price;
    if (price >= 1000) {
        var suffixes = ["", "K", "M", "B", "T"];
        var suffixNum = Math.floor( (""+price).length/3 );
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (price / Math.pow(1000,suffixNum) ) : price).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
        newPrice = shortValue+suffixes[suffixNum];
    }
    return `₱${newPrice}`;
}

export function addCommasAndCurrencyToPrice(price) {
    var newPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `₱${newPrice}`;
}