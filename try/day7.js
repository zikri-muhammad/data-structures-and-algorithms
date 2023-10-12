/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let min = prices[0]
  let max = 0
  for (let i = 0; i < prices.length; i++) {
      if (prices[i] < min) {
          min = prices[i]
      } else {
          max = Math.max(max, prices[i] - min)
      }
  }
  return max
};

const profit = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(profit)