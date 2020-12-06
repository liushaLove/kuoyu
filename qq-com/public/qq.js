const req = new XMLHttpRequest();
req.open('GET','/friends.json');
req.onreadystatechange = ()=>{
    if(req.readyState === 4 && req.status === 200){
        console.log(req.response);
    }
}
req.send();