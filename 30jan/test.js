var btn = document.getElementById("search");
var uni = document.getElementById("university");
function data(){
    var country = document.getElementById("country").value;

    url = "http://universities.hipolabs.com/search?country="+country;  
      
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        uni.innerText="";
        var table = document.createElement('table');
        var tr = document.createElement('tr');
        var td0 = document.createElement('th');
        table.appendChild(tr);
        td0.innerText = "S.No.";
        tr.appendChild(td0);
        var td1 = document.createElement('th');
        td1.innerText = "Universities";
        tr.appendChild(td1);
        var td2 = document.createElement('th');
        td2.innerText = "Website";
        tr.appendChild(td2);
        uni.appendChild(table); 
            
        for(var i in data){
            var tr = document.createElement('tr');
            var td0 = document.createElement('td');
            td0.innerText = parseInt(i)+1;
            tr.appendChild(td0);
            var td1 = document.createElement('td');
            td1.innerText = data[i].name;
            tr.appendChild(td1);
            var td2 = document.createElement('td');
            tr.appendChild(td2);
            var anchor = document.createElement('a');
            anchor.innerText = data[i].web_pages;
            anchor.href = data[i].web_pages;
            anchor.target = "_blank";
            td2.appendChild(anchor); 
            table.appendChild(tr);
            uni.appendChild(table);
        }
    }).catch(arg=>{
        uni.innerText = "404 "+ arg;
    });
}
btn.addEventListener('click', data);