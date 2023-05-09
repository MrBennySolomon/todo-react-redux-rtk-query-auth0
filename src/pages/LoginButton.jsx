import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { user, loginWithPopup } = useAuth0();

  const handleLogin = async () => {
    try {
      // Open the login popup and log in the user
      await loginWithPopup();
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleLogin}>Log In</button>;
};

export default LoginButton;