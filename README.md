# Library Backend

Node.js + Express backend for a library management system, currently focused on user registration with email OTP verification.

## Features

- Express REST API with versioned route prefix
- MongoDB integration using Mongoose
- User registration endpoint
- Password hashing with bcrypt
- Email verification code generation and delivery
- CORS and cookie parsing support
- Central async error handling middleware

## Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- bcrypt
- Nodemailer
- dotenv
- CORS

## Project Structure

```text
Library_backend/
	app.js
	server.js
	package.json
	config/
		config.env
	controllers/
		authController.js
	routes/
		authRouter.js
	models/
		userModel.js
	database/
		database.js
	middlewares/
		catchAsyncErrors.js
		errorMiddlewares.js
	utils/
		emailTemplates.js
		sendEmail.js
		sendVerificationCode.js
```

## API Base Path

All auth routes are mounted under:

`/api/v1/auth`

### Available Endpoint

#### Register User

- Method: `POST`
- URL: `/api/v1/auth/register`
- Body:

```json
{
	"name": "John Doe",
	"email": "john@example.com",
	"password": "password123"
}
```

- Validation rules:
	- `name`, `email`, and `password` are required
	- password length must be between 8 and 15 characters
	- limits repeated unverified registration attempts

- Success response:

```json
{
	"success": true,
	"message": "Verification code sent successfully."
}
```

## Environment Variables

Create a `config/config.env` file with the following keys:

```env
PORT=3500
FRONTEND_URL=http://localhost:5173
MONGODB_URI=your_mongodb_connection_string
SMTP_HOST=smtp.gmail.com
SMTP_SERVICE=gmail
SMTP_PORT=465
SMTP_MAIL=your_email@gmail.com
SMTP_PASSWORD=your_app_password
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/supritR21/Library_backend.git
cd Library_backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment

Add your environment values in `config/config.env`.

### 4. Run the server

Production mode:

```bash
npm start
```

Development mode:

```bash
npm run dev
```

Server runs on the port set in `PORT`.

## Scripts

- `npm start` - Start server with Node
- `npm run dev` - Start server with Nodemon

## Data Model (User)

Main fields in `User` schema:

- `name`
- `email`
- `password` (hashed, select false)
- `role` (`User` or `Admin`)
- `accountVerified`
- `borrowedBooks[]`
- `avatar` metadata
- `verificationCode` and expiry
- reset password token fields

## Notes

- Email OTP is valid for 15 minutes.
- Registration currently sends verification code via configured SMTP credentials.
- Keep `config/config.env` and all secrets out of public repositories.

## Author

Suprit Raj
