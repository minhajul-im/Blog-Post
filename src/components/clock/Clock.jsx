import useClock from "../../hooks/useClock";

const Clock = () => {
  const { clock: local } = useClock();
  const { clock: pst } = useClock("PST");
  const { clock: est } = useClock("EST");

  console.log("local:-", local.date_utc);
  console.log("pst:-", pst.date);
  console.log("est:-", est.date);

  return (
    <div>
      <h1>Hello Clock</h1>
    </div>
  );
};

export default Clock;
