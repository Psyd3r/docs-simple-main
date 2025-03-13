import { FaHome, FaPlus } from 'react-icons/fa'
import { LuRocket } from "react-icons/lu"
import { FaBookBookmark } from "react-icons/fa6";
import Image from 'next/image'
import { LuLayoutPanelLeft } from "react-icons/lu";



export default {  
  index: (
      <div style={{ display: 'flex', alignItems: 'center', gap:'8px'}}>
        <LuRocket style={{marginRight:'3px'}} />
        <h1 style={{display: 'inline-block'}}>Getting Started</h1>
      </div>
    ),
    guide: (
      <div style={{ display: 'flex', alignItems: 'center', gap:'8px'}}>
        <FaBookBookmark style={{marginRight:'3px'}} />
        <h1 style={{display: 'inline-block'}}>User Guide</h1>
      </div>
    ),
    paineis:(
      <div style={{display: 'flex', alignItems: 'center', gap:'8px'}}>
      <LuLayoutPanelLeft style={{marginRight: '3px'}}/>
      <h1>Menus</h1>
      </div>
    ),

    
  }

