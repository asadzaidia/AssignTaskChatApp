function send(){
    var text=document.getElementById('mess').value;
    
    var p=jQuery('<p></p>');
    
    p.append('<img src="image/user.jpg" style="border-radius: 50%;" width="30" height="30" alt="user-img"/>');
    p.append('  ');
    p.append(text);
    p.css("color","red");
    p.css("font-weight","bold");
    jQuery('#messages').append(p);
    scrollToBottom();
    clear();
    

}
    


function scrollToBottom(){
    $(".panel-body").stop().animate({ scrollTop: $(".panel-body")[0].scrollHeight}, 1000);
}

function clear(){
    document.getElementById('mess').value='';
}




function logout(){
window.open('login.html','_self');
}
