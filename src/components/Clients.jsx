import { clients } from "../constants"
import styles
  from "../style"
const Clients = () => {
  return (
    <section className={`${styles.flexCenter} flex flex-col`}>
      <h2 className={`${styles.heading2} text-center mb-10`}>Our Partners:</h2>
      <div className={`${styles.flexCenter} flex-wrap`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter}`}>
            <img src={client.logo} alt="client" className="w-[70%] h-[70%] object-contain" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients