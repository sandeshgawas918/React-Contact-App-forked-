import axios from "axios";
let url = `http://localhost:9000`

export const getAllContacts = () => {
    let dataUrl = `${url}/Contacts`
    return axios.get(dataUrl)
}

export const getSingleContact = (contactId) => {
    let dataUrl = `${url}/Contacts/${contactId}`
    return axios.get(dataUrl)
}

export const getGroup = (contact) => {
    let dataUrl = `${url}/Groups/${contact.groupId}`
    return axios.get(dataUrl)
}

export const getAllGroup = () => {
    let dataUrl = `${url}/Groups`
    return axios.get(dataUrl)
}

export const addContact = (contact) => {
    let dataUrl = `${url}/Contacts`
    return axios.post(dataUrl, contact)
}

export const updateContact = (contact, contactId) => {
    let dataUrl = `${url}/Contacts/${contactId}`
    return axios.put(dataUrl,contact)
}

export const deleteContact = (contactId)=>{
    let dataUrl = `${url}/Contacts/${contactId}`
    return axios.delete(dataUrl)
}