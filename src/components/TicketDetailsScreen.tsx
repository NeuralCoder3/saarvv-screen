import React from "react";
import "./TicketDetailsScreen.css";
import { dateString, fullDateString, } from "./Const";
import { Clock } from "./Clock";
import { name, first_date, second_date, ticket_number, birthday, code_url } from "./Data";


const BackgroundLayer = () => {
    const text_parts = [
        'Deutschland-Ticket',
        dateString(first_date()),
        dateString(second_date()),
        name,
        ticket_number
    ]
    return (
        <div className="w-full h-full">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-red text-xl font-semibold -z-1 -rotate-6">
                    {Array.from({ length: 50 }).map((_, index) => {
                        const idx = index % text_parts.length;
                        return <p key={index} className="inline-block whitespace-nowrap m-1">
                            {text_parts.slice(idx).concat(text_parts.slice(0, idx)).join(' / ')}
                        </p>
                    })}
                </div>
            </div>
        </div>
    );
};



const TicketDetailsScreen = () => {
    return (
        <div className="flex flex-col h-screen bg-white">
            {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-green-200 opacity-50 -z-0"></div> */}
            <div className="absolute inset-0 z-0 overflow-clip opacity-10 text-blue-900">
                <BackgroundLayer />
            </div>
            <div className="relative z-10 flex flex-col h-full">
                {/* App Header */}
                {/* <div className="flex w-full items-center p-4 text-white bg-blue-600">
                <h1 className="text-xl font-semibold">Deutschland-Ticket</h1>
                <div className="flex items-center ml-auto">
                    <div className="ml-2 p-2 rounded-full text-xl">🕑</div>
                </div>
            </div> */}
                {/* Header with logo, title, and clock */}
                <div className="flex w-full items-center bg-white">
                    {/* text-white bg-blue-600"> */}
                    {/* Left Logo */}
                    <div className="w-16 h-16">
                        <img
                            src="saarvv.png" // Replace with actual logo path
                            alt="Logo"
                            className="object-contain w-full h-full"
                        />
                    </div>

                    {/* Two rows in the middle */}
                    <div className="flex-1 text-left">
                        {/* Top row: Deutschland-Ticket */}
                        <div>
                            <h1 className="m-1 text-lg font-semibold">Deutschland-Ticket</h1>
                        </div>

                        {/* Bottom row: moving logo from left to right */}
                        <div className="relative mt-1 h-8">
                            <img
                                src="saarvv.png" // Replace with actual logo path
                                alt="Logo"
                                className="w-8 h-8 absolute"
                                style={{ animation: 'moveLogo 20s linear infinite' }}
                            />
                        </div>
                    </div>

                    {/* Right Clock */}
                    <div className="flex items-center ml-auto justify-center p-1">
                        {/* <span className="text-sm mr-2">14:08</span> */}
                        {/* <div className="p-2 rounded-full text-5xl">🕑</div> */}
                        <Clock width="56px" height="56px" />
                    </div>
                </div>

                {/* QR Code and Ticket Information */}
                <div className="flex flex-col items-center p-4">
                    {/* QR Code Image Placeholder */}
                    <div className="w-full flex justify-center mb-4">
                        <img
                            src={code_url()} // Replace with actual QR code path
                            alt="QR Code"
                            className="w-64 h-64 object-contain"
                        />
                    </div>

                    {/* Ticket Info */}
                    <div className="flex items-center justify-between w-full mt-4">
                        <div className="text-left w-full font-bold text-xl">
                            <p>{name()}</p>
                            <p>Geburtstag: {birthday()}</p>

                            <h2 className="mt-4">Deutschland-Ticket</h2>
                            <p>Gültigkeit ab: </p>
                            <p>{fullDateString(first_date())}</p>
                        </div>
                        <div className="text-right mt-auto">
                            <img
                                src="D-Ticket_Logo.svg.png"
                                alt="D-Ticket Logo"
                                className="w-20"
                            />
                        </div>
                    </div>

                    {/* D-Ticket Info very small */}
                    <div className="w-full mt-4 text-xs">
                        <p className="font-bold">Deutschlandweit im ÖPNV bei allen am D-Ticket teilnehmenden Unternehmen und Verbünde gültig, sowie in allen Nahverkehrszügen (IRE, RE, RB, S).</p>
                        <p className="mt-2">Abonnement ausgestellt durch das Abo-Center der SNS GmbH</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketDetailsScreen;
