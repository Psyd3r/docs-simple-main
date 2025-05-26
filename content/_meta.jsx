import { FaHome, FaPlus } from 'react-icons/fa'
import { LuRocket } from "react-icons/lu"
import { FaBookBookmark, FaLocationDot  } from "react-icons/fa6";
import Image from 'next/image'
import { LuLayoutPanelLeft } from "react-icons/lu";
import { FaAlignLeft } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { MdContactSupport } from "react-icons/md";
import { GrHelpBook } from "react-icons/gr";



export default {  
  index: (
      <div style={{ display: 'flex', alignItems: 'center', gap:'8px'}}>
        <LuRocket style={{marginRight:'3px'}} />
        <h1 style={{display: 'inline-block'}}>Começando</h1>
      </div>
    ),
    
    guide: (
      <div style={{ display: 'flex', alignItems: 'center', gap:'8px'}}>
        <FaBookBookmark style={{marginRight:'3px'}} />
        <h1 style={{display: 'inline-block'}}>Guia do usuário</h1>
      </div>
    ),

    separator1: {type: 'separator'},
    sales:(
      <div style={{display: 'flex', alignItems: 'center', gap:'8px'}}>
      <TiShoppingCart style={{marginRight: '3px'}}/>
      <h1>Sales</h1>
      </div>
    ),

    paineisSales:(
      <div style={{display: 'flex', alignItems: 'center', gap:'8px'}}>
      <LuLayoutPanelLeft style={{marginRight: '3px'}}/>
      <h1>Menus</h1>
      </div>
    ),
    


  separator3: {type: 'separator'},

    suporte:(
      <div style={{ display: 'flex', alignItems: 'center', gap:'8px'}}>
      <MdOutlineSupportAgent style={{marginRight:'3px'}} />
      <h1 style={{display: 'inline-block'}}>Central de Suporte</h1>
    </div>
    ),
    canais:(
      <div style={{ display: 'flex', alignItems: 'center', gap:'8px'}}>
      < GrHelpBook style={{marginRight:'3px'}} />
      <h1 style={{display: 'inline-block'}}>Ajuda</h1>
    </div>
    )
  }

    