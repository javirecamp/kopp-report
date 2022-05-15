import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  
  return (
    <nav>
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>
            <img src="/netflix.jpeg" />
          </a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={router.pathname === "/about" ? "active" : ""}>
              About
            </a>
          </Link>
        </li>
        <li>
          <a href="">Schedule</a>
        </li>
        <li>
          <a href="">FAQ</a>
        </li>
        <li>
          <a href="">Booking</a>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/signIn">
            <a className={router.pathname === "/signIn" ? "active" : ""}>
              Sign In
            </a>
          </Link>
        </li>
        <li>
          <Link href="/signUp">
            <a className={router.pathname === "/signUp" ? "active" : ""}>
              Sign Up
            </a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          gap: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          padding: 0 2rem;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        nav div {
          font-size: 24px;
          gap: 10px;
        }
        img {
          max-width: 100px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        nav ul {
          display: flex;
          list-style: none;
          padding-left: 0;
        }
        nav ul li {
          padding: 8px 12px;
        }
        .active {
          color: tomato;
        }
        @media screen and (max-width: 770px) {
          .navbar {
            flex-direction: column;
            padding: 8px 24px;
          }
          .navbar div {
            display: none;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          .navbar div li {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </nav>
  );
}