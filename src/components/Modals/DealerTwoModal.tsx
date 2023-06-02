interface CardSum {
  sum3: number;
}

const DealerTwoModal = ({ sum3 }: CardSum) => {
  return sum3 > 21 ? (
    <p className="mx-auto mt-auto text-xl text-white sm:text-3xl">BUST</p>
  ) : null;
};
export default DealerTwoModal;
