import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithPopup } = useAuth0();

  const handleLogin = async () => {
    loginWithPopup();
  };

  return <button onClick={handleLogin}>Log In</button>;
};

export default LoginButton;