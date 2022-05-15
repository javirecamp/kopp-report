import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SignUp() {
  const router = useRouter();

  return (
    <div>
      <div className="login-input-section-wrap">
        <div className="login-input-wrap">
          <input placeholder="Username" type="text"></input>
        </div>
        <div className="login-input-wrap password-wrap">
          <input placeholder="Password" type="password"></input>
        </div>
        <div className="login-button-wrap">
          <button className="button" onClick={() => router.push("/")}>
            Sign up
          </button>
        </div>
      </div>
      <style jsx>{`
        .login-input-section-wrap{
            padding-top: 60px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .login-input-wrap {
          width: 465px;
          height: 48px;
          border: solid 1px var(--border-gray-color);
          background: white;
        }
        .password-wrap {
          margin-top: 13px;
        }
        .login-input-wrap input {
          border: none;
          width: 430px;
          margin-top: 10px;
          font-size: 14px;
          margin-left: 10px;
          height: 30px;
        }
        .login-button-wrap {
          padding-top: 13px;
          color: black;
        }
        .login-button-wrap button {
          width: 465px;
          height: 48px;
          font-size: 18px;
          background: red;
          color: white;
          border: solid 1px red;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
