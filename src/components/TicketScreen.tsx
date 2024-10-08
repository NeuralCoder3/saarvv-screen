import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faInfoCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { dateString } from "./Const";
import { useNavigate } from "react-router-dom";
import { first_date, second_date } from "./Data";

const header_color = "22539f";
const d_ticket_color = "007852";
const d_ticket_color_light = "b4e0d3";
const d_ticket_bar = "0d2e25";
const no_products_color = "ffeab3";
const no_product_text = "886609";

const TicketScreen = () => {

    const first_str = dateString(first_date());
    const second_str = dateString(second_date());

    const current_date = new Date();
    const percentage = Math.round((current_date.getTime() - first_date().getTime()) / (second_date().getTime() - first_date().getTime()) * 100);

    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            {/* App Header up to border of */}
            <div className="flex w-full items-center p-4 text-white" style={{ backgroundColor: `#${header_color}` }}>
                <div className="flex items-center text-left text-xl">
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <h1 className="text-xl font-semibold ml-4 text-xl">Tickets</h1>
                <div className="flex items-center text-right ml-auto">
                    {/* white outline of a person using font-awesome outline */}
                    <div className="p-4 rounded-full text-3xl">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </div>
            </div>

            {/* main content */}
            <div className="p-4 bg-white h-full">

                {/* Ticket Card 
                    at both sides, remove a semi-circle to make it look like a ticket
                */}
                <div 
                    className="text-white rounded-lg p-4 mt-6 relative pl-8 pr-8 cursor-pointer"
                    style={{ backgroundColor: `#${d_ticket_color}`, color: `#${d_ticket_color_light}` }}
                    onClick={() => { navigate("/ticket-details") }}
                >
                    {/* <button onClick={() => { navigate("/ticket-details") }}> */}
                    {/* left and right hole of ticket */}
                    <div className="absolute top-1/2  -left-2 transform -translate-y-1/2 w-6 h-12 bg-white rounded-r-full"></div>
                    <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-6 h-12 bg-white rounded-l-full"></div>
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-lg font-semibold text-white">Deutschland-Ticket</h2>
                            <p>Deutschland-Ticket</p>
                        </div>
                        <div className="p-5 text-2xl rounded-full flex items-center justify-center w-16 h-16" style={{ backgroundColor: `#${d_ticket_color_light}`, color: `#${d_ticket_color}` }}>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="w-full rounded-full h-2 mt-2" style={{ backgroundColor: `#${d_ticket_color_light}` }}>
                            <div className="h-2 rounded-full" style={{ width: `${percentage}%`, backgroundColor: `#${d_ticket_bar}` }}></div>
                        </div>
                        <p className="text-sm text-center mt-2">
                            {/* 01.10.24 00:00 - 01.11.24 03:00 */}
                            {first_str} - {second_str}
                        </p>
                    </div>
                {/* </button> */}
                </div>

                {/* Abgelaufene Tickets Section */}
                <div className="mt-8">
                    {/* at right side of screen */}
                    <h3 className="text-sm font-bold text-right" style={{ color: `#${header_color}` }}>
                        ABGELAUFENE TICKETS
                    </h3>
                    {/* text next to icon ĺeft side */}
                    <div className="p-3 mt-2 rounded-lg flex" style={{ backgroundColor: `#${no_products_color}`, color: `#${no_product_text}` }}>
                        <div className="flex justify-between items-center m-2 text-xl">
                            <FontAwesomeIcon icon={faInfoCircle} />
                        </div>
                        <div className="mt-2">
                            <strong>Keine Produkte:</strong> Bitte aktualisieren Sie die Produktliste.
                        </div>
                    </div>
                </div>

                {/* Gutschein Einlösen Section 
                dotted border around button
                */}
                <div className="mt-8">
                    <button className="w-full border-gray-300 text-gray-500 p-2 rounded-lg border-dashed border-2 flex items-center">
                        <div className="flex justify-between items-center m-2 text-xl">
                            <FontAwesomeIcon icon={faPlusCircle} />
                        </div>
                        <div className="">
                            Gutschein einlösen
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TicketScreen;
