const AboutItem = ({ item }) => {
    const { id, imgurl, kor, eng } = item;
    return (
        <li>
            <a href="#">
                <span>
                    <img src={imgurl} alt="" />
                </span>
                <strong>
                    <span>{kor}</span>
                    {eng}
                </strong>
            </a>
        </li>
    );
};

export default AboutItem;
