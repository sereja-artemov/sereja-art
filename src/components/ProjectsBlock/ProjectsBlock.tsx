import 'keen-slider/keen-slider.min.css';
import {useKeenSlider} from 'keen-slider/react';
import {useState} from 'react';
import s from "./ProjectsBlock.module.scss";
import ProjectCardItemSlider from "@/components/ProjectCardItemSlider/ProjectCardItemSlider";
import {projectsProps} from "@/lib/dataFetch";
import { ProjectType } from '@/lib/types';

function ProjectsBlock({projects}:projectsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [isAnimation, setIsAnimation] = useState(false);

  const projectsData = JSON.parse(projects);

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      created() {
        setLoaded(true);
      },
      animationStarted() {
        setIsAnimation(true);
      },
      animationEnded() {
        setIsAnimation(false);
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      initial: 0,
      mode: "free",
      slides: {
        perView: 'auto',
        spacing: () => 60,
        origin: "center",
      },
      dragSpeed: .6,
      breakpoints: {
        '(max-width: 767.98px)': {
          slides: {
            perView: 'auto',
            spacing: () => 30,
            origin: "auto",
          }
        },
        '(max-width: 575.98px)': {
          slides: {
            perView: 'auto',
            spacing: () => 20,
            origin: "auto",
          }
        },
      }
    },
    [
      // add plugins here
    ]
  )

  return (
    <section className={`block-mb`}>
      <div className={`container`}>
        <h1 className={`${s.projectTitle} block-title`}>Мои проекты</h1>
      </div>

      <div ref={ref} className={`${s.sliderWrapper} keen-slider`}>
        {
          projectsData.map((project:ProjectType, index: number) => {
            return <ProjectCardItemSlider key={index} data={project} />
          })
        }
      </div>
      {/*!isAnimation && <p style={{textAlign: "center", position: "absolute", left: '50%', transform: "translateX(-50%)", fontSize: 15}}>Тащите мышкой</p>*/}
      {loaded && instanceRef.current && (
        <div className={s.dots}>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={`${s.dot} ${currentSlide === idx ? s.active : ""}`}
              ></button>
            )
          })}
        </div>

      )}
    </section>
  );
}

export default ProjectsBlock;
