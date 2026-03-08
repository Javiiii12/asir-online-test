const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const dom = new JSDOM(`
    <div id="detailed-results-container"></div>
    <button id="btn-repeat-mistakes" class="hidden"></button>
`);
const document = dom.window.document;

const detailedResultsContainer = document.getElementById('detailed-results-container');
const btnRepeatMistakes = document.getElementById('btn-repeat-mistakes');

const state = {
    userAnswers: [
        {
            questionObj: {
                question: "Test question?",
                options: ["A", "B", "C", "D"],
                correct: 2,
                explanation: "Because C."
            },
            selectedIndex: 1,
            isCorrect: false
        }
    ]
};

const mistakes = [];
state.userAnswers.forEach((ans, i) => {
    try {
        const q = ans.questionObj;
        if (!ans.isCorrect) mistakes.push(q);

        const resDiv = document.createElement('div');
        resDiv.className = `test ${ans.isCorrect ? 'green' : 'red'}`;

        const questionTextStr = q.question || "Pregunta no encontrada";
        const userOptionText = (q.options && ans.selectedIndex !== undefined && ans.selectedIndex !== null) ? q.options[ans.selectedIndex] : "Sin respuesta";

        let correctOptionText = "Desconocida";
        if (q.options && typeof q.correct === 'number') {
            correctOptionText = q.options[q.correct];
        } else if (q.options && Array.isArray(q.correct)) {
            correctOptionText = q.correct.map(idx => q.options[idx]).join(' | ');
        }

        let html = `
            <div>${i + 1}. ${questionTextStr}</div>
            <div>
        `;

        if (ans.isCorrect) {
            html += `<span>${userOptionText}</span>`;
        } else {
            html += `<span>User: ${userOptionText}</span>`;
            html += `<span>Correct: ${correctOptionText}</span>`;
        }

        html += `</div>`;

        if (q.explanation) {
            html += `<div>Exp: ${q.explanation}</div>`;
        }
        resDiv.innerHTML = html;
        detailedResultsContainer.appendChild(resDiv);
    } catch (e) {
        console.error("Error", e);
    }
});

if (mistakes.length > 0) {
    btnRepeatMistakes.classList.remove('hidden');
} else {
    btnRepeatMistakes.classList.add('hidden');
}

console.log("Container children count:", detailedResultsContainer.children.length);
console.log("Button hidden?", btnRepeatMistakes.classList.contains('hidden'));
