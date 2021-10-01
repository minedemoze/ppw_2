const express = request('express')
const app = express()
const PORT = 8080
const info = request('/info')

app.use(cors());
app.use("/api/gerador", router);
app.use("/api/geradorlimite",router1)
app.listen(PORT, function() {
    console.log(`Servidor iniciado na porta ${PORT}`)
});

app.get('/gerador', function(req, res) {

    const filtro = req.query.filtro
        }  
    var jogador = {    
        "nome": info.nome[Math.floor(Math.random() * info.nome.length)],
        "sobrenome": info.sobrenome[Math.floor(Math.random() * info.sobrenome.length)],
        "idade": Math.floor(Math.random() * (40 - 17 + 1) + 17),
        "posicao": info.posicao[Math.floor(Math.random() * info.posicao.length)],
        "clube": info.clube[Math.floor(Math.random() * info.clube.length)],
        "mensagem": " ",
    }
    
    jogador.mensagem = `${jogador.nome} ${jogador.sobrenome} é um futebolista brasileiro de ${jogador.idade} anos que atua como ${jogador.posicao}. Atualmente defende o ${jogador.clube}.`;

    if(filtro == "idade") {

        if(jogador.idade < 21) {
            jogador.idade = "Novato"
        }

        else {
            if(jogador.idade < 28) {
                jogador.idade = "Profissional"

            } else {
                if(jogador.idade < 34) {
                    jogador.idade = "Veterano"

                } else {
                    jogador.idade = "Master"

                }
            }
        }
    }
    res.json(jogador)
});