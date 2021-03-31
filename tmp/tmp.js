function fuku() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('pass').value;
    let email = document.getElementById('email').value;
    let userData = {
        name:username,
        pass:password,
        mail:email
    }
    window.localStorage.setItem('input',JSON.stringify(userData));
    //lets say i got this from sql server:
    let obi = {
        name:'itay',
        pass:'italya',
        mail:null
    }

    // testing username + password for user itay:
    if(obi.name === userData.name) {
        if(obi.pass === userData.pass) {
            alert('welcome itay');
        }
        else{
            alert('wrong password');
        }
    }
    else {
        alert('unknown username');
    }

}