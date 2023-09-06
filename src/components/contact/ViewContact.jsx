import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getGroup, getSingleContact } from "../../services/ContactServices"
import Loader from "./Loader"

let ViewContact = () => {

    let { contactId } = useParams()

    let [state, setState] = useState({
        loading: false,
        singleContact: {},
        allGroups:[]
    })

    useEffect(() => {
        setState({ ...state, loading: true })

        getSingleContact(contactId)
        .then((contactRes) => {
            getGroup(contactRes.data)
            .then((groupRes)=>{
                setState((state)=>({
                    ...state,
                    singleContact:contactRes.data,
                    loading:false,
                    allGroups:groupRes.data
                }))
            }).catch((err)=>console.log(err))
        }).catch() 
    }, [])

    return (
        <>
            <section>
                {/* <pre>{JSON.stringify(state)}</pre> */}
            {
                state.loading ? <Loader/> :
                <div className="container mt-5">
                <div className="row align-items-center justify-content-center bg-light p-4 shadow-lg">
                    <div className="col-md-3">
                        <img src={state.singleContact.photo} alt="" className='img img-fluid' width={190} height={190} />
                    </div>
                    <div className="col-md-8">
                        <ul className='list-group'>
                            <li className='list-group-item'>Name : {state.singleContact.name}</li>
                            <li className='list-group-item'>Mobile : {state.singleContact.mobile}</li>
                            <li className='list-group-item'>Email : {state.singleContact.email}</li>
                            <li className='list-group-item'>Company : {state.singleContact.company}</li>
                            <li className='list-group-item'>Title : {state.singleContact.title}</li>
                            <li className='list-group-item'>Group : {state.allGroups.name}</li>
                        </ul>
                        <Link to='/contacts/list' className='btn btn-warning mt-3'>Back</Link>
                    </div>
                </div>
            </div>
            }
            </section>
        </>
    )
}

export default ViewContact
