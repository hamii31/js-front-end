function post(){
    var time = new Date().toLocaleTimeString();

    var post = document.getElementsByTagName("input")[0].value;
    var p = document.createElement("p");
    p.append("Anonymous (" + time + ") : ");
    p.append(post); 

    var delBtn = document.createElement("button");
    delBtn.innerHTML = "Delete";
    delBtn.addEventListener("click", del);

    p.append(delBtn);

    var list = document.getElementById("items");
    
    // for the sake of the example we will use "bad", "worse" and "worst"
    if(post.includes("bad") || post.includes("worse") || post.includes ("worst")){
        p.innerHTML = "The post was removed because it was against the community guidelines!";
        p.style.color = "red";
        list.append(p);
        setTimeout(() => {
            list.removeChild(p);
        }, 1500)
    }
    else{
        list.append(p);
    }

    function del(){
        p.remove();
    }
    
}
