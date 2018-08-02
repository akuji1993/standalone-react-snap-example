import React from 'react'; 
import { Link } from 'react-router-dom'; 

const styles = {
    button: {
        width: "200px", 
        height: "50px", 
        background: "blue", 
        color: "white"
    }
};
export default class Welcome extends React.Component {

    render() {
        return (
            <div className="Welcome">
                <p>Welcome, take a site you can checkout</p>
                <Link style={styles.button} to="/page1"><button>Page1</button></Link>
                <Link style={styles.button} to="/page2"><button>Page2</button></Link>
            </div>
        )
    }
}