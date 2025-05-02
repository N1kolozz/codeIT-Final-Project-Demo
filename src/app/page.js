"use client";
import styles from "./page.module.css";
import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const [login, setLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();


  const isValidPassword = (password) => {
    const minLength = 6;
    return password.length >= minLength;
  };


  const handleLoginChange = () => {
    return setLogin(!login);
  };

  const checkIfUserExist = async () => {
    const result = await JSON.parse(localStorage.getItem("user" && "userReg"));
    if (result !== null) {
      router.replace("/products", {path: "products"});
    }
  };

  useEffect(() => {
    checkIfUserExist();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (login) {

      try {

        fetch("https://fakestoreapi.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            password: "m38rmF$",
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.token) {
              localStorage.setItem("user", JSON.stringify(res.token))
              router.replace("/products", {path: 'products'});
            }
          });
      } catch (error) {
        console.log(error.message);
      }

    } else {




      if (!username || !email || !password) {
        alert("Please fill in all fields.");
        return;
      }


      try {


           fetch("https://fakestoreapi.com/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.id) {
              localStorage.setItem("userReg", JSON.stringify(res.id))
              router.replace("/products", {path: 'products'});
            }
          });
      } catch (error) {
        console.log(error.message);
      }

    }
  }



  return (
    <main className={styles.main}>
      <form className={styles.container} onSubmit={handleSubmit}>
        {login ? (
          <>
            <h3 className={styles.signin}>Sign In</h3>
            <p className={styles.desc}>please sign in to access market.</p>
            <input
              onChange={(event) => {
                return setUsername(event.target.value);
              }}
              className={styles.input}
              placeholder="username"
            />
            <input
              onChange={(event) => {
                return setPassword(event.target.value);

              }}
              className={styles.input}
              type="password"
              placeholder="password"
            />
            <button
             className={styles.button}
             style={{
              opacity: password.length <= 6 ? 0.5 : 1,
              cursor:  password.length <= 6 ? "not-allowed" : "pointer",
            }}
            disabled={password.length == 0 || password.length < 6}
              type="submit"
              >
              Sign In
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleLoginChange();
              }}
              className={styles.notResgitered}
            >
              Not Registered? Sign up
            </button>

          </>
        ) : (
          <>
            <h3 className={styles.signin}>Sign Up</h3>
            <p className={styles.desc}>please sign up to access market.</p>
            <input
              onChange={(e) => {
                return setUsername(e.target.value);
              }}
              className={styles.input}
              placeholder="Username"
            />
            <input
              type="email"
              onChange={(e) => {
                return setEmail(e.target.value);
              }}
              className={styles.input}
              placeholder="Email"
            />
            <input
              onChange={(e) => {
                return setPassword(e.target.value);
              }}
              className={styles.input}
              type="password"
              placeholder="Password"
            />
            {password && (
              <p
                className={
                  isValidPassword(password)
                    ? styles.validMessage
                    : styles.passwordWarning
                }
              >
                {isValidPassword(password)
                  ? "✅ Strong password!"
                  : "❌ Password must be 6+ characters."}
              </p>
            )}

            <button
              className={styles.button}
              type="submit"
              disabled={!isValidPassword(password)}
              style={{
                opacity: !isValidPassword(password) ? 0.5 : 1,
                cursor: !isValidPassword(password) ? "not-allowed" : "pointer",
              }}
            >
              Sign Up
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleLoginChange();
              }}
              className={styles.notResgitered}
            >
              Not Registered? Sign up
            </button>

          </>
        )}
      </form>
    </main>
  );
}
