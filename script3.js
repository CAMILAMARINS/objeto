let modelo, marca, ano, valor, dados

while(true){

const carro = {}

carro.modelo = prompt("Digite o modelo do carroo:")
carro.marca = prompt("Digite a marca do carro:")
carro.ano = Number(prompt("Digite o ano do carro:"))
carro.valor = Number(prompt("Digite o valor do carro:"))

dados = prompt("quer adicionar dados de mais carros?'")

        if(dados == "sim"){        
            console.log(carro)
        }

            if(dados == "nao"){
                console.log()
            }
}
