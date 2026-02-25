import { questionsISO } from '../data/iso.js';
import { questionsPAR } from '../data/par.js';

// ---- Configuración y Estado ----
const subjects = [
    { id: 'iso', name: 'Implantación de Sistemas Operativos', data: questionsISO, color: '#39ff14' },
    { id: 'par', name: 'Planificación y Adm. de Redes', data: questionsPAR, color: '#00f0ff' }
];

const state = {
    currentSubject: null,
    questions: [],
    currentIndex: 0,
    score: 0,
    isAnswered: false
};

// ---- Elementos del DOM ----
const appContainer = document.getElementById('app-container');
const selectionScreen = document.getElementById('selection-screen');
const testScreen = document.getElementById('test-screen');
const resultScreen = document.getElementById('result-screen');
const subjectButtonsContainer = document.getElementById('subject-buttons');
const subjectTitle = document.getElementById('subject-title');
const scoreDisplay = document.getElementById('score-display');
const progressBar = document.getElementById('progress-bar');
const currentQNum = document.getElementById('current-q-num');
const totalQNum = document.getElementById('total-q-num');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const btnBack = document.getElementById('btn-back');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');
const finalScore = document.getElementById('final-score');
const finalMessage = document.getElementById('final-message');
const scoreCircleContainer = document.getElementById('score-circle-container');

// ---- Inicialización ----
function init() {
    renderSubjectSelection();
    setupEventListeners();
}

function renderSubjectSelection() {
    subjectButtonsContainer.innerHTML = '';

    subjects.forEach(subject => {
        const btn = document.createElement('button');
        btn.className = `w-full text-left p-6 rounded-2xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700/80 transition-all shadow-lg hover:shadow-xl group relative overflow-hidden`;
        btn.dataset.id = subject.id;

        // Efecto hover decorativo
        const glow = document.createElement('div');
        glow.className = `absolute top-0 right-0 w-2 h-full transition-all group-hover:w-full opacity-10 group-hover:opacity-20 z-0`;
        glow.style.backgroundColor = subject.color;

        const content = document.createElement('div');
        content.className = 'relative z-10 flex flex-col gap-2';
        content.innerHTML = `
            <span class="text-xs uppercase tracking-widest text-slate-400 font-semibold align-middle flex items-center gap-2">
                <span class="w-2 h-2 rounded-full inline-block" style="background-color: ${subject.color}"></span>
                Módulo
            </span>
            <span class="text-lg font-bold text-white transition-colors">
                ${subject.name}
            </span>
            <span class="text-sm text-slate-500 mt-2">${subject.data.length} preguntas disponibles</span>
        `;

        btn.appendChild(glow);
        btn.appendChild(content);
        subjectButtonsContainer.appendChild(btn);
    });
}

function setupEventListeners() {
    // Uso de delegación de eventos para la selección de asignatura
    subjectButtonsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-id]');
        if (!btn) return;

        const subjectId = btn.dataset.id;
        startTest(subjectId);
    });

    // Delegación para las opciones de respuesta
    optionsContainer.addEventListener('click', (e) => {
        if (state.isAnswered) return;

        const optionBtn = e.target.closest('.option-btn');
        if (!optionBtn) return;

        const selectedIndex = parseInt(optionBtn.dataset.index, 10);
        handleAnswer(selectedIndex, optionBtn);
    });

    // Navegación
    btnNext.addEventListener('click', nextQuestion);
    btnBack.addEventListener('click', confirmExit);
    btnRestart.addEventListener('click', resetApp);
}

// ---- Lógica del Test ----
function startTest(subjectId) {
    const subject = subjects.find(s => s.id === subjectId);
    if (!subject) return;

    state.currentSubject = subject;
    // Barajamos levemente las preguntas
    state.questions = [...subject.data].sort(() => Math.random() - 0.5);
    state.currentIndex = 0;
    state.score = 0;

    // UI Updates
    subjectTitle.textContent = subject.name;
    subjectTitle.style.color = subject.color;
    totalQNum.textContent = state.questions.length;
    updateScoreUI();

    // Transición de pantallas
    selectionScreen.classList.add('hidden');
    testScreen.classList.remove('hidden');
    resultScreen.classList.add('hidden');

    loadQuestion();
}

function loadQuestion() {
    state.isAnswered = false;
    btnNext.classList.add('hidden');

    const question = state.questions[state.currentIndex];
    currentQNum.textContent = state.currentIndex + 1;

    // Actualizar barra de progreso
    const progressPercent = ((state.currentIndex) / state.questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    progressBar.style.backgroundColor = state.currentSubject.color; // Reset to theme color

    // Animación de entrada
    questionText.classList.remove('animate-fade-in');
    void questionText.offsetWidth; // Trigger reflow
    questionText.classList.add('animate-fade-in');

    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';

    question.options.forEach((optionText, index) => {
        const btn = document.createElement('button');
        btn.className = `option-btn w-full text-left p-4 md:p-5 rounded-xl border border-slate-700 bg-slate-800/60 hover:bg-slate-700 hover:border-slate-500 transition-all font-medium text-slate-200 animate-fade-in flex items-center gap-4`;
        btn.style.animationDelay = `${index * 0.1}s`;
        btn.dataset.index = index;

        // Letra de opción (A, B, C, D)
        const letterBadge = document.createElement('span');
        letterBadge.className = 'flex-shrink-0 w-8 h-8 rounded-lg bg-slate-900 border border-slate-600 flex items-center justify-center text-xs font-bold text-slate-400';
        letterBadge.textContent = String.fromCharCode(65 + index); // A, B, C...

        const textSpan = document.createElement('span');
        textSpan.className = 'flex-grow';
        textSpan.textContent = optionText;

        btn.appendChild(letterBadge);
        btn.appendChild(textSpan);

        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedIndex, selectedBtn) {
    state.isAnswered = true;
    const question = state.questions[state.currentIndex];
    const isCorrect = selectedIndex === question.correct;

    const allOptions = optionsContainer.querySelectorAll('.option-btn');

    // Estilos de feedback
    allOptions.forEach((btn, idx) => {
        btn.classList.remove('hover:bg-slate-700', 'hover:border-slate-500', 'cursor-pointer');
        btn.classList.add('opacity-50', 'cursor-not-allowed');

        const badge = btn.querySelector('span:first-child');

        if (idx === question.correct) {
            // Reverdecer la correcta siempre
            btn.classList.remove('opacity-50', 'bg-slate-800/60', 'border-slate-700');
            btn.classList.add('bg-green-900/30', 'border-green-500/50', 'text-green-300', 'shadow-[0_0_15px_rgba(57,255,20,0.1)]');
            badge.classList.remove('bg-slate-900', 'border-slate-600', 'text-slate-400');
            badge.classList.add('bg-green-500', 'border-green-400', 'text-black');
        } else if (idx === selectedIndex && !isCorrect) {
            // Enrojecer si eligió la incorrecta
            btn.classList.remove('opacity-50', 'bg-slate-800/60', 'border-slate-700');
            btn.classList.add('bg-red-900/30', 'border-red-500/50', 'text-red-300');
            badge.classList.remove('bg-slate-900', 'border-slate-600', 'text-slate-400');
            badge.classList.add('bg-red-500', 'border-red-400', 'text-white');
        }
    });

    if (isCorrect) {
        state.score += 100;
        updateScoreUI();
        triggerCorrectAnimation();
    } else {
        triggerIncorrectAnimation();
    }

    // Mostrar explicación si existe
    if (question.explanation) {
        showExplanation(question.explanation, isCorrect);
    }

    // Mostrar botón siguiente
    btnNext.classList.remove('hidden');
    btnNext.classList.add('animate-fade-in');

    // Modificar texto del botón si es la última pregunta
    if (state.currentIndex === state.questions.length - 1) {
        btnNext.textContent = 'Ver Resultados';
    } else {
        btnNext.textContent = 'Siguiente';
    }
}

function updateScoreUI() {
    scoreDisplay.textContent = `Puntos: ${state.score}`;
    scoreDisplay.classList.add('scale-110', 'text-white');
    setTimeout(() => {
        scoreDisplay.classList.remove('scale-110', 'text-white');
    }, 200);
}

function showExplanation(text, isCorrect) {
    const explBox = document.createElement('div');
    explBox.className = `mt-6 p-4 rounded-xl text-sm border-l-4 animate-fade-in ${isCorrect
            ? 'bg-green-900/10 border-green-500 text-green-200'
            : 'bg-slate-800/50 border-blue-400 text-blue-200'
        }`;
    explBox.innerHTML = `<strong>Explicación:</strong> ${text}`;
    optionsContainer.appendChild(explBox);
}

function nextQuestion() {
    state.currentIndex++;

    if (state.currentIndex < state.questions.length) {
        loadQuestion();
    } else {
        finishTest();
    }
}

function finishTest() {
    testScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    // Llenar barra al 100%
    progressBar.style.width = '100%';

    const percentage = Math.round((state.score / (state.questions.length * 100)) * 100);
    finalScore.textContent = `${percentage}%`;

    let message = '';
    let colorClass = '';

    if (percentage >= 90) {
        message = '¡Excepcional! Dominio absoluto del sistema.';
        colorClass = 'border-cyber-neon text-cyber-neon shadow-[0_0_30px_rgba(57,255,20,0.3)]';
    } else if (percentage >= 70) {
        message = 'Aprobado. Buen nivel operativo, sigue así.';
        colorClass = 'border-cyber-blue text-cyber-blue shadow-[0_0_30px_rgba(0,240,255,0.3)]';
    } else if (percentage >= 50) {
        message = 'Al límite. Se requieren más ciclos de entrenamiento.';
        colorClass = 'border-yellow-400 text-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.3)]';
    } else {
        message = 'Fallo crítico. Necesitas estudiar el manual a fondo.';
        colorClass = 'border-cyber-red text-cyber-red shadow-[0_0_30px_rgba(255,0,60,0.3)]';
    }

    finalMessage.textContent = message;

    // Limpiar clases previas del circulo
    scoreCircleContainer.className = 'w-36 h-36 rounded-full border-4 flex items-center justify-center shadow-glass transition-all mb-4 bg-slate-900/50 backdrop-blur-sm';

    // Añadir nuevas clases
    const classesToAdd = colorClass.split(' ');
    classesToAdd.forEach(cls => scoreCircleContainer.classList.add(cls));
}

function confirmExit() {
    if (confirm('¿Estás seguro de que deseas abandonar la simulación actual? Se perderá tu progreso.')) {
        resetApp();
    }
}

function resetApp() {
    testScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    selectionScreen.classList.remove('hidden');

    // Reset state
    state.currentSubject = null;
    state.currentIndex = 0;
    state.score = 0;
    state.isAnswered = false;

    // Reset UI reset
    progressBar.style.width = '0%';
    scoreDisplay.textContent = 'Puntos: 0';
}

// Visual Effects
function triggerCorrectAnimation() {
    progressBar.style.backgroundColor = '#39ff14'; // cyber-neon
}

function triggerIncorrectAnimation() {
    progressBar.style.backgroundColor = '#ff003c'; // cyber-red
    appContainer.classList.add('animate-[shake_0.4s_ease-in-out]');
    setTimeout(() => {
        appContainer.classList.remove('animate-[shake_0.4s_ease-in-out]');
    }, 400);
}

// Añadir keyframe shake a la hoja de estilos global
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        20%, 60% { transform: translateX(-5px); }
        40%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

// Start
document.addEventListener('DOMContentLoaded', init);
