import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="container flex items-center p-4 mx-auto min-h-screen justify-center">
      <main>
        <h1 className="font-mono text-xl code">
          Welcome to <span className="text-purple-700">Issuely</span>
        </h1>
      </main>
    </div>
  );
};

export default Home;
