import { users_dark, trust_dark, transactions_dark } from '../assets'

const Stats = () => {

  return (
      <div
        className="
            flex 
            flex-col 
            space-y-10 sm:space-y-0 
            sm:flex-row 
            justify-between
            "
      >
        <img src={users_dark} alt="users" className="sm:w-[30%] " />
        <img src={trust_dark} alt="trust" className="sm:w-[30%]" />
        <img src={transactions_dark} alt="transactions" className="sm:w-[30%]" />
      </div>
  );
}

export default Stats