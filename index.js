function table(ths,tds){
var tabel=document.createElement("table");
tabel.setAttribute("class","table");
var thead=document.createElement("thead");
var tr=document.createElement("tr");
for(var i=0;i<=ths.length-1;i++){
    var th=document.createElement("th")
    th.setAttribute("scope","col");
    
    th.innerHTML=ths[i]
    tr.append(th);
}
thead.append(tr);
tabel.append(thead)
var tbody=document.createElement("tbody")
var tr1=document.createElement("tr");
for(var j=0;j<=tds.length-1;j++){
    var td=document.createElement("td");
    td.innerHTML=tds[j];
    tr1.append(td)
}
tbody.append(tr1)
tabel.append(tbody)
return tabel;
}

document.body.append(table(["first","sec","third"],["mark","otto","@mdo"]))