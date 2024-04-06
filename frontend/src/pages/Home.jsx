import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>IELTS sim</title>
            </Helmet>
            <h1>IELTS Preparation</h1>
            <p>Welcome to the IELTS Preparation website.</p>
            <p>
                <Link to="test">Test</Link>
            </p>
        </div>
    );
}
