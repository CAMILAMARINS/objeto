let nome, autor, ano, existe, nome_autor

const livro = {}

livro.nome = prompt("Digite o nome do livro:")
livro.autor = prompt("Digite o nome do autor:")
livro.ano = Number(prompt("Digite o ano em que ele foi publicado:"))

console.log(livro)

const livro2 = {}

livro2.nome = prompt("Digite o nome do livro:")
livro2.autor = prompt("Digite o nome do autor:")
livro2.ano = Number(prompt("Digite o ano em que ele foi publicado:"))

console.log(livro2)

if(livro.ano < livro2.ano){
    console.log(`O livro ${livro.nome} é mais antigo`)
}

    if(livro.ano > livro2.ano){
        console.log(`O livro ${livro2.nome} é mais antigo`)
    }

    existe = prompt("existe algum livro com o nome 'estudando programação?'")

        if(existe == "sim"){        
            console.log("sim existe")
        }

            if(existe == "nao"){
                console.log("nao, nao existe")
            }

        nome_autor = prompt("Os dois livros são do mesmo autor?")   

                if(nome_autor == "sim"){        
                    console.log(`sim eles são, autor: ${livro.autor}`)
                }

                    if(nome_autor == "nao"){
                        console.log("nao, eles nao são do mesmo autor")
                        console.log(`autor do livro 1:${livro.autor}`)
                        console.log(`autor do livro 2:${livro2.autor}`)
                    }