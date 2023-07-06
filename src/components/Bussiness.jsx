import { features } from "../constants"
import styles, { layout } from '../style'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-neue font-semibold text-[18px] leading-[23px] text-white">
        {title}
      </h4>
      <p className="font-normal font-neue text-[16px] text-dimWhite">
        {content}
      </p>
    </div>
  </div>
)

const Bussiness = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-center`}>With Us <br /> Your Money Are Safe
        </h2>
        <div className="card__blur sidebar"></div>
        <p className={`${styles.paragraph} max-w-[470px]`}>
        </p>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>

    </section>
  )
}

export default Bussiness