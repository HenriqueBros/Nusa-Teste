function formulario() {
if(document.getElementById("nome").value == ""){
    alert("Preencha o nome"); 
    return false;
    }

if(document.getElementById("sexo").value == ""){
    alert("Preencha o sexo"); 
    return false;
    }

if(document.getElementById("data").value == ""){
    alert("Preencha a data"); 
    return false;
    }

if(document.getElementById("endereco").value == ""){
    alert("Preencha o endereço"); 
    return false;
    }

if(document.getElementById("mae").value == ""){
    alert("Preencha o nome da mãe"); 
    return false;
    }


  var nome = String(document.getElementById("nome").value);
  var sexo = String(document.getElementById("sexo").value);
  var data = String(document.getElementById("data").value);
  var endereco = String(document.getElementById("endereco").value);
  var mae = String(document.getElementById("mae").value);
  
  alert(nome + ", filho de "+ mae + ", nascido em " + data + " do sexo " +  sexo + " no endereço " + endereco);
}