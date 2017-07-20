/**
 * Created by Ritesh on 7/5/2017.
 */
window.onload=function () {

    localStorage.clear();
    // localStorage.removeItem('player1Name');
    // localStorage.removeItem('player2Name');
    // localStorage.removeItem('player1age');
    // localStorage.removeItem('player2age');
    var player1 = document.getElementById('player1Name');
    var age1 = document.getElementById('player1age');
    var btnsave1 = document.getElementById('save_me');

    //console.log(player1.value);
    var player2 = document.getElementById('player2Name');
    var age2 = document.getElementById('player2age');
    var btnsave2 = document.getElementById('save_me2');

    var launchBtn =document.getElementById('The_lauch_button');
    //console.log(player1.value);

    btnsave1.onclick = function () {
        savetostore(player1.value, age1.value)
    };
    btnsave2.onclick=function () {
        savetostore2(player2.value,age2.value);

    }
    launchBtn.onclick =function () {
        redirect();
    }

};
function savetostore(name,age) {
   localStorage.setItem('player1Name',name);
   localStorage.setItem('player1age',age);

}
function savetostore2(name,age) {
    localStorage.setItem('player2Name',name);
    localStorage.setItem('player2age',age);

}
function redirect() {
    var flag=0;
    document.getElementById('message').innerHTML='';
    if(! localStorage.getItem('player1Name'))
    {
        flag++;
        document.getElementById('message').innerHTML+='Enter First Player\' name <br>';

    }

    if(! localStorage.getItem('player1age'))
    {
        flag++;
        document.getElementById('message').innerHTML+='Enter First Player\' age <br>';


    }

    if(! localStorage.getItem('player2Name'))
    {
        flag++;
        document.getElementById('message').innerHTML+='Enter Second Player\' s name <br>';

    }

    if(! localStorage.getItem('player2age'))
    {
        flag++;
        document.getElementById('message').innerHTML+='Enter Second Player\'s  age <br>';

    }
    if(flag>0)
    {
        $('#malert').modal();
        return;
    }
    else {
        location.href = "The_game_page.html"
    }

}