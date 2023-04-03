import { motion } from 'framer-motion'
import { staggerContainer } from '../utils/motion'
import { styles } from '../style'

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.paddingX} max-w-7xl mx-auto relative z-0`}
      >
        <Component />
        <span className="hash-span" id={idName}>&nbsp;</span>
      </motion.section>
    )
  }

export default SectionWrapper