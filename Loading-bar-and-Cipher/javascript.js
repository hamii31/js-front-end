function loading(){
    var p = document.getElementById("percentage");
    var bar = document.getElementById("bar");
    bar.style.border = "1px solid black";
    var time = 100;

    for(let i = 0; i <= 100; i++){
        setTimeout(() => {
            p.innerHTML = i + "%";
            bar.innerHTML += "|";

            if(i == 100){
                p.innerHTML = "Loading Complete!";
                setTimeout(() => {
                    loadData();
                }, 200);
            }
        }, time);
        time += 100;
    }

    function loadData(){
        var d = document.getElementById("res");
        d.innerHTML = "Glad you waited!";

        let items = document.getElementById("items");

        let secret = document.createElement("p");
        // My Cipher
        secret.append(".-.-. ..-.. .. .-_. --- .. .-_. --- .-. --- .-_. ._._. ._. ._-. ._._. .-.-. --- ..-.-.. ._._. .-_. .-_. .-. .-_ ._._. - --- .. ._._ --- .-_._-_. . .___. --- ._. .-. ..-_.. --- _-_ ._._. ._. .. ._.- ..-.. ._._. ._-. --- .. .-.-. _. --- .-_._-_. . .___. --- .-_. ..-.. . .___. .__. _-_ --- .-.-. .-_._-_. ._.- ._._. --- .-_. ._._. ._. ._-. ._._. .-.-. ..---.. ._._. .-_._-_. --- .. ..-_.. --- .-.-. ..-.. ._._. --- ._._. ..-.-.. ._.- .-.-. .-_._-_. --- ._._ .. ._._. .__. _-_");
        items.appendChild(secret);

        let input = document.createElement("input");
        let button = document.createElement("button");
        button.append("Check");
        button.addEventListener("click", check);

        items.appendChild(input);
        items.appendChild(button);

    }

    function check(){
        var n = document.getElementsByTagName("input")[0].value;

        if(n === "secretKey"){
            let res = document.createElement("p");
            res.append("Congratulations! You cracked the code!");

            let items = document.getElementById("items");
            items.appendChild(res);
        }
    }

}
