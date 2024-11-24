import {useContext} from 'react'
import { GLOBAL } from './Context'
const Child1 = () => {
  let val = useContext(GLOBAL)
  console.log(val);
  
  return (
    <div>
      <p>Child Component</p>
    </div>
  )
}

export default Child1
