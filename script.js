const exercises = {
    arms: [
        {
            name: "Bicep Curls",
            description: "A basic exercise to strengthen your biceps.",
            image: "yo.png"
        },
        {
            name: "Tricep Dips",
            description: "An effective exercise to work on your triceps.",
            image: "yo.png"
        },
        {
            name: "Push-Ups",
            description: "A great compound exercise for upper body strength.",
            image: "yo.png"
        }
    ],
    legs: [
        {
            name: "Squats",
            description: "A fundamental exercise to build leg strength.",
            image: "yo.png"
        },
        {
            name: "Lunges",
            description: "A great exercise for leg muscle definition.",
            image: "yo.png"
        },
        {
            name: "Leg Press",
            description: "A machine exercise for targeting the quads.",
            image: "yo.png"
        }
    ],
    chest: [
        {
            name: "Bench Press",
            description: "The classic chest building exercise.",
            image: "yo.png"
        },
        {
            name: "Chest Flyes",
            description: "An isolation exercise to work the chest muscles.",
            image: "yo.png"
        },
        {
            name: "Push-Ups",
            description: "A great compound exercise for upper body strength.",
            image: "yo.png"
        }
    ],
    back: [
        {
            name: "Pull-Ups",
            description: "A challenging exercise for building back muscles.",
            image: "yo.png"
        },
        {
            name: "Deadlifts",
            description: "A key exercise for overall back and core strength.",
            image: "yo.png"
        },
        {
            name: "Bent Over Rows",
            description: "A great exercise for middle back strength.",
            image: "yo.png"
        }
    ],
    abs: [
        {
            name: "Crunches",
            description: "A basic exercise for building abdominal muscles.",
            image: "yo.png"
        },
        {
            name: "Planks",
            description: "An excellent exercise for core strength.",
            image: "yo.png"
        },
        {
            name: "Bicycle Kicks",
            description: "A dynamic exercise for a strong core.",
            image: "yo.png"
        }
    ]
};

function showExercises() {
    const bodyPart = document.getElementById('body-part').value;
    const exerciseList = document.getElementById('exercise-list');

    exerciseList.innerHTML = '';

    if (exercises[bodyPart]) {
        exercises[bodyPart].forEach(exercise => {
            const exerciseItem = document.createElement('div');
            exerciseItem.className = 'exercise-item';

            const exerciseTitle = document.createElement('div');
            exerciseTitle.className = 'exercise-title';
            exerciseTitle.textContent = exercise.name;

            const exerciseDescription = document.createElement('div');
            exerciseDescription.className = 'exercise-description';
            exerciseDescription.textContent = exercise.description;

            const exerciseImage = document.createElement('img');
            exerciseImage.className = 'exercise-image';
            exerciseImage.src = exercise.image;
            exerciseImage.alt = exercise.name;

            exerciseItem.appendChild(exerciseTitle);
            exerciseItem.appendChild(exerciseDescription);
            exerciseItem.appendChild(exerciseImage);

            exerciseList.appendChild(exerciseItem);
        });
    }
}
