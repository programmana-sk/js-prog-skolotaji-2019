function samazinat() {
    let rez = document.getElementById("vertiba").value; 
   rez--;
   if(rez<1){
       rez=1;
       alert('Samazināt nevar,nav naturāls skaitlis');
   }
   document.getElementById("vertiba").value=rez;
   
 }
