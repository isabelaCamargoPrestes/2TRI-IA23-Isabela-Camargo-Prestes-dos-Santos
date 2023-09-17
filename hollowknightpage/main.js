const Quiz = document.querySelector(".quiz");
        const elPergunta = Quiz.querySelector(".pergunta");
        const elAlternativas = Quiz.querySelector(".alternativas");
        const elCorretas = document.querySelector(".corretas");
        const elErradas = document.querySelector(".erradas");
        const elCorretasFinal = document.querySelector(".corretas-final");
        const elErradasFinal = document.querySelector(".erradas-final");
        const modalFinish = document.querySelector(".modal-finish");

        async function main() {
            const quiz = [
                {
                    pergunta: "Em que ano o jogo foi lançado?",
                    alternativas: ["2018", "2015", "2017", "2014"],
                    resposta: 2
                },
                {
                    pergunta: "Qual o nome da desenvolvedora de Hollow Knight?",
                    alternativas: ["Devolver", "Microgaming", "Mojang", "Epic Games", "Team Cherry"],
                    resposta: 4
                },
                {
                    pergunta: "Qual boss dá a garra de louva-à-deus?",
                    alternativas: ["nenhum", "Hornet", "Lordes Mantis", "Cavaleiros Sentinela"],
                    resposta: 0
                },
                {
                    pergunta: "Quais essências são necessárias para despertar o Ferrão dos sonhos?",
                    alternativas: ["2200", "250", "1800", "1500"],
                    resposta: 2
                },
                {
                    pergunta: "Quantos amuletos existem?",
                    alternativas: ["45", "52", "34", "40"],
                    resposta: 0
                },
                {
                    pergunta: "Quantos finais existem?",
                    alternativas: ["4", "3", "6", "5"],
                    resposta: 3
                },
                {
                    pergunta: "Quantas conquistas existem em Hollow Knight?",
                    alternativas: ["32", "65", "63", "53"],
                    resposta: 3
                },
                {
                    pergunta: "O Vessel é?",
                    alternativas: ["meio deus meio vazio", "meio mariposa meio deus", "meio louva a deus meio aranha", "meio aranha meio vazio"],
                    resposta: 0
                },

            ];

            let numeroDaQuestao = 0;
            let corretas = 0;
            let erradas = 0;

            function carregarQuestao(numeroDaQuestao) {
                elPergunta.innerHTML = quiz[numeroDaQuestao].pergunta;
                elAlternativas.innerHTML = "";
                
                for (let i = 0; i < quiz[numeroDaQuestao].alternativas.length; i++) {
                    elAlternativas.innerHTML += `<button>${quiz[numeroDaQuestao].alternativas[i]}</button>`;
                }
            }

            elAlternativas.addEventListener("click", ev => {
                const alternativaClicada = ev.target;
                const arrayAlternativas = Array.from(elAlternativas.children);
                const numeroDaAlternativaClicada = arrayAlternativas.indexOf(alternativaClicada);

                if (numeroDaAlternativaClicada === quiz[numeroDaQuestao].resposta) {
                    corretas++;
                    elCorretas.textContent = corretas;
                } else {
                    erradas++;
                    elErradas.textContent = erradas;
                }

                if (numeroDaQuestao < quiz.length - 1) {
                    numeroDaQuestao++;
                    carregarQuestao(numeroDaQuestao);
                } else {
                    elCorretasFinal.textContent = corretas;
                    elErradasFinal.textContent = erradas;
                    modalFinish.style.display = "block";
                }
            });

            carregarQuestao(numeroDaQuestao);
        }

        main();