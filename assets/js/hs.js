		//initialize variables
		const highscoresId = 'highscores';
      const clearButtonId = 'clear';
      const storageKey = 'answers';

      function clear() {
        localStorage.removeItem(storageKey);
        renderHighscores();
      };
		
      function renderHighscores() {
			//get informationg from local storage after submitting
        const data = localStorage.getItem(storageKey);

		  //parse data into data array or use empty array
        const scores = JSON.parse(data) || [];

        const list = document.getElementById(highscoresId);
        list.innerHTML = '';

		  //create a score list with initials and score
        scores.forEach(function(score) {
          const listItem = document.createElement('li');
          listItem.innerText = score.initials + ' - ' + score.score + ' / ' + score.questionsCount;
          
          list.appendChild(listItem);
        });
      };

		//clear highscores button clears all the list
      document.getElementById(clearButtonId).addEventListener('click', clear);
      renderHighscores();