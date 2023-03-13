const formatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
});

function getNumberColorByValue(amount) {
    return amount > 0 ? "text-green-600" : "text-red-600"
}

function formatCurrency(amount) {
      
      return formatter.format(amount)
}

export {getNumberColorByValue, formatCurrency}