# 🚀 Dockerized Frontend Application

A simple **HTML, CSS, JavaScript** frontend application containerized using **Docker** and served with **Nginx**.

---

## 📌 Project Overview

This project demonstrates how to package a static frontend application into a Docker container and serve it efficiently using a lightweight web server.

It ensures:

* Consistent environment across systems
* Easy deployment
* Scalable and production-ready setup

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript
* Docker
* Nginx

---

## 📁 Project Structure

```
project-root/
│── index.html
│── style.css
│── script.js
│── Dockerfile
│── .dockerignore
```

---

## 🐳 Docker Setup

### 1️⃣ Build the Docker Image

```
docker build -t my-frontend .
```

### 2️⃣ Run the Container

```
docker run -p 3000:80 my-frontend
```

---

## 🌐 Access the Application

Open your browser and go to:

```
http://localhost:3000
```

---

## ⚙️ How It Works

* Docker pulls a lightweight **Nginx** image
* Removes default server files
* Copies your frontend code into the container
* Nginx serves the application on port 80

---

## 💡 Key Learning Outcomes

* Understanding Docker basics
* Containerizing static frontend applications
* Using Nginx as a web server
* Creating portable and deployable apps

---

## 🚀 Future Improvements

* Add backend integration (Node.js / API)
* Deploy on cloud platforms (Azure / AWS)
* Set up CI/CD pipeline using GitHub Actions

---

## 👨‍💻 Author

Vivek Biradar

---

## ⭐ Acknowledgment

This project is created as part of learning **Docker and frontend deployment**.
