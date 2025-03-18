import { FaHome, FaPlus } from 'react-icons/fa'
import { LuRocket } from "react-icons/lu"
import { FaBookBookmark } from "react-icons/fa6";
import Image from 'next/image'
import { LuLayoutPanelLeft } from "react-icons/lu";
import { FaAlignLeft } from "react-icons/fa";


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
        <h1 style={{display: 'inline-block'}}>Guia</h1>
      </div>
    ),

    separator1: {type: 'separator'},
    
    paineis:(
      <div style={{display: 'flex', alignItems: 'center', gap:'8px'}}>
      <LuLayoutPanelLeft style={{marginRight: '3px'}}/>
      <h1>Menus</h1>
      </div>
    ),
    elementos:(
      <div style={{ display: 'flex', alignItems: 'center', gap:'8px'}}>
      <FaAlignLeft style={{marginRight:'3px'}} />
      <h1 style={{display: 'inline-block'}}>Elementos</h1>
    </div>
    ),


    
  }

