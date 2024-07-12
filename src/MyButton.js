function MyButton(props){
    return (
        <button 
        onClick={() =>props.onClick(props.label)} 
        className={props.className}>
        {props.label}
        </button>
        
    );

}
export default MyButton;