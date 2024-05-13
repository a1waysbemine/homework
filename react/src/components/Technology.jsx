import TechList from './TechList';
import data from '../assets/api/data2';
import '../assets/scss/Tech.scss';

const Technology = () => {
    return (
        <>
            <div className="con2">
                <h2>TECHNOLOGICAL INNOVATION</h2>

                <TechList data={data} />
            </div>
        </>
    );
};

export default Technology;
