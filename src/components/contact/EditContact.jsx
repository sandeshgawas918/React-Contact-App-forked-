import { useEffect, useState } from "react"
import { Link, useParams, useNavigate, Navigate } from "react-router-dom"
import { getAllGroup, getSingleContact, updateContact } from "../../services/ContactServices"
import Loader from "./Loader"

let EditContact = () => {

    let { contactId } = useParams()

    let navigate = useNavigate()

    let [state, setState] = useState({
        contact: {
            name: '',
            photo: '',
            mobile: '',
            email: '',
            title: '',
            company: '',
            groupId: ''
        },
        group: [],
        loading: false
    })

    useEffect(() => {

        setState({ ...state, loading: true })
        getSingleContact(contactId).then((resContact) => {
            getAllGroup().then((resGroup) => {
                setState((state) => ({
                    ...state,
                    contact: resContact.data,
                    group: resGroup.data,
                    loading: false
                }))
            })
        }).catch()

    }, [contactId])

    let getValues = () => {
        setState((state) => ({
            ...state,
            contact: {
                ...state.contact,
                [event.target.name]: event.target.value
            }
        }))
    }

    let updateForm = (event) => {
        event.preventDefault()
        updateContact(state.contact, contactId).then((res) => {
            navigate('/')
        }).catch()
    }

    return (
        <>
            <div className="container mt-4">
                <pre>{JSON.stringify(state.contact)}</pre>
                <div className="row">
                    <div className="h5 text-primary">Update Contact here</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ad accusantium expedita iusto quisquam neque velit quibusdam labore molestiae deleniti!</p>
                </div>

                {
                    state.loading ? <Loader /> :
                        <div className="row">
                            <form action="" onSubmit={updateForm} >
                                <div className="row">
                                    <div className="col-md-5 bg-light shadow-lg p-4">
                                        <input onChange={() => { getValues() }} name="name" value={state.contact.name} type="text" placeholder='Name' className='form-control m-2' />
                                        <input onChange={() => { getValues() }} name="photo" value={state.contact.photo} type="text" placeholder='Photo url' className='form-control m-2' />
                                        <input onChange={() => { getValues() }} name="mobile" value={state.contact.mobile} type="text" placeholder='mobile' className='form-control m-2' />
                                        <input onChange={() => { getValues() }} name="email" value={state.contact.email} type="text" placeholder='email' className='form-control m-2' />
                                        <input onChange={() => { getValues() }} name="company" value={state.contact.company} type="text" placeholder='company' className='form-control m-2' />
                                        <input onChange={() => { getValues() }} name="title" value={state.contact.title} type="text" placeholder='title' className='form-control m-2' />
                                        <select onChange={() => { getValues() }} name="groupId" value={state.contact.groupId} id="" className='form-control m-2' >
                                            <option value="">Select Group</option>
                                            {
                                                state.group.map((grp) => {
                                                    return (
                                                        <option key={grp.id} name="groupId" value={grp.id}>{grp.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                        <button className='btn btn-primary m-2'>Update</button>
                                        <Link to='/contacts/list' className='btn btn-dark m-2'>Cancel</Link>
                                    </div>
                                    <div className="col-md-5">
                                        <img src={state.contact.photo} alt="" className="img-fluid p-5" />
                                    </div>
                                </div>
                            </form>
                        </div>

                }

            </div>
        </>
    )
}

export default EditContact
