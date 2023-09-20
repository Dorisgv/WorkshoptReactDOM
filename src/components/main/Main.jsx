import React from 'react'
import './main.scss'
import interactive from '../../assets/images/desktop/image-interactive.jpg'


const Main = () => {
    return (

        <main className="main">
            <section className="info container section">
                <div id="bg-image" className="info__img"></div>
                <div className="info__text t-center container">
                    <h2 className="info__title">The leader in interactive VR</h2>
                    <p className="info__p">
                        Founded in 2011, Loopstudios has been producing world-class virtual reality
                        projects for some of the best companies around the globe. Our award-winning
                        creations have transformed businesses through digital experiences that bind
                        to their brand.
                    </p>
                </div>
            </section>
        </main>

    )
}

export default Main
