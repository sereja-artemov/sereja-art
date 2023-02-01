import s from "@/components/Skills/Skills.module.scss";
import SkillsItem from "@/components/SkillItem/SkillItem";
import {skillsData} from "@/data/skillsData";

export default function Skills() {

  return (
    <section className={`container block-mb`}>
      <h1 className={`block-title`}>Мои основные навыки</h1>
      <div className={s.cardsWrapper}>
        {skillsData.map((skill, index) => {
          return <SkillsItem key={index} name={skill.name} image={skill.image}/>
        })}
      </div>
    </section>
  )
}
