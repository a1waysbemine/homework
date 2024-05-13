import AboutItem from './AboutItem';

const AboutList = ({ data }) => {
    return (
        <ul>
            {data.map((item) => (
                <AboutItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default AboutList;
