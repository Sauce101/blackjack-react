interface CardSum {
  sum: number;
}

const PlayerTwoModal = ({ sum }: CardSum) => {
  return sum > 21 ? (
    <p className="mx-auto mt-auto text-xl text-white sm:text-3xl">BUST</p>
  ) : null;
};
export default PlayerTwoModal;
