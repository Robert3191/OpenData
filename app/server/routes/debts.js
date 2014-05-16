exports.data =function(req, res){
var json ={
    title:"Creditor and debtor countries",
    timeout:2,
    data: [
        {
            "creditor":"Britain",
            "debtor":"France",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":3
        },
        {
            "creditor":"Britain",
            "debtor":"Greece",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"Britain",
            "debtor":"Italy",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"Britain",
            "debtor":"Portugal",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"Britain",
            "debtor":"United States",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":1
        },
        {
            "creditor":"France",
            "debtor":"Germany",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":1
        },
        {
            "creditor":"France",
            "debtor":"Greece",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"France",
            "debtor":"Ireland",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"France",
            "debtor":"Italy",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"France",
            "debtor":"Japan",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":1
        },
        {
            "creditor":"France",
            "debtor":"Portugal",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"France",
            "debtor":"Spain",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":2
        },
        {
            "creditor":"France",
            "debtor":"United States",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":1
        },
        {
            "creditor":"Germany",
            "debtor":"Britain",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":1
        },
        {
            "creditor":"Germany",
            "debtor":"Greece",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"Germany",
            "debtor":"Ireland",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"Germany",
            "debtor":"Portugal",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"Germany",
            "debtor":"Spain",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":2
        },
        {
            "creditor":"Germany",
            "debtor":"United States",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":1
        },
        {
            "creditor":"Ireland",
            "debtor":"Britain",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":1
        },
        {
            "creditor":"Ireland",
            "debtor":"Greece",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"Ireland",
            "debtor":"Spain",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":2
        },
        {
            "creditor":"Italy",
            "debtor":"Germany",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":1
        },
        {
            "creditor":"Italy",
            "debtor":"Greece",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"Italy",
            "debtor":"Ireland",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"Italy",
            "debtor":"Portugal",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"Japan",
            "debtor":"Britain",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":1
        },
        {
            "creditor":"Japan",
            "debtor":"Germany",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":1
        },
        {
            "creditor":"Japan",
            "debtor":"Greece",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"Japan",
            "debtor":"Ireland",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"Japan",
            "debtor":"Italy",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"Japan",
            "debtor":"Portugal",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"Japan",
            "debtor":"Spain",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":2
        },
        {
            "creditor":"Japan",
            "debtor":"United States",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":1
        },
        {
            "creditor":"Portugal",
            "debtor":"Greece",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"Portugal",
            "debtor":"Ireland",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"Portugal",
            "debtor":"United States",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":1
        },
        {
            "creditor":"Spain",
            "debtor":"Britain",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":1
        },
        {
            "creditor":"Spain",
            "debtor":"Greece",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"Spain",
            "debtor":"Italy",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"Spain",
            "debtor":"Portugal",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"Spain",
            "debtor":"United States",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":1
        },
        {
            "creditor":"United States",
            "debtor":"Greece",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"United States",
            "debtor":"Ireland",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        },
        {
            "creditor":"United States",
            "debtor":"Italy",
            "amount":Math.floor((Math.random() * 100) + 1) * Math.floor(((Math.random() * 10) + 1)%6) + Math.floor((Math.random() * 10) + 1),
            "risk":0
        }
    ]
}

    res.send(json);
}