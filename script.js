
// ===== SCROLL ANIMATION =====

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll(".fade-in").forEach(element => {
    observer.observe(element);
});


// ===== MESSI FACT GENERATOR =====

const messiFacts = [
    "🏆 Messi won the FIFA World Cup in 2022!",
    "🐐 Messi has won 8 Ballon d'Or awards!",
    "⚽ Messi made his Barcelona first-team debut in 2004!",
    "🥇 Messi won Olympic gold with Argentina in 2008!",
    "🇦🇷 Messi is Argentina's all-time leading goalscorer!",
    "🏆 Messi won the Copa América in 2021 and 2024!",
    "🎂 Messi was born on 24 June 1987 in Rosario, Argentina.",
    "👑 His full name is Lionel Andrés Messi.",
    "🔵🔴 He joined Barcelona's La Masia academy in 2000.",
    "🇦🇷 He made his Argentina senior debut in 2005.",
    "🥇 He won his first Ballon d'Or in 2009.",
    "🔥 Messi scored 91 goals in the calendar year 2012!",
    "⚽ He is Barcelona's all-time leading goalscorer.",
    "🏆 He won four UEFA Champions League titles with Barcelona.",
    "🇦🇷 Messi won the 2021 Copa América with Argentina.",
    "👑 He became Argentina's captain.",
    "🌟 He won the World Cup Golden Ball in 2014 and 2022.",
    "🏆 He won the 2022 Finalissima with Argentina.",
    "🇫🇷 He played for Paris Saint-Germain.",
    "🇺🇸 He joined Inter Miami in 2023.",
    "🥇 He won the 2023 Ballon d'Or.",
    "🏆 Messi won the 2024 Copa América.",
    "🦶 Messi is left-footed.",
    "🌍 Messi has scored in multiple World Cup tournaments."
];

let lastFact = -1;

function revealFact() {
    const fact = document.getElementById("messiFact");

    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * messiFacts.length);
    } while (randomIndex === lastFact);

    lastFact = randomIndex;

    fact.textContent = messiFacts[randomIndex];
    fact.style.display = "block";

    fact.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}
// ===== MESSI VS RONALDO POLL =====

const pollKey = "goatPollVotes";
const voterKey = "goatPollVoter";

let votes = JSON.parse(localStorage.getItem(pollKey)) || {
    messi: 0,
    ronaldo: 0
};

function updatePoll() {
    const totalVotes = votes.messi + votes.ronaldo;

    const messiPercent = totalVotes === 0
        ? 0
        : Math.round((votes.messi / totalVotes) * 100);

    const ronaldoPercent = totalVotes === 0
        ? 0
        : Math.round((votes.ronaldo / totalVotes) * 100);

    document.getElementById("messiPercentage").textContent =
        messiPercent + "%";

    document.getElementById("ronaldoPercentage").textContent =
        ronaldoPercent + "%";
        document.getElementById("messiVoteFill").style.height =
    messiPercent + "%";

document.getElementById("ronaldoVoteFill").style.height =
    ronaldoPercent + "%";
}

function vote(player) {
    if (localStorage.getItem(voterKey)) {
        alert("You have already voted! 🗳️");
        return;
    }

    votes[player]++;

    localStorage.setItem(pollKey, JSON.stringify(votes));
    localStorage.setItem(voterKey, player);

    updatePoll();

    alert("Your vote has been counted! 🐐");
}

updatePoll();