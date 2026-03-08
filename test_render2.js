// Mock simple del DOM
const calls = [];
const doc = {
    createElement: (tag) => {
        return {
            tag,
            className: '',
            innerHTML: '',
            appendChild: (child) => calls.push('append child to ' + tag)
        };
    }
};

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

        const resDiv = doc.createElement('div');
        resDiv.className = `p-4 md:p-5 rounded-xl border ${ans.isCorrect ? 'bg-green-900/10 border-green-500/30' : 'bg-red-900/10 border-red-500/30'} flex flex-col gap-2 shadow-sm text-sm mt-2 font-medium`;

        const questionTextStr = q.question || "Pregunta no encontrada";
        const userOptionText = (q.options && ans.selectedIndex !== undefined && ans.selectedIndex !== null) ? q.options[ans.selectedIndex] : "Sin respuesta";

        let correctOptionText = "Desconocida";
        if (q.options && typeof q.correct === 'number') {
            correctOptionText = q.options[q.correct];
        } else if (q.options && Array.isArray(q.correct)) {
            correctOptionText = q.correct.map(idx => q.options[idx]).join(' | ');
        }

        let html = `
            <div class="font-bold text-slate-200 mb-2 border-b border-slate-700/50 pb-3 leading-snug">${i + 1}. ${questionTextStr}</div>
            <div class="flex flex-col gap-2 pl-1 pt-1">
        `;

        if (ans.isCorrect) {
            html += `<span class="text-green-400 flex items-start gap-2"><span class="shrink-0 text-base leading-none">✓</span> <span class="leading-snug break-words">${userOptionText}</span></span>`;
        } else {
            html += `<span class="text-red-400 flex items-start gap-2 opacity-90"><span class="shrink-0 text-base leading-none">✗</span> <span class="leading-snug break-words">${userOptionText}</span></span>`;
            html += `<span class="text-green-400 flex items-start gap-2 mt-1"><span class="shrink-0 text-base leading-none">✓</span> <span class="leading-snug break-words">${correctOptionText}</span></span>`;
        }

        html += `</div>`;

        if (q.explanation) {
            html += `<div class="mt-4 p-3 rounded-lg bg-slate-900/60 border-l-2 ${ans.isCorrect ? 'border-green-500 text-green-200/80' : 'border-blue-500 text-blue-200/80'} text-xs md:text-sm leading-relaxed tracking-wide"><strong>Explicación:</strong> ${q.explanation}</div>`;
        }
        resDiv.innerHTML = html;
        calls.push(resDiv.innerHTML);
    } catch (e) {
        console.error("Error renderizando respuesta", e);
    }
});

console.log("Mistakes length:", mistakes.length);
console.log("Generated HTML calls:", calls.length);
if (calls.length > 0) {
    console.log(calls[0]);
}
