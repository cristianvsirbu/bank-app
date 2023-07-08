import { clients } from "../constants"
import styles
  from "../style"
const Clients = () => {
  return (
    <section id="clients" className={`${styles.flexCenter} flex flex-col`}>
      <h2 className={`${styles.heading2} text-center mb-10`}>Our Partners:</h2>
      <div className={`${styles.flexCenter} flex-wrap flex-col md:flex-row my-10`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter}`}>
            <img src={client.logo} alt="client" className="w-[70%] h-[70%] object-contain mb-8 box-shadow-20" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients