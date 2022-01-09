// fetch('https://api.cryptonator.com/api/full/btc-usd')
//     .then((res) => {
//         console.log('RESPONSE WAITING TO PARSE...', res);
//         return res.json()
//     })
//     .then((data) => {
//         console.log('DATA PARSED,', data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

fetch('https://api.cryptonator.com/api/full/btc-usd')
    .then((res) => {
        console.log('RESPONSE WAITING TO PARSE...', res);
        console.log('Status Code:', res.status)
        return res.blob()
    })
    .then((myBlob) => {
        console.log('DATA PARSED,', myBlob)
    })
    .catch((err) => {
        console.log(err)
    })
