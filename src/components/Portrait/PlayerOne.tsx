import { useMemo } from 'react';
import PlayerOneModal from '../Modals/PlayerOneModal';
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

const PlayerOne = ({
  result,
  cardValue,
  cardCount,
  setCardCount,
  setShuffle,
  setStand,
  stand,
}: BlackJackProps) => {
  // PlayerOne Portrait
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

  return (
    <div className="grid w-full grid-flow-col grid-rows-3 gap-2">
      <div className="row-span-2">
        {/* Cards */}
        <div className="flex px-12">
          {result === null
            ? 'loading'
            : result.cards
                .slice(2, cardCount)
                .map((item: CardProps) => (
                  <img
                    src={item.image}
                    alt={item.code}
                    key={item.code}
                    className="-mr-28 h-48 sm:-mr-16"
                  />
                ))}
        </div>
      </div>
      {/* Buttons */}
      <div className="my-5 flex flex-row px-12 align-middle">
        {sum <= 21 ? (
          <p className="my-auto mr-auto w-6 text-center text-xl text-white sm:text-3xl">
            {sum}
          </p>
        ) : (
          <PlayerOneModal sum={sum} />
        )}

        {!stand && sum < 22 ? (
          <button
            className="click w-30 my-auto mr-2 h-8 self-center rounded bg-red-500 px-4 font-bold text-white hover:bg-red-700"
            type="button"
            onClick={handleStand}
          >
            Stand
          </button>
        ) : null}

        {!stand && sum < 22 ? (
          <button
            className="click w-30 my-auto h-8 self-center rounded bg-yellow-500 px-4 font-bold text-white"
            type="button"
            onClick={handleIncrement}
          >
            Hit Me
          </button>
        ) : null}

        {sum > 21 ? (
          <button
            className="click w-30 my-auto rounded bg-green-500 px-4 py-2 font-bold text-white"
            type="button"
            onClick={shuffleDeal}
          >
            New Game?
          </button>
        ) : null}
      </div>
    </div>
  );
};
export default PlayerOne;
