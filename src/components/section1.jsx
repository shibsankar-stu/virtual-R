function Section1() {
    return (
        <>
            <div className="container">
                <div className="heading">
                    <h1>VirtualR build tools <span>for developers</span></h1>
                    <p>Empower your craetivity and bring your VR app ideas to life with our initiative development tools.
                        Get started today and turn your imagination into impressive reality</p>
                    <div className="mybtn">
                        <button type="button" class="btn btn-outline-light">Start for free</button>
                        <button type="button" class="btn btn-outline-light">Documentation</button>
                    </div>
                </div>

                <div className="myvideo">
                    <video autoPlay loop muted >
                        <source src="/src/assets/video1.mp4" type="video/mp4" />
                       
                    </video>
                    <video autoPlay loop muted >
                        <source src="/src/assets/video2.mp4" type="video/mp4" />

                    </video>
                </div>

            </div>
        </>
    );
}
export default Section1;