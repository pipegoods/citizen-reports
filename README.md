# Citizen Reports — Portal de Atención Ciudadana

This repository serves as the **landing page and general documentation** for the **Citizen Reports** project.

---

## 🚀 Project Repositories

The complete project is divided into **two independent repositories** that together form an integrated system:

* **Frontend:** — [Citizen Reports Frontend](https://github.com/katy-paola/citizen-reports-frontend)
* **Backend:** — [Citizen Reports Backend](https://github.com/katy-paola/citizen-reports-backend)

---

## 📌 Project Overview

**Citizen Attention Portal**
Technical assessment for **Pipegoods Labs**

This project corresponds to an **MVP** that allows a public administration to **centralize, visualize, and manage citizen reports digitally**.

The main objective of this challenge was to evaluate:

* Mastery of modern frontend technologies
* Proper separation between **UI and data logic**
* Consumption of a real API
* Correct state management patterns
* Form validation using `react-hook-form` with `zod` and `@hookform/resolvers`
* Efficient data fetching and caching using React Query / TanStack Query

---

## 🚨 Problem Statement

Traditional citizen attention processes are usually handled through:

* In-person assistance
* Paper-based forms
* Scattered messages across messaging platforms

This results in:

* Lack of traceability
* Delayed responses
* Disorganized data
* No management metrics

This MVP aims to solve these limitations through a **minimal yet functional web system**.

---

## 🎯 Challenge Goal

Build a system composed of:

* A **React frontend (v19.2.0)** consuming data using **TanStack Query v5**
* Form validation using **react-hook-form** and **zod**
* A **custom API** to expose and persist citizen reports

---

## 🧩 Tech Stack

### Frontend

* React v19.2.0
* TanStack Query v5
* Axios
* Vite
* React Router v7
* react-hook-form + zod for form validation
* Custom CSS

### Backend

* Node.js
* NestJS
* Prisma
* PostgreSQL (Supabase)
* Session-based authentication using **httpOnly cookies** and **JWT**

---

## 📦 Data Model — Report

Each citizen report contains at least the following fields:

```ts
{
  id: string;
  title: string;
  description: string;
  status: 'pendiente' | 'en proceso' | 'resuelto';
  createdAt: string;
}
```

---

## 🌐 Consumed API

The frontend consumes a REST API with at least the following endpoints:

* `GET /api/reports` — Fetch reports (with pagination)
* `POST /api/reports` — Create a new report
* `PATCH /api/reports/:id` — Update report status (admin only)
* `POST /api/auth/login` - Admin user only
* `POST /api/auth/logout` - Admin user only
* `GET /api/auth/session` - Admin user only

---

## ▶️ Running the Full Project Locally

To run the complete project locally, you must clone and run both repositories independently, following their specific instructions.

### Clone and run the Backend

```bash
git clone https://github.com/katy-paola/citizen-reports-backend
cd citizen-reports-backend
npm install
npm run dev
```

### Clone and run the Frontend

```bash
git clone https://github.com/katy-paola/citizen-reports-frontend
cd citizen-reports-frontend
npm install
npm run dev
```

---

## 🚀 Deployment & Features

For specific details about implemented features, technical decisions, or future improvements, please refer to the README of each repository:

* Frontend details
* Backend details

---

## 🏁 Conclusion

This project represents a **functional MVP**, focused on modern development best practices using **React**, **NestJS**, **TanStack Query**, and **secure session-based authentication**.
