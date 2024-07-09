async function showExercises() {
    const bodyPart = document.getElementById('body-part').value;
    const exerciseList = document.getElementById('exercise-list');

    exerciseList.innerHTML = '';

    try {
        const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
                'X-RapidAPI-Key': '251bce7f46msh6a6f2b803c69e1cp183294jsne542e06c39f4'
            }
        });
        const data = await response.json();

        data.forEach(exercise => {
            const exerciseItem = document.createElement('div');
            exerciseItem.className = 'exercise-item';

            const exerciseTitle = document.createElement('div');
            exerciseTitle.className = 'exercise-title';
            exerciseTitle.textContent = exercise.name;

            const exerciseDescription = document.createElement('div');
            exerciseDescription.className = 'exercise-description';
            exerciseDescription.textContent = `Equipment: ${exercise.equipment}`;

            const exerciseImage = document.createElement('img');
            exerciseImage.className = 'exercise-image';
            exerciseImage.src = exercise.gifUrl;
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
