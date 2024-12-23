document.addEventListener("DOMContentLoaded", function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
    const maxAttempts = 10; // Define o número máximo de tentativas
    let attempts = 0;

    const guessInput = document.getElementById("guessInput");
    const submitGuess = document.getElementById("submitGuess");
    const feedback = document.getElementById("feedback");
    const attemptsDisplay = document.getElementById("attempts");

    submitGuess.addEventListener("click", function() {
        const userGuess = parseInt(guessInput.value);
        attempts++;

        if (userGuess === randomNumber) {
            feedback.textContent = `Parabéns! Você acertou o número ${randomNumber} em ${attempts} tentativas.`;
            feedback.style.color = "green";
            submitGuess.disabled = true; // Desativa o botão após a vitória
        } else if (attempts >= maxAttempts) {
            feedback.textContent = `Fim de jogo! Você usou todas as ${maxAttempts} tentativas. O número era ${randomNumber}.`;
            feedback.style.color = "red";
            submitGuess.disabled = true; // Desativa o botão após o término das tentativas
        } else if (userGuess > randomNumber) {
            feedback.textContent = "Muito alto! Tente novamente.";
            feedback.style.color = "orange";
        } else if (userGuess < randomNumber) {
            feedback.textContent = "Muito baixo! Tente novamente.";
            feedback.style.color = "orange";
        }

        attemptsDisplay.textContent = `Tentativas restantes: ${maxAttempts - attempts}`;
    });
});
