import TechItem from './TechItem';

const TechList = ({ data }) => {
    return (
        <>
            <ul>
                {data.map((item) => (
                    <TechItem key={item.id} item={item} />
                ))}
            </ul>
        </>
    );
};

export default TechList;
