import './page.css';

export default function ConstructionPackages(){
    return(
        <div className="p-wrapper">
            <h2>Our Packages</h2>
            <div className="p-container">
                <div className="p-card">
                    <h3>Basic Package</h3>
                    <div className='services-description'>
                        <h4>Designs & Drawing</h4>
                    </div>
                    
                </div>
                <div className="p-card">
                    <h3>Classic Package</h3>
                </div>
                <div className="p-card">
                    <h3>Premium Package</h3>
                </div>
            </div>
        </div>
    )
}