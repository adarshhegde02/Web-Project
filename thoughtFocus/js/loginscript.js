function login(){
    let user=document.getElementById('uname').value;
    let pass=document.getElementById('pass').value;

    let localUser=localStorage.getItem('uname');
    let localPass=localStorage.getItem('pass');

    if(user===localUser&&pass===localPass){
        return true;
    }
    return false;
}