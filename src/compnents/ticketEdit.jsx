import React, { useEffect, useState } from "react";


export default function TicketEdit({ticket, onUpdate, onClose}){
        
        const [title, setTitle] = useState(ticket?.title || "");
        const [description, setDescription] = useState(ticket?.description || "");
        const [status, setStatus] = useState(ticket?.status || "open");
        const [error, setError] = useState("");

        useEffect(() => {
            if(ticket){
                setTitle(ticket.title)
                setDescription(ticket.description)
                setStatus(ticket.status)
            }
        }, [ticket]);

        const handleUpdate = (e) => {
                e.preventDefault();

                if(!title || !description){
                    setError("***please, add title and description");
                    return;
                }
                const updatedTicket = {
                    ...ticket,
                    title,
                    description,
                    status,
                };
            onUpdate(updatedTicket);
        };


    return(
        <>
            <main className="root modal-overlay">
                <main className="formContainer" 
                    style={{marginTop: "0", backgroundColor: 'white', borderRadius: '10px', border: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.2)'}} >
                    <form action="" onSubmit={handleUpdate} className="loginForm">
                            <label htmlFor="title">Title</label>
                        <input 
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <label htmlFor="description">Description</label>
                        <textarea 
                            name="" 
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            style={{height: '50px'}}
                        ></textarea>

                        <label htmlFor="status">Status</label>
                        <select 
                        name="" 
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}>
                            <option value="open">Open</option>
                            <option value="in progress">In progress</option>
                            <option value="closed">Closed</option>
                        </select>
                        
                        {/* <div style={{display: 'flex', justifyContent: 'center', gap: '20px'}}> */}
                            <button type="submit">Save</button>
                            <button onClick={onClose} style={{float: 'right'}}>Close</button>
                        {/* </div> */}
                    </form>
                    <p style={{color: 'red', fontStyle: 'italic'}}>{error}</p>
                </main>
            </main>   
        </>
    )
}