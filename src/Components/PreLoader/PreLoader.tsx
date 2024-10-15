
import { Bars } from 'react-loader-spinner'

export default function PreLoader() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <Bars
  height="80"
  width="80"
  color="orange"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
    </div>
  )
}
