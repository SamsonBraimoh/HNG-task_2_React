import React from 'react';
import '../App.css'

export default function TicketView({ticket, onClose}){

    if (!ticket) return null;

    return(
        <>
    <div className="view-overlay">
      <div className="view-container">
        <h2>Ticket Details</h2>
        <div className="ticket-details">
          <p><strong>Title:</strong> {ticket.title}</p>
          <p><strong>Description:</strong> {ticket.description}</p>
          <p><strong>Status:</strong> 
            <span className={`status-tag ${ticket.status.toLowerCase().replace(" ", "-")}`}>
              {ticket.status}
            </span>
          </p>
          <p><strong>Created:</strong> {ticket.date || "N/A"}</p>
        </div>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
        </>
    );
};