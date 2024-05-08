"use client";

import CountUp from "react-countup";

const CountUpComponent = ({
  totalCurrentBalance,
}: {
  totalCurrentBalance: number;
}) => {
  return (
    <>
      <CountUp end={totalCurrentBalance} prefix="$" decimals={2} decimal="," />
    </>
  );
};

export default CountUpComponent;
