interface CardSum {
  sum: number;
}

const PlayerOneModal = ({ sum }: CardSum) => {
  return sum > 21 ? (
    <p className="my-auto mr-auto text-xl text-white sm:text-3xl">
      Player BUST
    </p>
  ) : null;
};
export default PlayerOneModal;
