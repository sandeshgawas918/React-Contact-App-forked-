import { useEffect, useState } from "react"
import { Link , Navigate, useNavigate } from "react-router-dom"
import { addContact, getAllGroup} from "../../services/ContactServices"

let AddContact = () => {

    let navigate = useNavigate()

    let [state, setState] = useState({
        contacts: {
            name: '',
            photo: '',
            mobile: '',
            email: '',
            title: '',
            company: '',
            groupId: ''
        },
        groups: []
    })

    useEffect(() => {
        getAllGroup().then((res) => {
            setState((state) => ({
                ...state,
                groups: res.data
            }))
        }).catch((err) => console.log(err))
    }, [])

    let getValues = () => {
        setState((state) => ({
            ...state,
            contacts: {
                ...state.contacts,
                [event.target.name]: event.target.value
            }
        }))
    }

    let submitData = (event)=>{
        event.preventDefault();
        addContact(state.contacts).then(()=>{
           navigate('/contacts/list' , {replace:true})
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <>
            <pre>{JSON.stringify(state.contacts)}</pre>
            <div className="container mt-4">
                <div className="row">
                    <div className="h5 text-success">Create Contact here</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ad accusantium expedita iusto quisquam neque velit quibusdam labore molestiae deleniti!</p>
                </div>

                <div className="row">
                    <form action="" onSubmit={submitData}>
                        <div className="row">
                            <div className="col-md-5 bg-light shadow-lg p-4">
                                <input onChange={() => { getValues() }} name="name" value={state.contacts.name} type="text" placeholder='Name' className='form-control m-2' />
                                <input onChange={() => { getValues() }} name="photo" value={state.contacts.photo} type="text" placeholder='Photo url' className='form-control m-2' />
                                <input onChange={() => { getValues() }} name="mobile" value={state.contacts.mobile} type="text" placeholder='mobile' className='form-control m-2' />
                                <input onChange={() => { getValues() }} name="email" value={state.contacts.email} type="text" placeholder='email' className='form-control m-2' />
                                <input onChange={() => { getValues() }} name="company" value={state.contacts.company} type="text" placeholder='company' className='form-control m-2' />
                                <input onChange={() => { getValues() }} name="title" value={state.contacts.title} type="text" placeholder='title' className='form-control m-2' />
                                <select onChange={() => { getValues() }} name="groupId" id="" className='form-control m-2'>
                                    <option value="">Select Group</option>
                                    {
                                        state.groups.map((group) => {
                                            return (
                                                <>
                                                    <option key={group.id} value={group.id}>{group.name}</option>
                                                </>
                                            )
                                        })
                                    }
                                </select>
                                <button className='btn btn-success m-2'>Create</button>
                                <Link to='/contacts/list' className='btn btn-dark m-2'>Cancel</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddContact
