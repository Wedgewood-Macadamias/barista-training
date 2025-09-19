document.addEventListener('DOMContentLoaded', () => {

    const recipes = {
        'Espresso': {
            description: 'A concentrated coffee beverage brewed by forcing a small amount of nearly boiling water under pressure through finely-ground coffee beans.',
            steps: [
                { text: 'Grind 18-20g of fresh coffee beans to a fine consistency, like table salt.', image: './images/espresso-step-1.png' },
                { text: 'Distribute and tamp the grounds evenly in the portafilter with firm pressure.', image: './images/espresso-step-2.png' },
                { text: 'Lock the portafilter into the group head of the espresso machine.', image: '../images/espresso-step-3.png' },
                { text: 'Place a pre-warmed cup under the spouts and start the extraction.', image: './images/espresso-step-4.png' },
                { text: 'Aim for a 25-30 second shot, yielding about (60ml) of espresso.', image: './images/espresso-step-5.png' },
                { text: 'Serve immediately for the best flavor.', image: './images/espresso-step-6.png' }
            ]
        },
        'Latte': {
            description: 'A coffee drink made with espresso and steamed milk, characterized by a thin layer of foam on top.',
            steps: [
                { text: 'Pull a double shot of espresso into a latte cup.', image: './images/latte-step-1.png' },
                { text: 'Steam (150-180ml) of cold milk, creating a smooth, velvety microfoam.', image: './images/latte-step-2.png' },
                { text: 'Swirl the steamed milk to incorporate the foam and milk.', image: './images/latte-step-3.png' },
                { text: 'Gently pour the steamed milk into the center of the espresso.', image: './images/latte-step-4.png' },
                { text: 'As the cup fills, lift the pitcher to create a thin layer of foam on top.', image: './images/latte-step-5.png' },
                { text: 'Optionally, create latte art for a beautiful presentation.', image: './images/latte-step-6.png' }
            ]
        },
        'Cappuccino': {
            description: 'An espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam.',
            steps: [
                { text: 'Pull a double shot of espresso into a cappuccino cup.', image: './images/cappuccino-step-1.png' },
                { text: 'Steam (120-150ml) of cold milk, aerating it more than a latte to create thick, airy foam.', image: './images/cappuccino-step-2.png' },
                { text: 'The final volume should be about one-third espresso, one-third steamed milk, and one-third foam.', image: './images/cappuccino-step-3.png' },
                { text: 'Groom the milk by swirling and tapping the pitcher to create a glossy texture.', image: './images/cappuccino-step-4.png' },
                { text: 'Pour the steamed milk over the espresso, holding back the foam with a spoon initially.', image: './images/cappuccino-step-5.png' },
                { text: 'Spoon the remaining thick foam on top to create a cap.', image: './images/cappuccino-step-6.png' }
            ]
        },
        'Americano': {
            description: 'A type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee.',
            steps: [
                { text: 'Begin by pulling a single or double shot of espresso into a cup.', image: './images/americano-step-1.png' },
                { text: 'Heat water to about 70-75°C - not boiling.', image: './images/americano-step-2.png' },
                { text: 'Gently pour the hot water over the espresso.', image: './images/americano-step-3.png' },
                { text: 'The standard ratio is 1:2 espresso to water, but this can be adjusted to taste.', image: './images/americano-step-4.png' },
                { text: 'Leave a little room at the top if the customer might add milk.', image: './images/americano-step-5.png' },
                { text: 'Serve immediately.', image: './images/americano-step-6.png' }
            ]
        },
        'Classic Nougat Hot Drink': {
            description: 'A sweet and comforting non-coffee beverage with the nutty and honeyed flavor of classic nougat.',
            steps: [
                { text: 'Add 1-2 pumps of nougat-flavored syrup to the bottom of a mug.', image: './images/nougat-drink-step-1.png' },
                { text: 'Steam milk until hot and velvety, with a light layer of foam.', image: './images/nougat-drink-step-2.png' },
                { text: 'Pour the steamed milk into the mug with the syrup.', image: './images/nougat-drink-step-3.png' },
                { text: 'Stir well to combine the milk and syrup thoroughly.', image: './images/nougat-drink-step-4.png' },
                { text: 'Garnish with a drizzle of honey and some crushed toasted almonds.', image: './images/nougat-drink-step-5.png' }
            ]
        },
        'Cold Chocolate': {
            description: 'A refreshing and creamy chocolate milk, made to order. A perfect cold treat.',
            steps: [
                { text: 'Drizzle chocolate syrup inside a tall, chilled glass.', image: './images/cold-chocolate-step-1.png' },
                { text: 'Pour in 240-300 ml of cold milk.', image: './images/cold-chocolate-step-2.png' },
                { text: 'Add a generous amount of ice cubes.', image: './images/cold-chocolate-step-3.png' },
                { text: 'Stir vigorously until the chocolate is well mixed with the milk.', image: './images/cold-chocolate-step-4.png' },
                { text: 'Top with whipped cream and an extra drizzle of chocolate syrup.', image: './images/cold-chocolate-step-5.png' }
            ]
        },
        'Flat White': {
            description: 'Originating from Australia/New Zealand, a flat white is made with espresso and microfoam. It has a higher coffee-to-milk ratio than a latte and a velvety consistency.',
            steps: [
                { text: 'Pull a double shot of espresso into approx. 180 ml ceramic cup.', image: './images/flat-white-step-1.png' },
                { text: 'Steam 120-150 ml of milk to create a fine, velvety microfoam with very little aeration.', image: './images/flat-white-step-2.png' },
                { text: 'Groom the milk by swirling the pitcher to ensure a consistent, silky texture.', image: './images/flat-white-step-3.png' },
                { text: 'Pour the milk into the espresso, creating a small dot or simple latte art on top.', image: './images/flat-white-step-4.png' },
                { text: 'The final drink should have a very thin, glossy layer of microfoam on the surface.', image: './images/flat-white-step-5.png' }
            ]
        },
        'Hot Chocolate': {
            description: 'A classic, comforting drink made with rich chocolate and steamed milk.',
            steps: [
                { text: 'Add 2-3 pumps of chocolate sauce to the bottom of a mug.', image: './images/hot-chocolate-step-1.png' },
                { text: 'Steam milk to a smooth, velvety texture, similar to a latte.', image: './images/hot-chocolate-step-2.png' },
                { text: 'Pour the hot, steamed milk into the mug.', image: './images/hot-chocolate-step-3.png' },
                { text: 'Stir thoroughly to combine the chocolate and milk.', image: './images/hot-chocolate-step-4.png' },
                { text: 'Top with whipped cream and a sprinkle of cocoa powder.', image: './images/hot-chocolate-step-5.png' }
            ]
        },
        'Macchiato': {
            description: 'An espresso drink with a small amount of milk, usually foamed. The name literally means "stained" or "marked" as the espresso is marked with milk.',
            steps: [
                { text: 'Pull a single or double shot of espresso into a small demitasse cup.', image: './images/macchiato-step-1.png' },
                { text: 'Steam a very small amount of milk, creating a dollop of dense foam.', image: './images/macchiato-step-2.png' },
                { text: 'Using a spoon, gently place 1-2 teaspoons of the milk foam onto the center of the espresso.', image: './images/macchiato-step-3.png' },
                { text: 'The foam should "mark" the espresso, creating a distinct white dot in the center of the crema.', image: './images/macchiato-step-4.png' }
            ]
        },
        'Mochaccinno': {
            description: 'A delicious blend of espresso, steamed milk, and chocolate. A perfect treat for chocolate and coffee lovers.',
            steps: [
                { text: 'Add 2 tablespoons of chocolate syrup or powder to the bottom of a mug.', image: './images/mocha-step-1.png' },
                { text: 'Pull a double shot of espresso directly over the chocolate.', image: './images/mocha-step-2.png' },
                { text: 'Stir the espresso and chocolate together until fully combined.', image: './images/mocha-step-3.png' },
                { text: 'Steam milk as you would for a latte, creating a smooth microfoam.', image: './images/mocha-step-4.png' },
                { text: 'Pour the steamed milk into the mug, combining it with the chocolate-espresso mix.', image: './images/mocha-step-5.png' },
                { text: 'Top with whipped cream and a chocolate drizzle for an extra treat.', image: './images/mocha-step-6.png' }
            ]
        },
        'Cortado': {
            description: 'A Spanish-origin drink consisting of espresso mixed with a roughly equal amount of warm milk to reduce the acidity. The milk is steamed, but not frothy.',
            steps: [
                { text: 'Pull a double shot of espresso into a small approx. 135 ml glass tumbler (a Gibraltar glass).', image: './images/cortado-step-1.png' },
                { text: 'Lightly steam an equal amount of milk (approx. 60 ml). Do not create significant foam.', image: './images/cortado-step-2.png' },
                { text: 'Gently pour the steamed milk over the espresso.', image: './images/cortado-step-3.png' },
                { text: 'The milk should cut through the espresso, resulting in a drink with a uniform color and a very thin layer of microfoam.', image: './images/cortado-step-4.png' }
            ]
        },
        'Iced Coffee': {
            description: 'A simple and refreshing coffee beverage served chilled, brewed hot and then cooled down.',
            steps: [
                { text: 'Brew a strong batch of your favorite coffee, about double the normal strength.', image: './images/iced-coffee-step-1.png' },
                { text: 'Allow the brewed coffee to cool to room temperature, then chill in the refrigerator for at least an hour.', image: './images/iced-coffee-step-2.png' },
                { text: 'Fill a tall glass completely with ice cubes.', image: './images/iced-coffee-step-3.png' },
                { text: 'Pour the chilled coffee over the ice, leaving some room at the top.', image: './images/iced-coffee-step-4.png' },
                { text: 'Add milk, cream, or sweetener as desired and stir to combine.', image: './images/iced-coffee-step-5.png' }
            ]
        },
        'Affogato': {
            description: 'A simple Italian dessert where a scoop of vanilla gelato or ice cream is drowned with a shot of hot espresso.',
            steps: [
                { text: 'Place one generous scoop of high-quality vanilla gelato or ice cream into a chilled bowl or glass.', image: './images/affogato-step-1.png' },
                { text: 'Pull a fresh, hot shot of espresso.', image: './images/affogato-step-2.png' },
                { text: 'Immediately pour the hot espresso over the scoop of gelato.', image: './images/affogato-step-3.png' },
                { text: 'Serve with a spoon and enjoy the delicious contrast of hot and cold.', image: './images/affogato-step-4.png' }
            ]
        },
        'Frappe': {
            description: 'A blended iced coffee drink, often topped with whipped cream. Perfect for a hot day.',
            steps: [
                { text: 'Combine 2 shots of chilled espresso, approx. 90 ml of milk, 1 tablespoon of sugar, and a large cup of ice in a blender.', image: './images/frappe-step-1.png' },
                { text: 'Blend on high speed until the mixture is smooth and the ice is fully crushed.', image: './images/frappe-step-2.png' },
                { text: 'Pour the blended mixture into a tall, chilled glass.', image: './images/frappe-step-3.png' },
                { text: 'Garnish with a generous swirl of whipped cream and a sprinkle of cocoa or a drizzle of syrup.', image: './images/frappe-step-4.png' }
            ]
        }
    };

    const drinkList = document.getElementById('drink-list');
    const welcomeMessage = document.getElementById('welcome-message');
    const recipeContent = document.getElementById('recipe-content');
    const drinkNameEl = document.getElementById('drink-name');
    const drinkDescriptionEl = document.getElementById('drink-description');
    const recipeStepsEl = document.getElementById('recipe-steps');
    const prevStepBtn = document.getElementById('prev-step');
    const nextStepBtn = document.getElementById('next-step');
    const homeButton = document.getElementById('home-button');
    
    let currentActiveButton = null;
    let currentStepIndex = 0;
    let currentSteps = [];

    function updateStepView() {
        const steps = recipeStepsEl.querySelectorAll('li');
        steps.forEach((step, index) => {
            if (index === currentStepIndex) {
                step.classList.add('active');
                step.classList.remove('hidden');
            } else {
                step.classList.remove('active');
                step.classList.add('hidden');
            }
        });
        prevStepBtn.classList.toggle('hidden', currentStepIndex === 0);
        nextStepBtn.classList.toggle('hidden', currentStepIndex === steps.length - 1);
    }

    function showNextStep() {
        if (currentStepIndex < currentSteps.length - 1) {
            currentStepIndex++;
            updateStepView();
        }
    }

    function showPrevStep() {
        if (currentStepIndex > 0) {
            currentStepIndex--;
            updateStepView();
        }
    }

    prevStepBtn.addEventListener('click', showPrevStep);
    nextStepBtn.addEventListener('click', showNextStep);

    function showWelcomeScreen() {
        welcomeMessage.classList.remove('hidden');
        recipeContent.classList.add('hidden');
        if (currentActiveButton) {
            currentActiveButton.classList.remove('active');
            currentActiveButton = null;
        }
    }

    homeButton.addEventListener('click', showWelcomeScreen);

    function displayRecipe(drinkKey) {
        const recipe = recipes[drinkKey];
        if (!recipe) return;

        currentStepIndex = 0;
        currentSteps = recipe.steps;

        // Show recipe, hide welcome
        welcomeMessage.classList.add('hidden');
        recipeContent.classList.remove('hidden');

        // Populate content
        drinkNameEl.textContent = drinkKey;
        drinkDescriptionEl.textContent = recipe.description;

        // Clear old steps
        recipeStepsEl.innerHTML = '';

        // Add new steps
        recipe.steps.forEach(stepData => {
            const li = document.createElement('li');

            const textDiv = document.createElement('div');
            textDiv.className = 'step-text';
            textDiv.textContent = stepData.text;
            
            const img = document.createElement('img');
            img.src = stepData.image;
            img.alt = `Visual for: ${stepData.text}`;
            img.className = 'step-image';
            
            li.appendChild(img);
            li.appendChild(textDiv);
            recipeStepsEl.appendChild(li);
        });
        
        // Show navigation buttons
        prevStepBtn.classList.remove('hidden');
        nextStepBtn.classList.remove('hidden');
        updateStepView();
    }

    // Populate drink menu
    Object.keys(recipes).sort().forEach(key => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = key;
        button.addEventListener('click', () => {
            if (currentActiveButton) {
                currentActiveButton.classList.remove('active');
            }
            button.classList.add('active');
            currentActiveButton = button;
            displayRecipe(key);
        });
        li.appendChild(button);
        drinkList.appendChild(li);
    });


});
