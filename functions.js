const filterUsers = async (name) => 
    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`)
    // Aqui ele ja esta retornando porque estamos usando arrow function.
    .then(res => res.json())
    // .then(data => console.log(data))

    
const debounceEvent = (fn, wait = 1000, time) => (...args) => {

        // console.log(arguments);
        clearTimeout(time)
        // Ele vai limpar o timeout.
    
        time = setTimeout(() => {
            fn(...args);
            // Ele vai passar para a função "fn" os argumentos passados.
            // Nos arrows functions não existe os arguments, e o this muda completamente.

            // console.log('digitei')
            // console.log(wait)
            // console.log(event.target.value);
            // Toda vez que nos digitarmo algo ele vai printar o que nos digitamos no console.
        }, wait) 
    }

// const debounce = debounceEvent();

function handleKeyup(event) {
    // console.log(event)
    // console.log('handleKeyup');
    // console.log(event);
    filterUsers(event.target.value)
        .then(users => console.log(users.map( user => user.name )));
};

document.querySelector("input")
    .addEventListener("keyup", debounceEvent(handleKeyup, 500))