// This accesses modules from node in the client renderer
console.log(versions.node());

console.log(path.join(os.homedir(), 'Downloads\\FileSaveName.txt'));

function alertError(message) {
    Toastify.toast({
        text: message,
        duration: 5000,
        close: false,
        style: {
            background: 'red',
            color: 'white',
            textAlign: 'centre',
        }
    })
}

function alertInfo(message) {
    Toastify.toast({
        text: message,
        duration: 5000,
        close: false,
        style: {
            background: 'blue',
            color: 'white',
            textAlign: 'centre',
        }
    })
}

function alertSuccess(message) {
    Toastify.toast({
        text: message,
        duration: 5000,
        close: false,
        style: {
            background: 'green',
            color: 'white',
            textAlign: 'centre',
        }
    })
}

let btnError = document.querySelector('#error');
let btnInfo = document.querySelector('#info');
let btnSuccess = document.querySelector('#success');

btnError.addEventListener("click", function () {
    alertError('This is an Error Message!');
});
btnSuccess.addEventListener("click", function () {
    alertSuccess('This is an Error Message.');
});
btnInfo.addEventListener("click", function () {
    alertInfo('This is an Info Message.');
});
