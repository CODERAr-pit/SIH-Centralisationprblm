# SIH-Centralisationprblm
 # Centralized Department Query Management System (SIH 2025)

This project is developed as a solution for the **Smart India Hackathon (SIH)** problem focused on **centralized query handling** across various departments. The system allows users to submit queries, which are then routed to the respective department admins for resolution.
## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Environment Management:** dotenv
- **Version Control:** Git & GitHub

## 🎯 Problem Statement

In large organizations or government bodies, user queries are handled by multiple departments independently. There is no centralized system to manage, track, or route these queries effectively.

This project solves the problem by:
- Centralizing all queries in one platform.
- Assigning queries to respective departments based on user input.
- Allowing admins from each department to manage only their relevant queries.

---

## 👨‍💻 How It Works

### 1. **User Query Submission**
- Users submit a query form including the department it relates to.
- The query is stored in a central MongoDB database (`queryDB`).

### 2. **Admin Panel**
- Admins log in using their credentials.
- Each admin is mapped to a specific `departmentId`.
- Upon login, they can view only the queries assigned to their department.

### 3. **Separate Databases (Optional)**
- You can configure different MongoDB connections for:
  - `UserDB`: handles user details
  - `QueryDB`: handles all department queries
- This design supports better scaling and separation of concerns.

---

## 🔒 Authentication & Security

- Admin login is handled securely using `username`, `password`, and `departmentId`.
- Passwords are stored safely (hashing recommended).
- Environment variables (`.env`) are used to protect sensitive config.

---

## 📁 Folder Structure (Sample)
  SIH PRACTICE/
├── admin/
│   └── admin.js                  # Admin login and functionality
│
├── public/                       # Main logic and schemas
│   ├── connection.js             # MongoDB database connection
│   ├── mailer.js                 # Email utilities
│   ├── queryschema.js            # Mongoose schema for queries
│   ├── userschema.js             # Mongoose schema for users
│   └── user.js                   # User API routes / logic
│
├── node_modules/                 # Installed npm packages
│
├── .env                          # Environment variables (not pushed to Git)
├── .gitignore                    # Git ignore rules
├── app.js                        # Main server file (Express setup)
├── env.txt                       # Sample environment config (for reference)
├── package.json                  # Project metadata and dependencies
├── package-lock.json             # Exact versions of installed packages
├── README.md                     # Project description and instructions
└── workflow.txt                  # Notes or plan for project flow



## 🚀 Future Improvements
- JWT-based authentication
- Query status update notifications
- Search and filters for queries
- Admin dashboard with analytics
- Frontend UI (React or similar)

---

## 🤝 Contributors

- **Arpit Kumar Jha** – Backend Developer, CSE NIT Durgapur
## 📌 Note

This is a backend-focused solution. Frontend integration and deployment can be added in later stages.



