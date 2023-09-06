import Loading_icon from '../../assets/img/Loading_icon.gif'

let Loader = ()=>{
    return (
       <div className="m-auto align-items-center">
         <img src={Loading_icon} alt="" className='img img-fluid d-block m-auto ' />
       </div>
    )
}

export default Loader