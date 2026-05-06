# 🍽️ What Is For Dinner?
## 🚀 Live Demo : https://what-is-for-dinne.netlify.app/
A simple and interactive web app that helps you decide what to cook for dinner by suggesting random meals with useful details like cooking time and warnings.
---

## 📌 Features

* 🎲 Random meal generator
* ⏱️ Displays cooking time
* ⚠️ Shows warning for long cooking meals
* 📱 Responsive design
* 🔄 Generate a new meal on page load and button click

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* bootstrap
* JavaScript (Vanilla JS)

---

## 📂 Project Structure

```
📁 project-root
│── index.html
│── style.css
│── base.css
│── queries.css
│── variables.css
│── script.js
│── assets/
```

---

## ⚙️ How It Works

* When the page loads, a random meal is selected from an array.
* A new meal is generated when clicking the button.
* Each meal contains:

  * Name
  * Cooking time
* If cooking time is more than 30 minutes:

  * A warning message appears.

---

## 💡 Example Code

```javascript
let randomNumber = Math.floor(Math.random() * meals.length);
let currentMeal = meals[randomNumber];

if (parseInt(currentMeal.cookTime) > 30) {
  // Show warning message
}
```


This project is open-source and available under the MIT License.
