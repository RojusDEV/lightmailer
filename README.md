# 📧 LightMailer

**LightMailer** is a lightweight, scalable, and reliable email delivery platform built with modern web technologies. It provides a simple API for sending emails, queues requests for reliability, and integrates with cloud infrastructure for seamless performance.

---

## 🚀 Features

### 🔧 Backend

- **Email Send API** – Secure endpoint to accept email sending requests.
- **Queue System** – Ensures reliable and fault-tolerant email processing.
- **SMTP Delivery Engine** – Uses third-party SMTP providers (e.g., Amazon SES).
- **Rate Limiting & Spam Protection** – Protects with Redis-backed rate limiting.

### 💻 Frontend & Services

- **Frontend**: [Next.js](https://nextjs.org/) with [Tailwind CSS](https://tailwindcss.com/) for fast, responsive UI.
- **Authentication**: Secured with [Auth0](https://auth0.com/).
- **Backend Runtime**: Node.js.
- **Database**: PostgreSQL (AWS-hosted).
- **Rate Limiting**: Powered by Redis for high performance.

### ☁️ Hosting & Infrastructure

- Hosted on **AWS EC2** (virtual server instance).
- Integrated with **Amazon SES** for reliable and cost-effective email delivery.

---

## 📦 Tech Stack

| Layer        | Tech                  |
| ------------ | --------------------- |
| Frontend     | Next.js, Tailwind CSS |
| Backend      | Node.js, Express      |
| Auth         | Auth0                 |
| Queue        | Redis                 |
| Database     | PostgreSQL (AWS RDS)  |
| Email Engine | Amazon SES (SMTP)     |
| Hosting      | AWS EC2               |

---

## 🛠 Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/lightmailer.git
   cd lightmailer
   ```
