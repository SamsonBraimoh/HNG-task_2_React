import {react, useState} from "react"
import '../App.css'


export default function TicketCreation({onSubmit, onClose}){
       
    const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");
        const [error, setError] = useState("");

        const handleCreation = (e) => {
            e.preventDefault();

            if(!title || !description){
                  setError("***Please, add title and description.")  
            }
            else{
                
                setError("Ticket created and added to log")
                const newTicket = { 
                    id: Date.now(),
                    title,
                    description,
                    status: "open",
                };
                onSubmit(newTicket); // ✅ send new ticket to dashboard
                setTitle("");
                setDescription("");
                setError("");
                onClose(); // ✅ close modal after submission
            };

        };


    return(
        <>
          <main className="root modal-overlay">
                <main className="formContainer" 
                    style={{marginTop: "0", backgroundColor: 'white', borderRadius: '10px', border: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.2)'}} >
                    <form action="" onSubmit={handleCreation} className="loginForm">
                        {/* <div style={{display: "flex", justifyContent: 'space-between'}}> */}
                            <label htmlFor="title">Title</label>
                        {/* </div> */}
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
                        {/* <div style={{display: 'flex', justifyContent: 'center', gap: '20px'}}> */}
                            <button type="submit">Create</button>
                            <button onClick={onClose} style={{float: 'right'}}>Close</button>
                        {/* </div> */}
                    </form>
                    <p style={{color: 'red', fontStyle: 'italic'}}>{error}</p>
                </main>
            </main>   
        </>
    );
}