const meals = [
  {
    name: "Creamy Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    image:
      "gourmet spaghetti carbonara pasta dish, professional food photography, appetizing",
    imgCover:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 min",
    cookTime: "20 min",
    totalTime: 35,
    servings: "4 people",
    difficulty: "Easy",
    category: "Italian",
    ratingsAverage: 4.8,
    ratingsQuantity: 234,
    ingredients: [
      "400g spaghetti pasta",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmesan cheese, grated",
      "Freshly ground black pepper",
      "Salt for pasta water",
    ],
    instructions: [
      "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
      "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
      "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
      "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
      "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
      "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!",
    ],
    nutrition: {
      calories: "520 kcal",
      protein: "28g",
      carbs: "62g",
      fat: "18g",
      fiber: "3g",
      sodium: "680mg",
    },
    tips: [
      "Use room temperature eggs for a smoother sauce consistency",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
      "Reserve extra pasta water - it's the secret to perfect creaminess",
      "Freshly grated cheese makes all the difference in flavor",
      "Never add cream - authentic carbonara is made with eggs only",
    ],
  },
  {
    name: "Honey Garlic Salmon",
    description: "Pan-seared salmon with a sweet and savory glaze",
    image:
      "honey garlic salmon with vegetables, gourmet presentation, food photography",
    imgCover:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
    prepTime: "10 min",
    cookTime: "15 min",
    totalTime: 25,
    servings: "2 people",
    difficulty: "Easy",
    category: "Seafood",
    ratingsAverage: 4.9,
    ratingsQuantity: 187,
    ingredients: [
      "2 salmon fillets (6oz each)",
      "3 tablespoons honey",
      "2 tablespoons soy sauce",
      "4 cloves garlic, minced",
      "1 tablespoon olive oil",
      "1 teaspoon fresh ginger, grated",
      "Sesame seeds for garnish",
      "Green onions, sliced",
    ],
    instructions: [
      "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
      "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
      "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
      "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
    ],
    nutrition: {
      calories: "380 kcal",
      protein: "35g",
      carbs: "28g",
      fat: "14g",
      fiber: "0g",
      sodium: "720mg",
    },
    tips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal",
    ],
  },
  {
    name: "Thai Green Curry",
    description: "Vibrant and aromatic curry with vegetables and coconut milk",
    image:
      "thai green curry with vegetables, vibrant and aromatic, asian cuisine, food photography",
    imgCover:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 min",
    cookTime: "25 min",
    totalTime: 40,
    servings: "4 people",
    difficulty: "Intermediate",
    category: "Asian",
    ratingsAverage: 4.7,
    ratingsQuantity: 312,
    ingredients: [
      "2 tablespoons green curry paste",
      "400ml coconut milk",
      "300g chicken breast, sliced",
      "1 red bell pepper, sliced",
      "100g green beans",
      "1 eggplant, cubed",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Fresh Thai basil leaves",
    ],
    instructions: [
      "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
      "Add half the coconut milk and stir to combine with the curry paste.",
      "Add sliced chicken and cook until no longer pink, about 5 minutes.",
      "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
      "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
      "Stir in fresh Thai basil leaves. Serve hot with jasmine rice.",
    ],
    nutrition: {
      calories: "420 kcal",
      protein: "26g",
      carbs: "22g",
      fat: "26g",
      fiber: "5g",
      sodium: "890mg",
    },
    tips: [
      "Adjust spice level by using more or less curry paste",
      "Add vegetables in stages based on cooking time needed",
      "Fresh Thai basil is essential for authentic flavor",
      "Use full-fat coconut milk for richest, creamiest sauce",
    ],
  },
  {
    name: "Classic Beef Burger",
    description: "Juicy homemade burger with all the fixings",
    image:
      "gourmet beef burger with lettuce tomato cheese, professional food photography",
    imgCover:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 min",
    cookTime: "20 min",
    totalTime: 35,
    servings: "4 people",
    difficulty: "Easy",
    category: "American",
    ratingsAverage: 4.6,
    ratingsQuantity: 421,
    ingredients: [
      "500g ground beef (80/20)",
      "4 burger buns",
      "4 slices cheddar cheese",
      "Lettuce leaves",
      "Tomato slices",
      "Red onion, sliced",
      "Pickles",
      "Burger sauce or condiments",
    ],
    instructions: [
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
      "Season patties generously with salt and pepper on both sides.",
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
      "Add cheese slices in the last minute of cooking and cover to melt.",
      "Toast burger buns lightly on the grill or in a pan.",
      "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
    ],
    nutrition: {
      calories: "650 kcal",
      protein: "38g",
      carbs: "42g",
      fat: "35g",
      fiber: "2g",
      sodium: "920mg",
    },
    tips: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor",
    ],
  },
  {
    name: "Mediterranean Quinoa Bowl",
    description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    image:
      "mediterranean quinoa bowl with vegetables and tahini, healthy food, colorful presentation",
    imgCover:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
    prepTime: "20 min",
    cookTime: "35 min",
    totalTime: 55,
    servings: "2 people",
    difficulty: "Easy",
    category: "Mediterranean",
    ratingsAverage: 4.5,
    ratingsQuantity: 156,
    ingredients: [
      "1 cup quinoa",
      "Cherry tomatoes, halved",
      "Cucumber, diced",
      "Red onion, sliced",
      "Kalamata olives",
      "Feta cheese, crumbled",
      "Fresh parsley",
      "Tahini dressing",
    ],
    instructions: [
      "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
      "While quinoa cooks, prepare all vegetables and set aside.",
      "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
      "Fluff cooked quinoa with a fork and let cool slightly.",
      "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
      "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing.",
    ],
    nutrition: {
      calories: "480 kcal",
      protein: "18g",
      carbs: "58g",
      fat: "20g",
      fiber: "10g",
      sodium: "540mg",
    },
    tips: [
      "Rinse quinoa well to remove bitter coating",
      "Let quinoa cool before adding fresh ingredients",
      "Make extra tahini dressing - it keeps well in the fridge",
      "Add grilled chicken or chickpeas for extra protein",
    ],
  },
  {
    name: "Chicken Tikka Masala",
    description: "Rich and creamy Indian curry with tender chicken pieces",
    image:
      "chicken tikka masala curry with rice, indian food, professional photography",
    imgCover:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop",
    prepTime: "20 min",
    cookTime: "30 min",
    totalTime: 50,
    servings: "4 people",
    difficulty: "Intermediate",
    category: "Asian",
    ratingsAverage: 4.7,
    ratingsQuantity: 389,
    ingredients: [
      "600g chicken breast, cubed",
      "1 cup plain yogurt",
      "2 tablespoons tikka masala paste",
      "400ml coconut cream",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "2 tablespoons ginger, grated",
      "400g canned tomatoes",
      "Fresh cilantro for garnish",
    ],
    instructions: [
      "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
      "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
      "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
      "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
      "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
      "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
    ],
    nutrition: {
      calories: "450 kcal",
      protein: "38g",
      carbs: "24g",
      fat: "22g",
      fiber: "4g",
      sodium: "760mg",
    },
    tips: [
      "Marinate chicken overnight for deeper flavor",
      "Use full-fat coconut cream for richest sauce",
      "Adjust spice level by varying the tikka paste amount",
      "Serve with naan bread and basmati rice",
    ],
  },
  {
    name: "Margherita Pizza",
    description: "Classic Italian pizza with fresh mozzarella and basil",
    image: "margherita pizza with fresh basil, italian food, food photography",
    imgCover:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop",
    prepTime: "90 min",
    cookTime: "12 min",
    totalTime: 102,
    servings: "2 people",
    difficulty: "Intermediate",
    category: "Italian",
    ratingsAverage: 4.9,
    ratingsQuantity: 512,
    ingredients: [
      "300g pizza dough",
      "200g crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Parmesan cheese for topping",
    ],
    instructions: [
      "Let pizza dough come to room temperature and rest for 1 hour.",
      "Preheat oven to maximum temperature (usually 250°C/480°F).",
      "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
      "Roll out dough on a floured surface to desired thickness.",
      "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
      "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.",
    ],
    nutrition: {
      calories: "580 kcal",
      protein: "24g",
      carbs: "68g",
      fat: "22g",
      fiber: "4g",
      sodium: "920mg",
    },
    tips: [
      "Use a pizza stone for crispier crust",
      "Don't overload with toppings - less is more",
      "Add basil after baking to keep it fresh",
      "Let dough rest properly for best texture",
    ],
  },
  {
    name: "Beef Tacos",
    description: "Flavorful Mexican tacos with seasoned ground beef",
    image: "beef tacos with toppings, mexican street food, food photography",
    imgCover:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 min",
    cookTime: "20 min",
    totalTime: 35,
    servings: "4 people",
    difficulty: "Easy",
    category: "American",
    ratingsAverage: 4.6,
    ratingsQuantity: 278,
    ingredients: [
      "500g ground beef",
      "8 taco shells",
      "1 onion, diced",
      "2 tablespoons taco seasoning",
      "Shredded lettuce",
      "Diced tomatoes",
      "Shredded cheddar cheese",
      "Sour cream",
      "Salsa",
    ],
    instructions: [
      "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
      "Add diced onion and cook until softened, about 5 minutes.",
      "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
      "Warm taco shells according to package directions.",
      "Fill each shell with seasoned beef.",
      "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately.",
    ],
    nutrition: {
      calories: "420 kcal",
      protein: "26g",
      carbs: "32g",
      fat: "20g",
      fiber: "4g",
      sodium: "780mg",
    },
    tips: [
      "Drain excess fat from beef for healthier tacos",
      "Warm shells in oven for better texture",
      "Prepare all toppings before cooking beef",
      "Use ground turkey for a lighter option",
    ],
  },
  {
    name: "Caesar Salad",
    description: "Classic salad with crispy romaine and creamy dressing",
    image:
      "caesar salad with parmesan and croutons, fresh salad, food photography",
    imgCover:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 min",
    cookTime: "0 min",
    totalTime: 15,
    servings: "2 people",
    difficulty: "Easy",
    category: "Mediterranean",
    ratingsAverage: 4.4,
    ratingsQuantity: 198,
    ingredients: [
      "1 large romaine lettuce",
      "1/2 cup Caesar dressing",
      "1/2 cup parmesan cheese, shaved",
      "1 cup croutons",
      "2 anchovy fillets (optional)",
      "Lemon wedges",
      "Black pepper",
    ],
    instructions: [
      "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
      "Place lettuce in a large salad bowl.",
      "Add Caesar dressing and toss until evenly coated.",
      "Add croutons and half the parmesan cheese. Toss gently.",
      "Top with remaining parmesan shavings and anchovies if using.",
      "Serve immediately with lemon wedges and fresh black pepper.",
    ],
    nutrition: {
      calories: "320 kcal",
      protein: "12g",
      carbs: "18g",
      fat: "22g",
      fiber: "3g",
      sodium: "680mg",
    },
    tips: [
      "Use cold, crisp lettuce for best texture",
      "Make homemade croutons for better flavor",
      "Add grilled chicken for a complete meal",
      "Don't dress salad until ready to serve",
    ],
  },
  {
    name: "Pad Thai",
    description: "Popular Thai stir-fried noodles with shrimp and peanuts",
    image: "pad thai noodles with shrimp, thai street food, food photography",
    imgCover:
      "https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=800&auto=format&fit=crop",
    prepTime: "20 min",
    cookTime: "15 min",
    totalTime: 35,
    servings: "2 people",
    difficulty: "Intermediate",
    category: "Asian",
    ratingsAverage: 4.8,
    ratingsQuantity: 445,
    ingredients: [
      "200g rice noodles",
      "200g shrimp, peeled",
      "2 eggs",
      "3 tablespoons tamarind paste",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Bean sprouts",
      "Crushed peanuts",
      "Lime wedges and cilantro",
    ],
    instructions: [
      "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
      "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
      "Heat wok over high heat. Scramble eggs and set aside.",
      "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
      "Add scrambled eggs and bean sprouts. Toss everything together.",
      "Serve topped with crushed peanuts, lime wedges, and cilantro.",
    ],
    nutrition: {
      calories: "540 kcal",
      protein: "32g",
      carbs: "62g",
      fat: "16g",
      fiber: "4g",
      sodium: "1120mg",
    },
    tips: [
      "Don't oversoak noodles or they'll be mushy",
      "Cook on high heat for authentic wok flavor",
      "Balance sweet, sour, and salty flavors",
      "Prepare all ingredients before starting to cook",
    ],
  },
  {
    name: "French Onion Soup",
    description: "Rich beef broth with caramelized onions and melted cheese",
    image: "french onion soup with cheese, comfort food, food photography",
    imgCover:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 min",
    cookTime: "60 min",
    totalTime: 75,
    servings: "4 people",
    difficulty: "Intermediate",
    category: "Mediterranean",
    ratingsAverage: 4.7,
    ratingsQuantity: 267,
    ingredients: [
      "4 large onions, thinly sliced",
      "4 tablespoons butter",
      "1 liter beef broth",
      "1/2 cup white wine",
      "2 bay leaves",
      "Fresh thyme",
      "Baguette slices",
      "200g Gruyère cheese, grated",
    ],
    instructions: [
      "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
      "Add white wine and deglaze the pot, scraping up brown bits.",
      "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
      "Meanwhile, toast baguette slices until golden.",
      "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
      "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot.",
    ],
    nutrition: {
      calories: "380 kcal",
      protein: "18g",
      carbs: "36g",
      fat: "18g",
      fiber: "4g",
      sodium: "980mg",
    },
    tips: [
      "Patience is key - don't rush the onion caramelization",
      "Use good quality beef broth for best flavor",
      "Gruyère can be substituted with Swiss cheese",
      "Watch carefully when broiling to avoid burning",
    ],
  },
  {
    name: "Chicken Stir-Fry",
    description: "Quick and healthy stir-fry with colorful vegetables",
    image: "chicken stir fry with vegetables, asian cuisine, food photography",
    imgCover:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 min",
    cookTime: "15 min",
    totalTime: 30,
    servings: "4 people",
    difficulty: "Easy",
    category: "Asian",
    ratingsAverage: 4.5,
    ratingsQuantity: 324,
    ingredients: [
      "500g chicken breast, sliced",
      "2 bell peppers, sliced",
      "1 broccoli head, florets",
      "2 carrots, julienned",
      "3 tablespoons soy sauce",
      "2 tablespoons oyster sauce",
      "1 tablespoon sesame oil",
      "2 cloves garlic, minced",
      "Fresh ginger, grated",
    ],
    instructions: [
      "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
      "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
      "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
      "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
      "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
      "Serve immediately over steamed rice or noodles.",
    ],
    nutrition: {
      calories: "320 kcal",
      protein: "34g",
      carbs: "18g",
      fat: "12g",
      fiber: "5g",
      sodium: "840mg",
    },
    tips: [
      "Cut all ingredients before starting to cook",
      "Keep heat high for authentic stir-fry texture",
      "Don't overcrowd the wok or vegetables will steam",
      "Add cashews or peanuts for extra crunch",
    ],
  },
  {
    name: "Lasagna Bolognese",
    description: "Layered Italian pasta with rich meat sauce and béchamel",
    image: "lasagna bolognese layers, italian comfort food, food photography",
    imgCover:
      "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=800&auto=format&fit=crop",
    prepTime: "30 min",
    cookTime: "90 min",
    totalTime: 120,
    servings: "4 people",
    difficulty: "Intermediate",
    category: "Italian",
    ratingsAverage: 4.9,
    ratingsQuantity: 478,
    ingredients: [
      "12 lasagna sheets",
      "500g ground beef",
      "400g canned tomatoes",
      "1 onion, diced",
      "2 carrots, diced",
      "500ml béchamel sauce",
      "200g mozzarella, grated",
      "100g parmesan cheese",
      "Fresh basil",
    ],
    instructions: [
      "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
      "Cook lasagna sheets according to package directions. Drain and set aside.",
      "Preheat oven to 180°C (350°F).",
      "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
      "Top final layer with béchamel, mozzarella, and parmesan cheese.",
      "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving.",
    ],
    nutrition: {
      calories: "680 kcal",
      protein: "42g",
      carbs: "58g",
      fat: "28g",
      fiber: "6g",
      sodium: "920mg",
    },
    tips: [
      "Make bolognese sauce a day ahead for better flavor",
      "Don't skip the resting time after baking",
      "Use fresh pasta sheets for best texture",
      "Freeze leftovers in individual portions",
    ],
  },
  {
    name: "Shrimp Scampi",
    description: "Garlicky shrimp in white wine butter sauce",
    image: "shrimp scampi with pasta, seafood, food photography",
    imgCover:
      "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?q=80&w=800&auto=format&fit=crop",
    prepTime: "10 min",
    cookTime: "15 min",
    totalTime: 25,
    servings: "2 people",
    difficulty: "Easy",
    category: "Seafood",
    ratingsAverage: 4.8,
    ratingsQuantity: 356,
    ingredients: [
      "400g large shrimp, peeled",
      "300g linguine pasta",
      "6 cloves garlic, minced",
      "1/2 cup white wine",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley, chopped",
      "Lemon juice and zest",
      "Red pepper flakes",
    ],
    instructions: [
      "Cook linguine according to package directions. Reserve 1 cup pasta water.",
      "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
      "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
      "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
      "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
      "Garnish with parsley, lemon zest, and serve immediately.",
    ],
    nutrition: {
      calories: "520 kcal",
      protein: "36g",
      carbs: "54g",
      fat: "18g",
      fiber: "3g",
      sodium: "620mg",
    },
    tips: [
      "Don't overcook shrimp - they cook very quickly",
      "Use good quality white wine for best flavor",
      "Toss pasta in sauce for maximum flavor absorption",
      "Add extra lemon for bright, fresh taste",
    ],
  },
  {
    name: "Vegetable Curry",
    description: "Hearty vegetarian curry with coconut milk",
    image: "vegetable curry with rice, vegan food, food photography",
    imgCover:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop",
    prepTime: "20 min",
    cookTime: "30 min",
    totalTime: 50,
    servings: "4 people",
    difficulty: "Easy",
    category: "Asian",
    ratingsAverage: 4.6,
    ratingsQuantity: 289,
    ingredients: [
      "2 potatoes, cubed",
      "1 cauliflower, florets",
      "2 carrots, sliced",
      "1 can chickpeas",
      "400ml coconut milk",
      "3 tablespoons curry powder",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "Fresh spinach",
    ],
    instructions: [
      "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
      "Add potatoes and carrots, cook for 5 minutes.",
      "Pour in coconut milk and 1 cup water. Bring to simmer.",
      "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
      "Stir in fresh spinach and cook until wilted.",
      "Serve hot over basmati rice or with naan bread.",
    ],
    nutrition: {
      calories: "380 kcal",
      protein: "14g",
      carbs: "48g",
      fat: "16g",
      fiber: "12g",
      sodium: "480mg",
    },
    tips: [
      "Add vegetables in order of cooking time needed",
      "Adjust curry powder amount to taste",
      "Use full-fat coconut milk for creamier curry",
      "Add protein like tofu or paneer if desired",
    ],
  },
  {
    name: "BBQ Pulled Pork",
    description: "Slow-cooked tender pork in smoky barbecue sauce",
    image: "bbq pulled pork sandwich, american food, food photography",
    imgCover:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 min",
    cookTime: "240 min",
    totalTime: 255,
    servings: "4 people",
    difficulty: "Easy",
    category: "American",
    ratingsAverage: 4.7,
    ratingsQuantity: 412,
    ingredients: [
      "1kg pork shoulder",
      "1 cup BBQ sauce",
      "1/2 cup apple cider vinegar",
      "2 tablespoons brown sugar",
      "1 tablespoon paprika",
      "1 tablespoon garlic powder",
      "Burger buns",
      "Coleslaw for serving",
    ],
    instructions: [
      "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
      "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
      "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
      "Remove pork and shred with two forks. Discard excess fat.",
      "Return shredded pork to slow cooker, mix with BBQ sauce.",
      "Serve on toasted buns with coleslaw on top.",
    ],
    nutrition: {
      calories: "620 kcal",
      protein: "48g",
      carbs: "52g",
      fat: "22g",
      fiber: "3g",
      sodium: "1180mg",
    },
    tips: [
      "Use pork shoulder for best results - it stays moist",
      "Let pork rest before shredding for juicier meat",
      "Make your own BBQ sauce for better flavor",
      "Leftovers freeze well for up to 3 months",
    ],
  },
  {
    name: "Greek Moussaka",
    description: "Traditional layered eggplant casserole with lamb",
    image: "greek moussaka layers, mediterranean food, food photography",
    imgCover:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
    prepTime: "30 min",
    cookTime: "60 min",
    totalTime: 90,
    servings: "4 people",
    difficulty: "Intermediate",
    category: "Mediterranean",
    ratingsAverage: 4.8,
    ratingsQuantity: 234,
    ingredients: [
      "3 large eggplants, sliced",
      "500g ground lamb",
      "400g canned tomatoes",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "500ml béchamel sauce",
      "100g parmesan cheese",
      "Cinnamon and oregano",
      "Olive oil",
    ],
    instructions: [
      "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
      "Brush eggplant slices with olive oil, grill or bake until softened.",
      "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
      "Preheat oven to 180°C (350°F).",
      "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
      "Bake for 45 minutes until golden. Let rest 15 minutes before serving.",
    ],
    nutrition: {
      calories: "580 kcal",
      protein: "36g",
      carbs: "32g",
      fat: "32g",
      fiber: "8g",
      sodium: "820mg",
    },
    tips: [
      "Salt eggplant to remove bitterness",
      "Don't skip the resting time - it helps set the layers",
      "Use ground beef if lamb is unavailable",
      "Make ahead and reheat for easier serving",
    ],
  },
  {
    name: "Teriyaki Chicken Bowl",
    description: "Sweet and savory chicken over rice with vegetables",
    image: "teriyaki chicken rice bowl, japanese food, food photography",
    imgCover:
      "https://images.unsplash.com/photo-1546069901-eacef0df6022?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 min",
    cookTime: "20 min",
    totalTime: 35,
    servings: "2 people",
    difficulty: "Easy",
    category: "Asian",
    ratingsAverage: 4.7,
    ratingsQuantity: 367,
    ingredients: [
      "400g chicken thighs, sliced",
      "1/2 cup teriyaki sauce",
      "2 cups cooked rice",
      "1 broccoli head, florets",
      "1 carrot, julienned",
      "Sesame seeds",
      "Green onions, sliced",
      "1 tablespoon sesame oil",
    ],
    instructions: [
      "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
      "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
      "Meanwhile, steam broccoli and carrots until tender-crisp.",
      "Divide rice between bowls.",
      "Top with teriyaki chicken and steamed vegetables.",
      "Garnish with sesame seeds and green onions. Serve hot.",
    ],
    nutrition: {
      calories: "540 kcal",
      protein: "42g",
      carbs: "58g",
      fat: "14g",
      fiber: "4g",
      sodium: "1240mg",
    },
    tips: [
      "Use chicken thighs for juicier meat",
      "Make homemade teriyaki sauce for better flavor control",
      "Add edamame for extra protein",
      "Meal prep by cooking rice and chicken ahead",
    ],
  },
  {
    name: "Caprese Sandwich",
    description: "Fresh Italian sandwich with mozzarella, tomato, and basil",
    image: "caprese sandwich with pesto, italian sandwich, food photography",
    imgCover:
      "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=800&auto=format&fit=crop",
    prepTime: "10 min",
    cookTime: "5 min",
    totalTime: 15,
    servings: "2 people",
    difficulty: "Easy",
    category: "Italian",
    ratingsAverage: 4.5,
    ratingsQuantity: 189,
    ingredients: [
      "1 ciabatta bread",
      "200g fresh mozzarella, sliced",
      "2 large tomatoes, sliced",
      "Fresh basil leaves",
      "3 tablespoons pesto",
      "2 tablespoons balsamic glaze",
      "Olive oil",
      "Salt and pepper",
    ],
    instructions: [
      "Slice ciabatta bread in half horizontally.",
      "Toast bread lightly until just crispy.",
      "Spread pesto on both sides of bread.",
      "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
      "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
      "Close sandwich, cut in half, and serve immediately.",
    ],
    nutrition: {
      calories: "480 kcal",
      protein: "22g",
      carbs: "48g",
      fat: "22g",
      fiber: "3g",
      sodium: "680mg",
    },
    tips: [
      "Use ripe, in-season tomatoes for best flavor",
      "Buffalo mozzarella is traditional but harder to slice",
      "Toast bread lightly - not too crispy",
      "Add prosciutto or salami for a heartier sandwich",
    ],
  },
];

let randomNumber;
let contentWrapper = document.getElementById("contentWrapper");
function prepareMeal() {
  const randomBtn = document.getElementById("randomBtn");

  randomNumber = Math.floor(Math.random() * meals.length);
  let currentMeal = meals[randomNumber];
  let warningHTML = "";
  const cookTimeNumber = parseInt(currentMeal.cookTime);

  if (cookTimeNumber > 30) {
    warningHTML = `
<div class="warning-message d-flex">
              <div class="icon-warning mt-2">
                <svg
                  class="svg-inline--fa fa-triangle-exclamation"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="triangle-exclamation"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="#FB2C36"
                    d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                  ></path>
                </svg>
              </div>
              <div class="text-warning">
                <p class="mb-0">Extended Preparation Time</p>
                <p class="mb-0">
                  This recipe requires more than 45 minutes to prepare. Plan
                  accordingly!
                </p>
              </div>
            </div>

  `;
  }

  let ingrediants = currentMeal.ingredients;
  let ingrediantsHtml = ``;
  for (let i = 0; i < ingrediants.length; i++) {
    ingrediantsHtml += `
                      <li><span>${i + 1}</span>
                      ${ingrediants[i]}
                      </li>

`;
  }

  let instructions = currentMeal.instructions;
  let instructionsHtml = ``;
  for (let i = 0; i < instructions.length; i++) {
    instructionsHtml += `

                                            <li>
                        <span>${i + 1}</span> 
                                              ${instructions[i]}

                      </li>

`;
  }

  let nutrition = currentMeal.nutrition;
  let nutritionHtml = `
    <div
                      class="line first-row mb-2 d-flex flex-column flex-md-row justify-content-between align-items-center"
                    >
                      <div
                        class="box-wrapper d-flex justify-content-between align-items-center"
                      >
                        <div class="d-flex align-items-center">
                          <div
                            class="icon-wrapper d-flex justify-content-center align-items-center"
                            style="background-color: #ffedd4"
                          >
                            <svg
                              class="svg-inline--fa fa-fire"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="fire"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              data-fa-i2svg=""
                            >
                              <path
                                fill="#F54900"
                                d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"
                              ></path>
                            </svg>
                          </div>
                          <span>Calories</span>
                        </div>
                        <div>
                          <p class="mb-0">${nutrition.calories}</p>
                        </div>
                      </div>

                      <div
                        class="box-wrapper d-flex justify-content-between align-items-center"
                      >
                        <div class="d-flex align-items-center">
                          <div
                            class="icon-wrapper d-flex justify-content-center align-items-center"
                            style="background-color: #dbeafe"
                          >
                            <svg
                              class="svg-inline--fa fa-dumbbell"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="dumbbell"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 512"
                              data-fa-i2svg=""
                            >
                              <path
                                fill="#155DFC"
                                d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"
                              ></path>
                            </svg>
                          </div>
                          <span>Protein</span>
                        </div>
                        <div>
                          <p class="mb-0">${nutrition.protein}</p>
                        </div>
                      </div>
                    </div>

                    <div
                      class="line first-row mb-2 d-flex flex-column flex-md-row justify-content-between align-items-center"
                    >
                      <div
                        class="box-wrapper d-flex justify-content-between align-items-center"
                      >
                        <div class="d-flex align-items-center">
                          <div
                            class="icon-wrapper d-flex justify-content-center align-items-center"
                            style="background-color: #fef9c2"
                          >
                            <svg
                              class="svg-inline--fa fa-wheat-awn"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="wheat-awn"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-fa-i2svg=""
                            >
                              <path
                                fill="##D08700"
                                d="M505 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L383 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l88-88zM305.5 27.3c-6.2-6.2-16.4-6.2-22.6 0L271.5 38.6c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4-30.5 30.5c-3.4-27.3-15.5-53.8-36.5-74.8l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4-30.5 30.5c-3.4-27.3-15.5-53.8-36.5-74.8L101.8 231c-6.2-6.2-16.4-6.2-22.6 0L67.9 242.3c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4L9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l68.9-68.9 12.2 12.2c37.5 37.5 98.3 37.5 135.8 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-21.8-21.8-49.6-34.1-78.1-36.9l31.9-31.9 12.2 12.2c37.5 37.5 98.3 37.5 135.8 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-21.8-21.8-49.6-34.1-78.1-36.9l31.9-31.9 12.2 12.2c37.5 37.5 98.3 37.5 135.8 0L486.5 231c6.2-6.2 6.2-16.4 0-22.6L475.2 197c-5.2-5.2-10.6-9.8-16.4-13.9L505 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-59.4 59.4c-20.6-4.4-42-3.7-62.3 2.1c6.1-21.3 6.6-43.8 1.4-65.3L409 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L329.1 52.9c-3.7-5-7.8-9.8-12.4-14.3L305.5 27.3z"
                              ></path>
                            </svg>
                          </div>
                          <span>Carbohydrates</span>
                        </div>
                        <div>
                          <p class="mb-0">${nutrition.carbs}</p>
                        </div>
                      </div>

                      <div
                        class="box-wrapper d-flex justify-content-between align-items-center"
                      >
                        <div class="d-flex align-items-center">
                          <div
                            class="icon-wrapper d-flex justify-content-center align-items-center"
                            style="background-color: #ffe2e2"
                          >
                            <svg
                              class="svg-inline--fa fa-droplet"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="droplet"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                              data-fa-i2svg=""
                            >
                              <path
                                fill="#E7000B"
                                d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"
                              ></path>
                            </svg>
                          </div>
                          <span>Fat</span>
                        </div>
                        <div>
                          <p class="mb-0">${nutrition.fat}</p>
                        </div>
                      </div>
                    </div>

                    <div
                      class="line first-row mb-2 d-flex flex-column flex-md-row justify-content-between align-items-center"
                    >
                      <div
                        class="box-wrapper d-flex justify-content-between align-items-center"
                      >
                        <div class="d-flex align-items-center">
                          <div
                            class="icon-wrapper d-flex justify-content-center align-items-center"
                            style="background-color: #dbfce7"
                          >
                            <svg
                              class="svg-inline--fa fa-seedling"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="seedling"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-fa-i2svg=""
                            >
                              <path
                                fill="#00A63E"
                                d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z"
                              ></path>
                            </svg>
                          </div>
                          <span>Fiber</span>
                        </div>
                        <div>
                          <p class="mb-0">${nutrition.fiber}</p>
                        </div>
                      </div>

                      <div
                        class="box-wrapper d-flex justify-content-between align-items-center"
                      >
                        <div class="d-flex align-items-center">
                          <div
                            class="icon-wrapper d-flex justify-content-center align-items-center"
                            style="background-color: #fce7f3"
                          >
                            <svg
                              class="svg-inline--fa fa-cube"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="cube"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-fa-i2svg=""
                            >
                              <path
                                fill="#E60076"
                                d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z"
                              ></path>
                            </svg>
                          </div>
                          <span>${nutrition.sodium}</span>
                        </div>
                        <div>
                          <p class="mb-0">680mg</p>
                        </div>
                      </div>
                    </div>
`;

  let tips = currentMeal.tips;
  let tipsHtml = ``;
  for (let i = 0; i < tips.length; i++) {
    tipsHtml += `
                      <li>
                        <svg
                          class="svg-inline--fa fa-circle-check"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="circle-check"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="#E17100"
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                          ></path>
                        </svg>
                                              ${tips[i]}

                      </li>

`;
  }

  contentWrapper.innerHTML = `
            <div class="img-wrapper position-relative" id="imgWrapper">
            <div
              class="reviews rounded-pill bg-white position-absolute d-flex align-items-center justify-content-center"
            >
              <svg
                class="svg-inline--fa fa-star"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                data-fa-i2svg=""
              >
                <path
                  fill="#FDC700"
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                ></path>
              </svg>
              <span class="dark-span" id="rate">${currentMeal.ratingsAverage}</span>
              <span class="grey-span" id="numberOfReviews">(${currentMeal.ratingsQuantity} reviews) </span>
            </div>
            <img src="${currentMeal.imgCover}" alt="${currentMeal.image}"/>
            <div
              class="time rounded-4 bg-white position-absolute d-flex justify-content-around align-items-center"
              id="time"
            >
              <div
                class="prep-time d-flex flex-column align-items-center justify-content-between"
              >
                <svg
                  class="svg-inline--fa fa-clock"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="clock"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="#FF6900"
                    d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                  ></path>
                </svg>
                <div class="grey-span">Prep Time</div>
                <p id="perpTime" class="dark-span me-0 mb-0">${currentMeal.prepTime}</p>
              </div>

              <div
                class="prep-time d-flex flex-column align-items-center justify-content-between"
              >
                <svg
                  class="svg-inline--fa fa-fire-burner"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="fire-burner"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="#FB2C36"
                    d="M293.5 3.8c19.7 17.8 38.2 37 55.5 57.7c7.9-9.9 16.8-20.7 26.5-29.5c5.6-5.1 14.4-5.1 20 0c24.7 22.7 45.6 52.7 60.4 81.1c14.5 28 24.2 58.8 24.2 79C480 280 408.7 352 320 352c-89.7 0-160-72.1-160-159.8c0-26.4 12.7-60.7 32.4-92.6c20-32.4 48.1-66.1 81.4-95.8c2.8-2.5 6.4-3.8 10-3.7c3.5 0 7 1.3 9.8 3.8zM370 273c30-21 38-63 20-96c-2-4-4-8-7-12l-36 42s-58-74-62-79c-30 37-45 58-45 82c0 49 36 78 81 78c18 0 34-5 49-15zM32 288c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32s-14.3 32-32 32v64H544V320c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32v96c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32V288zM320 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm160-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM192 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                  ></path>
                </svg>
                <div class="grey-span">Cook Time</div>
                <p id="cookTime" class="dark-span me-0 mb-0">${currentMeal.cookTime}</p>
              </div>

              <div
                class="prep-time d-flex flex-column align-items-center justify-content-between"
              >
                <svg
                  class="svg-inline--fa fa-users"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="users"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="#2B7FFF"
                    d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"
                  ></path>
                </svg>
                <div class="grey-span">Servings</div>
                <p id="people" class="dark-span me-0 mb-0">${currentMeal.servings}</p>
              </div>
            </div>
          </div>

          <div class="text-wrapper bg-white">
            <div class="level-coutry-wrapper">
              <span class="rounded-pill">${currentMeal.difficulty}</span>
              <span class="rounded-pill">${currentMeal.category}</span>
            </div>
            <div class="heading-card d-flex flex-column-reverse flex-md-row gap-5 justify-content-between">
              <div class="title">
                <h1>${currentMeal.name}</h1>
                <p>
${currentMeal.description}                </p>
              </div>
              <div class="save-share-wrapper d-flex justify-content-end">
                <div class="d-flex justify-content-center align-items-center">
                  <svg
                    class="svg-inline--fa fa-bookmark"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="bookmark"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="#F54900"
                      d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
                    ></path>
                  </svg>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                  <svg
                    class="svg-inline--fa fa-share-nodes"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="share-nodes"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="#F54900"
                      d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

              <div>
    ${warningHTML}
  </div>
            <div class="tabs-wrapper">
              <ul class="nav nav-tabs justify-content-between">
                <li class="nav-item">
                  <button
                    class="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#ingredients"
                  >
                    <svg
                      class="svg-inline--fa fa-list-check"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="list-check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                      ></path>
                    </svg>
                    Ingredients
                  </button>
                </li>

                <li class="nav-item">
                  <button
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#instructions"
                  >
                    <svg
                      class="svg-inline--fa fa-book-open"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="book-open"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      data-fa-i2svg=""
                    >
                      <path
                        d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"
                      ></path>
                    </svg>
                    Instructions
                  </button>
                </li>

                <li class="nav-item">
                  <button
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#nutrition"
                  >
                    <svg
                      class="svg-inline--fa fa-chart-pie"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="chart-pie"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      data-fa-i2svg=""
                    >
                      <path
                        d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z"
                      ></path>
                    </svg>
                    Nutrition
                  </button>
                </li>

                <li class="nav-item">
                  <button
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#chef"
                  >
                    <svg
                      class="svg-inline--fa fa-lightbulb"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="lightbulb"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      data-fa-i2svg=""
                    >
                      <path
                        d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"
                      ></path>
                    </svg>
                    Chef's Tips
                  </button>
                </li>
              </ul>

              <div class="tab-content">
                <div class="tab-pane fade show active" id="ingredients">
                  <div class="ingrediants-wrapper">
                    <ul>
                      ${ingrediantsHtml}
                    </ul>
                  </div>
                </div>

                <div class="tab-pane fade" id="instructions">
                  <div class="instructions-wrapper">
                    <ul>
                    ${instructionsHtml}
                    </ul>
                  </div>
                </div>

                <div class="tab-pane fade" id="nutrition">
                  <div class="nutrition-wrapper">
                    ${nutritionHtml}
                  </div>
                </div>

                <div class="tab-pane fade" id="chef">
                  <div class="chef-wrapper">
                    <ul>
                      ${tipsHtml}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="btn-wrapper">
              <button
                id="randomBtn"
                class="btn d-flex justify-content-center align-items-center"
              >
                <svg
                  class="svg-inline--fa fa-rotate"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="rotate"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="white"
                    d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"
                  ></path>
                </svg>
                Try Another Recipe
              </button>
            </div>
          </div>
  `;
}

window.addEventListener("load", prepareMeal());

document.addEventListener("click", function (e) {
  if (e.target.closest("#randomBtn")) {
    prepareMeal();
  }
});
