import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";
import styles from "../styles/Home.module.css";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          place-content: center;
          grid-template-columns; 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          border-radius: 12px;
          max-width: 100%;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          text-align: center;
          align-items: center;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
          text-align: center;
        }
        .movie h4 {
          fonr-size: 18px;
          text-align: center;
        }
      `}</style>
      <footer className={styles.footer}>
        <div>
          Created by Soomin Jin
        </div>
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  console.log(results);
  return {
    props: {
      results,
    },
  };
}
