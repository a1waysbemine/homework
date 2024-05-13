import '../assets/scss/Business.scss';
import BusinessList from './BusinessList';
import data from '../assets/api/data1';

const Business = () => {
    return (
        <div className="con1">
            <h2>BUSINESS</h2>
            <p className="intro">고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>
            <BusinessList data={data} />
            <p className="more">
                <a href="#">
                    <span>
                        View more <i className="xi-angle-right-min"></i>
                    </span>
                </a>
            </p>
        </div>
    );
};

export default Business;
