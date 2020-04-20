    function createElementDOM(){
       var p=document.createElement("p");
       var parentDiv=document.querySelector('#DivParent');
       var p3=document.querySelector('#p1');
       var text=document.createTextNode("Javascript");
       p.appendChild(text);
       parentDiv.insertBefore(p,p3);
     }

    function removeElementDOM(){
      p3.parentNode.removeChild(p3);
    }
    function replaceElementDOM(){
      var parentDiv= document.querySelector('#DivParent');
      var p1= document.querySelector('#p1');
      var p= document.createElement("p");
      var text= document.createTextNode("Yeni Oluşturulan");
      p.appendChild(text);
      parentDiv.replaceChild(p,p1);
    }
