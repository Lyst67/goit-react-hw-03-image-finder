
import { ThreeDots  } from 'react-loader-spinner'

export const Loader = () => {
    return (
      <div className='loader'>
          <ThreeDots  style={{
                height: "80",
              width: "80",
              radius: "9",
              color:'green',
              ariaLabel: 'three-dots-loading',     
              }} 
            />     
      </div>
              
    ) 
}

