import { useState, useEffect } from 'react';
import axios from 'axios';
import DealerTwo from './landscape/DealerTwo';
import PlayerTwo from './landscape/PlayerTwo';
import DealerOne from './Portrait/DealerOne';
import PlayerOne from './Portrait/PlayerOne';

const BlackJack = () => {
  const [result, setResult] = useState<any>(null);
  const [cardValue, setCardValue] = useState<string[]>([]);
  const [cardCount, setCardCount] = useState<number>(4);
  const [shuffle, setShuffle] = useState<boolean>(false);
  const [stand, setStand] = useState<boolean>(false);

  const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=52';

  useEffect(() => {
    axios.get(url).then((response) => {
      setResult(response.data);
      // axios returns API response body in .data
      setCardValue(
        response.data.cards.map((card: any) => {
          if (
            card.value === 'KING' ||
            card.value === 'QUEEN' ||
            card.value === 'JACK'
          ) {
            return Number('10');
          }
          if (card.value === 'ACE') {
            return Number('11');
          }
          return Number(card.value);
        })
      );
    });
  }, [shuffle]);

  return (
    <>
      <div className="flex min-h-screen flex-col justify-evenly bg-green-900 landscape:hidden">
        <DealerOne
          result={result}
          cardValue={cardValue}
          cardCount={cardCount}
          stand={stand}
          setCardCount={setCardCount}
          setShuffle={setShuffle}
          setStand={setStand}
        />
        <PlayerOne
          result={result}
          cardValue={cardValue}
          cardCount={cardCount}
          stand={stand}
          setCardCount={setCardCount}
          setShuffle={setShuffle}
          setStand={setStand}
        />
      </div>
      <div className="flex min-h-screen flex-col justify-evenly bg-green-900 portrait:hidden">
        <DealerTwo
          result={result}
          cardValue={cardValue}
          cardCount={cardCount}
          stand={stand}
          setCardCount={setCardCount}
          setShuffle={setShuffle}
          setStand={setStand}
        />
        <PlayerTwo
          result={result}
          cardValue={cardValue}
          cardCount={cardCount}
          stand={stand}
          setCardCount={setCardCount}
          setShuffle={setShuffle}
          setStand={setStand}
        />
      </div>
    </>
  );
};
export default BlackJack;
