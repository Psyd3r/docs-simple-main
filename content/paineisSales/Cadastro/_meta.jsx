import { FaHome, FaPlus, FaUserEdit, FaWallet    } from 'react-icons/fa'
import { LuRocket } from "react-icons/lu"
import { FaBookBookmark } from "react-icons/fa6";
import Image from 'next/image'
import { LuLayoutPanelLeft } from "react-icons/lu";
import { FaAlignLeft } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

import { MdAttachMoney } from "react-icons/md";

 


export default {  
    Cliente:(
        <div style={{ display: 'flex', alignItems: 'center', gap:'8px'}}>
        <FaUserEdit style={{marginRight:'3px'}} />
        <h1 style={{display: 'inline-block'}}>Clientes</h1>
      </div>
    ), 
    Tab_preco:(
      <div style={{ display: 'flex', alignItems: 'center', gap:'8px'}}>
      <MdAttachMoney style={{marginRight:'3px'}} />
      <h1 style={{display: 'inline-block'}}>Tabela de Preço</h1>
    </div>
    ),
    Cart_de_Cliente:(
        <div style={{ display: 'flex', alignItems: 'center', gap:'8px'}}>
        <FaWallet style={{marginRight:'3px'}} />
        <h1 style={{display: 'inline-block'}}>Carteira de Cliente</h1>
      </div>
    ),
    
  }

