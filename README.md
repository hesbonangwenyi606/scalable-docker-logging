<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
=======
# scalable-docker-logging
>>>>>>> 96a94262b46963d4afb34519f95323a9f4722c37

# Scalable Docker Logging Microservices Platform

A scalable microservices architecture platform with API Gateway, service discovery, and distributed logging, built using **Node.js**, **Docker**, **Kong**, **MongoDB**, and the **ELK Stack**. This project demonstrates a modern, containerized microservices system with monitoring, logging, and real-time metrics.

---

## Features

- **API Gateway**: Kong-powered request routing, authentication, and rate limiting.
- **User Service**: Manage user profiles, registration, and authentication.
- **Auth Service**: JWT-based authentication and authorization.
- **Payment Service**: Transaction processing and billing operations.
- **Containerized**: Dockerized services with isolated containers for each microservice.
- **Distributed Logging**: Centralized logs using the ELK Stack (Elasticsearch, Logstash, Kibana).
- **Metrics Dashboard**: Real-time monitoring for services’ performance and health.
- **Service Discovery**: Enables scalable deployment and dynamic routing between services.

---

## Demo

- **Live Demo:** [Click here](http://localhost:8000) *(replace with hosted URL for production)*
- **Documentation:** [Click here](https://github.com/hesbonangwenyi606/scalable-docker-logging#readme)

---

## Architecture

The system is structured with microservices communicating via REST APIs through an API Gateway. Each service is containerized, making it scalable and easy to deploy.

**Services Included:**
- API Gateway
- User Service
- Auth Service
- Payment Service
- Database: MongoDB
- Cache: Redis

**Logging & Monitoring:**
- Centralized logging using ELK Stack
- Metrics dashboard with request count, latency, and uptime

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Cache**: Redis
- **Containerization**: Docker, Docker Compose
- **API Gateway**: Kong
- **Logging**: ELK Stack (Elasticsearch, Logstash, Kibana)
- **Frontend**: React + TypeScript + Tailwind CSS

---

## Getting Started

### Prerequisites

- Node.js >= 18
- Docker & Docker Compose
- Git

### Installation

```bash
git clone https://github.com/hesbonangwenyi606/scalable-docker-logging.git
cd scalable-docker-logging
npm install

## Running Services

Start Docker containers:

docker-compose up -d


## Start Frontend:

npm run dev

## Visit the frontend at http://localhost:5173 (Vite default port).

Project Structure
/src
  /components      # React components for dashboard, logs, architecture
  /services        # API services
AppLayout.tsx     # Main app layout with hero section and navigation
index.tsx        # Entry point
Dockerfile       # Container setup for frontend
docker-compose.yml # Compose file for backend services and dependencies

## Contribution

Contributions are welcome! Feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License
