const reversedNumber = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
console.log(reversedNumber(1065));



function reversedNum(num)
{
    return (
        parseFloat(
            num
                .toString()
                .split('')
                .reverse()
                .join('')
        ) * Math.sign(num)
    )
}