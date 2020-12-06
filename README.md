#### 利用node.js做服务器端实现的跨域程序
##### 跨域的两种方式
1. CORS

```javascript
response.setHeader('Access-Control-Allow-Origin','http://xiaobangsky.com:9999');
```

2. 利用JSONP方式实现
```javascript
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
```

##### 服务器启动
```javascript
node-dev server.js 8888
```