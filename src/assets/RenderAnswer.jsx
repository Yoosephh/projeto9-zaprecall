
export default function RenderAnswer({status}) {
    const imgs = status.map((item, index) => {
        return(
        <li key={index}>
            <img src={item} alt="status" />
        </li>
    );
})
    return imgs
}