import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import s from "./Projects.module.scss";

function Projects() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const [ref, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            created() {
                setLoaded(true);
            },

            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel)
            },
            breakpoints: {
                "(min-width: 400px) and (max-width: 500px)": {
                    slides: { perView: 1, spacing: 5, origin: "center" },
                },
                "(min-width: 768px)": {
                    slides: { perView: 2, spacing: 10, origin: "center" },
                },
            },
            initial: 0,
            mode: "free-snap",
            slides: {
                perView: 2,
                spacing: () => 20,
                origin: "center"
            },
            dragSpeed: .6,
        },
        [
            // add plugins here
        ]
    )

    return (
        <section className={`container block-mb`}>
            {/*<h1 className={`block-title`}>Мои проекты</h1>*/}

            <div ref={ref} className="keen-slider">
                <div style={{height: 200, backgroundColor: "orange"}} className="keen-slider__slide">1</div>
                <div style={{height: 200, backgroundColor: "indianred"}} className="keen-slider__slide">2</div>
                <div style={{height: 200, backgroundColor: "green"}} className="keen-slider__slide">3</div>
                <div style={{height: 200, backgroundColor: "darkslategray"}} className="keen-slider__slide">4</div>
                <div style={{height: 200, backgroundColor: "salmon"}} className="keen-slider__slide">5</div>
                <div style={{height: 200, backgroundColor: "skyblue"}} className="keen-slider__slide">6</div>
            </div>
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
