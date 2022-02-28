import '../App.css';
import Cards from '../Components/Cards';

const Dashboard = () => {
    return ( 
        <div className="head">
            <div className="Heading">
               <h1> Save 
                <span className="gradient-text"> money. </span>
                Save
                <span className="gradient-text"> time.</span>
                </h1>
            </div>
            <p className="Sub-heading">India’s largest tax and financial services software platform</p>
            <div className="btn_div">
                <button>Get Started</button>
                <button>Request a Demo</button>
            </div>
            <Cards />
        </div>
        
)
};

export default Dashboard;