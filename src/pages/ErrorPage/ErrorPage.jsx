import { NavLink } from "react-router-dom";

function ErrorPage() {


  return (
    <main id="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <p>
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </p>
    </main>
  );
}

export default ErrorPage;