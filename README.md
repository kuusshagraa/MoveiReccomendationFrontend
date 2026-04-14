# React + Vite

# 🎬 Movie Recommendation System – Frontend

A modern React-based frontend for a Movie Recommendation System that suggests similar movies based on user input using machine learning.

---

## 🚀 Features

* 🔍 Search for any movie
* 🎯 Get top 5 similar movie recommendations
* ⚡ Fast API integration with Django backend
* 🎨 Clean and responsive UI
* 📡 Real-time recommendations

---

## 🧠 How It Works

1. User enters a movie name
2. Frontend sends request to backend API
3. Backend processes using:

   * TF-IDF Vectorization
   * Cosine Similarity
4. Recommended movies are returned and displayed

---

## 🛠️ Tech Stack

* **React.js**
* **JavaScript (ES6+)**
* **HTML5 & CSS3**
* **Axios / Fetch API**

---

## 📁 Project Structure

```
frontend/
│
├── src/
│   ├── components/
│   │   ├── SearchBar.js
│   │   ├── MovieCard.js
│   │   └── Recommendations.js
│   │
│   ├── App.js
│   ├── index.js
│
├── public/
├── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/movie-recommender.git
cd movie-recommender/frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

---

## 🔌 Backend API

Make sure the Django backend is running:

```
http://127.0.0.1:8000/recommend/?movie=MovieName
```

---




## 🎨 UI Preview

* Search bar for movie input
* Recommendation cards with movie titles
* Responsive layout

---

## ⚠️ Notes

* Movie names must match dataset entries
* Backend must be running before using frontend
* CORS should be enabled in Django

---

## 🔥 Future Improvements

* 🎬 Movie posters (TMDB API)
* ⭐ Ratings and reviews
* 👤 User login & personalization
* 📈 Trending movies section

---

## 🤝 Contributing

Feel free to fork this repository and submit pull requests.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 💡 Author

Built by *Kushagra*
