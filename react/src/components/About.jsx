import AboutList from './AboutList';
import AboutText from './AboutText';
import data from '../assets/api/data4';
import '../assets/scss/About.scss';

const About = () => {
    return (
        <div className="con4">
            <div className="inner">
                <AboutText />
                <AboutList data={data} />
            </div>
        </div>
    );
};

export default About;
