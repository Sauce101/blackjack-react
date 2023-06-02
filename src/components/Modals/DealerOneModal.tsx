interface CardSum {
  sum3: number;
}

const DealerOneModal = ({ sum3 }: CardSum) => {
  return sum3 > 21 ? (
    <p className="my-auto mr-auto text-xl text-white sm:text-3xl">
      Dealer BUST
    </p>
  ) : null;
};
export default DealerOneModal;
