import { useNavigate } from "react-router-dom";

export default function MobileNavPanel(props){
    const isOpen = props.isOpen;
    const setOpen = props.setOpen;
    const navigate = useNavigate();

    function goTo(route){
        navigate(route);
        setOpen(false);
    }

    return(
        <>
        
        </>
    )
}