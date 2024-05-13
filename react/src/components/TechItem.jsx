const TechItem = ({ item }) => {
    const { id, imgurl, kor, eng, desc } = item;
    return (
        <>
            <li>
                <div>
                    <a href="#">
                        <img src={imgurl} alt="" />
                        <h3>
                            {kor}
                            <span>{eng}</span>
                        </h3>
                        <b>
                            <i className="xi-angle-down-thin"></i>
                        </b>
                    </a>
                </div>
                <p>{desc}</p>
                <p className="more">
                    <a href="#">
                        <span>
                            View more <i className="xi-angle-right-min"></i>
                        </span>
                    </a>
                </p>
            </li>
        </>
    );
};

export default TechItem;
