import s from "@/components/Skills/Skills.module.scss";
import SkillsItem from "@/components/SkillItem/SkillItem";
import { skillsData } from "@/data/skillsData";
import { motion } from 'framer-motion';
import { FadeContainer } from '@/utils/framerMotionVariants';

export default function Skills() {

  const activeSkillsArray = skillsData.filter((item) => {
    return item.active;
  })

  return (
    <section className={`container block-mb`}>
      <h2 className={`block-title`}>Мои основные навыки</h2>
      <motion.div initial="hidden"
                  whileInView="visible"
                  variants={FadeContainer}
                  viewport={{ once: true }} className={s.cardsWrapper}>
        {activeSkillsArray.map((skill, index) => {
          return <SkillsItem key={index} name={skill.name} />
        })}
      </motion.div>
    </section>
  )

}
