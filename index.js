/*
INterpretaçao de codigo

Exercício 1
Matheus Nachtergaele
Virginia Cavendish

Erxicício 2
a)
console.log (cachorro)
nome: "juca", idade:3, raca: "SRD"

Console.log(gato)
nome: "juba", idade:3, raca: "SRD"
 
Console.log(tartaruga)
nome: "jubo" , idade:3, raca: "SRD"

b) faz uma copia dessa objeto

Exercício 3

A)
False : Por cauasa de que esse é o valor da propiedade

undefing; Não existia essa prooiedade dento do objeto
B) 

//Exercícios de escrita de código

// Exercício 1
const referencia = {
nome: "Eddyson",
apelidos: ["el negro","tarzan", "esportacus"],
 }

const minhafunction = (referencia) => {
 const frase = `Eu sou ${referencia.nome}, mas pode me chamar de: ${referencia.apelidos[0]},${referencia.apelidos[1]},ou ${referencia.apelidos[2]}`
console.log(frase);
};

 minhafunction (referencia);

 const novaReferencia ={
    ...referencia,
    apelidos: ["bb","corazon","gato"],}

 minhafunction (novaReferencia)
    


 //Exercicio 2

 const datos = {
    nome: "eddyson",
    idade: 20,
    profissao: "Metalurgico",
}
  
 const datos1 ={
    nome: "Isaac",
    idade: 23,
    profissao: "padeiro",
 }
 const minhafucao = (parametro1) =>{
        const rresultado = [parametro1.nome,parametro1.nome.length,parametro1.idade,parametro1.profissao,parametro1.profissao.length]
        return rresultado
    }
    
    console.log(minhafucao(datos))
    console.log(minhafucao(datos1))










    //Exercicio 3
    const carrinho = []

const fruta1 = {
    nome: "maça",
    disponibilidade: true
}

const fruta2 = {
    nome:"morango",
    disponibilidade: true
}

c




onst fruta3 = {
    nome: "bandffreana",
    disponibilidade: true
}

function Frutas (objfrutas) {
    carrinho.push(fruta1,fruta2,fruta3)
}

Frutas(carrinho)


console.log(carrinho)


const comparar = (num1,num2) =>{
    const operacao = num1 === num2
    if (operacao){
        console.log('iguais')
    } else 
console.log ("fail")
}

const valor1 = prompt ("digite um numero")
const valor2 = prompt ("digite outro numero")

comparar (Number(valor1), Number(valor2))


const idade = 17
if (idade > 18) {
    console.log ("pode votar")
} else {
if(idade >= 16 )



const comparar = (num1,num2) =>{
    if (num1 > num2){
        console.log("é maior");
 } else if (num1 < num2) {
     console.log ("menor");
 } else if {
     console.log ("iguais")
 }
}
const valor1 = prompt ("digite um numero")
const valor2 = prompt ("digite outro numero")

comparar (Number(valor1), Number(valor2))


const idade = 16
idade >= 18
  ? console.log ("vc pode tirar a cartera")
  : console.log("Vai andar de Ônibus")
  *

  const escolhido = prompt ("Nome do pokemon").toLowerCase()
  switch (escolhido) {
    case "bulbassauro":
        console.log("planta e veneno")
       break
    case "charmender":
        console.log("fogo")
      break
    case "squirtle":
        console.log ("agua")
    break
    default:
        console.log ("nao identificado")
        break
  }

  const facultade = (formadoEm, idade, estudando  ) =>{
    if( formadoEm && idade >= 18 && estudando !== "true"){
        return "Pode estudar";
   }else {
    return "Nao pode estudar";
   }

  }
  const escolaridade = prompt ("True ou false se é formado no EM")
  const idade = prompt ("qual é sua idade")
  const estudandoActualmente = prompt ("Vc está estudando na facultade? true ou false")
  const retorno = "podeEstudar" ( escolaridade.toLowerCase(), Number(idade), estudandoActualmente.toLowerCase())

  console.log(retorno)
  
  Exercício 1
  a) ele quer testar, se o numero que colocou o usuario dividido entre dois (2) é igual em tipo e valor ao (0)
  b) para o numeros:2,4,6,8 tudo numero par
  c) tudo numero impar
  
  Exercicio 2
  a)Para realiçar uma "lista" de condiciones é dizer posibles variavles.
  b)O preço da fruta maça é 2.25R$ preco
  c) Acontece que o bloco de codigo vai continuar execuatando 
   
  Ercício 3
  a) transforma em um "Numero" o stringi colocado pelo usuário
  b)10 = Esse numero passou o teste 
    -10= Erro
    Por caua de que não tem por exemplo um "defaul" 
 C) 




  
 //Exercício de escrita de codigo 1
    const idade = Number (prompt ("Qual é sua idade" ))
    if(idade >= 18){"
        console.log ("Você pode dirigir")
    } else {
        if ( idade < 18)
        console.log ("Você não pode dirigir")
    }

    console.log (idade)








    //Exercício 2
    const turno = prompt ("Digita o horario M (matutino) ou V (Vespertino) ou N (Noturno)").toLowerCase() 
    if (turno === "m"){
        console.log ("bom Dia!")

    }else if (turno === "v"){
            console.log ("Boa,tarde")

    } else if (turno === "n"){
            console.log ("Boa,Noite")
    }

*

    //Exercício 3
const turno1 = prompt ("Digita o horario M (matutino) ou V (Vespertino) ou N (Noturno)").toLowerCase()
  switch (turno1) {
    case "m":
        console.log("bom Dia!")
       break
    case "v":
        console.log("Boa,tarde")
      break
    case "n":
        console.log ("Boa,noite")
    break
    default:
        console.log ("nao identificado")
        break
  }
*/
const filme = prompt ("Que gênero de filme vão assistir,fantasia o Comédia").toLocaleLowerCase()
const filme1= (filme === "fantasia")
const preco = Number (prompt ( "preço do ingresso")) 
 const preco1 = (preco < 15)  


const comparar = (filme1,preco) 





