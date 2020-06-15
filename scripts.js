const filterUsers = async (name) => 
    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`)
    // Aqui ele ja esta retornando porque estamos usando arrow function.
    .then(res => res.json())
    // .then(data => console.log(data))

    
const debounceEvent = (fn, wait = 1000, time) => (...args) => {

        // console.log(arguments);
        clearTimeout(time, time = setTimeout(() => fn(...args), wait))
        // Ele vai limpar o timeout.
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

