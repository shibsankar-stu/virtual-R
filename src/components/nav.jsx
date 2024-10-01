function Mynav() {
    return (<>
        <nav class="navbar bg-body-tertiary" className=" Mynav">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="/src/assets/logo.webp" alt="Bootstrap" width="40" height="37" /> VirtualR
                </a>
            </div>
            <div className="listItem">
                <ul>
                    <a href="#">Home</a>
                    <a href="features.jsx"><li>Freatures</li></a>
                    <a href="workflow.jsx"><li>Workflow</li></a>
                   <a href="pricung.jsx"> <li>Pricing</li></a>
                   <a href="#"> <li>Testimonial</li></a>
                </ul>
            </div>
            <div className="account">
            <button type="button" class="btn btn-outline-light">Sign In</button>
            <a href="#">Create an account</a>
            </div>
        </nav>
    </>);
}
export default Mynav;