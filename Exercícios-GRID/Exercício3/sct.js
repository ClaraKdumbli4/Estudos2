let nome, sobrenome, nomecompleto;

function ok() {
    nome= document.getElementById("input1").value;
    sobrenome = document.getElementById("input2").value;
    nomecompleto = nome + " " + sobrenome;
    document.getElementById("p1").innerHTML = "Dados processados:"+" "+ nomecompleto;
}

if(input1.lenght== " " || input2.lenght== " "){
  document.getElementById("p1").innerHTML= "Ocorreu algum erro :/ Tente novamente"
} else{
  document.getElementById("p1").innerHTML="Dados enviados com sucesso!"
}