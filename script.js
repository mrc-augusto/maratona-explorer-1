const answerElement = document.querySelector('#resposta')
const questionInput = document.querySelector('#questionInput')
const questionButton = document.querySelector('#questionButton')
const answers = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
];

// clicar em fazer pergunta
function makeQuestion(){

  if(questionInput.value==''){
    alert('Digite sua pergunta')
    return
  }

  questionButton.setAttribute('disabled', true);

  const question = "<div>" + questionInput.value + "</div>"

  // gerar respostas aleatória
  const totalAnswers = answers.length;
  const randomNumber = Math.floor(Math.random() * totalAnswers);
  answerElement.innerHTML = question + answers[randomNumber]

  answerElement.style.opacity = 1;

  // sumir resposta depois de 3 segundos
  setTimeout(function(){
    answerElement.style.opacity = 0;
    questionButton.removeAttribute('disabled');
  }, 3000)
};
