window.addEventListener("load", solve);

function solve(){
    var addBtn = document.getElementById("add-btn");
        addBtn.addEventListener("click", add);
    
    var deleteBtn = document.getElementsByClassName("btn delete")[0];
    deleteBtn.addEventListener("click", reload);

    function reload(){
        window.location.reload();
    }


    function add(){
        
        // check if there are empty input fields
         if(((document.getElementById("expense") !== null && document.getElementById("expense").value === "")|| 
        (document.getElementById("amount") !== null && document.getElementById("amount").value === "") ||
        (document.getElementById("date") !== null && document.getElementById("date").value === ""))){
            return false;
        }

        // if there are not, continue with code
        var type = document.getElementById("expense").value;
        var amount = document.getElementById("amount").value;
        var date = document.getElementById("date").value;

        document.getElementById("expense").value = "";
        document.getElementById("amount").value = "";
        document.getElementById("date").value = "";
        
        var li = document.createElement("li");
        li.innerHTML = "<li class='expense-item'></li>";

        var article = document.createElement("article");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        
        p1.append(type);
        p2.append(amount);
        p3.append(date);

        article.append(p1);
        article.append(p2);
        article.append(p3);

        li.append(article);

        var list = document.getElementById("preview-list");

        list.append(li);

        addBtn.disabled= true;

        var div = document.createElement("div");
        div.innerHTML = "<div class='buttons'></div>";

        var editBtn = document.createElement("button");
        editBtn.innerHTML = "<button class='btn edit'>edit</button>";
        editBtn.addEventListener("click", edit);

        var okBtn  = document.createElement("button");
        okBtn.innerHTML = "<button class='btn ok'>ok</button>";
        okBtn.addEventListener("click", ok);

        div.appendChild(editBtn);
        div.appendChild(okBtn);
        list.appendChild(div);


        function edit(){
            addBtn.disabled = false;

            let article = document.getElementsByTagName("article")[0];
            document.getElementById("expense").value = article.getElementsByTagName("p")[0].textContent;
            document.getElementById("amount").value = article.getElementsByTagName("p")[1].textContent;
            document.getElementById("date").value = article.getElementsByTagName("p")[2].textContent;

            let lists = document.getElementById("preview-list");
            while (lists.hasChildNodes()) {
                lists.removeChild(lists.firstChild);
            }
       }

       function ok(){
            addBtn.disabled = false;

            let source = document.getElementsByTagName("article")[0];
            var type = source.getElementsByTagName("p")[0].textContent;
            var amount = source.getElementsByTagName("p")[1].textContent;
            var date = source.getElementsByTagName("p")[2].textContent;

            var li = document.createElement("li");
            li.innerHTML = "<li class='expense-item'></li>";

            var article = document.createElement("article");
            var p1 = document.createElement("p");
            var p2 = document.createElement("p");
            var p3 = document.createElement("p");

            p1.append(type);
            p2.append(amount);
            p3.append(date);
    
            article.append(p1);
            article.append(p2);
            article.append(p3);
    
            li.append(article);

            let list = document.getElementById("expenses-list");

            list.append(li);

            let lists = document.getElementById("preview-list");
            while (lists.hasChildNodes()) {
                lists.removeChild(lists.firstChild);
            }
       }

    }
    
}
