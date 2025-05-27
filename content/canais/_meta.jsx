import { FaJira } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



export default{
    jira:(
       <div style={{ display: 'flex', alignItems: 'center', gap:'8px'}}>
            <FaJira style={{marginRight:'3px'}} />
           <h1 style={{display: 'inline-block'}}>Jira</h1>
         </div>
    ),
    whatsapp:(
        <div style={{ display: 'flex', alignItems: 'center', gap:'8px'}}> 
        <FaWhatsapp style={{marginRight:'3px'}} />  
        <h1 style={{display: 'inline-block'}}>WhatsApp</h1>
        </div>
    ),
}