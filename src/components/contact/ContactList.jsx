import { Link , useParams } from "react-router-dom"
import { deleteContact, getAllContacts } from "../../services/ContactServices"
import { useEffect, useState } from "react"
import Loader from "./Loader"

let ContactList = () => {

    let[query,setQuery]=useState({
        text:''
    })

    let updateText = (event)=>{
        setQuery((query)=>({
            text:event.target.value
        }))

        let myFilter = state.allContacts.filter((contact)=>{
            return contact.name.toLowerCase().includes(event.target.value.toLowerCase())
        })

        setState((state)=>({
            ...state,
            filteredContact:myFilter
        }))
    }

    let [state, setState] = useState({
        loading: false,
        allContacts: [],
        filteredContact:[]
    })

    useEffect(() => {
        setState({ ...state, loading: true });
        getAllContacts().then((response) => {
            setState((state) => ({
                ...state,
                allContacts: response.data,
                loading: false,
                filteredContact: response.data
            }))
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    let deleteMyContact = (contactId)=>{
        deleteContact(contactId).then( (res)=>{
            setState({...state,loading:true})
            getAllContacts().then((res)=>{
                setState((state)=>({
                    ...state,
                    allContacts:res.data,
                    loading:false,
                    filteredContact: response.data
                }))
            })
        }
        ).catch()
    }

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="h5">Phone Directory
                            <Link to={"/contacts/add"} className="btn btn-success mx-3"> Add New </Link>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempore nihil sequi pariatur consequatur hic, nisi aspernatur incidunt aliquam laboriosam?</p>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col">
                                {/* <pre>{JSON.stringify(query)}</pre> */}
                                <input onChange={updateText} value={query.text} type="text" name="" id="" placeholder="Search Contact" className="form-control" />
                            </div>
                            <div className="col">
                                <button className="btn btn-dark" >Search</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <div className="row">
                            {
                                state.loading ? <Loader /> :
                                    state.filteredContact.map((contact) => {
                                        return (
                                            <div className="col-md-6" key={contact.id}>
                                                <div className="card mt-3" >
                                                    <div className="card-body bg-light p-3 shadow-lg">
                                                        <div className="row align-items-center justify-content-center">
                                                            <div className="col-md-2 col-sm-6 align-items-center justify-content-center">
                                                                <img src={contact.photo} alt="" className="" width={80} height={80} />
                                                            </div>
                                                            <div className="col-md-8">
                                                                <ul className="list-group">
                                                                    <li className="list-group-item">Name : {contact.name}</li>
                                                                    <li className="list-group-item">Mobile : {contact.mobile}</li>
                                                                    <li className="list-group-item">Email : {contact.email}</li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-1 justify-content-start">
                                                                <Link to={`/contacts/view/${contact.id}`} className="btn btn-warning m-1"><i className="fa fa-eye"></i></Link>
                                                                <Link to={`/contacts/edit/${contact.id}`} className="btn btn-primary m-1"><i className="fa fa-pen"></i></Link>
                                                                <button className="btn btn-danger m-1" onClick={()=>{deleteMyContact(contact.id)}}><i className="fa fa-trash"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactList