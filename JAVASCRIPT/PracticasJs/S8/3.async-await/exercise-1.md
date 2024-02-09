Convierte la siguiente promesa para esperar a ejecutar el console usando async-await.

```js
const runTimeOut = async () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })
    await promise;
    promise.then(() => {console.log('Time out!')})
};

runTimeOut();
```
