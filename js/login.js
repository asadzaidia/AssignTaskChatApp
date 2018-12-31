function login(){
    var username=document.getElementById('un').value;
    var password=document.getElementById('pass').value;
    if(username==="admin" && password==="admin"){
        window.open('chat.html','_self');


    }else{
        document.getElementById('result').innerHTML='Wrong Username or Password!';
    }
   
}
