import SocialItem from './SocialItem';

const SocialList = ({ data }) => {
    return (
        <ul>
            {data.map((item) => (
                <SocialItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default SocialList;
