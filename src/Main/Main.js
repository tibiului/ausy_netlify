import './Main.css'
import eye from '../pictures/eye_connection.jpeg'

export const Main = () =>
    <main>
        <article>
            <section className='about-us'>
                <div className='section-column-image'>
                    <img className='eye' src={eye} alt='eye connecting' />
                </div>
                <div className='section-column-content'>
                    <div className='section-column-content-text'>
                        <h2>we are ausy.</h2>
                        <p>Personality means having the creativity to combine consulting, engineering and digital minds, using our international resources for high value-added solutions.</p>
                        <p>We believe in the power of technology.</p>
                        <p>We believe in tech with personality.</p>
                    </div>
                    <a className='button' href='/' >find out more</a>
                </div>
            </section>
            <section className='jobs' >
                <p>shape your future.</p>
                <p>together we will find the jobs that match your goals and ambitions.</p>
                <a className='button' href='/' >find out more</a>

            </section>

        </article>
    </main>