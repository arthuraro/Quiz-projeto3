const questions = {
    easy: [
        { 
            question: "Qual é o nome do protagonista principal?", 
            options: ["A) Link", "B) Zelda", "C) Ganondorf", "D) Sheik", "E) Midna"], 
            answer: 0,
            summary: "Link é o protagonista principal da série Zelda, conhecido por sua coragem e determinação." ,
            incorrectSummary: "Resposta incorreta. O protagonista de The Legend of Zelda na verdade é conhecido como Link"
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

    
        document.getElementById("conclusionText").innerText = "✨Parabéns! Você concluiu esta dificuldade do quiz com sucesso! Sua dedicação e conhecimento sobre o universo de Zelda são impressionantes. Continue explorando e se aprofundando nesse incrível mundo de aventuras e mistérios. Lembre-se sempre que o verdadeiro herói está dentro de você. Que suas futuras jornadas sejam repletas de desafios e triunfos. Até a próxima aventura, herói de Hyrule!✨"

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