# subscription-management-system-back-end

Node.js, JWT Authentication, MongoDB, Mongoose, Arcjet, Upstash

## INSTALLATION

```bash
npm install
```

## ENVIRONMENT VARIABLES

```bash
# Create a .env.<development/production>.local file
PORT
NODE_ENV
SERVER_URL

# DATABASE
DB_URI

# JWT
JWT_SECRET
JWT_EXPIRES_IN

# ARCJET
ARCJET_KEY
ARCJET_ENV

# UPSTASH
QSTASH_URL
QSTASH_TOKEN

# NODEMAILER
EMAIL_PASSWORD =
EMAIL_USERNAME =
```

## API RUN

```bash
npm run dev
```

## API ENDPOINTS

```bash
# AUTH
POST /api/v1/auth/sign-up
POST /api/v1/auth/sign-in
POST /api/v1/auth/sign-out

# USER
GET /api/v1/users
GET /api/v1/users/:id

# SUBSCRIPTION
GET /api/v1/subscriptions
GET /api/v1/subscriptions/:id
POST /api/v1/subscriptions
PUT /api/v1/subscriptions/:id
DELETE /api/v1/subscriptions/:id
GET /api/v1/subscriptions/user/:id
PUT /api/v1/subscriptions/:id/cancel
GET /api/v1/subscriptions/upcoming-renewals

# WORKFLOW
POST /api/v1/workflows/subscription/reminder
```
