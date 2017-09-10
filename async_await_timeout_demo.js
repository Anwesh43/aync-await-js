async function getTimeoutPromise(n,data) {
    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({status:"success",...data})
        },n*1000)
    })
    return promise
}
const resp = await getTimeoutPromise(2,{text:"Using Async Await ,Hello World"})

if(resp.status && resp.status == "success") {
    document.getElementById('content').innerHTML = resp.text
}
