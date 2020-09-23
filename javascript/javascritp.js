function formulario() {
  var nome = String(document.getElementById("nome").value);
  var sexo = String(document.getElementById("sexo").value);
  var data = String(document.getElementById("data").value);
  var endereco = String(document.getElementById("endereco").value);
  var mae = String(document.getElementById("mae").value);
  
  alert(nome + ", filho de "+ mae + ", nascido em " + data + " do sexo " +  sexo + " no endereço " + endereco);
}