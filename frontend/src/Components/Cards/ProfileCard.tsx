
import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function ProfileCard() {
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button label="Update profile" icon="pi pi-check" />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title="Title" subTitle="Subtitle" footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
                    Hi Im Vicky
                </p>
            </Card>
        </div>
    )
}
        