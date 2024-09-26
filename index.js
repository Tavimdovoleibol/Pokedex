//var nome = prompt("Qual o seu nome ?")
//alert("SEJA BEM VINDO " + nome)
//var numero1 = Number (prompt("Digite o primeiro número"))
//var numero2 = Number (prompt("Digite o segundo número"))
//alert("O resultado da multiplicação é " + (numero1 * numero2))
//alert("O resultado da divisão é " + (numero1 / numero2))
//alert("O resultado da soma é " +  (numero1 + numero2))
//alert("O resultado da subtração é" + (numero1 - numero2))
/*var aluno = prompt("Qual o nome do aluno ?")
var nota1 = Number (prompt("Qual a primeira nota do " + aluno + (" ?")))
var nota2 = Number (prompt("Ok a primeira nota é " + nota1 + " Qual a segunda nota?"))
var media = ((nota1 + nota2 ) / 2)
alert("A média final será " + media)
if (media >= 6){
    alert("Aluno " + aluno + " APROVADO!")
}
else {
    alert("Aluno " + aluno + " REPROVADO!")
}
*/
/*var media = Number (prompt("Qual a nota do aluno ?"))
if (media >= 60) {
    alert("Aluno APROVADO!")
}
else {
    alert("Aluno REPROVADO!")
}
    */
/*  var peso = Number (prompt("Qual seu peso?"))
  var altura = Number (prompt ("Qual sua altura?"))
  var imc = Number (peso / (altura * altura ))
if (imc <= 16.9) {
   alert("Seu imc é " + imc.toFixed(2) + " você está muito abaixo do peso!")
}
if (imc >= 17 && imc <= 18.4){
alert("seu imc é ") + imc.toFixed(2) + (" você está abaixo do peso!")
}
if (imc >= 18.5 && imc <= 24.9){
   alert("Seu imc é " + imc.toFixed(2) + " você está com o peso normal!")
}
if (imc >= 25 && imc <= 29.9){
   alert("Seu imc é " + imc.toFixed(2) + " você está acima do peso!")
}
if (imc >= 30 && imc <= 34.9){
   alert("Seu imc é " + imc.toFixed(2) + " você possui obesidade de grau I!")
}
if (imc >= 35 && imc <= 40){
   alert("Seu imc é " + imc.toFixed(2) + " você tem obesidade grau II!")
}
if (imc >= 40){
   alert("Seu imc é " + imc.toFixed(2) + " você possui obesidade de grau III!")
}
var listadecursos = ["Programação", "Enfermagem", "Estética", "Técnico em Mecânica", "Administração", "Agricola", "Tornearia Mecânica"]
listadecursos.forEach(cursos => alert(cursos))
for(var i=0; i<=6; i++){
   alert(listadecursos [i])
}
var qtddenotas = prompt("Quantas notas serão avaliadas?")
var acumuladordenotas =0; 
for(var i=1; i<=qtddenotas; i++){
 var nota = prompt("Qual o valor da nota " + i)
  acumuladordenotas = acumuladordenotas + Number(nota)
}
var media = (acumuladordenotas / qtddenotas)
alert("A média é " + media.toFixed(2))
var listadealunos = ["Maylon", "Arthur", "Ryan", "Raphael", "Maria", "Gabriel", "Macoly", "Dalton", "Patrick"]
var numero = prompt("Digite o numero do aluno")
alert("O aluno do indice " + numero + " é " + listadealunos[numero])
var numero = prompt("Qual o numero desejado?")
for(var i=0; i<=9; i++){
   alert( i + " x " + numero + " = " + (numero * [i]))
}
var listadejogos = ["cod" , "fifa" , "Reddead" , "Mario" , "CS"]
var novojogo = prompt ("Digite um novo jogo")
listadejogos.push(novojogo)
alert(listadejogos[5])
var listadejogos = ["cod" , "fifa" , "Reddead" , "Mario" , "CS"]
var qtdejogosnovos = prompt("QUantos jogos vc quer adicionar?")
for(var i=0; i<qtdejogosnovos; i++){
   var jogo = prompt("Digite o nome do jogo")
   listadejogos.push(jogo)
}
alert(listadejogos)
while (operacao != 3) {
   var operacao = prompt("1- Saldo\n2- Transferencian\n3-Sair so sistema")
}
var listadenomes = ["Maylon" , "Arthur" , "Ryan" , "Raphael" , "Maria" , "Gabriel" , "Macoly" , "Dalton" , "Patrick"]
nuemerodecomputadores = [2,3,4,6,7,8,9,13,14]
var curso = {
nomedocurso: "Programação" ,
alunos: listadenomes ,
cargahoharia: Number = (60) ,
sala: "Informática" ,
Computador: nuemerodecomputadores
}
alert(curso.alunos[0] + " faz o curso de programação " + curso.nomedocurso + " Tem uma carga horaria de " + curso.cargahoharia + " horas " + " na sala de " + curso.sala + " no cumputador " + curso.Computador[1])
function calssificador(){
var numero = prompt("Digite um numero")
if(numero>10) {
   alert(numero + " e maior que 10")
}
else if (numero==10){
   alert(numero + " e igual a 10")
} 
else {
   alert(numero + " e menor que 10")
}
}
calssificador()

var cpf = ("13322255510")
var cpfformado = (cpf.substring(0,3) + "." + cpf.substring(3,6) + "." + cpf.substring(6,9) + "-" + cpf.substring(9,11))
   alert(cpfformado)
   */
alert("Seja Bem vindo a Pokedex")
var listadepoke = ["Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", "Mudkip", "Marshtomp", "Swampert", "Poochyena", "Mightyena", "Zigzagoon", "Linoone"]

while (operacao != 5) {
    var operacao = prompt(" Qual a funcionalidade que você quer acessar? \n1- Pokedex \n2- Quantidade de Pokemons capturados \n3- Lista de contatos \n4- Capturar Pokemon\n5- Sair da Pokedex")
    if (operacao == 1) {
        var textopokedex = "";
        listadepoke.forEach((pokemon, index) => textopokedex = textopokedex + (index + 1) + "-" + pokemon + "\n")
        alert(textopokedex)
    }
    if (operacao == 2) {
        alert(listadepoke.length)
    }
    if (operacao == 3) {
        var listatelefonica = ["Mrs.Devon|Ligar|Numero|Local\nMay|Ligar|Numero|Local\nProf.Birch|Ligar|Numero|Local\nSteven Stone|Ligar|Numero|Local\nMãe|Ligar|Numero|Local\nPai Norman|Ligar|Numero|Local\nBrawly|Ligar|Numero|Local\nWattson|Ligar|Numero|Local\nFlannery|Ligar|Numero|Local\nWinona|Ligar|Numero|Local\nJuan|Ligar|Numero|Local"]
        alert(listatelefonica)
    }
    if (operacao == 4) {
        var pokenovo = prompt("Qual o nome do Pokemon?")
        listadepoke.push(pokenovo)
    }
}
