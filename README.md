---------PROJECT NAME----------

Work Admin Dashboard


--------DESCRIPTION------------


This project simulates an admin dashboard where users can:

- Log in with credentials
- View a list of users
- Add new users
- Edit or delete existing users
- Navigate between pages using a navbar
- Secure routes with authentication logic

The data is persisted using **localStorage**, so user information stays intact after refresh.



-----------FEATURES------------


- Mock Login System (`admin` / `admin`)
- Dashboard Table with CRUD (Create, Read, Update, Delete)
- Add New User form with validation
- Logout functionality
- Protected Routes (no access without login)
- Aesthetic UI with CSS styling and hover effects
- Data persistence using `localStorage`
- Responsive Design (scrollable tables on small screens)



----------FOLDER STRUCTURE------------


admin-dashboard/
├── public/
│   └── vite.svg                 # Vite default icon (optional)
├── src/
│   ├── assets/                  # Static assets (images, logos, etc.)
│   ├── components/              # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Table.jsx
│   │   └── Navbar.css                  
│   ├── data/
│   │   └── mockData.json        # Static JSON data for initial user list
│   ├── pages/                   # Page views for routes
│   │   ├── Dashboard.jsx
│   │   ├── Form.jsx
│   │   └── Login.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx        # All React Router configuration
│   ├── styles/                  # Modular CSS files
│   │   ├── App.css
│   │   ├── Dashboard.css
│   │   ├── Form.css
│   │   ├── Login.css
│   │   ├── Table.css
│   │   
│   ├── App.jsx                  # Root component
│   └── main.jsx                 # ReactDOM entry point
├── .gitignore
├── index.html                   # Vite entry point HTML
├── package.json
├── README.md                    # Your project documentation
└── vite.config.js               # Vite config


  


----------DEVELOPMENT PROCESS-----------


1. Setup
   - Initialize the project using Vite + React
   - Install necessary packages: `react-router-dom`

2. Authentication
   - Create a `Login` page with mock credentials
   - Store authentication status in `localStorage`

3. Routing
   - Use `react-router-dom` to create protected routes
   - Redirect users based on login state

4. Dashboard
   - Display user data from `mockData.json`
   - Store users in `localStorage` for persistence
   - Build a reusable `Table` component

5. CRUD Operations
   - Add "Edit" and "Delete" buttons to the table
   - Use JavaScript prompts for editing
   - Create a form page for adding new users

6. Styling
   - Add CSS files per component (Login, Dashboard, Form, Table)
   - Use gradients, button colors, hover effects for better UX

7. Logout
   - Add a logout button in the navbar
   - Clear `localStorage` and reset the app state
  


-----------TECHNOLOGIES USED-----------

| Tool / Library     | Purpose                             |
|--------------------|--------------------------------------|
| React              | UI framework                        |
| Vite               | Fast dev server and build tool      |
| React Router DOM   | Routing and route protection        |
| JavaScript (ES6+)  | Application logic                   |
| CSS                | Styling and layout                  |
| localStorage       | Client-side data persistence        |
| HTML               | App container (via Vite)            |




------------DEPLOYMENT LINK------------

Access project here https://admin-dashboard-lake-alpha-89.vercel.app/



