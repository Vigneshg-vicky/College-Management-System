
import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

interface PropsInterface {
    name: string,
    email: string,
    departments: number,
    students: number,
    faculty: number,
}

export default function AdvancedDemo(props: PropsInterface) {
    return (
        <div className="card flex justify-content-center">
            <Card title='Details' className="md:w-25rem">
                {/* <div className="container flex flex-column"> */}
                <div className='name w-full flex justify-content-between align-items-start mt-2 h-3rem' style={{ width: 'fit-content !important' }}>
                    <div className="key text-left">name :</div>
                    <div className="val pl-5">{props.name}</div>
                </div>
                <div className='name w-full flex justify-content-between mt-5 text-left'>
                    <div className="key align-items-start text-left">Email:</div>
                    <div className="val pl-5">{props.email}</div>
                </div>
                <div className='name w-full flex justify-content-between mt-5 text-left'>
                    <div className="key text-left">Total Students:</div>
                    <div className="val pl-5">{props.students}</div>
                </div>
                <div className='name w-full flex justify-content-between mt-5 text-left'>
                    <div className="key text-left">Total Departments:</div>
                    <div className="val pl-5">{props.departments}</div>
                </div>
                <div className='name w-full flex justify-content-between mt-5 text-left'>
                    <div className="key text-left">Total Faculties:</div>
                    <div className="val pl-5">{props.faculty}</div>
                </div>
                {/* </div> */}
            </Card>
        </div>
    )
}
