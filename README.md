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

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installation

### 1. Clone the repository:

```bash
   git clone : https://github.com/Areeba-Farhan1234/Final-project.git

   ```

### 2. Navigate to the project directory:

```bash
cd react-feedback-system
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
npm start
```

#### or

```bash
yarn start
```
