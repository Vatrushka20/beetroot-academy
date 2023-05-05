const promise = new Promise((resolve, reject) => {

    resolve('resolve')
    reject('reject')
});

promise.then((res) => console.log(res));

// console.log(promise);