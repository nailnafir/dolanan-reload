import { useCallback, useEffect, useState } from "react";
import { getFeaturedGame } from "../../../services/player";
import GameItem from "../../molecules/game-item";

interface GameListInterface {
  _id: string;
  title: string;
  category: {
    name: string;
  };
  thumbnail: string;
}

export default function FeaturedGame() {
  const [gameList, setGameList] = useState([]);

  const getFeatureGameList = useCallback(async () => {
    const data = await getFeaturedGame();
    setGameList(data);
  }, [getFeaturedGame]);

  useEffect(() => {
    getFeatureGameList();
  }, []);

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item: GameListInterface) => (
            <GameItem
              key={item._id}
              title={item.title}
              category={item.category.name}
              thumbnail={`http://localhost:5000/uploads/${item.thumbnail}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
