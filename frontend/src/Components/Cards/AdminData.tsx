
import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function AdvancedDemo() {
    return (
        <div className="card flex justify-content-center">
            <Card title = 'Details' className="md:w-25rem">
                {/* <div className="container flex flex-column"> */}
                    <div className='name bg-primary w-full flex justify-content-evenly mt-2 w-6 h-3rem'>
                        <div className="key text-left" style={{backgroundColor:'red'}}>name :</div>
                        <div className="val">Vicky</div>
                    </div>
                    <div className='name w-full flex justify-content-evenly mt-5 w-6 text-left'>
                        <div className="key align-items-start text-left">Email</div>
                        <div className="val">Vicky</div>
                    </div>
                    <div className='name w-full flex justify-content-evenly mt-5 w-6 text-left'>
                        <div className="key text-left">Total Faculties</div>
                        <div className="val">Vicky</div>
                    </div>
                    <div className='name w-full flex justify-content-evenly mt-5 w-6 text-left'>
                        <div className="key text-left">Total Departments</div>
                        <div className="val">Vicky</div>
                    </div>
                    <div className='name w-full flex justify-content-evenly mt-5 w-6 text-left'>
                        <div className="key text-left">Total Subjects</div>
                        <div className="val">Vicky</div>
                    </div>
                {/* </div> */}
            </Card>
        </div>
    )
}
        