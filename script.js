const products = {
    "Anthon Berg Marcipanbrød": 30,
    "Bounty": 18,
    "Bubs Hallon Lakrits": 12,
    "Coca Cola": 6,
    "Carletti Kæmpe Skildpadder": 22,
    "Center Bar": 14,
    "Chips Lays": 9,
    "Chupa Chups": 4,
    "Cocio": 14,
    "Daim": 16,
    "Dr. Pepper": 7,
    "Dumle": 12,
    "Faxe Kondi": 6,
    "Fanta": 7,
    "Ferrero Rocher": 40,
    "Fanta Lemon": 7,
    "Gajol": 8,
    "Haribo Goldbears": 12,
    "Haribo Matador Mix": 14,
    "Hershey's": 22,
    "Häagen-Dazs": 35,
    "Kexchoklad": 12,
    "Koldskål": 20,
    "Knoppers": 17,
    "Lays Chips": 10,
    "Lion Bar": 15,
    "Maltesers": 20,
    "Maoam": 9,
    "Mentos": 8,
    "Mini Twix": 10,
    "Oreo": 22,
    "Pepsi": 6,
    "Pingvin Mix": 15,
    "Plopp": 14,
    "Pringles": 18,
    "Red Bull": 22,
    "Ritter Sport": 12,
    "Skittles": 10,
    "Snickers": 14,
    "Soft Ice": 30,
    "Sundae": 18,
    "Twix": 15,
    "Twist": 13,
    "Coca Cola Zero": 6,
    "Monster": 20,
    "Peach Iced Tea": 5,
    "SodaStream": 18,
    "Powerade": 12,
    "7-Up": 6,
};

const exchangeRates = {
    "EUR": 7.44,  // 1 DKK to EUR
    "USD": 6.9,   // 1 DKK to USD
    "JPY": 0.053, // 1 DKK to JPY
    "BTC": 519000 // 1 BTC to DKK
};

function calculate() {
    const product = document.getElementById("product").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const currency = document.getElementById("currency").value;
    const unit = document.getElementById("unit").value;

    if (isNaN(amount) || amount <= 0) {
        alert("Indtast venligst et gyldigt beløb.");
        return;
    }

    let pricePerUnit = products[product];
    let total;

    if (currency === "BTC") {
        total = (amount * exchangeRates[currency]) / pricePerUnit;
    } else {
        total = amount / pricePerUnit * exchangeRates[currency];
    }

    let unitLabel = "";
    if (unit === "kg") unitLabel = "kg";
    if (unit === "g") unitLabel = "gram";
    if (unit === "lb") unitLabel = "pund";
    if (unit === "mg") unitLabel = "milligram";
    if (unit === "liter") unitLabel = "liter";

    let resultText = `${amount} ${currency} giver dig ca. ${total.toFixed(2)} ${unitLabel} af ${product}.`;

    document.getElementById("result").innerText = resultText;
}
