import "./productCard.css";

export default function ProductCard(props){

    console.log(props.price)

    return(

        <div>
            <img src={props.photourl} />
            <span>{props.name}</span>
            <span>LKR. {props.price}</span>
            <p>{props.description}</p>
            
        </div>
    )

}