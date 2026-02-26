import { questionsFH } from '../data/fh.js';
import { questionsDIG } from '../data/dig.js';

// Adaptador para convertir el diccionario de temas a array de objetos
const buildThemeStructure = (moduleId, sourceData) => {
    return Object.entries(sourceData).map(([themeName, testsObj], tIdx) => ({
        id: `${moduleId}-t${tIdx + 1}`,
        name: themeName,
        tests: Object.entries(testsObj).map(([testName, questions], testIdx) => ({
            id: `${moduleId}-t${tIdx + 1}-test${testIdx + 1}`,
            name: testName,
            questions: questions
        }))
    }));
};

const rawAppStructure = [
    {
        id: 'iso',
        name: 'Implantación de Sistemas Operativos',
        color: '#39ff14', // Neon
        icon: '💻',
        themes: [
            {
                id: 'iso-t1', name: 'Tema 1: Intro a SO',
                tests: [
                    { id: 'iso-t1-test1', name: 'Test 1 Básico', questions: [{ question: "¿Qué es un SO?", options: ["Software", "Hardware", "Periférico", "Red"], correct: 0, explanation: "Es software base." }] }
                ]
            }
        ]
    },
    {
        id: 'par',
        name: 'Planificación y Adm. de Redes',
        color: '#00f0ff', // Blue
        icon: '🌐',
        themes: []
    },
    {
        id: 'fh',
        name: 'Fundamentos de Hardware',
        color: '#ff8c00',
        icon: '⚙️',
        themes: buildThemeStructure('fh', questionsFH)
    },
    { id: 'gbd', name: 'Gestión de Bases de Datos', color: '#b026ff', icon: '🗄️', themes: [] },
    { id: 'sost', name: 'Sostenibilidad', color: '#32cd32', icon: '🌱', themes: [] },
    { id: 'dig', name: 'Digitalización', color: '#facc15', icon: '🤖', themes: buildThemeStructure('dig', questionsDIG) }
];

// ---- Configuración y Estado ----
const state = {
    view: 'courses',           // 'courses' | 'dashboard' | 'themes' | 'tests' | 'quiz' | 'results'
    selectedCourse: null,      // '1-asir' | '2-asir'
    selectedModule: null,      // Object
    selectedTheme: null,       // Object
    selectedTest: null,        // Object

    // Quiz State
    questions: [],
    currentIndex: 0,
    score: 0,
    isAnswered: false,
    selectedOptionIndex: null
};

// ---- DOM Elements ----
const views = {
    courses: document.getElementById('course-selection-screen'),
    dashboard: document.getElementById('module-selection-screen'),
    levels: document.getElementById('level-selection-screen'),
    quiz: document.getElementById('test-screen'),
    results: document.getElementById('result-screen')
};

const moduleButtonsContainer = document.getElementById('subject-buttons');
const btnBackCourses = document.getElementById('btn-back-courses');
const comingSoonAlert = document.getElementById('coming-soon-alert');

const levelTitle = document.getElementById('level-title');
const levelListContainer = document.getElementById('level-list-container');
const btnBackMenu = document.getElementById('btn-back-menu');

const testBreadcrumbs = document.getElementById('test-breadcrumbs');
const subjectTitle = document.getElementById('subject-title');
const currentTestName = document.getElementById('current-test-name');
const scoreDisplay = document.getElementById('score-display');
const progressBar = document.getElementById('progress-bar');
const currentQNum = document.getElementById('current-q-num');
const totalQNum = document.getElementById('total-q-num');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const btnAbandon = document.getElementById('btn-abandon');
const btnNext = document.getElementById('btn-next');
const btnRestartTest = document.getElementById('btn-restart-test');
const btnRestartHome = document.getElementById('btn-restart-home');

const finalScore = document.getElementById('final-score');
const finalMessage = document.getElementById('final-message');
const scoreCircleContainer = document.getElementById('score-circle-container');

// ---- Inicialización ----
function init() {
    renderDashboard();
    switchView('courses');
    setupEventListeners();
}

function switchView(viewName) {
    Object.values(views).forEach(v => v.classList.add('hidden'));
    views[viewName].classList.remove('hidden');
    state.view = viewName;
    window.scrollTo(0, 0);
}

// ---- Renderizadores de Navegación ----
function renderDashboard() {
    moduleButtonsContainer.innerHTML = '';

    rawAppStructure.forEach(mod => {
        const btn = document.createElement('button');
        btn.className = `w-full text-left p-5 md:p-6 rounded-2xl border border-slate-700 bg-slate-800/40 hover:bg-slate-700/80 transition-all shadow-lg hover:shadow-xl group relative overflow-hidden flex flex-col justify-between min-h-[120px] md:min-h-[140px]`;
        btn.dataset.action = 'select-module';
        btn.dataset.id = mod.id;

        const glow = document.createElement('div');
        glow.className = `absolute top-0 right-0 w-1.5 md:w-2 h-full transition-all group-hover:w-full opacity-10 group-hover:opacity-20 z-0`;
        glow.style.backgroundColor = mod.color;

        btn.innerHTML = `
            <div class="relative z-10 flex flex-col gap-1 w-full">
                <span class="text-3xl md:text-4xl mb-1 md:mb-2 opacity-80 group-hover:opacity-100 transition-opacity">${mod.icon}</span>
                <span class="text-xs md:text-sm font-bold text-white transition-colors leading-tight group-hover:text-white">
                    ${mod.name}
                </span>
            </div>
            <div class="relative z-10 w-full flex justify-between items-center mt-3 pt-3 border-t border-slate-600/50">
                <span class="text-[10px] uppercase text-slate-400 font-semibold tracking-wide">Módulo</span>
                <span class="w-2.5 h-2.5 rounded-full shadow-[0_0_8px_${mod.color}]" style="background-color: ${mod.color}"></span>
            </div>
        `;
        btn.insertBefore(glow, btn.firstChild);
        moduleButtonsContainer.appendChild(btn);
    });
}

function renderThemesList(moduleObj) {
    levelTitle.textContent = `${moduleObj.icon} Temario de ${moduleObj.name}`;
    levelListContainer.innerHTML = '';

    if (!moduleObj.themes || moduleObj.themes.length === 0) {
        levelListContainer.innerHTML = `<p class="text-slate-400 text-center py-6 italic text-sm">Contenido en construcción...</p>`;
    } else {
        moduleObj.themes.forEach(theme => {
            const btn = document.createElement('button');
            btn.className = `w-full text-left p-4 md:p-5 rounded-xl bg-slate-800/60 hover:bg-slate-700 border border-slate-700/80 transition-all flex items-center justify-between group shadow-sm`;
            btn.dataset.action = 'select-theme';
            btn.dataset.id = theme.id;
            btn.innerHTML = `
                <span class="text-slate-200 font-medium text-sm md:text-base">${theme.name}</span>
                <span class="text-cyber-blue group-hover:text-cyber-neon transition-colors text-lg md:text-xl">→</span>
            `;
            levelListContainer.appendChild(btn);
        });
    }
    switchView('levels');
}

function renderTestsList(themeObj) {
    levelTitle.textContent = themeObj.name;
    levelListContainer.innerHTML = '';

    themeObj.tests.forEach(test => {
        const btn = document.createElement('button');
        btn.className = `w-full text-left p-4 md:p-5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-cyber-blue transition-all flex items-center justify-between group shadow-md`;
        btn.dataset.action = 'select-test';
        btn.dataset.id = test.id;

        btn.innerHTML = `
            <div class="flex flex-col gap-1">
                <span class="text-white font-bold text-sm md:text-base group-hover:text-cyber-blue transition-colors">${test.name}</span>
                <span class="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider">${test.questions.length} Preguntas</span>
            </div>
            <div class="w-8 h-8 md:w-10 md:h-10 rounded bg-slate-900 flex items-center justify-center border border-slate-700 group-hover:border-cyber-blue transition-colors">
                <span class="text-cyber-blue text-sm md:text-lg">▶</span>
            </div>
        `;
        levelListContainer.appendChild(btn);
    });
}

// ---- Event Listeners ----
function setupEventListeners() {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-action]');
        if (!btn) return;

        const action = btn.dataset.action;
        const id = btn.dataset.id;

        if (action === 'select-course') {
            if (id === '1-asir') {
                state.selectedCourse = '1-asir';
                if (comingSoonAlert) comingSoonAlert.classList.add('hidden');
                switchView('dashboard');
            } else if (id === '2-asir') {
                if (comingSoonAlert) comingSoonAlert.classList.remove('hidden');
            }
        } else if (action === 'select-module') {
            state.selectedModule = rawAppStructure.find(m => m.id === id);
            renderThemesList(state.selectedModule);
        } else if (action === 'select-theme') {
            state.selectedTheme = state.selectedModule.themes.find(t => t.id === id);
            renderTestsList(state.selectedTheme);
            state.view = 'tests';
        } else if (action === 'select-test') {
            state.selectedTest = state.selectedTheme.tests.find(t => t.id === id);
            startQuiz();
        }
    });

    btnBackCourses.addEventListener('click', () => {
        state.selectedCourse = null;
        if (comingSoonAlert) comingSoonAlert.classList.add('hidden');
        switchView('courses');
    });

    btnBackMenu.addEventListener('click', () => {
        if (state.view === 'tests') {
            state.selectedTheme = null;
            state.view = 'dashboard';
            switchView('dashboard');
        } else {
            state.selectedModule = null;
            switchView('dashboard');
        }
    });

    optionsContainer.addEventListener('click', (e) => {
        if (state.isAnswered) return;
        const optionBtn = e.target.closest('.option-btn');
        if (!optionBtn) return;

        state.selectedOptionIndex = parseInt(optionBtn.dataset.index, 10);

        const allOptions = optionsContainer.querySelectorAll('.option-btn');
        allOptions.forEach(btn => {
            btn.classList.remove('ring-2', 'ring-cyber-blue', 'bg-slate-700', 'border-cyber-blue');
            btn.classList.add('bg-slate-800/60', 'border-slate-700');
        });

        optionBtn.classList.remove('bg-slate-800/60', 'border-slate-700');
        optionBtn.classList.add('ring-2', 'ring-cyber-blue', 'bg-slate-700', 'border-cyber-blue');

        const confirmBtn = document.getElementById('btn-confirm-answer');
        if (confirmBtn) {
            confirmBtn.disabled = false;
            confirmBtn.className = 'w-full mt-4 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyber-blue to-blue-500 text-cyber-dark hover:from-blue-400 hover:to-cyber-blue transition-all shadow-blue font-bold uppercase tracking-wider text-sm md:text-base';
        }
    });

    btnNext.addEventListener('click', nextQuestion);
    btnAbandon.addEventListener('click', () => {
        if (confirm('¿Abandonar test en curso?')) resetToDashboard();
    });
    btnRestartHome.addEventListener('click', resetToDashboard);
    btnRestartTest.addEventListener('click', startQuiz);
}

// ---- Quiz Logic ----
function startQuiz() {
    state.questions = [...state.selectedTest.questions].sort(() => Math.random() - 0.5);
    state.currentIndex = 0;
    state.score = 0;

    subjectTitle.textContent = state.selectedModule.name;
    subjectTitle.style.color = state.selectedModule.color;
    testBreadcrumbs.textContent = `${state.selectedModule.name} ➔ ${state.selectedTheme.name}`;
    currentTestName.textContent = state.selectedTest.name;
    totalQNum.textContent = state.questions.length;

    updateScoreUI();
    switchView('quiz');
    loadQuestion();
}

function loadQuestion() {
    state.isAnswered = false;
    state.selectedOptionIndex = null;

    const question = state.questions[state.currentIndex];
    currentQNum.textContent = state.currentIndex + 1;

    progressBar.style.width = `${(state.currentIndex / state.questions.length) * 100}%`;
    progressBar.style.backgroundColor = state.selectedModule.color;

    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';

    question.options.forEach((optionText, index) => {
        const btn = document.createElement('button');
        btn.className = `option-btn w-full text-left p-4 md:p-5 rounded-xl border border-slate-700 bg-slate-800/60 hover:bg-slate-700 hover:border-slate-500 transition-all font-medium text-slate-200 flex items-center gap-4 group`;
        btn.dataset.index = index;
        btn.innerHTML = `
            <span class="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-900 border border-slate-600 flex items-center justify-center text-xs font-bold text-slate-400 group-hover:text-white transition-colors">${String.fromCharCode(65 + index)}</span>
            <span class="flex-grow text-sm md:text-base">${optionText}</span>
        `;
        optionsContainer.appendChild(btn);
    });

    const confirmBtn = document.createElement('button');
    confirmBtn.id = 'btn-confirm-answer';
    confirmBtn.className = 'w-full mt-4 px-6 py-3.5 rounded-xl bg-slate-800/80 text-slate-500 border border-slate-700 cursor-not-allowed transition-all font-bold uppercase tracking-wider shadow-sm text-sm';
    confirmBtn.textContent = 'Confirmar Respuesta';
    confirmBtn.disabled = true;

    confirmBtn.addEventListener('click', () => {
        if (!state.isAnswered && state.selectedOptionIndex !== null) {
            handleAnswer(state.selectedOptionIndex);
            confirmBtn.textContent = (state.currentIndex === state.questions.length - 1) ? 'Ver Reporte' : 'Siguiente Pregunta';
            confirmBtn.className = 'w-full mt-4 px-6 py-3.5 rounded-xl bg-slate-800 border border-cyber-blue text-cyber-blue hover:bg-slate-700 transition-all font-bold uppercase tracking-wider text-sm md:text-base shadow-neon';
        } else if (state.isAnswered) {
            nextQuestion();
        }
    });

    optionsContainer.appendChild(confirmBtn);
}

function handleAnswer(selectedIndex) {
    state.isAnswered = true;
    const question = state.questions[state.currentIndex];
    const isCorrect = selectedIndex === question.correct;

    const allOptions = optionsContainer.querySelectorAll('.option-btn');
    allOptions.forEach((btn, idx) => {
        btn.classList.remove('hover:bg-slate-700', 'hover:border-slate-500', 'cursor-pointer', 'group', 'ring-2', 'ring-cyber-blue', 'border-cyber-blue');
        btn.classList.add('opacity-40', 'cursor-default');
        const badge = btn.querySelector('span:first-child');

        if (idx === question.correct) {
            btn.classList.remove('opacity-40', 'bg-slate-800/60', 'border-slate-700');
            btn.classList.add('bg-green-900/40', 'border-green-500', 'text-green-300', 'ring-2', 'ring-green-500', 'opacity-100');
            badge.className = 'flex-shrink-0 w-8 h-8 rounded-lg bg-green-500 border border-green-400 flex items-center justify-center text-xs font-bold text-black';
        } else if (idx === selectedIndex && !isCorrect) {
            btn.classList.remove('opacity-40', 'bg-slate-800/60', 'border-slate-700');
            btn.classList.add('bg-red-900/40', 'border-red-500', 'text-red-300', 'ring-2', 'ring-red-500', 'opacity-100');
            badge.className = 'flex-shrink-0 w-8 h-8 rounded-lg bg-red-500 border border-red-400 flex items-center justify-center text-xs font-bold text-white';
        }
    });

    if (isCorrect) state.score += 10;
    updateScoreUI();

    if (question.explanation) {
        const expl = document.createElement('div');
        expl.className = `mt-4 mb-2 p-4 rounded-xl text-[11px] md:text-xs border-l-4 leading-relaxed animate-fade-in ${isCorrect ? 'bg-green-900/10 border-green-500 text-green-200' : 'bg-slate-900/80 border-blue-500 text-blue-200'}`;
        expl.innerHTML = `<strong>EXPLICACIÓN:</strong> ${question.explanation}`;
        const confirmBtn = document.getElementById('btn-confirm-answer');
        optionsContainer.insertBefore(expl, confirmBtn);
    }
}

function updateScoreUI() {
    scoreDisplay.textContent = `Puntos: ${state.score}`;
}

function nextQuestion() {
    state.currentIndex++;
    if (state.currentIndex < state.questions.length) loadQuestion();
    else finishTest();
}

function finishTest() {
    switchView('results');
    const percentage = Math.round((state.score / (state.questions.length * 10)) * 100);
    finalScore.textContent = `${percentage}%`;
    finalMessage.textContent = percentage >= 50 ? '¡Rendimiento Óptimo! Has superado el reporte con éxito.' : 'Fallo Crítico detectado localmente. Es necesario revisar el temario.';

    scoreCircleContainer.className = 'w-32 h-32 md:w-36 md:h-36 rounded-full border-4 flex items-center justify-center shadow-glass transition-all mb-4 bg-slate-900/50 backdrop-blur-sm';
    scoreCircleContainer.classList.add(percentage >= 50 ? 'border-cyber-neon shadow-neon' : 'border-cyber-red shadow-red');
}

function resetToDashboard() {
    state.selectedModule = null;
    state.selectedTheme = null;
    state.selectedTest = null;
    switchView('dashboard');
}

document.addEventListener('DOMContentLoaded', init);
