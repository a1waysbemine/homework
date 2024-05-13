import HeaderNav from './HeaderNav';
import HeaderUtilMenu from './HeaderUtilMenu';
import '../assets/scss/Header.scss';

const Header = () => {
    return (
        <header id="header">
            <div className="inner">
                <h1>
                    <a href="#">
                        <img
                            src="http://www.kyungdong.co.kr/ko/front/image/common/logo_pc.png"
                            alt=""
                        />
                    </a>
                </h1>

                <HeaderNav />
                <HeaderUtilMenu />
            </div>
        </header>
    );
};

export default Header;
