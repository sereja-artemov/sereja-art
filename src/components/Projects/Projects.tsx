import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import s from "./Projects.module.scss";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projectsData } from "@/data/projectsData";

function Projects() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [isAnimation, setIsAnimation] = useState(false);

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
                spacing: () => 20,
                origin: "center",


            },
            dragSpeed: .6,

        },
        [
            // add plugins here
        ]
    )

    return (
        <section className={`block-mb`}>
            {/*<h1 className={`block-title`}>Мои проекты</h1>*/}

            <div ref={ref} className="keen-slider">
                {
                    projectsData.map((project, index) => {
                        return <ProjectCard key={index} image={project.image} video={project.video} name={project.name}
                                            cost={project.cost} date={project.date} description={project.description}
                                            link={project.link}/>
                    })
                }
            </div>
            {!isAnimation && <p style={{textAlign: "center", position: "absolute", left: '50%', transform: "translateX(-50%)", fontSize: 15}}>Тащите мышкой</p>}
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

export default Projects;
