
window.addEventListener('load', fetchRandomAdvice);

document.getElementById('next-button').addEventListener('click', fetchRandomAdvice);

function fetchRandomAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not OK');
            }
        })
        .then(data => {
            const advice = data.slip.advice;
            const advice_num = data.slip.id;
            document.getElementById('advice-quote').textContent = `"${advice}"`;
            document.getElementById('advice-num').textContent = `Advice #${advice_num}`;
        })
        .catch(error => {
            document.getElementById('advice-quote').textContent = "Quote not found. A coffee?";
            document.getElementById('advice-num').textContent = "Advice #404";
            console.log(error);
        });
}