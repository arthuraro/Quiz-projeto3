const questions = {
    easy: [
        {
            "question": "Qual é o nome do protagonista principal na maioria dos jogos da série Zelda?",
            "options": ["A) Link", "B) Zelda", "C) Ganondorf", "D) Navi", "E) Impa"],
            "answer": 0,
            "summary": "Link é o protagonista principal da série Zelda, conhecido por sua coragem e determinação.",
            "incorrectSummary": "Resposta incorreta. O protagonista de The Legend of Zelda na verdade é conhecido como Link."
        },
        {
            "question": "Qual é a princesa que frequentemente precisa ser resgatada ao longo dos jogos?",
            "options": ["A) Zelda", "B) Link", "C) Ganondorf", "D) Impa", "E) Ruto"],
            "answer": 0,
            "summary": "Zelda é a princesa frequentemente resgatada nos jogos da série.",
            "incorrectSummary": "Resposta incorreta. A princesa frequentemente resgatada na série é Zelda."
        },
        {
            "question": "Qual é o artefato místico muitas vezes central à trama dos jogos Zelda?",
            "options": ["A) A Espada Mestra", "B) O Cálice Sagrado", "C) O Bastão de Fogo", "D) O Escudo Sagrado", "E) O Anel do Poder"],
            "answer": 0,
            "summary": "A Espada Mestra é um artefato central na trama de muitos jogos da série Zelda.",
            "incorrectSummary": "Resposta incorreta. O artefato central à trama de muitos jogos da série Zelda é a Espada Mestra."
        },
        {
            "question": "Qual é a criatura recorrente na série Zelda que ajuda Link em suas jornadas?",
            "options": ["A) Navi", "B) Epona", "C) Tatl", "D) Midna", "E) Fi"],
            "answer": 0,
            "summary": "Navi é uma criatura recorrente que ajuda Link em suas jornadas.",
            "incorrectSummary": "Resposta incorreta. Navi é a criatura que frequentemente ajuda Link em suas jornadas."
        },
        {
            "question": "Qual é o vilão principal em muitos dos jogos da série Zelda?",
            "options": ["A) Ganondorf", "B) Link", "C) Zelda", "D) Ghirahim", "E) Vaati"],
            "answer": 0,
            "summary": "Ganondorf é o principal vilão em muitos jogos da série Zelda.",
            "incorrectSummary": "Resposta incorreta. O principal vilão em muitos jogos da série Zelda é Ganondorf."
        },
        {
            "question": "Qual é a princesa do povo Zora em alguns jogos da série Zelda?",
            "options": ["A) Ruto", "B) Zelda", "C) Impa", "D) Nabooru", "E) Marin"],
            "answer": 0,
            "summary": "Ruto é a princesa do povo Zora em alguns jogos da série Zelda.",
            "incorrectSummary": "Resposta incorreta. A princesa do povo Zora em alguns jogos da série Zelda é Ruto."
        },
        {
            "question": "Qual é o nome do reino em que a maioria dos jogos da série Zelda se passa?",
            "options": ["A) Hyrule", "B) Lorule", "C) Termina", "D) Labrynna", "E) Holodrum"],
            "answer": 0,
            "summary": "Hyrule é o reino onde a maioria dos jogos da série Zelda se passa.",
            "incorrectSummary": "Resposta incorreta. O reino onde a maioria dos jogos da série Zelda se passa é Hyrule."
        },
        {
            "question": "Qual é o instrumento musical muitas vezes importante para a progressão do jogo?",
            "options": ["A) A Ocarina do Tempo", "B) A Harpa da Deusa", "C) O Flauta do Vento", "D) O Tambor dos Anciões", "E) A Lira de Orpheus"],
            "answer": 0,
            "summary": "A Ocarina do Tempo é um instrumento musical importante na série Zelda.",
            "incorrectSummary": "Resposta incorreta. O instrumento musical importante na série Zelda é a Ocarina do Tempo."
        },
        {
            "question": "Qual é o nome do protagonista em 'The Legend of Zelda: Breath of the Wild'?",
            "options": ["A) Link", "B) Zelda", "C) Ganondorf", "D) Urbosa", "E) Mipha"],
            "answer": 0,
            "summary": "Link é o protagonista em 'The Legend of Zelda: Breath of the Wild'.",
            "incorrectSummary": "Resposta incorreta. O protagonista de 'The Legend of Zelda: Breath of the Wild' é Link."
        },
        {
            "question": "Qual é o papel de Ganondorf na série Zelda?",
            "options": ["A) Principal vilão", "B) Protagonista", "C) Mestre sábio", "D) Companheiro de Link", "E) Guardião da paz"],
            "answer": 0,
            "summary": "Ganondorf é o principal vilão na série Zelda.",
            "incorrectSummary": "Resposta incorreta. O papel de Ganondorf na série Zelda é o de principal vilão."
        },

    ],

    medium: [
        { question: "Qual é o nome do vilão principal de Zelda: Breath of the Wild?", options: ["A) Ganondorf", "B) Calamity Ganon", "C) Vaati", "D) Zant", "E) Ghirahim"], answer: 1 },
      
        // Adicione as outras perguntas médias aqui
    ],
    
    hard: [
        // Adicione as perguntas difíceis aqui
    ],

    expert: [
        // Adicione as perguntas difíceis aqui
    ],

};

let currentQuestions = [];
let currentQuestionIndex = 0;
let currentDifficulty = "";

function startQuiz(difficulty) {
    currentDifficulty = difficulty;
    currentQuestions = questions[difficulty];
    currentQuestionIndex = 0;
    showQuestion();
    document.querySelector(".container").classList.add("hide");
    document.getElementById("quiz").style.display = "block";

      // Oculta os botões de seleção de dificuldade
      document.getElementById("difficultySelection").style.display = "none";
      // Exibe o container do quiz
      document.getElementById("quiz").style.display = "block";
  
}

function hideWelcomeScreen() {
    // Esconde a tela de boas-vindas
    document.getElementById("welcomeScreen").style.display = "none";
    // Exibe o container de seleção de dificuldade
    document.getElementById("difficultySelection").style.display = "block";
}

function showQuestion() {
    const questionObj = currentQuestions[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const questionNumber = currentQuestionIndex + 1;
    questionElement.innerText = "Questão " + questionNumber + ":\n\n" + questionObj.question;

       // Oculta a informação da pergunta anterior
       document.getElementById("info").style.display = "none";

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    questionObj.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(optionIndex) {
    const correctIndex = currentQuestions[currentQuestionIndex].answer;
    const options = document.querySelectorAll("#options button");

    options.forEach(option => {
        option.classList.remove("selected-option");
        option.onclick = null;
    });

    // Adiciona a classe 'selected-option' à opção selecionada
    options[optionIndex].classList.add("selected-option");

    // Adiciona o estilo de fundo verde à resposta correta
    options[correctIndex].style.backgroundColor = "lightgreen";

    // Aplica negrito apenas à alternativa correta
    options[correctIndex].style.fontWeight = "bold";

    // Adiciona o estilo de fundo vermelho claro às respostas incorretas
    options.forEach((option, index) => {
        if (index !== correctIndex) {
            option.style.backgroundColor = "#ffb3b3" ; // Vermelho claro
        }
    });

    const nextButton = document.getElementById("nextButton");
    nextButton.style.display = "block";

    // Mostra o símbolo de acerto na questão correta
    const questionElement = document.getElementById("question");
    const correctSymbol = document.createElement("span");
    correctSymbol.innerText = "✔️";
    correctSymbol.style.marginRight = "5px"; // Espaçamento entre o símbolo e o texto
    options[correctIndex].appendChild(correctSymbol);

    // Mostra o símbolo de erro nas alternativas incorretas
    options.forEach((option, index) => {
        if (index !== correctIndex) {
            const wrongSymbol = document.createElement("span");
            wrongSymbol.innerText = "❌";
            wrongSymbol.style.color = "red";
            wrongSymbol.style.marginRight = "5px"; // Espaçamento entre o símbolo e o texto
            option.appendChild(wrongSymbol);
        }
    });
       
    // Mostra o elemento de informação apenas se a resposta estiver correta
    if (optionIndex === correctIndex) {
        // Mostra o elemento de informação
        const infoElement = document.getElementById("info");
        infoElement.style.display = "block";

        // Preenche o elemento com o resumo da pergunta correta
        const questionObj = currentQuestions[currentQuestionIndex];
        const correctSummary = questionObj.summary;
        infoElement.innerText = correctSummary;

        // Adiciona a classe de animação
        infoElement.classList.add("slide-in");

        // Adiciona uma transição para suavizar a exibição
        setTimeout(function() {
            infoElement.style.opacity = 1;
        }, 100);
    }

    // Mostra o elemento de informação apenas se a resposta estiver incorreta
if (optionIndex !== correctIndex) {
    // Mostra o elemento de informação
    const infoElement = document.getElementById("info");
    infoElement.style.display = "block";

    // Preenche o elemento com o resumo da pergunta incorreta
    const questionObj = currentQuestions[currentQuestionIndex];
    const incorrectSummary = questionObj.incorrectSummary;
    infoElement.innerText = incorrectSummary;

    // Adiciona a classe de animação
    infoElement.classList.add("slide-in");

    // Adiciona uma transição para suavizar a exibição
    setTimeout(function() {
        infoElement.style.opacity = 1;
    }, 100);
}

}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
        const nextButton = document.getElementById("nextButton");
        nextButton.style.display = "none";
    } else {
        const concludeButton = document.getElementById("concludeButton");
        concludeButton.style.display = "block";
        document.getElementById("nextButton").style.display = "none";
    }

}

function concludeQuiz() {
    document.getElementById("quiz").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    const nextButton = document.getElementById("nextButton");
    nextButton.addEventListener("click", nextQuestion);

    const concludeButton = document.getElementById("concludeButton");
    concludeButton.addEventListener("click", concludeQuiz);
});

function concludeQuiz() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("concludeButton").style.display = "none";
    document.getElementById("conclusionMessage").style.display = "block";
    
    const correctAnswers = countCorrectAnswers();

    
        document.getElementById("conclusionText").innerText = "Parabéns, você concluiu esta dificuldade do Quiz sobre o universo de zelda, se você foi bem no Quiz, Parabéns, você coonhece bem o grande e incrivel universo de Zelda, agora, se você não foi bem fique tranquilo, o intuito desse Quiz é a diversão e o objetivo é você conhecer o universo dos jogos da franquia. Agora, você voltará para o inicio para fazer as outras dificuldades. Boa sorte!"
        // Substitua "caminho/para/imagem_de_parabens.gif" pelo caminho do seu GIF animado
    document.getElementById("conclusionImage").src= "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjFrZGZ6d2VrYndnaXM5a2NpNjc1Z2UzZW1jMW5xNW9rOXpmNHQ5MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/BHCFcibksBxAV0FDoL/giphy.gif";
} 

function countCorrectAnswers() {
    let correctAnswers = 0;
    currentQuestions.forEach(question => {
        const selectedOptionIndex = question.options.findIndex((option, index) => {
            return document.querySelectorAll("#options button")[index].classList.contains("selected-option");
        });
        if (selectedOptionIndex === question.answer) {
            correctAnswers++;
        }
    });
    return correctAnswers;
}

function backToDifficultySelection() {
    // Oculta a tela de conclusão do quiz
    document.getElementById("conclusionMessage").style.display = "none";
    // Exibe a tela de seleção de dificuldade
    document.getElementById("difficultySelection").style.display = "block";
}