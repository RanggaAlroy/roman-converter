const inputNumber = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const alert = () => {
    output.classList.add('alert')
}
const convertToRoman = (num) => {
    if (!num) {
        output.innerHTML = 'Please enter a valid number.'
        alert()
    } else if (num <= 0) {
        output.innerHTML = 'Please enter a number greater than or equal to 1.'
        alert()
    } else if (num > 3999) {
        output.innerHTML = 'Please enter a number less than or equal to 3999.'
        alert()
    } else {
        const romanNumerals = [
            ["M", 1000],
            ["CM", 900],
            ["D", 500],
            ["CD", 400],
            ["C", 100],
            ["XC", 90],
            ["L", 50],
            ["XL", 40],
            ["X", 10],
            ["IX", 9],
            ["V", 5],
            ["IV", 4],
            ["I", 1]
        ]
    
        let roman = ''
    
        romanNumerals.forEach(([key, value]) => {
            while (num >= value) {
              roman += key;
              num -= value;
            }
          });
    
        return (output.innerHTML = roman, output.classList.remove('hidden', 'alert'))
    }

}

convertBtn.addEventListener('click', () => {
    convertToRoman(inputNumber.value)
})

inputNumber.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        convertToRoman(inputNumber.value)
    }
})