import s from "@/components/Skills/Skills.module.scss";
import SkillsItem from "@/components/SkillItem/SkillItem";
import { skillsData } from "@/data/skillsData";

export default function Skills() {

  const activeSkillsArray = skillsData.filter((item) => {
    return item.active;
  })

  return (
    <section className={`container block-mb`}>
      <h1 className={`block-title`}>Мои основные навыки</h1>
      <div className={s.cardsWrapper}>
        {activeSkillsArray.map((skill, index) => {
          return <SkillsItem key={index} name={skill.name} />
        })}
      </div>
    </section>
  )

}
