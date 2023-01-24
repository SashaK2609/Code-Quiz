		const highscoresId = 'highscores';
      const clearButtonId = 'clear';
      const storageKey = 'answers';

      function clear() {
        localStorage.removeItem(storageKey);
        renderHighscores();
      };
		
      function renderHighscores() {
        const data = localStorage.getItem(storageKey);

        const scores = JSON.parse(data) || [];

        const list = document.getElementById(highscoresId);
        list.innerHTML = '';

        scores.forEach(function(score) {
          const listItem = document.createElement('li');
          listItem.innerText = score.initials + ' - ' + score.score + ' / ' + score.questionsCount;
          
          list.appendChild(listItem);
        });
      };

      document.getElementById(clearButtonId).addEventListener('click', clear);
      renderHighscores();