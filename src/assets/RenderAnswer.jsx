
export default function RenderAnswer({status}) {
    const imgs = status.map((item, index) => {
        return(
        <li key={index}>
            <img data-test={item.data_test} src={item.image} alt="status" />
        </li>
    );
})
console.log(status)
    return imgs
}