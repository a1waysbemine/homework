const SocialItem = ({ item }) => {
    const { id, title, imgurl } = item;
    return (
        <li>
            <a href="#">
                <div>
                    <img src={imgurl} alt="" />
                </div>
                <strong>{title}</strong>
            </a>
        </li>
    );
};

export default SocialItem;
