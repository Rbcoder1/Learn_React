// console.log("hello")

// Async & Await 

const p = new Promise((resolved, reject) => {
    setTimeout(() => {
        resolved("Promise Resolved");
    }, 20000);
})

// using normal Method Of Promise Resolving 
// JS Engine was not stop for resolved promise it register callback & set time and go on next line until it will not ready 
// function getinfo() {
//     console.log("Before Promise")
//     const data = p.then(res => console.log(res));
//     console.log("After Promise");
// }

// Using Async & Await Method 
// Only with one await
// Js Engine stop for 5 sec to resolved the promise and then go on next line 
// async function getinfo(){
//     console.log("Before Promise")
//     const data = await p;
//     console.log(data)
//     console.log("After Promise")
// }
// const data = getinfo()
// data.then(res => console.log(res))
// console.log(data)

async function getinfo(){
    console.log("Before 1st Promise")
    const data = await p;
    console.log(data)
    console.log("After 1st Promise")

    console.log("Before 2nd Promise")
    const data1 = await p;
    console.log(data1)
    console.log("After 2nd Promise")
}

function putinfo(){
    console.log("Putting information")
}
getinfo();
putinfo();

