function Pricing(){
    return (<>
                <div className="pricing-container">
                    <h1>Pricing</h1>
                    <div className="boxes">
                        <div className="box">
                            <h2>Free</h2>
                            <h2>$0 <span>/Month</span></h2>
                            <p>Private board sharing</p>
                            <p>5 Gb Storage</p>
                            <p>Web Analytics</p>
                            <p>Private Mode</p>
                            <button>Subscribe</button>
                        </div>
                        <div className="box">
                            <h2>Pro <span>(Most Popular)</span></h2>
                            <h2>$10 <span>/Month</span></h2>
                            <p>Private board sharing</p>
                            <p>10 Gb Storage</p>
                            <p>Web Analytics (Advance)</p>
                            <p>Private Mode</p>
                            <button>Subscribe</button>
                        </div>
                        <div className="box">
                            <h2>Enterprise</h2>
                            <h2>$200 <span>/Month</span></h2>
                            <p>Private board sharing</p>
                            <p>Unlimited Storage</p>
                            <p>High Performance Network</p>
                            <p>Private Mode</p>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                </>);
}
export default Pricing;