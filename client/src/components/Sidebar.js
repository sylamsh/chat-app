import React from 'react'
import { Tab, Nav} from 'react-bootstrap'

const CONVERSERATION_KEY = 'conversations'
const CONTACTS = 'contacts'


export default function Sidebar() {
    return (
        <div>
            <Tab.Container>
                <Nav variant='tabs' style='justify-content-center'>
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
