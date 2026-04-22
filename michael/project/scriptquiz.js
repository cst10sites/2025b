 const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Collect answers
      const answers = {
        q1: form.q1.value,
        q2: form.q2.value,
        q3: form.q3.value
      };

      for (let q in answers) {
        if (!answers[q]) {
          resultDiv.textContent = 'Please answer all questions before submitting.';
          return;
        }
      }

      const pointsMap = { a: 1, b: 0 };
      let totalScore = 0;

      for (let q in answers) {
        totalScore += pointsMap[answers[q]] || 0;
      }

      // Interpret the score
      let interpretation = '';
      if (totalScore >= 3) {
        interpretation = 'You likely believe AI could become sentient.';
      } else {
        interpretation = 'You likely believe AI will not become sentient.';
      }

      resultDiv.textContent = `${interpretation}`;
    });