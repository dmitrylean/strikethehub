import React from "react";
import { Link } from "react-router-dom";

const games = [
  { id: 1, img: "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/bf3-keyart.jpg.adapt.crop1x1.767p.jpg", name: "BattleField" },
  { id: 2, img: "https://images.gamewatcherstatic.com/image/file/5/ca/70925/cod3.jpg", name: "Call Of Duty" },
   { id: 4, img: "https://fwmedia.fandomwire.com/wp-content/uploads/2023/09/28042935/Counter-Strike-2.jpg", name: "CS2" },
  { id: 3, img: "https://cdna.artstation.com/p/assets/images/images/074/305/192/4k/pingle-studio-4.jpg?1711726672", name: "Insurgency Sandstorm" },
];

const TrendingGames = () => {
  return (
    <section className="bg-black py-16 text-white">
      <div className="container mx-auto px-4">

        {/* Headline */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold">Currently Trending Games</h2>
          <Link
            to="/games"
            className="bg-[#1c1a19] text-white px-5 py-2 rounded-md font-medium transition-colors duration-300 hover:bg-[#333]"
          >
            SEE ALL
          </Link>
        </div>

        {/* Card game */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {games.map((game) => (
            <div key={game.id} className="text-center">
              <Link to={`/games/${game.id}`}>
                <img
                  src={game.img}
                  alt={`Game ${game.id}`}
                  className="w-[251px] h-[271px] rounded-xl object-cover mb-2.5 mx-auto transition-transform duration-300 hover:scale-105"
                />
              </Link>
              <p className="text-sm font-medium flex items-center justify-center">
                <p className="fa-solid fa-fire mr-1.5 text-orange-400"></p>
                {game.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingGames;
