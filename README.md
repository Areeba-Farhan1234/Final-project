# Job Board Platform

This is a comprehensive Job Board Platform built using React and Vite, with routes managed by `react-router-dom`. The application includes features for both job seekers and employers, offering authentication, role-based access control, and distinct dashboards for each user type.

## Project Structure

- `App.jsx`: The main entry point of the application that sets up routing for different pages.
- `hoc/ProtectedRoutes.jsx`: Higher-order component to handle route protection based on user roles.
- `pages/EmployerLogin/EmployerLogin.jsx`: Component for the employer login page.
- `pages/SeekerLogin/SeekerLogin.jsx`: Component for the job seeker login page.
- `pages/RegistrationForm/RegistrationForm.jsx`: Component for the user registration page.
- `pages/EmployerDashboard/EmployerDashboard.jsx`: Component for the employer dashboard, accessible only to authenticated employers.
- `pages/SeekerDashboard/SeekerDashboard.jsx`: Component for the job seeker dashboard, accessible only to authenticated seekers.

## Getting Started

### Installation

### 1. Clone the repository:

```bash
git clone : https://github.com/Areeba-Farhan1234/Final-project.git

   ```

### 2. Navigate to the project directory:

```bash
cd Project
```

### 3. Install dependencies:

```bash
npm install
```

#### or

```bash
yarn install
```

### 4. Start the development server:

```bash
npm run dev
```

#### or

```bash
yarn run dev
```


## Available Routes
-**/login-employer:** Employer login page.
-**/: Job seeker:** login page.
/register: Registration form for new users.
/employer-dashboard: Dashboard for employers (protected route).
/seeker-dashboard: Dashboard for job seekers (protected route).
Protected Routes
The application uses a ProtectedRoute higher-order component to manage access to specific routes based on user roles. The ProtectedRoute component checks the user's role and determines whether to grant access to a route.

## Contributing
If you would like to contribute to this project, feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

## Acknowledgements
React
Vite
React Router
Redux Toolkit (if applicable)
Any other libraries or tools used in the project
