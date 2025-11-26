import { Button } from '../atoms/Button';
import { browsers } from "../../config/appData";

export const Extensions= () => {
return (
        <section id='pricing' className="extension">
            <div className="extension-header">
                <h2 className="section-header-h2">Download the extension</h2>
                <p>
                    We've got more browsers in the pipeline. Please do let us know if you've 
                    got a favourite you'd like us to prioritize.
                </p>
            </div>
                <div className="extension-cards">
                {browsers.map((browser) => (
                    <div key={browser.name} className="card">
                        <img src={browser.image} alt={browser.name} className="card-img" />
                        <h3>Add to {browser.name}</h3>
                        <p>Minimum version {browser.version}</p>
                        <div className="card-divider"></div>
                        <Button variant="blue" className="btn-blue-extension">Add & Install Extension</Button>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Extensions;