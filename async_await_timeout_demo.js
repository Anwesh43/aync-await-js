async function getTimeoutPromise(n,data) {
    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({status:"success",...data})
        },n*1000)
    })
    return  promise
}
async function getResponse(n,data) {
    const res = await getTimeoutPromise(n,data)
    console.log(res)
    if(res.status == "success") {
        document.getElementById('content').innerHTML = res.text
    }
}
getResponse(2,{text:"Hello from async to await"})
