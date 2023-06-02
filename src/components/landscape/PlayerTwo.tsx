import { useMemo } from 'react';
import PlayerTwoModal from '../Modals/PlayerTwoModal';
// import ReactModal from "react-modal";

interface CardProps {
  image: string;
  code: string;
  value: string;
}

interface BlackJackProps {
  result: any;
  cardCount: number;
  setCardCount: React.Dispatch<React.SetStateAction<number>>;
  cardValue: string[];
  setShuffle: React.Dispatch<React.SetStateAction<boolean>>;
  setStand: React.Dispatch<React.SetStateAction<boolean>>;
  stand: boolean;
}

const PlayerTwo = ({
  result,
  cardValue,
  cardCount,
  setCardCount,
  setShuffle,
  setStand,
  stand,
}: BlackJackProps) => {
  // PlayerTwo landscape
  let sum = 0;

  const handleStand = () => {
    setStand(true);
  };

  const shuffleDeal = () => {
    setShuffle((prevShuffle) => !prevShuffle);
    setStand(false);
    setCardCount(4);
  };
  const handleIncrement = () => {
    setCardCount((prevCount) => prevCount + 1);
  };

  // Derived state wrapped with useMemo
  useMemo(
    () =>
      cardValue.slice(2, cardCount).map((num: string) => (sum += Number(num))),
    [cardCount, cardValue, stand]
  );

  // ACES 11 or 1
  function checkEleven(age: any) {
    return age > 10;
  }

  const cards = cardValue.slice(2, cardCount).filter(checkEleven);

  function eleven() {
    if (sum > 21) {
      return (sum -= 10);
    }
  }
  useMemo(() => cards.forEach(eleven), [cardCount, cards]);
  // ACES 11 or 1 - END

  return (
    <div className="mb-12 flex">
      {/* Cards */}
      <div id="demo" className="mr-auto flex px-12">
        {result === null
          ? 'loading'
          : result.cards
              .slice(2, cardCount)
              .map((item: CardProps) => (
                <img
                  src={item.image}
                  alt={item.code}
                  key={item.code}
                  className="-mr-24 h-40 sm:-mr-16 lg:h-52"
                />
              ))}
      </div>
      {/* Buttons */}
      <div className="align-center my-5 flex flex-col px-12">
        {sum <= 21 ? (
          <p className="mb-auto w-40 text-center text-3xl text-white">{sum}</p>
        ) : (
          <PlayerTwoModal sum={sum} />
        )}

        {!stand && sum < 22 ? (
          <button
            className="mt-4 h-8 w-40 self-center rounded bg-red-500 px-4 font-bold text-white hover:bg-red-700"
            type="button"
            onClick={handleStand}
          >
            Stand
          </button>
        ) : null}
        {!stand && sum < 22 ? (
          <button
            className="mt-4 h-8 w-40 self-center rounded bg-yellow-500 px-4 font-bold text-white hover:bg-yellow-700"
            type="button"
            onClick={handleIncrement}
          >
            Hit Me
          </button>
        ) : null}

        {sum > 21 ? (
          <button
            className="mt-auto h-8 w-40 self-center rounded bg-green-500 px-4 font-bold text-white hover:bg-green-700"
            type="button"
            onClick={shuffleDeal}
          >
            NEW GAME?
          </button>
        ) : null}
      </div>
    </div>
  );
};
export default PlayerTwo;
