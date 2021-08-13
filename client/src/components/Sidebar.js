import React, { useState } from 'react'
import { Tab, Nav} from 'react-bootstrap'

const CONVERSERATION_KEY = 'conversations'
const CONTACTS = 'contacts'


export default function Sidebar() {
    const [activeKey, setActiveKey] = useState(CONVERSERATION_KEY);

    return (
        <div style={{width:'250px'}} className="d-flex flex-column">
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSERATION_KEY}>Conversations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS}>Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Tab.Container>
        </div>
    )
}
