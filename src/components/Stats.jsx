import { users_dark, trust_dark, transactions_dark, graph } from '../assets'

const Stats = () => {

  return (
    <div
      className="
            flex 
            flex-col 
            space-y-10 sm:space-y-0 
            sm:flex-row 
            justify-between
            grow-0
            "
    >
      <img src={users_dark} alt="users" className="sm:w-[30%] box-shadow-50" />
      <img src={trust_dark} alt="trust" className="sm:w-[30%] box-shadow-50" />
      <img src={transactions_dark} alt="transactions" className="sm:w-[30%] box-shadow-50" />
      
    </div>
  );
};

export default Stats;