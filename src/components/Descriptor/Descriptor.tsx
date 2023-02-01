import s from './Descriptor.module.scss';

export default function Descriptor() {

  return (
    <div className={`${s.descriptor} container`}>
      <div className={s.contentWrapper}>
        <h1 className={s.title}>
          Привет, я <span className={s.stroke}> SEREJA </span> <br/>
          фронтенд-разработчик
        </h1>
        <p className={s.description}>Меня зовут Сергей Артемов, я занимаюсь разработкой и поддержкой сайтов. Создаю
          дизайн, верстаю и программирую.</p>
      </div>
    </div>
  )
}
