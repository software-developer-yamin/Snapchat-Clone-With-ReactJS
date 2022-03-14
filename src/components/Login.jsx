import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";
import { auth, provider } from "../firebase";
import "../styles/Login.css";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          login({
            userName: result.user.displayName,
            profilePic: result.user.photoURL,
            id: result.user.uid,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <main className="login">
      <section className="login_container">
        <img
          src="https://play-lh.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo"
          alt=""
        />
        <Button variant="outlined" onClick={signIn}>
          Sign IN
        </Button>
      </section>
    </main>
  );
}

export default Login;
