async function showExercises() {
    const bodyPart = document.getElementById('body-part').value;
    const exerciseList = document.getElementById('exercise-list');

    exerciseList.innerHTML = '';

    try {
        const response = await fetch(`https://wger.de/api/v2/exercise/?muscles=${bodyPart}`);
        const data = await response.json();

        const exerciseDetails = await Promise.all(data.results.map(async exercise => {
            const imageResponse = await fetch(`https://wger.de/api/v2/exerciseimage/?exercise=${exercise.id}`);
            const imageData = await imageResponse.json();
            return {
                ...exercise,
                image: imageData.results.length ? imageData.results[0].image : 'yo.png'
            };
        }));

        exerciseDetails.forEach(exercise => {
            const exerciseItem = document.createElement('div');
            exerciseItem.className = 'exercise-item';

            const exerciseTitle = document.createElement('div');
            exerciseTitle.className = 'exercise-title';
            exerciseTitle.textContent = exercise.name;

            const exerciseDescription = document.createElement('div');
            exerciseDescription.className = 'exercise-description';
            exerciseDescription.textContent = exercise.description.replace(/(<([^>]+)>)/gi, "");

            const exerciseImage = document.createElement('img');
            exerciseImage.className = 'exercise-image';
            exerciseImage.src = exercise.image;
            exerciseImage.alt = exercise.name;

            exerciseItem.appendChild(exerciseTitle);
            exerciseItem.appendChild(exerciseDescription);
            exerciseItem.appendChild(exerciseImage);

            exerciseList.appendChild(exerciseItem);
        });
    } catch (error) {
        console.error('Error fetching exercises:', error);
    }
}
