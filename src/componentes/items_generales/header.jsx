
import imagen1 from '../../img/header1.jpg';

function HeaderGeneral(props){
    return(
        <div>
        <div style={{ backgroundImage: `url(${imagen1})`, backgroundSize: 'cover',}} >
        <center>
            <h1><strong>{props.titulo}</strong></h1>
        </center>    
        </div>
    </div>
    )
}

export default HeaderGeneral;