
// primeiro passo o botão


const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')

async function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value
    //          variavel            html      selecionar     classe           valor
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert') // valor em real
    const currencyValueConverted = document.querySelector('.currency-value') // outras moedas

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = data.GBPBRL.high
    const btcoinToday = data.BTCBRL.high

    if (currencySelect.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == 'libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == 'coin') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC',
            minimumFractionDigits: 8,
        }).format(inputCurrencyValue / btcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputCurrencyValue)

    




}

function changeCurrency() {
    const currencyName = document.getElementById('12')
    const currencyImage = document.querySelector('.usd')

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = './img/estados-unidos.png'
    }
    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './img/euro.png'
    }

    if (currencySelect.value == 'libra') {
        currencyName.innerHTML = 'Libra'
        currencyImage.src = './img/libra.png'
    }

    if (currencySelect.value == 'coin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = './img/btcoin.png'
    }

    convertValues()

}

currencySelect.addEventListener('change', changeCurrency) // mudança de imagem
convertButton.addEventListener('click', convertValues) // conversao calculo
//  variavel       evento       acção      função que vc deu o nome.




