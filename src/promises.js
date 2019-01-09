const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const success = true;

        if (success)
            resolve("Everithing is correct!");
        else
            reject("An error has ocurred");

    }, 2000);
});

promise.then((message) => {
    alert(message);
});

promise.catch((message) => {
    alert(message);
});