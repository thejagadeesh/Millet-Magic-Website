
var divElement = document.getElementById('viz1715785574212');
var vizElement = divElement.getElementsByTagName('object')[0];
if (divElement.offsetWidth > 800) {
  vizElement.style.width = '100%';
  vizElement.style.maxWidth = '900px'; /* Adjust the max-width as needed */
  vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
  vizElement.style.maxHeight = '600px'; /* Adjust the max height as needed */
} else if (divElement.offsetWidth > 500) {
  vizElement.style.width = '100%';
  vizElement.style.maxWidth = '900px'; /* Adjust the max-width as needed */
  vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
  vizElement.style.maxHeight = '600px'; /* Adjust the max height as needed */
} else {
  vizElement.style.width = '100%';
  vizElement.style.height = '1500px'; /* Adjust the height as needed */
}
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);

document.getElementById('bmiForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get input values
  var height = parseFloat(document.getElementById('height').value);
  var weight = parseFloat(document.getElementById('weight').value);
  var gender = document.getElementById('gender').value;

  // Reset error messages
  document.getElementById('heightError').textContent = '';
  document.getElementById('weightError').textContent = '';


  const recipes = {
    Ragi_Roti: [
      "Ragi Roti",
      "Ingredients:",
      "- 1 cup ragi flour (finger millet flour)",
      "- 1 small onion, finely chopped",
      "- 1 green chili, finely chopped (optional)",
      "- 2-3 tablespoons chopped coriander leaves",
      "- Salt to taste",
      "- Water, as needed",
      "- Oil or ghee for cooking",
      "",
      "Instructions:",
      "1. Mix ragi flour with chopped onions, green chilies, coriander, and salt.",
      "2. Knead into a dough with water.",
      "3. Roll out the dough into thin rotis.",
      "4. Heat a griddle or tawa.",
      "5. Place the rolled out roti on the hot griddle.",
      "6. Cook until golden brown on one side.",
      "7. Flip the roti and cook until golden brown on the other side.",
      "8. Repeat with the remaining dough.",
      "9. Serve hot with a side of your choice.", ""],

    Ragi_Idli: [
      "Ragi Idli",
      "Ingredients:",
      "- 1 cup ragi flour (finger millet flour)",
      "- 1 cup idli rice or parboiled rice",
      "- 1/2 cup urad dal (split black gram dal)",
      "- Salt to taste",
      "- Water, as needed",
      "- Oil or ghee for greasing the idli molds",
      "",
      "Instructions:",
      "1. Wash the idli rice and urad dal separately. Soak them in water for about 4-6 hours.",
      "2. After soaking, drain the water from the rice and dal.",
      "3. In a blender or wet grinder, grind the soaked urad dal to a smooth and fluffy batter. Add water as needed while grinding to achieve the right consistency. Transfer the batter to a large mixing bowl.",
      "4. Next, grind the soaked idli rice to a slightly coarse texture. Add water as needed. Transfer the rice batter to the same bowl as the urad dal batter.",
      "5. Add ragi flour to the rice and dal batter mixture. Mix well until all the ingredients are thoroughly combined. Add salt to taste and mix again.",
      "6. Cover the bowl with a clean cloth or lid and let the batter ferment in a warm place for about 8-10 hours or overnight.",
      "7. After fermentation, grease the idli molds with oil or ghee.",
      "8. Pour the batter into the greased idli molds, filling each mold about 3/4 full.",
      "9. Steam the idlis in a steamer for about 10-12 minutes or until a toothpick inserted into the center of an idli comes out clean.",
      "10. Once the idlis are cooked, remove them from the steamer and let them cool for a few minutes.",
      "11. Use a spoon or knife to gently remove the idlis from the molds.",
      "12. Serve the ragi idlis hot with your favorite chutney, sambar, or curry.", ""],

    Ragi_Mudde: [
      "Ragi Mudde",
      "Ingredients:",
      "- 1 cup ragi flour (finger millet flour)",
      "- 3 cups water",
      "- Salt to taste",
      "",
      "Instructions:",
      "1. In a deep, heavy-bottomed saucepan, bring 3 cups of water to a boil.",
      "2. Once the water starts boiling, add salt to taste.",
      "3. Gradually add the ragi flour to the boiling water while stirring continuously with a wooden spoon or spatula.",
      "4. Keep stirring vigorously to prevent lumps from forming and to ensure that the ragi flour is well incorporated into the water.",
      "5. Reduce the heat to low and continue stirring the mixture until it thickens and forms a dough-like consistency.",
      "6. Once the mixture is thick and cooked, remove it from the heat.",
      "7. Wet your hands with water to prevent the mixture from sticking, then quickly shape the ragi mixture into small round balls or dumplings, known as mudde.",
      "8. Serve the ragi mudde hot with your choice of side dish, such as sambar, curry, or chutney.",
      "9. Enjoy the nutritious and wholesome ragi mudde.", ""],

    Ragi_Aloo_Paratha: [
      "Ragi Aloo Paratha",
      "Ingredients:",
      "- 1 cup ragi flour (finger millet flour)",
      "- 1 cup whole wheat flour",
      "- 2 medium potatoes, boiled and mashed",
      "- 1 small onion, finely chopped",
      "- 1 green chili, finely chopped",
      "- 1 teaspoon ginger-garlic paste",
      "- 1/2 teaspoon cumin seeds",
      "- 1/2 teaspoon turmeric powder",
      "- 1/2 teaspoon red chili powder (optional)",
      "- Salt to taste",
      "- Chopped coriander leaves for garnish (optional)",
      "- Oil or ghee for cooking",
      "",
      "Instructions:",
      "1. In a mixing bowl, combine the ragi flour, whole wheat flour, mashed potatoes, chopped onion, chopped green chili, ginger-garlic paste, cumin seeds, turmeric powder, red chili powder (if using), and salt to taste.",
      "2. Mix all the ingredients well to form a smooth dough. Add a little water if needed to bring the dough together.",
      "3. Divide the dough into equal-sized balls, depending on the size of the parathas you desire.",
      "4. Take one dough ball and roll it out into a small circle on a lightly floured surface.",
      "5. Place a portion of the potato mixture in the center of the rolled-out circle.",
      "6. Bring the edges of the circle together to cover the potato mixture and seal it properly, then flatten it gently.",
      "7. Dust the flattened dough with flour and roll it out again into a larger circle, ensuring that the potato mixture is evenly distributed.",
      "8. Heat a tawa or skillet over medium heat and place the rolled-out paratha on it.",
      "9. Cook the paratha for a minute or two on one side until it starts to puff up and small brown spots appear.",
      "10. Flip the paratha and drizzle some oil or ghee around the edges and on the surface.",
      "11. Press down gently with a spatula and cook until both sides are golden brown and crisp.",
      "12. Repeat the process with the remaining dough balls to make more parathas.",
      "13. Garnish the ragi aloo parathas with chopped coriander leaves if desired, and serve hot with yogurt, pickle, or any chutney of your choice.",
      "14. Enjoy the delicious and nutritious ragi aloo parathas.", ""],

    Ragi_Upma: [
      "Ragi Upma",
      "Ingredients:",
      "- 1 cup ragi flour (finger millet flour)",
      "- 1/2 cup semolina (sooji)",
      "- 1 small onion, finely chopped",
      "- 1 small carrot, finely chopped (optional)",
      "- 1 small tomato, finely chopped",
      "- 1 green chili, finely chopped",
      "- 1 teaspoon mustard seeds",
      "- 1 teaspoon urad dal (split black gram dal)",
      "- 1 teaspoon chana dal (split chickpeas)",
      "- 1/2 teaspoon turmeric powder",
      "- 8-10 curry leaves",
      "- 2 tablespoons oil or ghee",
      "- Salt to taste",
      "- Chopped coriander leaves for garnish (optional)",
      "- Lemon wedges for serving (optional)",
      "",
      "Instructions:",
      "1. Dry roast the ragi flour in a pan over medium heat for a few minutes until it becomes aromatic. Transfer it to a plate and set aside.",
      "2. In the same pan, heat the oil or ghee over medium heat. Add the mustard seeds and let them splutter.",
      "3. Add the urad dal and chana dal to the pan. Saute until they turn golden brown.",
      "4. Add the chopped onion, green chili, and curry leaves to the pan. Saute until the onions turn translucent.",
      "5. Add the chopped carrot (if using) and saute for a couple of minutes until it softens slightly.",
      "6. Add the chopped tomato to the pan. Cook until the tomatoes are soft and mushy.",
      "7. Add turmeric powder and salt to taste. Mix well.",
      "8. Pour 2 cups of water into the pan and bring it to a boil.",
      "9. Once the water starts boiling, reduce the heat to low and slowly add the roasted ragi flour and semolina to the pan, stirring continuously to prevent lumps from forming.",
      "10. Cook the mixture for 3-4 minutes, stirring constantly, until it thickens and reaches a porridge-like consistency.",
      "11. Remove the pan from the heat and garnish the ragi upma with chopped coriander leaves if desired.",
      "12. Serve hot with lemon wedges on the side for a tangy flavor.",
      "13. Enjoy the wholesome and nutritious ragi upma as a breakfast or snack.", ""],

    Ragi_Dosa: [
      "Ragi Dosa",
      "Ingredients:",
      "- 1 cup ragi flour (finger millet flour)",
      "- 1/2 cup rice flour",
      "- 1/4 cup urad dal (split black gram dal)",
      "- 1/4 cup poha (flattened rice)",
      "- Salt to taste",
      "- Water, as needed",
      "- Oil or ghee for cooking",
      "",
      "Instructions:",
      "1. Soak urad dal and poha in water for 3-4 hours.",
      "2. Grind urad dal and poha to a smooth batter.",
      "3. Mix ragi flour, rice flour, and the ground batter.",
      "4. Add water to make a smooth dosa batter.",
      "5. Let the batter ferment overnight.",
      "6. Add salt to the batter before making dosas.",
      "7. Heat a tawa and pour a ladleful of batter.",
      "8. Spread it in a circular motion to make a thin dosa.",
      "9. Drizzle oil around the edges and cook until crispy.",
      "10. Serve hot with chutney or sambar.", ""],

    Ragi_Ladoo: [
      "Ragi Ladoo",
      "Ingredients:",
      "- 1 cup raagi flour (finger millet flour)",
      "- 1/2 cup grated jaggery (adjust according to taste)",
      "- 1/4 cup grated coconut (optional)",
      "- 2-3 tablespoons ghee (clarified butter)",
      "- 1/4 teaspoon cardamom powder",
      "- Chopped nuts (almonds, cashews, etc.) for garnish (optional)",
      "",
      "Instructions:",
      "1. Heat a pan over low heat and dry roast the ragi flour until it turns aromatic and changes color slightly. Make sure not to burn it. Transfer to a plate and let it cool.",
      "2. In the same pan, add the grated jaggery and 1 tablespoon of ghee. Stir continuously until the jaggery melts and forms a syrup-like consistency. Turn off the heat.",
      "3. Add the roasted ragi flour to the melted jaggery and mix well until everything is combined evenly.",
      "4. Add grated coconut (if using) and cardamom powder to the mixture. Mix well.",
      "5. Allow the mixture to cool down slightly so that it's comfortable to handle.",
      "6. Grease your palms with a little ghee and start shaping the mixture into small round ladoos.",
      "7. If desired, press a chopped nut into the center of each ladoo for garnish.",
      "8. Repeat the process with the remaining mixture.",
      "9. Let the ladoos cool completely before storing them in an airtight container.",
      "10. Enjoy these nutritious and delicious ragi ladoos as a healthy snack or dessert option.", ""],


    Ragi_Cookies: [
      "Ragi Cookies",
      "Ingredients:",
      "- 1 cup ragi flour (finger millet flour)",
      "- 1/2 cup whole wheat flour",
      "- 1/2 cup unsalted butter, softened",
      "- 1/2 cup powdered sugar",
      "- 1 teaspoon vanilla extract",
      "- 1/4 teaspoon baking powder",
      "- A pinch of salt",
      "- 2-3 tablespoons milk (if needed)",
      "- Chopped nuts or chocolate chips for garnish (optional)",
      "",
      "Instructions:",
      "1. Preheat your oven to 350°F (175°C). Line a baking sheet with parchment paper or grease it lightly.",
      "2. In a mixing bowl, cream together the softened butter and powdered sugar until light and fluffy.",
      "3. Add the vanilla extract and mix well.",
      "4. In a separate bowl, sift together the ragi flour, whole wheat flour, baking powder, and salt.",
      "5. Gradually add the dry ingredients to the wet ingredients and mix until a dough forms. If the dough seems too dry, add 1-2 tablespoons of milk to bind it together.",
      "6. Once the dough comes together, gently knead it for a minute to ensure everything is well combined.",
      "7. Pinch off small portions of the dough and roll them into balls. Place the balls onto the prepared baking sheet, leaving some space between each cookie.",
      "8. Flatten each ball slightly with your palm or a fork. If desired, press a few chopped nuts or chocolate chips onto the top of each cookie for garnish.",
      "9. Bake the cookies in the preheated oven for 12-15 minutes, or until the edges turn golden brown.",
      "10. Remove the cookies from the oven and let them cool on the baking sheet for a few minutes before transferring them to a wire rack to cool completely.",
      "11. Once cooled, store the ragi cookies in an airtight container at room temperature.",
      "12. Enjoy these wholesome and nutritious ragi cookies as a guilt-free snack or treat.", ""],

    Bajra_Na_Vada: [
      "Bajra Na Vada",
      "Ingredients:",
      "- 1 cup bajra flour (pearl millet flour)",
      "- 1/2 cup grated bottle gourd (doodhi/lauki)",
      "- 2 tablespoons chopped coriander leaves",
      "- 1 green chili, finely chopped",
      "- 1/2 teaspoon cumin seeds",
      "- 1/2 teaspoon turmeric powder",
      "- Salt to taste",
      "- Oil for deep frying",
      "",
      "Instructions:",
      "1. In a mixing bowl, combine the bajra flour, grated bottle gourd, chopped coriander leaves, green chili, cumin seeds, turmeric powder, and salt.",
      "2. Mix all the ingredients well to form a dough-like consistency. If the mixture feels too dry, add a little water to bind it together.",
      "3. Heat oil in a deep frying pan over medium heat.",
      "4. While the oil is heating, wet your palms with water and take a small portion of the dough. Shape it into a small round vada.",
      "5. Gently slide the vada into the hot oil and fry until it turns golden brown and crispy on all sides.",
      "6. Remove the fried vada using a slotted spoon and drain excess oil on paper towels.",
      "7. Repeat the process with the remaining dough to make more vadas.",
      "8. Serve the hot and crispy bajra na vadas with chutney or sauce of your choice.",
      "9. Enjoy this delicious and nutritious Gujarati snack!", ""],
    Bajra_Kichidi: [
      "Bajra Kichidi",
      "Ingredients:",
      "- 1 cup bajra (pearl millet)",
      "- 1/2 cup moong dal (split yellow lentils)",
      "- 2 cups mixed vegetables (carrots, peas, beans, etc.), chopped",
      "- 1 onion, finely chopped",
      "- 2 tomatoes, finely chopped",
      "- 2 green chilies, slit",
      "- 1-inch piece of ginger, grated",
      "- 2 cloves garlic, minced",
      "- 1 teaspoon cumin seeds",
      "- 1/2 teaspoon turmeric powder",
      "- 1 teaspoon garam masala",
      "- Salt to taste",
      "- 2 tablespoons ghee (clarified butter)",
      "- Chopped coriander leaves for garnish",
      "- Lemon wedges for serving (optional)",
      "",
      "Instructions:",
      "1. Rinse the bajra and moong dal under running water. Soak them together in water for about 4-6 hours or overnight. Drain and set aside.",
      "2. Heat ghee in a pressure cooker or heavy-bottomed pot over medium heat. Add cumin seeds and let them splutter.",
      "3. Add the chopped onions, grated ginger, minced garlic, and slit green chilies. Sauté until the onions turn golden brown.",
      "4. Add the chopped tomatoes and cook until they turn mushy.",
      "5. Add the mixed vegetables, turmeric powder, garam masala, and salt. Mix well and cook for a couple of minutes.",
      "6. Add the soaked and drained bajra and moong dal to the pot. Mix everything well.",
      "7. Pour in enough water to cover the ingredients (about 4-5 cups). Stir well and check for seasoning.",
      "8. Close the pressure cooker lid and cook for about 3-4 whistles or until the bajra and dal are cooked through.",
      "9. Once the pressure releases naturally, open the lid and give the kichidi a good stir. If it's too thick, add some hot water to adjust the consistency.",
      "10. Garnish with chopped coriander leaves and serve hot with a wedge of lemon on the side if desired.",
      "11. Enjoy this wholesome and nutritious bajra kichidi as a comforting meal!", ""],
    Bajra_Paratha: [
      "Bajra Paratha",
      "Ingredients:",
      "- 1 cup bajra flour (pearl millet flour)",
      "- 1/2 cup whole wheat flour",
      "- 1 small onion, finely chopped",
      "- 1 green chili, finely chopped",
      "- 2 tablespoons chopped coriander leaves",
      "- 1/2 teaspoon cumin seeds",
      "- 1/2 teaspoon turmeric powder",
      "- Salt to taste",
      "- Water, as needed",
      "- Ghee or oil for cooking",
      "",
      "Instructions:",
      "1. In a mixing bowl, combine the bajra flour, whole wheat flour, chopped onion, chopped green chili, chopped coriander leaves, cumin seeds, turmeric powder, and salt.",
      "2. Mix all the ingredients well.",
      "3. Gradually add water to the flour mixture and knead it into a smooth dough. The dough should be firm yet pliable.",
      "4. Divide the dough into equal-sized portions and roll each portion into a ball.",
      "5. Flatten each dough ball between your palms and dust it with bajra flour.",
      "6. Roll out each flattened ball into a round paratha of about 6-7 inches in diameter, using a rolling pin.",
      "7. Heat a tawa or skillet over medium heat.",
      "8. Place the rolled-out paratha on the hot tawa and cook until small bubbles start to appear on the surface.",
      "9. Flip the paratha and spread some ghee or oil on the cooked side.",
      "10. Cook the other side until golden brown spots appear, pressing gently with a spatula.",
      "11. Flip the paratha again and spread some ghee or oil on this side as well. Press gently and cook until both sides are evenly cooked and golden brown.",
      "12. Repeat the process with the remaining dough portions to make more parathas.",
      "13. Serve the hot bajra parathas with yogurt, pickle, or any curry of your choice.",
      "14. Enjoy these nutritious and flavorful parathas as a wholesome meal!", ""],
    Bajra_Roti: [
      "Bajra Roti",
      "Ingredients:",
      "- 1 cup bajra flour (pearl millet flour)",
      "- Water, as needed",
      "- Salt, to taste",
      "",
      "Instructions:",
      "1. In a mixing bowl, add the bajra flour and salt.",
      "2. Gradually add water to the flour while kneading it simultaneously. Knead until you get a smooth and pliable dough. The dough should not be too soft or too stiff.",
      "3. Divide the dough into equal-sized portions and roll each portion into a ball.",
      "4. Heat a tawa or skillet over medium heat.",
      "5. Take a dough ball and flatten it slightly between your palms.",
      "6. Place the flattened dough ball on the hot tawa.",
      "7. Cook the roti for about a minute on one side until you start seeing small bubbles forming on the surface.",
      "8. Flip the roti using a spatula and cook the other side for another minute or until light brown spots appear.",
      "9. If needed, you can press the edges of the roti gently with a kitchen towel to ensure even cooking.",
      "10. Remove the roti from the tawa and serve hot.",
      "11. Repeat the process with the remaining dough portions to make more rotis.",
      "12. Serve the hot bajra rotis with your favorite curry, dal, or chutney.",
      "13. Enjoy these nutritious and gluten-free rotis as a wholesome meal!", ""],
    Bajra_Pulao: [
      "Bajra Pulao",
      "Ingredients:",
      "- 1 cup bajra (pearl millet)",
      "- 1/2 cup mixed vegetables (carrots, peas, beans, etc.), chopped",
      "- 1 onion, finely chopped",
      "- 2 tomatoes, finely chopped",
      "- 2 green chilies, slit",
      "- 1-inch piece of ginger, grated",
      "- 2 cloves garlic, minced",
      "- 1 teaspoon cumin seeds",
      "- 1/2 teaspoon turmeric powder",
      "- 1 teaspoon garam masala",
      "- Salt to taste",
      "- 2 cups water or vegetable broth",
      "- 1 tablespoon ghee (clarified butter) or oil",
      "- Chopped coriander leaves for garnish",
      "",
      "Instructions:",
      "1. Rinse the bajra under running water. Soak it in water for about 4-6 hours or overnight. Drain and set aside.",
      "2. Heat ghee or oil in a pressure cooker or heavy-bottomed pot over medium heat. Add cumin seeds and let them splutter.",
      "3. Add the chopped onions, grated ginger, minced garlic, and slit green chilies. Sauté until the onions turn golden brown.",
      "4. Add the chopped tomatoes and cook until they turn mushy.",
      "5. Add the mixed vegetables, turmeric powder, garam masala, and salt. Mix well and cook for a couple of minutes.",
      "6. Add the soaked and drained bajra to the pot. Mix everything well.",
      "7. Pour in 2 cups of water or vegetable broth. Stir well and check for seasoning.",
      "8. Close the pressure cooker lid and cook for about 4-5 whistles or until the bajra is cooked through.",
      "9. Once the pressure releases naturally, open the lid and give the pulao a good stir.",
      "10. Garnish with chopped coriander leaves and serve hot.",
      "11. Enjoy this nutritious and wholesome bajra pulao as a comforting meal!", ""],
    Bajra_Salad: [
      "Bajra Salad",
      "Ingredients:",
      "- 1 cup cooked bajra (pearl millet)",
      "- 1 cucumber, diced",
      "- 1 tomato, diced",
      "- 1 onion, finely chopped",
      "- 1/4 cup chopped coriander leaves",
      "- 2 tablespoons lemon juice",
      "- 1 teaspoon chaat masala",
      "- Salt to taste",
      "- Black pepper powder to taste",
      "- Optional: chopped green chilies for added heat",
      "",
      "Instructions:",
      "1. In a large mixing bowl, combine the cooked bajra, diced cucumber, diced tomato, finely chopped onion, and chopped coriander leaves.",
      "2. Add lemon juice, chaat masala, salt, and black pepper powder to taste.",
      "3. If you like it spicy, you can add chopped green chilies as well.",
      "4. Toss everything together until well combined.",
      "5. Taste and adjust the seasoning if needed.",
      "6. Serve the bajra salad immediately as a refreshing and nutritious side dish or light meal.",
      "7. Enjoy the crunchy texture and flavors of this healthy bajra salad!", ""],
    Bajra_Cake: [
      "Bajra Cake",
      "Ingredients:",
      "- 1 cup bajra flour (pearl millet flour)",
      "- 1/2 cup whole wheat flour",
      "- 1/2 cup jaggery or brown sugar",
      "- 1/2 cup yogurt",
      "- 1/4 cup oil (such as vegetable or coconut oil)",
      "- 1 teaspoon baking powder",
      "- 1/2 teaspoon baking soda",
      "- 1/2 teaspoon cinnamon powder",
      "- 1/4 teaspoon cardamom powder",
      "- A pinch of salt",
      "- 1/4 cup chopped nuts (such as almonds or walnuts), optional",
      "- 1/4 cup dried fruits (such as raisins or chopped dates), optional",
      "- Powdered sugar for dusting, optional",
      "",
      "Instructions:",
      "1. Preheat your oven to 350°F (175°C). Grease and flour a cake pan or line it with parchment paper.",
      "2. In a mixing bowl, combine the bajra flour, whole wheat flour, baking powder, baking soda, cinnamon powder, cardamom powder, and a pinch of salt.",
      "3. In another bowl, whisk together the jaggery or brown sugar, yogurt, and oil until well combined.",
      "4. Gradually add the dry ingredients to the wet ingredients and mix until smooth. Do not overmix.",
      "5. If using, fold in the chopped nuts and dried fruits into the batter.",
      "6. Pour the batter into the prepared cake pan and spread it evenly.",
      "7. Bake in the preheated oven for 30-35 minutes, or until a toothpick inserted into the center comes out clean.",
      "8. Remove the cake from the oven and let it cool in the pan for 10 minutes.",
      "9. Transfer the cake to a wire rack to cool completely.",
      "10. Once cooled, dust the top of the cake with powdered sugar if desired.",
      "11. Slice and serve the delicious and nutritious bajra cake as a snack or dessert.",
      "12. Enjoy the wholesome goodness of this unique cake!", ""],

    Bajra_Cookies: [
      "Bajra Cookies",
      "Ingredients:",
      "- 1 cup bajra flour (pearl millet flour)",
      "- 1/2 cup whole wheat flour",
      "- 1/2 cup powdered jaggery or brown sugar",
      "- 1/2 cup unsalted butter, at room temperature",
      "- 1/4 cup milk",
      "- 1 teaspoon baking powder",
      "- 1/2 teaspoon vanilla extract",
      "- A pinch of salt",
      "- 1/4 cup chopped nuts (such as almonds or walnuts), optional",
      "- 1/4 cup raisins or chocolate chips, optional",
      "",
      "Instructions:",
      "1. Preheat your oven to 350°F (175°C). Line a baking sheet with parchment paper.",
      "2. In a mixing bowl, whisk together the bajra flour, whole wheat flour, baking powder, and salt.",
      "3. In another bowl, beat the butter and powdered jaggery (or brown sugar) until light and fluffy.",
      "4. Add the vanilla extract to the butter mixture and mix well.",
      "5. Gradually add the dry ingredients to the wet ingredients, mixing until just combined.",
      "6. Add the milk and mix until the dough comes together. If using, fold in the chopped nuts and raisins (or chocolate chips).",
      "7. Scoop small portions of the dough and roll them into balls. Place them on the prepared baking sheet and flatten slightly.",
      "8. Bake in the preheated oven for 12-15 minutes, or until the edges are golden brown.",
      "9. Remove the cookies from the oven and let them cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely.",
      "10. Enjoy the delicious and nutritious bajra cookies as a snack or dessert!", ""],

    Jowar_Upma: [
      "Jowar Upma",
      "Ingredients:",
      "- 1 cup jowar (sorghum) flour",
      "- 1/4 cup mixed vegetables (carrots, peas, beans, etc.), finely chopped",
      "- 1 small onion, finely chopped",
      "- 1 green chili, finely chopped",
      "- 1/2 teaspoon mustard seeds",
      "- 1/2 teaspoon cumin seeds",
      "- 1/2 teaspoon grated ginger",
      "- 1-2 tablespoons chopped coriander leaves",
      "- 1 tablespoon oil",
      "- Salt to taste",
      "- Water, as needed",
      "- Lemon juice (optional)",
      "",
      "Instructions:",
      "1. Heat oil in a pan or kadhai over medium heat.",
      "2. Add mustard seeds and cumin seeds. Let them splutter.",
      "3. Add chopped onions, green chili, and grated ginger. Sauté until onions turn translucent.",
      "4. Add mixed vegetables and sauté for a couple of minutes until they are slightly cooked.",
      "5. Add jowar flour to the pan. Roast the flour along with the vegetables for about 3-4 minutes, stirring continuously.",
      "6. Slowly add water to the mixture while stirring continuously to avoid lumps.",
      "7. Add salt to taste and mix well.",
      "8. Cover the pan and let the upma cook on low heat for about 5-7 minutes, or until the jowar flour is cooked through and the upma reaches the desired consistency.",
      "9. Once done, turn off the heat and garnish with chopped coriander leaves.",
      "10. Squeeze some lemon juice on top if desired for extra flavor.",
      "11. Serve hot as a wholesome and nutritious breakfast or snack option.",
      "12. Enjoy the delicious and healthy jowar upma!", ""],

    Jowar_Salad: [
      "Jowar Salad",
      "Ingredients:",
      "- 1 cup cooked jowar (sorghum)",
      "- 1 cucumber, diced",
      "- 1 tomato, diced",
      "- 1/2 bell pepper, diced",
      "- 1/4 cup red onion, finely chopped",
      "- 1/4 cup fresh parsley, chopped",
      "- 2 tablespoons lemon juice",
      "- 2 tablespoons olive oil",
      "- Salt and pepper to taste",
      "- Optional: crumbled feta cheese or diced avocado for garnish",
      "",
      "Instructions:",
      "1. In a large mixing bowl, combine the cooked jowar, diced cucumber, diced tomato, diced bell pepper, finely chopped red onion, and chopped parsley.",
      "2. In a small bowl, whisk together the lemon juice, olive oil, salt, and pepper to make the dressing.",
      "3. Pour the dressing over the salad ingredients in the large bowl.",
      "4. Toss everything together until well combined and the salad is evenly coated with the dressing.",
      "5. Taste and adjust the seasoning if needed.",
      "6. If desired, garnish the salad with crumbled feta cheese or diced avocado for added flavor and texture.",
      "7. Serve the jowar salad immediately as a refreshing and nutritious side dish or light meal.",
      "8. Enjoy the wholesome goodness of this flavorful jowar salad!", ""],

    Jowar_Kichidi: [
      "Jowar Kichidi",
      "Ingredients:",
      "- 1 cup jowar (sorghum), soaked overnight",
      "- 1/2 cup moong dal (split yellow lentils), soaked for 30 minutes",
      "- 2 cups mixed vegetables (carrots, peas, beans, etc.), chopped",
      "- 1 onion, finely chopped",
      "- 2 tomatoes, finely chopped",
      "- 2 green chilies, slit",
      "- 1-inch piece of ginger, grated",
      "- 2 cloves garlic, minced",
      "- 1 teaspoon cumin seeds",
      "- 1/2 teaspoon turmeric powder",
      "- 1 teaspoon garam masala",
      "- Salt to taste",
      "- 4 cups water",
      "- 2 tablespoons ghee (clarified butter) or oil",
      "- Chopped coriander leaves for garnish",
      "",
      "Instructions:",
      "1. Drain the soaked jowar and moong dal. Rinse them thoroughly under running water and set aside.",
      "2. Heat ghee or oil in a pressure cooker or heavy-bottomed pot over medium heat.",
      "3. Add cumin seeds and let them splutter.",
      "4. Add chopped onions, grated ginger, minced garlic, and slit green chilies. Sauté until the onions turn golden brown.",
      "5. Add chopped tomatoes and cook until they turn mushy.",
      "6. Add mixed vegetables, turmeric powder, garam masala, and salt. Mix well and cook for a couple of minutes.",
      "7. Add soaked jowar and moong dal to the pot. Mix everything well.",
      "8. Pour in 4 cups of water and stir well.",
      "9. Close the pressure cooker lid and cook for about 4-5 whistles or until the jowar and dal are cooked through.",
      "10. Once the pressure releases naturally, open the lid and give the kichidi a good stir.",
      "11. Garnish with chopped coriander leaves and serve hot.",
      "12. Enjoy this wholesome and nutritious jowar kichidi as a comforting meal!", ""],

    Cabbage_Jowar_Muthias: [
      "Cabbage Jowar Muthias",
      "Ingredients:",
      "- 1 cup jowar flour (sorghum flour)",
      "- 1 cup cabbage, finely grated",
      "- 1/4 cup besan (gram flour)",
      "- 2 tablespoons semolina (sooji)",
      "- 2 tablespoons yogurt",
      "- 1 teaspoon ginger paste",
      "- 1 green chili, finely chopped",
      "- 1/2 teaspoon turmeric powder",
      "- 1 teaspoon coriander powder",
      "- 1/2 teaspoon cumin seeds",
      "- 1/2 teaspoon baking soda",
      "- Salt to taste",
      "- Oil for greasing",
      "- Water, as needed",
      "",
      "Instructions:",
      "1. In a large mixing bowl, combine the jowar flour, grated cabbage, besan, semolina, yogurt, ginger paste, chopped green chili, turmeric powder, coriander powder, cumin seeds, baking soda, and salt.",
      "2. Mix all the ingredients well to form a dough-like consistency. If the mixture seems dry, add a little water to bind it together.",
      "3. Divide the dough into equal-sized portions and shape each portion into cylindrical or oval-shaped muthias.",
      "4. Grease a steamer plate or basket with oil and arrange the shaped muthias on it, leaving some space between each muthia.",
      "5. Steam the muthias in a steamer for about 15-20 minutes or until they are cooked through and firm to touch.",
      "6. Once cooked, remove the muthias from the steamer and let them cool slightly.",
      "7. Cut the steamed muthias into slices or cubes as desired.",
      "8. Heat a pan with a little oil. Add the sliced muthias to the pan and shallow fry them until they turn golden brown and crispy on all sides.",
      "9. Serve the hot and crispy cabbage jowar muthias with chutney or sauce of your choice.",
      "10. Enjoy these nutritious and flavorful muthias as a snack or appetizer!", ""],

    Jowar_Uttapam: [
      "Jowar Uttapam",
      "Ingredients:",
      "- 1 cup jowar flour (sorghum flour)",
      "- 1/4 cup rice flour",
      "- 1/2 cup yogurt",
      "- 1/2 cup water",
      "- 1 onion, finely chopped",
      "- 1 tomato, finely chopped",
      "- 1/2 cup mixed vegetables (such as bell peppers, carrots, and peas), finely chopped",
      "- 1 green chili, finely chopped",
      "- 1/2 teaspoon cumin seeds",
      "- 1/2 teaspoon grated ginger",
      "- Salt to taste",
      "- Oil for cooking",
      "",
      "Instructions:",
      "1. In a large mixing bowl, combine the jowar flour, rice flour, yogurt, and water. Mix well to form a smooth batter. Let it rest for 10-15 minutes.",
      "2. Meanwhile, prepare the toppings by mixing together the chopped onion, tomato, mixed vegetables, green chili, cumin seeds, grated ginger, and salt in a separate bowl.",
      "3. Heat a non-stick pan or griddle over medium heat. Lightly grease it with oil.",
      "4. Pour a ladleful of the jowar batter onto the pan and spread it into a circular shape to form an uttapam.",
      "5. Sprinkle a portion of the prepared vegetable topping evenly over the uttapam.",
      "6. Drizzle a little oil around the edges of the uttapam and on the toppings. Cover and cook for 2-3 minutes, or until the bottom is golden brown and crisp.",
      "7. Flip the uttapam using a spatula and cook the other side for another 2-3 minutes, or until cooked through and golden brown.",
      "8. Once both sides are cooked to your liking, transfer the uttapam to a plate.",
      "9. Repeat the process with the remaining batter and vegetable topping to make more uttapams.",
      "10. Serve the hot and delicious jowar uttapams with chutney, sambar, or a side of your choice.",
      "11. Enjoy these wholesome and nutritious uttapams as a healthy breakfast or snack option!", ""],

    Jowar_Cookies: [
      "Jowar Cookies",
      "Ingredients:",
      "- 1 cup jowar flour (sorghum flour)",
      "- 1/2 cup unsalted butter, softened",
      "- 1/2 cup powdered sugar",
      "- 1 teaspoon vanilla extract",
      "- 1/4 teaspoon baking powder",
      "- A pinch of salt",
      "- 2-3 tablespoons milk (if needed)",
      "- Chopped nuts or chocolate chips for garnish (optional)",
      "",
      "Instructions:",
      "1. Preheat your oven to 350°F (175°C). Line a baking sheet with parchment paper or grease it lightly.",
      "2. In a mixing bowl, cream together the softened butter and powdered sugar until light and fluffy.",
      "3. Add the vanilla extract and mix well.",
      "4. In a separate bowl, sift together the jowar flour, baking powder, and salt.",
      "5. Gradually add the dry ingredients to the wet ingredients and mix until a dough forms. If the dough seems too dry, add 1-2 tablespoons of milk to bind it together.",
      "6. Once the dough comes together, gently knead it for a minute to ensure everything is well combined.",
      "7. Pinch off small portions of the dough and roll them into balls. Place the balls onto the prepared baking sheet, leaving some space between each cookie.",
      "8. Flatten each ball slightly with your palm or a fork. If desired, press a few chopped nuts or chocolate chips onto the top of each cookie for garnish.",
      "9. Bake the cookies in the preheated oven for 12-15 minutes, or until the edges turn golden brown.",
      "10. Remove the cookies from the oven and let them cool on the baking sheet for a few minutes before transferring them to a wire rack to cool completely.",
      "11. Once cooled, store the jowar cookies in an airtight container at room temperature.",
      "12. Enjoy these nutritious and delicious cookies as a guilt-free snack or treat!", ""],

    Jowar_Biryani: [
      "Jowar Biryani",
      "Ingredients:",
      "- 1 cup jowar (sorghum), soaked overnight",
      "- 1/2 cup basmati rice",
      "- 1 cup mixed vegetables (carrots, peas, beans, etc.), chopped",
      "- 1 large onion, finely sliced",
      "- 2 tomatoes, chopped",
      "- 2 green chilies, slit",
      "- 1-inch piece of ginger, grated",
      "- 2 cloves garlic, minced",
      "- 1/2 cup yogurt",
      "- 1 teaspoon cumin seeds",
      "- 2 bay leaves",
      "- 4-5 cloves",
      "- 2-3 cardamom pods",
      "- 1-inch cinnamon stick",
      "- 1/2 teaspoon turmeric powder",
      "- 1 teaspoon garam masala",
      "- 1/2 teaspoon red chili powder",
      "- Salt to taste",
      "- 2 tablespoons ghee (clarified butter) or oil",
      "- Chopped coriander leaves and mint leaves for garnish",
      "- Fried onions for garnish (optional)",
      "",
      "Instructions:",
      "1. Drain the soaked jowar and rinse it thoroughly under running water. Cook the jowar in a pressure cooker with enough water until it is tender. Set aside.",
      "2. Cook the basmati rice separately until it is 70% cooked. Drain and set aside.",
      "3. Heat ghee or oil in a large pan over medium heat. Add cumin seeds, bay leaves, cloves, cardamom pods, and cinnamon stick. Sauté for a few seconds until fragrant.",
      "4. Add the finely sliced onions and sauté until they turn golden brown.",
      "5. Add the grated ginger, minced garlic, and slit green chilies. Sauté for another 1-2 minutes.",
      "6. Add the chopped tomatoes and cook until they become soft and mushy.",
      "7. Add the chopped mixed vegetables, turmeric powder, garam masala, red chili powder, and salt. Mix well and cook for a few minutes until the vegetables are slightly tender.",
      "8. Stir in the cooked jowar and yogurt. Mix everything well and cook for another 2-3 minutes.",
      "9. Layer the partially cooked basmati rice over the jowar mixture in the pan. Do not mix.",
      "10. Cover the pan with a tight-fitting lid and cook on low heat for about 10-15 minutes, allowing the flavors to meld together.",
      "11. Once done, turn off the heat and let the biryani rest for 5 minutes before opening the lid.",
      "12. Gently fluff the biryani with a fork, mixing the jowar and rice layers together.",
      "13. Garnish with chopped coriander leaves, mint leaves, and fried onions if desired.",
      "14. Serve the hot and flavorful jowar biryani with raita or your favorite side dish.",
      "15. Enjoy this nutritious and delicious jowar biryani as a wholesome meal!", ""],
    Jowar_Cake: [
      "Jowar Cake",
      "Ingredients:",
      "- 1 cup jowar flour (sorghum flour)",
      "- 1/2 cup whole wheat flour",
      "- 1/2 cup unsalted butter, softened",
      "- 3/4 cup brown sugar",
      "- 2 eggs",
      "- 1 teaspoon vanilla extract",
      "- 1/2 cup milk",
      "- 1 teaspoon baking powder",
      "- 1/2 teaspoon baking soda",
      "- 1/4 teaspoon salt",
      "- 1/2 teaspoon ground cinnamon",
      "- 1/4 teaspoon ground nutmeg",
      "- 1/2 cup chopped nuts or raisins (optional)",
      "",
      "Instructions:",
      "1. Preheat your oven to 350°F (175°C). Grease and flour an 8-inch cake pan.",
      "2. In a mixing bowl, cream together the softened butter and brown sugar until light and fluffy.",
      "3. Add the eggs one at a time, beating well after each addition. Stir in the vanilla extract.",
      "4. In a separate bowl, sift together the jowar flour, whole wheat flour, baking powder, baking soda, salt, ground cinnamon, and ground nutmeg.",
      "5. Gradually add the dry ingredients to the wet ingredients, alternating with the milk, beginning and ending with the dry ingredients. Mix until just combined.",
      "6. Fold in the chopped nuts or raisins if using.",
      "7. Pour the batter into the prepared cake pan and spread it evenly.",
      "8. Bake in the preheated oven for 30-35 minutes, or until a toothpick inserted into the center of the cake comes out clean.",
      "9. Remove the cake from the oven and let it cool in the pan for 10 minutes before transferring it to a wire rack to cool completely.",
      "10. Once cooled, slice and serve the jowar cake as a delicious and healthy treat.",
      "11. Enjoy this nutritious jowar cake with your favorite beverage!", ""],

    Foxtail_Millet_Dosa: [
      "Foxtail Millet Dosa",
      "Ingredients:",
      "- 1 cup foxtail millet (thinai) grains, soaked for 4-6 hours",
      "- 1/4 cup urad dal (black gram lentils), soaked for 4-6 hours",
      "- 1/2 cup rice flour",
      "- 1/2 teaspoon fenugreek seeds",
      "- Salt to taste",
      "- Water, as needed",
      "- Oil for cooking",
      "",
      "Instructions:",
      "1. Rinse the soaked foxtail millet grains and urad dal under running water and drain them well.",
      "2. In a blender, add the drained foxtail millet grains, soaked urad dal, and fenugreek seeds. Grind them into a smooth batter, adding water as needed.",
      "3. Transfer the batter to a large mixing bowl. Add rice flour and salt to the batter and mix well. The consistency of the batter should be like that of regular dosa batter.",
      "4. Cover the bowl with a clean cloth and let the batter ferment in a warm place for 8-10 hours or overnight.",
      "5. After fermentation, the batter will rise and become slightly fluffy. Mix the batter gently.",
      "6. Heat a non-stick dosa tawa or skillet over medium heat. Once hot, pour a ladleful of batter onto the center of the tawa and spread it in a circular motion to form a thin dosa.",
      "7. Drizzle a little oil around the edges of the dosa and cook until the bottom turns golden brown and crisp.",
      "8. Flip the dosa using a spatula and cook the other side for a minute or until cooked through.",
      "9. Once both sides are cooked to your liking, transfer the dosa to a plate.",
      "10. Repeat the process with the remaining batter to make more dosas.",
      "11. Serve the hot foxtail millet dosas with chutney, sambar, or a side of your choice.",
      "12. Enjoy these healthy and nutritious dosas as a wholesome breakfast or snack option!", ""],
    Foxtail_Millet_Salad: [
      "Foxtail Millet Salad",
      "Ingredients:",
      "- 1 cup cooked foxtail millet (thinai)",
      "- 1/2 cup mixed vegetables (such as cucumber, bell peppers, carrots, and tomatoes), diced",
      "- 1/4 cup fresh parsley or cilantro, chopped",
      "- 2 tablespoons lemon juice",
      "- 2 tablespoons olive oil",
      "- Salt and pepper to taste",
      "- Optional: crumbled feta cheese or diced avocado for garnish",
      "",
      "Instructions:",
      "1. In a large mixing bowl, combine the cooked foxtail millet, diced mixed vegetables, and chopped parsley or cilantro.",
      "2. In a small bowl, whisk together the lemon juice, olive oil, salt, and pepper to make the dressing.",
      "3. Pour the dressing over the salad ingredients in the large bowl.",
      "4. Toss everything together until well combined and the salad is evenly coated with the dressing.",
      "5. Taste and adjust the seasoning if needed.",
      "6. If desired, garnish the salad with crumbled feta cheese or diced avocado for added flavor and texture.",
      "7. Serve the foxtail millet salad immediately as a refreshing and nutritious side dish or light meal.",
      "8. Enjoy the wholesome goodness of this flavorful foxtail millet salad!", ""],
    Foxtail_Millet_Pulao: [
      "Foxtail Millet Pulao",
      "Ingredients:",
      "- 1 cup foxtail millet (thinai), soaked for 1-2 hours",
      "- 1 tablespoon ghee or oil",
      "- 1 teaspoon cumin seeds",
      "- 1 onion, finely chopped",
      "- 2 cloves garlic, minced",
      "- 1-inch piece of ginger, grated",
      "- 1 green chili, slit",
      "- 1 carrot, diced",
      "- 1 potato, diced",
      "- 1/4 cup green peas",
      "- 2 cups water or vegetable broth",
      "- Salt to taste",
      "- Fresh cilantro leaves for garnish",
      "- Lemon wedges for serving (optional)",
      "",
      "Instructions:",
      "1. Heat ghee or oil in a pressure cooker or heavy-bottomed pot over medium heat.",
      "2. Add cumin seeds and let them splutter.",
      "3. Add chopped onion, minced garlic, grated ginger, and slit green chili. Sauté until the onions turn translucent.",
      "4. Add diced carrot, potato, and green peas. Cook for a few minutes until the vegetables are slightly tender.",
      "5. Drain the soaked foxtail millet and add it to the pot. Stir well to combine with the vegetables.",
      "6. Pour in 2 cups of water or vegetable broth. Add salt to taste and mix well.",
      "7. Close the pressure cooker lid and cook for about 2 whistles or until the millet and vegetables are cooked through.",
      "8. Once the pressure releases naturally, open the lid and fluff the pulao gently with a fork.",
      "9. Garnish with fresh cilantro leaves and serve hot with lemon wedges on the side if desired.",
      "10. Enjoy this flavorful and nutritious foxtail millet pulao as a wholesome meal!", ""],
    Foxtail_Millet_Biryani: [
      "Foxtail Millet Biryani",
      "Ingredients:",
      "- 1 cup foxtail millet (thinai), soaked for 1-2 hours",
      "- 1 onion, thinly sliced",
      "- 1 tomato, chopped",
      "- 1/2 cup mixed vegetables (carrots, peas, beans, etc.), diced",
      "- 1/4 cup yogurt",
      "- 1 tablespoon ginger-garlic paste",
      "- 1 green chili, slit",
      "- 1/2 teaspoon turmeric powder",
      "- 1 teaspoon red chili powder",
      "- 1 teaspoon biryani masala",
      "- Salt to taste",
      "- 2 tablespoons ghee or oil",
      "- 2 cups water or vegetable broth",
      "- Fresh cilantro leaves for garnish",
      "- Fried onions for garnish (optional)",
      "- Lemon wedges for serving (optional)",
      "",
      "Instructions:",
      "1. Heat ghee or oil in a pressure cooker or heavy-bottomed pot over medium heat.",
      "2. Add the sliced onions and sauté until they turn golden brown.",
      "3. Add ginger-garlic paste and slit green chili. Sauté for a minute until the raw smell disappears.",
      "4. Add chopped tomatoes and cook until they turn soft and mushy.",
      "5. Add diced mixed vegetables and cook for a few minutes.",
      "6. Add turmeric powder, red chili powder, and biryani masala. Mix well.",
      "7. Add soaked foxtail millet and sauté for 2-3 minutes.",
      "8. Add yogurt, salt, and water or vegetable broth. Stir well to combine.",
      "9. Close the pressure cooker lid and cook for about 2 whistles or until the millet is cooked through.",
      "10. Once the pressure releases naturally, open the lid and fluff the biryani gently with a fork.",
      "11. Garnish with fresh cilantro leaves and fried onions if desired.",
      "12. Serve hot with lemon wedges on the side for extra flavor.",
      "13. Enjoy this aromatic and flavorful foxtail millet biryani as a wholesome meal!", ""],
    Foxtail_Millet_Cookies: [
      "Foxtail Millet Cookies",
      "Ingredients:",
      "- 1 cup foxtail millet (thinai) flour",
      "- 1/2 cup unsalted butter, softened",
      "- 1/2 cup brown sugar",
      "- 1 egg",
      "- 1 teaspoon vanilla extract",
      "- 1/2 teaspoon baking soda",
      "- 1/4 teaspoon salt",
      "- 1/2 cup chopped nuts (such as almonds, walnuts, or pecans)",
      "- 1/4 cup dried fruits (such as raisins or chopped dates)",
      "- Optional: chocolate chips for extra sweetness",
      "",
      "Instructions:",
      "1. Preheat your oven to 350°F (175°C). Line a baking sheet with parchment paper or grease it lightly.",
      "2. In a mixing bowl, cream together the softened butter and brown sugar until smooth.",
      "3. Add the egg and vanilla extract to the bowl, and beat until well combined.",
      "4. In another bowl, sift together the foxtail millet flour, baking soda, and salt.",
      "5. Gradually add the dry ingredients to the wet ingredients and mix until a dough forms.",
      "6. Fold in the chopped nuts, dried fruits, and chocolate chips (if using), and mix until evenly distributed throughout the dough.",
      "7. Scoop tablespoon-sized portions of dough onto the prepared baking sheet, leaving some space between each cookie.",
      "8. Flatten each cookie slightly with your palm or the back of a spoon.",
      "9. Bake in the preheated oven for 10-12 minutes, or until the edges turn golden brown.",
      "10. Remove the cookies from the oven and let them cool on the baking sheet for a few minutes before transferring them to a wire rack to cool completely.",
      "11. Once cooled, store the foxtail millet cookies in an airtight container at room temperature.",
      "12. Enjoy these nutritious and delicious cookies as a guilt-free snack or treat!", ""],

    Foxtail_Millet_Cake: [
      "Foxtail Millet Cake",
      "Ingredients:",
      "- 1 cup foxtail millet flour",
      "- 1/2 cup whole wheat flour",
      "- 1/2 cup unsalted butter, softened",
      "- 1 cup powdered sugar",
      "- 2 eggs",
      "- 1 teaspoon vanilla extract",
      "- 1 teaspoon baking powder",
      "- 1/2 teaspoon baking soda",
      "- 1/2 cup milk",
      "- 1/4 cup yogurt",
      "- A pinch of salt",
      "- Optional: nuts or dried fruits for garnish",
      "",
      "Instructions:",
      "1. Preheat your oven to 350°F (175°C). Grease and flour a cake tin or line it with parchment paper.",
      "2. In a mixing bowl, cream together the softened butter and powdered sugar until light and fluffy.",
      "3. Add the eggs one at a time, beating well after each addition. Mix in the vanilla extract.",
      "4. In another bowl, sift together the foxtail millet flour, whole wheat flour, baking powder, baking soda, and salt.",
      "5. Gradually add the dry ingredients to the wet ingredients, alternating with the milk and yogurt. Mix until just combined.",
      "6. Pour the batter into the prepared cake tin and smooth the top. If desired, sprinkle nuts or dried fruits on top.",
      "7. Bake in the preheated oven for 30-35 minutes, or until a toothpick inserted into the center of the cake comes out clean.",
      "8. Remove the cake from the oven and let it cool in the tin for 10 minutes before transferring it to a wire rack to cool completely.",
      "9. Once cooled, slice and serve the foxtail millet cake as a healthy and delicious treat.",
      "10. Store any leftovers in an airtight container at room temperature.", ""],

    Foxtail_Millet_Kichidi: [
      "Foxtail Millet Kichidi",
      "Ingredients:",
      "- 1 cup foxtail millet (thinai), soaked for 1 hour",
      "- 1/2 cup moong dal (yellow lentils), washed and soaked for 30 minutes",
      "- 1 tablespoon ghee or oil",
      "- 1 teaspoon cumin seeds",
      "- 1/2 teaspoon mustard seeds",
      "- 1 onion, finely chopped",
      "- 1 tomato, chopped",
      "- 1 carrot, diced",
      "- 1/4 cup green peas",
      "- 1 green chili, slit",
      "- 1/2 teaspoon turmeric powder",
      "- 1 teaspoon ginger-garlic paste",
      "- Salt to taste",
      "- 4 cups water",
      "- Fresh cilantro leaves for garnish",
      "- Lemon wedges for serving (optional)",
      "",
      "Instructions:",
      "1. Heat ghee or oil in a pressure cooker over medium heat.",
      "2. Add cumin seeds and mustard seeds. Let them splutter.",
      "3. Add chopped onion and sauté until they turn translucent.",
      "4. Add ginger-garlic paste and slit green chili. Sauté for a minute until the raw smell disappears.",
      "5. Add chopped tomato and cook until it turns soft.",
      "6. Add diced carrot and green peas. Cook for a few minutes until the vegetables are slightly tender.",
      "7. Drain the soaked foxtail millet and moong dal. Add them to the pressure cooker and stir well.",
      "8. Add turmeric powder and salt. Mix well.",
      "9. Pour in 4 cups of water and stir well.",
      "10. Close the pressure cooker lid and cook for 3-4 whistles or until the millet and dal are cooked through.",
      "11. Once the pressure releases naturally, open the lid and stir the kichidi gently.",
      "12. Garnish with fresh cilantro leaves and serve hot with lemon wedges if desired.",
      "13. Enjoy this nutritious and comforting foxtail millet kichidi as a wholesome meal.", ""],

    Foxtail_Millet_Upma: [
      "Foxtail Millet Upma",
      "Ingredients:",
      "- 1 cup foxtail millet (thinai), rinsed and drained",
      "- 1 tablespoon oil",
      "- 1 teaspoon mustard seeds",
      "- 1 teaspoon cumin seeds",
      "- 1 onion, finely chopped",
      "- 2 green chilies, slit",
      "- 1-inch piece of ginger, grated",
      "- 1 carrot, diced",
      "- 1/4 cup green peas",
      "- 1/4 cup chopped beans",
      "- 2 cups water",
      "- Salt to taste",
      "- Fresh cilantro leaves for garnish",
      "- Lemon wedges for serving (optional)",
      "",
      "Instructions:",
      "1. Heat oil in a large pan over medium heat.",
      "2. Add mustard seeds and let them splutter. Add cumin seeds and sauté for a few seconds.",
      "3. Add chopped onion, slit green chilies, and grated ginger. Sauté until the onions turn translucent.",
      "4. Add diced carrot, green peas, and chopped beans. Cook for a few minutes until the vegetables are slightly tender.",
      "5. Add rinsed and drained foxtail millet to the pan. Stir well to combine with the vegetables.",
      "6. Pour in 2 cups of water and add salt to taste. Mix well.",
      "7. Bring the mixture to a boil, then reduce the heat to low. Cover the pan with a lid and simmer for about 10-12 minutes or until the millet is cooked and the water is absorbed.",
      "8. Once cooked, fluff the upma gently with a fork.",
      "9. Garnish with fresh cilantro leaves and serve hot with lemon wedges if desired.",
      "10. Enjoy this healthy and flavorful foxtail millet upma as a wholesome breakfast or snack.", ""],
  };

  // Validate height and weight
  if (height < 30 || height > 250) {
    document.getElementById('heightError').textContent = 'Height must be between 30 cm and 250 cm.';
    document.getElementById('heightError').style.display = 'block'; // Show error message
  }
  if (weight < 2 || weight > 300) {
    document.getElementById('weightError').textContent = 'Weight must be between 2 kg and 300 kg.';
    document.getElementById('weightError').style.display = 'block'; // Show error message
  }

  // Calculate BMI if inputs are valid
  if ((height >= 30 && height <= 250) && (weight >= 2 && weight <= 300)) {
    var bmi;
    if (gender === 'male') {
      bmi = weight / ((height / 100) * (height / 100));
    } else { // Female
      bmi = weight / ((height / 100) * (height / 100)) + 0.5; // Considering average difference in BMI between men and women
    }

    // Open the result in the same tab
    var resultWindow = window.open('', '_self');
    resultWindow.document.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Result</title><style>body { font-family: Arial, sans-serif; background-color: #0d0d0d; margin: 0; padding: 20px; line-height: 1.6; color: white; } .output-container { max-width: 600px; margin: 20px auto; background-color: #000; border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); padding: 20px; } h2 { color: #e77200; } p { color: white; } img { max-width: 100%; height: auto; margin-top: 10px; border-radius: 10px; }</style></head><body>');
    resultWindow.document.write('<div class="output-container">');
    resultWindow.document.write('<h2>Your BMI: <span class="bmi">' + bmi.toFixed(2) + '</span></h2>');

    // Display suggestions based on BMI
    if (bmi < 18.5) {
      resultWindow.document.write('<p class="underweight" style="color: #1667c0; font-size: 18px;">You have a underweight.</p>');
      var milletVariety = 'Finger Millet (Ragi)';


      var milletImage = 'https://kj1bcdn.b-cdn.net/media/42477/images-13.jpeg?width=1200'; // Replace with the actual URL of the image
      // Crop Data table styling
      resultWindow.document.write('<style>');
      resultWindow.document.write('table { width: 50%; border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); background-color: #333; color: white; }');
      resultWindow.document.write('th, td { padding: 8px 10px; text-align: left; border-bottom: 1px solid #555; }');
      resultWindow.document.write('th { background-color: #555; font-weight: bold; }');
      resultWindow.document.write('tr:hover { background-color: #444; }');
      resultWindow.document.write('tbody tr:nth-child(even) { background-color: #222; }');
      resultWindow.document.write('</style>');

      // Crop Data table
      resultWindow.document.write('<h2>Crop Data</h2>');
      resultWindow.document.write('<table>');
      resultWindow.document.write('<tr><th>Crop</th><th>Protein (g)</th><th>Fibre (g)</th><th>Minerals (g)</th><th>Iron (mg)</th><th>Calcium (mg)</th></tr>');
      resultWindow.document.write('<tr><td>Finger Millet</td><td>7.3</td><td>3.6</td><td>2.7</td><td>3.9</td><td>344</td></tr>');
      resultWindow.document.write('</table>');



      // Recipes for underweight category
      // var breakfastRecipe1 =  recipes['Ragi_Roti'].join('<br>');
      var breakfastRecipe1 = recipes['Ragi_Roti'].map(function (line) {
        if (line.startsWith("Ragi Roti") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');


      var breakfastRecipe2 = recipes['Ragi_Idli'].map(function (line) {
        if (line.startsWith("Ragi Idli") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');


      var lunchRecipe1 = recipes['Ragi_Mudde'].map(function (line) {
        if (line.startsWith("Ragi Mudde") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');

      var lunchRecipe2 = recipes['Ragi_Aloo_Paratha'].map(function (line) {
        if (line.startsWith("Ragi Aloo Paratha") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');


      var dinnerRecipe1 = recipes['Ragi_Upma'].map(function (line) {
        if (line.startsWith("Ragi Upma") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');

      var dinnerRecipe2 = recipes['Ragi_Dosa'].map(function (line) {
        if (line.startsWith("Ragi Dosa") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');

      var snacksRecipe1 = recipes['Ragi_Ladoo'].map(function (line) {
        if (line.startsWith("Ragi Ladoo") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');


      var snacksRecipe2 = recipes['Ragi_Cookies'].map(function (line) {
        if (line.startsWith("Ragi Cookies") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');


    } else if (bmi >= 18.5 && bmi < 24.9) {
      resultWindow.document.write('<p class="normal" style="color: #03a67d; font-size: 18px;">You have a normal weight.</p>');

      var milletVariety = 'Pearl Millet (Bajra)';
      var milletImage = 'https://cdn.pixabay.com/photo/2013/11/01/18/13/pearl-millet-204091_960_720.jpg'; // Replace with the actual URL of the image
      // Crop Data table styling
      resultWindow.document.write('<style>');
      resultWindow.document.write('table { width: 50%; border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); background-color: #333; color: white; }');
      resultWindow.document.write('th, td { padding: 8px 10px; text-align: left; border-bottom: 1px solid #555; }');
      resultWindow.document.write('th { background-color: #555; font-weight: bold; }');
      resultWindow.document.write('tr:hover { background-color: #444; }');
      resultWindow.document.write('tbody tr:nth-child(even) { background-color: #222; }');
      resultWindow.document.write('</style>');

      // Crop Data table
      resultWindow.document.write('<h2>Crop Data</h2>');
      resultWindow.document.write('<table>');
      resultWindow.document.write('<tr><th>Crop</th><th>Protein (g)</th><th>Fibre (g)</th><th>Minerals (g)</th><th>Iron (mg)</th><th>Calcium (mg)</th></tr>');
      resultWindow.document.write('<tr><td>Pearl Millet</td><td>10.6</td><td>1.3</td><td>2.3</td><td>16.9</td><td>38</td></tr>');
      resultWindow.document.write('</table>');

      var breakfastRecipe1 = recipes['Bajra_Salad'].map(function (line) {
        if (line.startsWith("Bajra Salad") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');

      var breakfastRecipe2 = recipes['Bajra_Na_Vada'].map(function (line) {
        if (line.startsWith("Bajra Na Vada") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');

      var lunchRecipe1 = recipes['Bajra_Pulao'].map(function (line) {
        if (line.startsWith("Bajra Pulao") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');

      var lunchRecipe2 = recipes['Bajra_Kichidi'].map(function (line) {
        if (line.startsWith("Bajra Kichidi") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');


      var dinnerRecipe1 = recipes['Bajra_Roti'].map(function (line) {
        if (line.startsWith("Bajra Roti") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');

      var dinnerRecipe2 = recipes['Bajra_Paratha'].map(function (line) {
        if (line.startsWith("Bajra Paratha") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');

      var snacksRecipe1 = recipes['Bajra_Cake'].map(function (line) {
        if (line.startsWith("Bajra Cake") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');

      var snacksRecipe2 = recipes['Bajra_Cookies'].map(function (line) {
        if (line.startsWith("Bajra Cookies") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');

    } else if (bmi >= 25 && bmi < 29.9) {
      resultWindow.document.write('<p class="overweight" style="color: #cb2e79; font-size: 18px;">You are overweight.</p>');

      var milletVariety = 'Sorghum (Jowar)';
      var milletImage = 'https://th.bing.com/th/id/OIP.tAmpwtSw3A4enDiR4ifh3wHaE8?rs=1&pid=ImgDetMain'; // Replace with the actual URL of the image
      // Crop Data table styling
      resultWindow.document.write('<style>');
      resultWindow.document.write('table { width: 50%; border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); background-color: #333; color: white; }');
      resultWindow.document.write('th, td { padding: 8px 10px; text-align: left; border-bottom: 1px solid #555; }');
      resultWindow.document.write('th { background-color: #555; font-weight: bold; }');
      resultWindow.document.write('tr:hover { background-color: #444; }');
      resultWindow.document.write('tbody tr:nth-child(even) { background-color: #222; }');
      resultWindow.document.write('</style>');

      // Crop Data table
      resultWindow.document.write('<h2>Crop Data</h2>');
      resultWindow.document.write('<table>');
      resultWindow.document.write('<tr><th>Crop</th><th>Protein (g)</th><th>Fibre (g)</th><th>Minerals (g)</th><th>Iron (mg)</th><th>Calcium (mg)</th></tr>');
      resultWindow.document.write('<tr><td>Sorghum</td><td>11</td><td>6.7</td><td>2.7</td><td>3.4</td><td>13</td></tr>');
      resultWindow.document.write('</table>');

      var breakfastRecipe1 = recipes['Jowar_Uttapam'].map(function (line) {
        if (line.startsWith("Jowar Uttapam") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');

      var breakfastRecipe2 = recipes['Jowar_Salad'].map(function (line) {
        if (line.startsWith("Jowar Salad") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');

      var lunchRecipe1 = recipes['Jowar_Biryani'].map(function (line) {
        if (line.startsWith("Jowar Biryani") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');

      var lunchRecipe2 = recipes['Cabbage_Jowar_Muthias'].map(function (line) {
        if (line.startsWith("Cabbage Jowar Muthias") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');


      var dinnerRecipe1 = recipes['Jowar_Upma'].map(function (line) {
        if (line.startsWith("Jowar Upma") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');

      var dinnerRecipe2 = recipes['Jowar_Kichidi'].map(function (line) {
        if (line.startsWith("Jowar Kichidi") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');

      var snacksRecipe1 = recipes['Jowar_Cake'].map(function (line) {
        if (line.startsWith("Jowar Cake") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');

      var snacksRecipe2 = recipes['Jowar_Cookies'].map(function (line) {
        if (line.startsWith("Jowar Cookies") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');

    } else {
      resultWindow.document.write('<p class="Obese" style="color: #Ff0000; font-size: 18px;">You are obese.</p>');

      var milletVariety = 'Foxtail Millet (Kangni)';
      var milletImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Japanese_Foxtail_millet_01.jpg/1280px-Japanese_Foxtail_millet_01.jpg'; // Replace with the actual URL of the image
      // Crop Data table styling
      resultWindow.document.write('<style>');
      resultWindow.document.write('table { width: 50%; border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); background-color: #333; color: white; }');
      resultWindow.document.write('th, td { padding: 8px 10px; text-align: left; border-bottom: 1px solid #555; }');
      resultWindow.document.write('th { background-color: #555; font-weight: bold; }');
      resultWindow.document.write('tr:hover { background-color: #444; }');
      resultWindow.document.write('tbody tr:nth-child(even) { background-color: #222; }');
      resultWindow.document.write('</style>');

      // Crop Data table
      resultWindow.document.write('<h2>Crop Data</h2>');
      resultWindow.document.write('<table>');
      resultWindow.document.write('<tr><th>Crop</th><th>Protein (g)</th><th>Fibre (g)</th><th>Minerals (g)</th><th>Iron (mg)</th><th>Calcium (mg)</th></tr>');
      resultWindow.document.write('<tr><td>Foxtail Millet</td><td>12.3</td><td>8</td><td>3.3</td><td>2.8</td><td>31</td></tr>');
      resultWindow.document.write('</table>');

      var breakfastRecipe1 = recipes['Foxtail_Millet_Dosa'].map(function (line) {
        if (line.startsWith("Foxtail Millet Dosa") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');


      var breakfastRecipe2 = recipes['Foxtail_Millet_Salad'].map(function (line) {
        if (line.startsWith("Foxtail Millet Salad") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');


      var lunchRecipe1 = recipes['Foxtail_Millet_Biryani'].map(function (line) {
        if (line.startsWith("Foxtail Millet Biryani") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');

      var lunchRecipe2 = recipes['Foxtail_Millet_Pulao'].map(function (line) {
        if (line.startsWith("Foxtail Millet Pulao") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');


      var dinnerRecipe1 = recipes['Foxtail_Millet_Upma'].map(function (line) {
        if (line.startsWith("Foxtail Millet Upma") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');

      var dinnerRecipe2 = recipes['Foxtail_Millet_Kichidi'].map(function (line) {
        if (line.startsWith("Foxtail Millet Kichidi") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');

      var snacksRecipe1 = recipes['Foxtail_Millet_Cake'].map(function (line) {
        if (line.startsWith("Ragi Ladoo") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');


      var snacksRecipe2 = recipes['Foxtail_Millet_Cookies'].map(function (line) {
        if (line.startsWith("Foxtail Millet Cookies") || line.startsWith("Ingredients:") || line.startsWith("Instructions:")) {
          return "<strong style='color: orange;'>" + line + "</strong>";
        } else {
          return line;
        }
      }).join('<br>');
    }

    // Display suggested millet variety with image and recipes
    resultWindow.document.write('<h3>Suggested Millet Variety: ' + milletVariety + '</h3>');
    resultWindow.document.write('<img id="milletImage" src="' + milletImage + '" alt="' + milletVariety + '">');
    resultWindow.document.write('<h4>Recipes:</h4>');
    resultWindow.document.write('<p><strong>Breakfast:</strong><br>' + breakfastRecipe1 + '<br>' + breakfastRecipe2 + '</p>');
    resultWindow.document.write('<p><strong>Lunch:</strong><br>' + lunchRecipe1 + '<br>' + lunchRecipe2 + '</p>');
    resultWindow.document.write('<p><strong>Dinner:</strong><br>' + dinnerRecipe1 + '<br>' + dinnerRecipe2 + '</p>');
    resultWindow.document.write('<p><strong>Snacks:</strong><br>' + snacksRecipe1 + '<br>' + snacksRecipe2 + '</p>');
    // Add "Back to Home" button
    resultWindow.document.write('<button onclick="window.location.href = \'index.html\';">Back to Home</button>');

    resultWindow.document.write('</div></body></html>');

    // Close the result window
    resultWindow.document.close();
  }
});
