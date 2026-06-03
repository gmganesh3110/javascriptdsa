// 121. Best Time to Buy and Sell Stock
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice=prices[0];
    let maxProfit=0;
    for(let i=0;i<prices.length;i++){
        if(prices[i]<minPrice){
            minPrice=prices[i]
        }
        let profit=prices[i]-minPrice;
        if(profit>maxProfit){
            maxProfit=profit;
        }
    }
    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([1,2,3,4,5]))
console.log(maxProfit([7,6,4,3,1]))
