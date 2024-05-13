import '../assets/scss/Visual.scss';
const Visual = () => {
    return (
        <section id="visual">
            <div className="main-banner">
                <ul>
                    <li className="on">
                        <div className="inner">
                            <div className="txt">
                                <h2>Global Kyungdong with customer trust</h2>
                                <p>고객이 신뢰하는 글로벌 에너지 지원 선도 기업</p>
                                <p className="more">
                                    <a href="#">
                                        Learn More<i className="xi-angle-right-min"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="inner">
                            <div className="txt">
                                <h2>Energy-Based industry</h2>
                                <p>
                                    광산 40년! 석탄산업은 국가 경제 개발의
                                    <br />
                                    기반이었습니다.
                                </p>
                                <p className="more">
                                    <a href="#">
                                        Learn More<i className="xi-angle-right-min"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="inner">
                            <div className="txt">
                                <h2>Create great value</h2>
                                <p>경동은 에너지 자원의 가치를 창조합니다</p>
                                <p className="more">
                                    <a href="#">
                                        Learn More<i className="xi-angle-right-min"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="inner">
                            <div className="txt">
                                <h2>We will provide bright energy</h2>
                                <p>에너지를 통한 따뜻한 삶의 공간 창조 경동이 함께 하겠습니다.</p>
                                <p className="more">
                                    <a href="#">
                                        Learn More<i className="xi-angle-right-min"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <p className="btn-wrap">
                <button className="prev">
                    <img
                        src="http://www.kyungdong.co.kr/ko/front/image/main/btn_prev2.png"
                        alt=""
                    />
                </button>
                <button className="next">
                    <img
                        src="http://www.kyungdong.co.kr/ko/front/image/main/btn_next2.png"
                        alt=""
                    />
                </button>
            </p>
            <p className="scroll">
                <img src="http://www.kyungdong.co.kr/ko/front/image/main/scroll.png" alt="" />
            </p>
        </section>
    );
};

export default Visual;
