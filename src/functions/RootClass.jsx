import { useLocation } from 'react-router-dom'

function rootClass(){
    const { pathname } = useLocation();
    document.getElementById('root').className=''
    if (pathname === '/') {
        document.getElementById('root').classList.add('login')   
    }else if(pathname ==='/register'){       
        document.getElementById('root').classList.add('register')  
    }else if(pathname ==='/home'){       
        document.getElementById('root').classList.add('home')  
    }else if(pathname ==='/heritage'){       
        document.getElementById('root').classList.add('heritage')  
    }else if(pathname ==='/agenda'){       
        document.getElementById('root').classList.add('agenda')  
    }else if(pathname ==='/profile'){       
        document.getElementById('root').classList.add('profile')  
    }
    
}
export default rootClass