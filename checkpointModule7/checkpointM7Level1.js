// Checkpoint M7
// Level 1


// Exercise 1 

let myItems = [
    {
        name: 'shovel',
        delay: 1
    },
    {
        name: 'shoe',
        delay: 3
    },
    {
        name: 'newspaper',
        delay: 5
    },
];


function printItems(items) {
    for (let i = 0; i < items.length; i++) {
        setTimeout(function () {
            console.log('item ' + (i + 1) + ' is a ' + items[i].name)
        }, items[i].delay * 1000)
    }

}

printItems(myItems);




// Exercise 2

function repeatString(str, n, callback) {
    let mainString = '';
    for (let i = 0; i < n; i++) {
        mainString += str;
    }
    callback(mainString);
}

repeatString('ha!', 5, function (result) {
    console.log(result);
})




// Exercise 3

function compress(input, callback) {
    setTimeout(function () {
        callback(null, input.slice(0, 3));
    }, 100);
}

function encrypt(input, callback) {
    setTimeout(function () {
        callback(null, input.split('').reverse().join(''));
    }, 100);
}


let secretKey = 'the secret key is 123543';

compress(secretKey, function (err, resultPartOne) {
    if (err) {
        console.log(err);
    } else {
        encrypt(resultPartOne, function (err, finalResult) {
            if (err) {
                console.log(err);
            } else {
                console.log(finalResult);
            }
        });
    }
});


// Converted to promises

function compress(input) {
    return new Promise(function (resolve, reject) {
        if (input === '') {
            reject('String was empty so promise rejected')
        } else {
            setTimeout(function () {
                resolve(input.slice(0, 3));
            }, 100);
        }
    });
}

function encrypt(input) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(input.split('').reverse().join(''));
        }, 100);
    });
}

compress('the secret key is 123543')
    .then(function (resultPartOne) {
        encrypt(resultPartOne)
            .then(function (finalResult) {
                console.log(finalResult);
            })
            .catch(function (error) {
                console.log(error);
            })
    })
    .catch(function (error) {
        console.log(error);
    });




// Exercise 4

function process(places) {
    return new Promise((resolve, reject) => {
        let output = places.map((place) => place.name).join(', ');
        setTimeout(() => resolve(output), 1000);
    });
}


fetch("https://www.vullum.io/academy/oslo.json")
    .then(function (res) {
        res.json()
            .then(function (data) {
                process(data)
                    .then(function (res) {
                        console.log(res);
                    })
            })
    })


// Converted to async/await

function process(places) {
    return new Promise((resolve, reject) => {
        let output = places.map((place) => place.name).join(', ');
        setTimeout(() => resolve(output), 1000);
    });
}

async function main() {
    try {
        const data = await fetch('https://www.vullum.io/academy/oslo.json')
        const unpackedFetchPromise = await data.json();
        const finalResult = await process(unpackedFetchPromise);
        console.log(finalResult);
    } catch (err) {
        console.log(err);
    }
}

main();
