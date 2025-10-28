import React, { useState } from "react";
import TicketCreation from "../compnents/ticketCreation";
import TicketEdit from "../compnents/ticketEdit";
import '../App.css';

export default function Dashboard () {

    const [tickets, setTickets] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null);

    const handleAddTicket = (ticket) => {
        setTickets ([...tickets, ticket]);
        setShowForm(false);
    };

    const handleDeleteTicket = (id) => {
        const confirmed = window.confirm("Are you sure you want to delete ticket?");
        if(confirmed){
            const filteredTickets = tickets.filter((t) => t.id !== id);
            setTickets(filteredTickets);
        }
    }

    const handleEditClick = (ticket) => {
        setSelectedTicket(ticket);
        setShowEditForm(true);
    };

    const handleUpdateTicket = (updatedTicket) => {
            const updatedTickets = tickets.map((t) =>
            t.id === updatedTicket.id ? updatedTicket : t
            );
            setTickets(updatedTickets);
            setShowEditForm(false);
            setSelectedTicket(null);     
    }

    return(
        <>
            <main>
                <header style={{border: '1px solid black'}}>
                    <h1>TicketFlow.</h1>
                    <section style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                        <h2>Welcome back, name.</h2>
                        <button style={{height: '40px', border: 'none', borderRadius: '10px', color: 'white', backgroundColor: '#4F46E5'}} onClick={ () => setShowForm(true)}>+ New Ticket</button>
                    </section>
                </header>
                    {showForm &&(<TicketCreation  
                        onSubmit={handleAddTicket}
                        onClose={ () => setShowForm(false)}
                    />

                )};

                    {showEditForm && selectedTicket && (<TicketEdit
                        ticket={selectedTicket}
                        onUpdate={handleUpdateTicket}
                        onClose={() =>  setShowEditForm(false)}
                    />)}

               <section style={{padding: '20px'}}>
                     <h3>All Tickets</h3>
                     {tickets.length === 0 ? (
                    <p>No tickets yet. Click “+ New Ticket” to create one.</p>
                      ) : (
                   
                   <div className="ticketGrid">
                        
                        {tickets.map((ticket) => (
                        <div key={ticket.id} className="ticketCard">
                            <h4>{ticket.title}</h4>
                            <p>{ticket.description}</p>
                           
                            <section style={{display: 'flex', justifyContent: 'space-between'}}>
                                 <span className = {`status ${ticket.status === "open" ? "status-open" : ticket.status === "in progress" ? "status-inProgress" : "status-close"}`} >{ticket.status}</span>
                                 <section style={{display: 'flex', gap: '10px'}}>
                                    <button 
                                        onClick = {() => handleEditClick(ticket)}
                                        style = {{backgroundColor: 'white', borderRadius: '10px', fontWeight: 'bold', border: '2px solid #ccc'}}>
                                        Edit</button>
                                    <button 
                                        style = {{backgroundColor: 'white', borderRadius: '10px', fontWeight: 'bold', border: '2px solid #ccc'}}
                                        onClick={() => handleDeleteTicket(ticket.id)}>
                                        delete</button>
                                 </section>
                            </section>
                        </div>
                            ))}
                    </div>
                     )}  
               </section>
            </main>
        </>
    );
}