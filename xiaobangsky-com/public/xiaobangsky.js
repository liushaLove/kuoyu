// const req = new XMLHttpRequest();
// // req.open('GET','/friends.json');
// //req.open('GET','http://qq.com:8888/friends.json');
// req.open('GET','http://qq.com:8888/friends.js')
// req.onreadystatechange = ()=>{
//     if(req.readyState === 4 && req.status === 200){
//         console.log(req.response);
//     }
// }
// req.send();
// window.xxx = (data)=>{
//     console.log(data);
// }

function jsonp (url){
    return new Promise((resolve,reject)=>{
        const random = 'functionXiaobangCall'+Math.random();
        console.log(random);
        window[random] = (data)=>{
            console.log(data);
            resolve(data);
        }
        const script = document.createElement("script");
        script.src = `${url}?callback=${random}`;
        script.onload = ()=>{
            script.remove();
        }
        script.onerror = ()=>{
            reject();
        }
        document.body.appendChild(script);
    })
}

jsonp('http://qq.com:8888/friends.js').then((data)=>{
    console.log(data);
})