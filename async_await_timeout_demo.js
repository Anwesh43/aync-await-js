function getTimeoutPromise(n,data) {
    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({status:"success",...data})
        },n*1000)
    })
    return promise
}
getTimeoutPromise(2,{text:"Hello World"}).then((resp)=>{
    if(resp.status == "success") {
        console.log(resp)
        document.getElementById('content').innerHTML = resp.text
    }
})
