var numeroSecreto = parseInt(Math.random() * 10)

var tentativas = 3

while (tentativas > 0){
  var chute = parseInt(prompt("Digite um número de 0 a 10"))
  
  if (chute == numeroSecreto) {
    alert("Acertou!!")
    break
  } else if (chute > numeroSecreto) {
    tentativas--
    alert("O número secreto é menor.")
  } else if (chute < numeroSecreto) {
    tentativas-- 
    alert("O número secreto é maior.")
  }
}

if (chute != numeroSecreto) {
  alert(`Suas tentativas acabaram. O número secreto era ${numeroSecreto}`)
  //alert("Suas tentativas acabaram. O número secreto era " + numeroSecreto)
} else 
  alert("Fim do programa!!")