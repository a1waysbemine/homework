import SocialList from './SocialList';
import SocialTxt from './SocialTxt';
import data from '../assets/api/data3';
import '../assets/scss/Social.scss';

const Social = () => {
    return (
        <div className="con3 ">
            <div className="inner">
                <SocialTxt />
                <SocialList data={data} />
            </div>
        </div>
    );
};

export default Social;
