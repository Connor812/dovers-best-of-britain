import React from "react";
import { Dropdown } from "react-bootstrap";

function Header() {

    function updateOnlineStatus(status) {
         
    }

    return (
        <>
            <nav className="admin-header">
                <ul className="time-regular m-0">
                    <h2 className="m-0">
                        Dover's Best Of Britain Admin
                    </h2>
                </ul>
                <Dropdown>
                    <Dropdown.Toggle className="change-status-btn" id="dropdown-basic">
                        Change Online Shopping
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => updateOnlineStatus("off")}>Off</Dropdown.Item>
                        <Dropdown.Item onClick={() => updateOnlineStatus("pickup")}>Pickup</Dropdown.Item>
                        <Dropdown.Item onClick={() => updateOnlineStatus("shipping and pickup")}>Shipping And Pickup</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </nav>
        </>
    );
}

export default Header;
