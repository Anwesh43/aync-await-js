async function getTimeoutPromise(n,data) {
    var promise = await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({status:"success",...data})
        },n*1000)
    })
    return  promise
}
const resp =  getTimeoutPromise(2,{text:"Using Async Await ,Hello World"})
resp.then((data)=>{
  if(data.status && data.status == "success") {
      document.getElementById('content').innerHTML = data.text
  }
})
