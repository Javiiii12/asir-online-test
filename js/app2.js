import { questionsPAR } from '../data/par.js?v=2.41';
import { questionsFH } from '../data/fh.js?v=2.41';
import { questionsDIG } from '../data/dig.js?v=2.41';
import { questionsSOS } from '../data/sos.js?v=2.41';
import { questionsGBD } from '../data/gbd.js?v=2.41';
import { questionsISO } from '../data/iso.js?v=2.41';
import { questionsASGBD } from '../data/asgbd.js?v=2.41';
import { questionsCID } from '../data/cid.js?v=2.41';
import { questionsASO } from '../data/aso.js?v=2.41';
import { questionsIAW } from '../data/iaw.js?v=2.41';
import { questionsSRI } from '../data/sri.js?v=2.41';

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
    // ---- 1º ASIR ----
    {
        id: 'iso',
        course: '1-asir',
        name: 'Implantación de Sistemas Operativos',
        color: '#39ff14', // Neon
        icon: '💻',
        themes: buildThemeStructure('iso', questionsISO)
    },
    {
        id: 'par',
        course: '1-asir',
        name: 'Planificación y Adm. de Redes',
        color: '#00f0ff', // Blue
        icon: '🌐',
        themes: buildThemeStructure('par', questionsPAR)
    },
    {
        id: 'fh',
        course: '1-asir',
        name: 'Fundamentos de Hardware',
        color: '#ff8c00',
        icon: '⚙️',
        themes: buildThemeStructure('fh', questionsFH)
    },
    {
        id: 'gbd',
        course: '1-asir',
        name: 'Gestión de Bases de Datos',
        color: '#b026ff',
        icon: '🗄️',
        themes: buildThemeStructure('gbd', questionsGBD)
    },
    {
        id: 'sost',
        course: '1-asir',
        name: 'Sostenibilidad',
        color: '#32cd32',
        icon: '🌱',
        themes: buildThemeStructure('sos', questionsSOS)
    },
    {
        id: 'dig',
        course: '1-asir',
        name: 'Digitalización',
        color: '#facc15',
        icon: '🤖',
        themes: buildThemeStructure('dig', questionsDIG)
    },

    // ---- 2º ASIR ----
    {
        id: 'asgbd',
        course: '2-asir',
        name: 'Administración de Sistemas Gestores de Bases de Datos',
        color: '#b026ff',
        icon: '🗄️',
        themes: buildThemeStructure('asgbd', questionsASGBD)
    },
    {
        id: 'cid',
        course: '2-asir',
        name: 'Ciudadanía e Identidad Digital',
        color: '#facc15',
        icon: '🛡️',
        themes: buildThemeStructure('cid', questionsCID)
    },
    {
        id: 'aso',
        course: '2-asir',
        name: 'Administración de Sistemas Operativos',
        color: '#39ff14',
        icon: '🖥️',
        themes: buildThemeStructure('aso', questionsASO)
    },
    {
        id: 'iaw',
        course: '2-asir',
        name: 'Implantación de Aplicaciones Web',
        color: '#ff8c00',
        icon: '🌐',
        themes: buildThemeStructure('iaw', questionsIAW)
    },
    {
        id: 'sri',
        course: '2-asir',
        name: 'Servicios de Red e Internet',
        color: '#00f0ff',
        icon: '📡',
        themes: buildThemeStructure('sri', questionsSRI)
    }
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
    userAnswers: [],
    selectedOptionIndexes: [],  // 1 índice en preguntas únicas, varios en selección múltiple
    matchSelections: []         // índice de la opción elegida en cada fila de asociación
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
const moduleScreenTitle = document.getElementById('module-screen-title');
const btnBackCourses = document.getElementById('btn-back-courses');

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
const detailedResultsContainer = document.getElementById('detailed-results-container');
const btnRepeatMistakes = document.getElementById('btn-repeat-mistakes');

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

    const activeCourse = state.selectedCourse || '1-asir';

    if (moduleScreenTitle) {
        moduleScreenTitle.textContent = activeCourse === '2-asir'
            ? '2º ASIR - Módulos'
            : '1º ASIR - Módulos';
    }

    rawAppStructure
        .filter(mod => mod.course === activeCourse)
        .forEach(mod => {
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
            if (id === '1-asir' || id === '2-asir') {
                state.selectedCourse = id;
                renderDashboard();
                switchView('dashboard');
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
        const optionBtn = e.target.closest('.option-btn');
        if (!optionBtn) return;

        const question = state.questions[state.currentIndex];
        if (isMatchQuestion(question)) return;

        const index = parseInt(optionBtn.dataset.index, 10);
        const isMulti = Array.isArray(question.correct);

        if (isMulti) {
            // Casilla: se puede marcar / desmarcar cada opción
            const pos = state.selectedOptionIndexes.indexOf(index);
            if (pos === -1) state.selectedOptionIndexes.push(index);
            else state.selectedOptionIndexes.splice(pos, 1);
        } else {
            // Radio: solo una opción seleccionada
            state.selectedOptionIndexes = [index];
        }

        optionsContainer.querySelectorAll('.option-btn').forEach(btn => {
            const i = parseInt(btn.dataset.index, 10);
            paintOptionButton(btn, state.selectedOptionIndexes.includes(i));
        });

        const hint = document.getElementById('multi-select-hint');
        if (hint) {
            hint.textContent = `Selección múltiple · ${state.selectedOptionIndexes.length} marcada(s) · marca todas las correctas`;
        }

        updateConfirmState();
    });

    // Las preguntas de asociar usan desplegables en vez de botones de opción
    optionsContainer.addEventListener('change', (e) => {
        const select = e.target.closest('.match-select');
        if (!select) return;
        const leftIdx = parseInt(select.dataset.left, 10);
        state.matchSelections[leftIdx] = select.value === '' ? null : parseInt(select.value, 10);
        updateConfirmState();
    });

    btnNext.addEventListener('click', nextQuestion);
    btnAbandon.addEventListener('click', () => {
        if (confirm('¿Abandonar test en curso?')) backToThemeTests();
    });
    btnRestartHome.addEventListener('click', backToThemeTests);
    btnRestartTest.addEventListener('click', () => startQuiz());
}

// ---- Quiz Logic ----
function startQuiz(questionsToUse = null) {
    if (questionsToUse) {
        state.questions = [...questionsToUse].sort(() => Math.random() - 0.5);
    } else {
        state.questions = [...state.selectedTest.questions].sort(() => Math.random() - 0.5);
    }
    state.currentIndex = 0;
    state.score = 0;
    state.userAnswers = [];

    subjectTitle.textContent = state.selectedModule.name;
    subjectTitle.style.color = state.selectedModule.color;
    testBreadcrumbs.textContent = `${state.selectedModule.name} ➔ ${state.selectedTheme.name}`;
    currentTestName.textContent = state.selectedTest.name;
    totalQNum.textContent = state.questions.length;
    scoreDisplay.classList.add('hidden'); // Hide score during quiz so it's a blind test

    switchView('quiz');
    loadQuestion();
}

// ---- Helpers para los distintos tipos de pregunta ----
const isMatchQuestion = (q) => !!(q && q.match);

function isAnswerReady() {
    const q = state.questions[state.currentIndex];
    if (!q) return false;
    if (isMatchQuestion(q)) {
        return state.matchSelections.length === q.match.lefts.length
            && state.matchSelections.every(v => v !== null && v !== undefined);
    }
    return state.selectedOptionIndexes.length > 0;
}

function updateConfirmState() {
    const confirmBtn = document.getElementById('btn-confirm-answer');
    if (!confirmBtn) return;
    const ready = isAnswerReady();
    confirmBtn.disabled = !ready;
    confirmBtn.className = ready
        ? 'w-full mt-4 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyber-blue to-blue-500 text-cyber-dark hover:from-blue-400 hover:to-cyber-blue transition-all shadow-blue font-bold uppercase tracking-wider text-sm md:text-base'
        : 'w-full mt-4 px-6 py-3.5 rounded-xl bg-slate-800/80 text-slate-500 border border-slate-700 cursor-not-allowed transition-all font-bold uppercase tracking-wider shadow-sm text-sm md:text-base';
}

// Pinta el estado (seleccionada / no seleccionada) de una opción
function paintOptionButton(btn, isSelected) {
    if (isSelected) {
        btn.classList.remove('bg-slate-800/60', 'border-slate-700');
        btn.classList.add('ring-2', 'ring-cyber-blue', 'bg-slate-700', 'border-cyber-blue');
    } else {
        btn.classList.remove('ring-2', 'ring-cyber-blue', 'bg-slate-700', 'border-cyber-blue');
        btn.classList.add('bg-slate-800/60', 'border-slate-700');
    }

    const check = btn.querySelector('.multi-check');
    if (check) {
        if (isSelected) {
            check.classList.remove('text-transparent', 'border-slate-600');
            check.classList.add('text-cyber-dark', 'bg-cyber-blue', 'border-cyber-blue');
        } else {
            check.classList.remove('text-cyber-dark', 'bg-cyber-blue', 'border-cyber-blue');
            check.classList.add('text-transparent', 'border-slate-600');
        }
    }
}

// Pregunta de asociar: una fila por elemento con un desplegable de resultados
function renderMatchQuestion(question) {
    const hint = document.createElement('p');
    hint.className = 'text-[10px] md:text-xs text-cyber-purple uppercase tracking-wider font-bold -mt-2 mb-1';
    hint.textContent = 'Asocia cada elemento con su resultado (elige del desplegable)';
    optionsContainer.appendChild(hint);

    // Se desordenan las opciones para que su orden no delate la respuesta
    const rightsOrder = question.match.rights.map((_, i) => i).sort(() => Math.random() - 0.5);

    question.match.lefts.forEach((leftText, leftIdx) => {
        const row = document.createElement('div');
        row.className = 'flex flex-col sm:flex-row sm:items-center gap-2 p-3 md:p-4 rounded-xl border border-slate-700 bg-slate-800/40';

        const label = document.createElement('span');
        label.className = 'text-sm md:text-base font-bold text-cyber-blue sm:w-1/3 shrink-0 break-words';
        label.textContent = leftText;

        const select = document.createElement('select');
        select.className = 'match-select flex-grow w-full p-2.5 rounded-lg bg-slate-900 border border-slate-600 text-slate-200 text-sm md:text-base focus:outline-none focus:border-cyber-blue transition-colors';
        select.dataset.left = leftIdx;

        const placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.textContent = '— Selecciona una opción —';
        placeholder.className = 'bg-slate-900 text-slate-400';
        select.appendChild(placeholder);

        rightsOrder.forEach(rightIdx => {
            const opt = document.createElement('option');
            opt.value = rightIdx;
            opt.textContent = question.match.rights[rightIdx];
            opt.className = 'bg-slate-900 text-slate-200';
            select.appendChild(opt);
        });

        row.appendChild(label);
        row.appendChild(select);
        optionsContainer.appendChild(row);
    });
}

function loadQuestion() {
    state.selectedOptionIndexes = [];
    state.matchSelections = [];

    const question = state.questions[state.currentIndex];
    const isMatch = isMatchQuestion(question);
    const isMulti = !isMatch && Array.isArray(question.correct);
    currentQNum.textContent = state.currentIndex + 1;

    progressBar.style.width = `${(state.currentIndex / state.questions.length) * 100}%`;
    progressBar.style.backgroundColor = state.selectedModule.color;

    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';

    if (isMatch) {
        state.matchSelections = question.match.lefts.map(() => null);
        renderMatchQuestion(question);
    } else {
        if (isMulti) {
            const hint = document.createElement('p');
            hint.id = 'multi-select-hint';
            hint.className = 'text-[10px] md:text-xs text-cyber-yellow uppercase tracking-wider font-bold -mt-2 mb-1';
            hint.textContent = 'Selección múltiple · 0 marcada(s) · marca todas las correctas';
            optionsContainer.appendChild(hint);
        }

        question.options.forEach((optionText, index) => {
            const btn = document.createElement('button');
            btn.className = `option-btn w-full text-left p-4 md:p-5 rounded-xl border border-slate-700 bg-slate-800/60 hover:bg-slate-700 hover:border-slate-500 transition-all font-medium text-slate-200 flex items-center gap-4 group`;
            btn.dataset.index = index;
            btn.innerHTML = `
                <span class="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-900 border border-slate-600 flex items-center justify-center text-xs font-bold text-slate-400 group-hover:text-white transition-colors">${String.fromCharCode(65 + index)}</span>
                <span class="flex-grow text-sm md:text-base leading-snug break-words">${optionText}</span>
                ${isMulti ? '<span class="multi-check flex-shrink-0 w-5 h-5 rounded border border-slate-600 flex items-center justify-center text-[10px] font-bold text-transparent transition-colors">✓</span>' : ''}
            `;
            optionsContainer.appendChild(btn);
        });
    }

    const confirmBtn = document.createElement('button');
    confirmBtn.id = 'btn-confirm-answer';
    confirmBtn.className = 'w-full mt-4 px-6 py-3.5 rounded-xl bg-slate-800/80 text-slate-500 border border-slate-700 cursor-not-allowed transition-all font-bold uppercase tracking-wider shadow-sm text-sm md:text-base';
    confirmBtn.textContent = (state.currentIndex === state.questions.length - 1) ? 'Finalizar Test' : 'Siguiente Pregunta';
    confirmBtn.disabled = true;

    confirmBtn.addEventListener('click', () => {
        if (!isAnswerReady()) return;
        const q = state.questions[state.currentIndex];
        handleAnswer(isMatchQuestion(q) ? [...state.matchSelections] : [...state.selectedOptionIndexes]);
    });

    optionsContainer.appendChild(confirmBtn);
}

function handleAnswer(selectedIndexes) {
    const question = state.questions[state.currentIndex];
    const isMatch = isMatchQuestion(question);
    const correctIndexes = isMatch
        ? question.match.correct
        : (Array.isArray(question.correct) ? question.correct : [question.correct]);

    let isCorrect;
    if (isMatch) {
        // En asociar el orden importa: cada fila debe emparejarse con su resultado
        isCorrect = selectedIndexes.length === correctIndexes.length
            && correctIndexes.every((idx, i) => idx === selectedIndexes[i]);
    } else {
        // Se acierta solo si se marcan exactamente todas las correctas y ninguna de más
        const sortedSelected = [...selectedIndexes].sort((a, b) => a - b);
        const sortedCorrect = [...correctIndexes].sort((a, b) => a - b);
        isCorrect = sortedSelected.length === sortedCorrect.length
            && sortedSelected.every((idx, i) => idx === sortedCorrect[i]);
    }

    state.userAnswers.push({
        questionObj: question,
        selectedIndexes: selectedIndexes,
        isCorrect: isCorrect
    });

    if (isCorrect) state.score += 10;
    updateScoreUI();

    nextQuestion();
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
    console.log("Finalizando test...", state);
    switchView('results');

    // Cálculo de porcentaje
    const totalQuestions = state.questions.length || 1;
    const percentage = Math.round((state.score / (totalQuestions * 10)) * 100);

    finalScore.textContent = `${percentage}%`;
    finalMessage.textContent = percentage >= 50 ? '¡Rendimiento Óptimo! Has superado el reporte con éxito.' : 'Fallo Crítico detectado localmente. Es necesario revisar el temario.';

    // Aplicar estilo al círculo
    scoreCircleContainer.className = 'w-32 h-32 md:w-36 md:h-36 rounded-full border-4 flex items-center justify-center shadow-glass transition-all bg-slate-900/50 backdrop-blur-sm shrink-0';
    if (percentage >= 50) {
        scoreCircleContainer.classList.add('border-cyber-neon', 'shadow-neon');
    } else {
        scoreCircleContainer.classList.add('border-cyber-red', 'shadow-red');
    }

    // Renderizado de resultados detallados
    const mistakes = [];
    let htmlContent = '';

    if (!state.userAnswers || state.userAnswers.length === 0) {
        htmlContent = '<p class="text-center text-slate-400 py-6 border border-dashed border-slate-700 rounded-xl">No se han registrado respuestas en este test.</p>';
    } else {
        state.userAnswers.forEach((ans, i) => {
            const q = ans.questionObj;
            if (!q) return;

            if (!ans.isCorrect) mistakes.push(q);

            let userOptionText, correctOptionText;
            if (isMatchQuestion(q)) {
                const chosen = ans.selectedIndexes || [];
                userOptionText = chosen.length
                    ? chosen.map((rightIdx, i) => `${q.match.lefts[i]} → ${rightIdx === null || rightIdx === undefined ? 'Sin respuesta' : q.match.rights[rightIdx]}`).join(' | ')
                    : 'Sin respuesta';
                correctOptionText = q.match.correct
                    .map((rightIdx, i) => `${q.match.lefts[i]} → ${q.match.rights[rightIdx]}`)
                    .join(' | ');
            } else {
                const formatOption = (idx) => `${String.fromCharCode(65 + idx)}. ${q.options[idx] ?? '—'}`;
                const selected = ans.selectedIndexes || [];
                userOptionText = (q.options && selected.length)
                    ? [...selected].sort((a, b) => a - b).map(formatOption).join(' | ')
                    : "Sin respuesta";
                correctOptionText = "Faltante";
                if (q.options) {
                    const correctIdx = Array.isArray(q.correct) ? q.correct : [q.correct];
                    correctOptionText = [...correctIdx].sort((a, b) => a - b).map(formatOption).join(' | ');
                }
            }

            htmlContent += `
                <div class="p-4 md:p-5 rounded-xl border ${ans.isCorrect ? 'bg-green-900/10 border-green-500/30' : 'bg-red-900/10 border-red-500/30'} flex flex-col gap-2 shadow-sm text-sm mt-3 animate-fade-in">
                    <div class="font-bold text-slate-200 mb-2 border-b border-slate-700/50 pb-2">${i + 1}. ${q.question}</div>
                    <div class="flex flex-col gap-1.5">
                        <span class="${ans.isCorrect ? 'text-green-400' : 'text-red-400'} flex items-start gap-2">
                            <span class="shrink-0 w-4">${ans.isCorrect ? '✓' : '✗'}</span>
                            <span class="leading-snug">${userOptionText}</span>
                        </span>
                        ${!ans.isCorrect ? `
                        <span class="text-green-400 flex items-start gap-2 opacity-80">
                            <span class="shrink-0 w-4 font-bold">✓</span>
                            <span class="leading-snug">Correcta: ${correctOptionText}</span>
                        </span>` : ''}
                    </div>
                    ${q.explanation ? `<div class="mt-3 p-3 rounded-lg bg-slate-900/80 border-l-2 ${ans.isCorrect ? 'border-green-500 text-green-100/70' : 'border-blue-500 text-blue-100/70'} text-[11px] md:text-xs leading-relaxed italic">
                        <strong>Feedback:</strong> ${q.explanation}
                    </div>` : ''}
                </div>
            `;
        });
    }

    detailedResultsContainer.innerHTML = htmlContent;

    // Control del botón de repetir fallos
    if (mistakes.length > 0) {
        btnRepeatMistakes.classList.remove('hidden');
        btnRepeatMistakes.onclick = () => startQuiz(mistakes);
    } else {
        btnRepeatMistakes.classList.add('hidden');
    }

    console.log(`Test finalizado. Aciertos: ${state.score / 10}, Fallos: ${mistakes.length}`);
}

function resetToDashboard() {
    state.selectedModule = null;
    state.selectedTheme = null;
    state.selectedTest = null;
    switchView('dashboard');
}

function backToThemeTests() {
    if (!state.selectedTheme) {
        resetToDashboard();
        return;
    }
    state.selectedTest = null;
    renderTestsList(state.selectedTheme);
    switchView('levels');
}

document.addEventListener('DOMContentLoaded', init);
