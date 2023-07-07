import { clients } from "../constants"
import styles
  from "../style"
const Clients = () => {
  return (
    <section className={`${styles.flexCenter}`}>
      <div className={`${styles.flexCenter} flex-wrap`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter}`}>
            <img src={client.logo} alt="client" className="w-[50%] h-[50%] object-contain" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients