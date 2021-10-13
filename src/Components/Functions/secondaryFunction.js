export const totalPriceItems = order => order.price * order.count;

export const formatCurrency = (price) => {

    const formatPrice = price.toLocaleString('ru-RU',{
        style: 'currency', currency: 'RUB'
    });

    return (formatPrice)

}