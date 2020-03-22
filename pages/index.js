import Head from "next/head";
import { Workouts } from "../components/workouts";
import { JumpToDay } from "../components/jumpToDay";

const Home = () => {
  return (
    <div className="container">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <title>getting ripped</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main style={{ width: "100%" }}>
        <h1 className="title">
          We're doing kettlebell workouts in quarantine.
        </h1>
        <div>
          <img
            src="/workout.gif"
            alt="goblet squats"
            style={{ width: "100%" }}
          />
        </div>
        <p className="description">
          Don't have a kettlebell? Use something heavy.
        </p>

        <p className="description">
          Don't have a pull-up bar? Do bent-over rows instead.
        </p>
        <p className="description">
          Substitute a similar workout. Make it fun for yourself. Do pushups and
          bodyweight squats. Do more reps.
        </p>
        <JumpToDay />
        <div>
          <Workouts completedDays={[]} />
        </div>
      </main>

      <footer>
        <p>
          Questions? Comments? Email:{" "}
          <a href="mailto:nick@nickbytes.com">nick@nickbytes.com</a>
        </p>
      </footer>

      <style jsx>{`
        .container {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0 auto;
          max-width: 1280px;
          overflow: hidden;
          padding: 0 0.5rem;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          width: 100%;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;
