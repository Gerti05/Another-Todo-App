import React from 'react';
import ToDoComponentBody from "../components/ToDoComponentBody";
import '../styles/Home.css'

export default function Home() {
    return (
        <div className="background">
            <div className="ToDoBody">
            <ToDoComponentBody />
            </div>
        </div>
    )
}
