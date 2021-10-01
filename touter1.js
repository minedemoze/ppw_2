
router.get("/geradorlimite", function (req, res) {
    let limite = req.query.limite;
    let jogadorLista = [];
    if (limite == undefined) {
        let jogador = jogador();
        for (let i = 0; i <= 5; i++) {
            jogador.push(jogador);
        }
    } else {
        for (let i = 0; i < limite; i++) {
            let jogador = Jogador();
            jogador.push(jogador);
        }
    }

    res.json(jogador);
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