import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

function Projects() {
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            slideChanged() {
                console.log('slide changed')
            },
            created() {
                console.log('slide created')
            },
        },
        [
            // add plugins here
        ]
    )

    return (
        <section className={`container block-mb`}>
            <h1 className={`block-title`}>Мои проекты</h1>

            <div ref={sliderRef} className="keen-slider">
                <div style={{height: 500, backgroundColor: "orange"}} className="keen-slider__slide">1</div>
                <div style={{height: 500, backgroundColor: "indianred"}} className="keen-slider__slide">2</div>
                <div style={{height: 500, backgroundColor: "green"}} className="keen-slider__slide">3</div>
            </div>
        </section>
    );
}

export default Projects;
