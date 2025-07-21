import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import '../../styles/user/MyProfilePage.css';

const initialUser = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '9876543210',
    address: {
        street: '',
        city: '',
        state: '',
        postalCode: ''
    }
};

const initialLicence = {
    image: null,
    number: '',
    expiry: '',
};

function MyProfilePage() {
    const [user, setUser] = useState(initialUser);
    const [editingUser, setEditingUser] = useState(false);

    const [licence, setLicence] = useState(initialLicence);
    const [licencePreview, setLicencePreview] = useState(null);
    const [editingLicence, setEditingLicence] = useState(false);

    // User info handlers
    const handleUserChange = e =>
        setUser({ ...user, [e.target.name]: e.target.value });

    const handleAddressChange = e =>
        setUser({
            ...user,
            address: {
                ...user.address,
                [e.target.name]: e.target.value
            }
        });

    const handleUserEdit = () => setEditingUser(true);
    const handleUserSave = () => setEditingUser(false);
    const handleUserCancel = () => {
        setUser(initialUser);
        setEditingUser(false);
    };

    // Licence info handlers
    const handleLicenceEdit = () => setEditingLicence(true);
    const handleLicenceSave = () => setEditingLicence(false);
    const handleLicenceCancel = () => {
        setLicence(initialLicence);
        setLicencePreview(null);
        setEditingLicence(false);
    };

    const handleLicenceChange = e => {
        setLicence({
            ...licence,
            [e.target.name]: e.target.value
        });
    };

    const handleLicenceImageChange = e => {
        const file = e.target.files[0];
        if (file) {
            setLicence({ ...licence, image: file });
            setLicencePreview(URL.createObjectURL(file));
        } else {
            setLicence({ ...licence, image: null });
            setLicencePreview(null);
        }
    };

    return (
        <> <Navbar />
            <div className="my-profile-container">
                {/* User Info Card */}
                <div className="profile-card">
                    <div className="profile-header">
                        <h2>User Information</h2>
                        {!editingUser ? (
                            <button className="profile-edit-btn" onClick={handleUserEdit}>Edit</button>
                        ) : (
                            <div>
                                <button className="profile-save-btn" onClick={handleUserSave}>Save</button>
                                <button className="profile-cancel-btn" onClick={handleUserCancel}>Cancel</button>
                            </div>
                        )}
                    </div>
                    <div className="profile-fields">
                        <label>
                            First Name:
                            <input
                                name="firstName"
                                type="text"
                                value={user.firstName}
                                onChange={handleUserChange}
                                disabled={!editingUser}
                            />
                        </label>
                        <label>
                            Last Name:
                            <input
                                name="lastName"
                                type="text"
                                value={user.lastName}
                                onChange={handleUserChange}
                                disabled={!editingUser}
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                name="email"
                                type="email"
                                value={user.email}
                                onChange={handleUserChange}
                                disabled={!editingUser}
                            />
                        </label>
                        <label>
                            Phone Number:
                            <input
                                name="phone"
                                type="tel"
                                value={user.phone}
                                onChange={handleUserChange}
                                disabled={!editingUser}
                            />
                        </label>
                        <label>
                            Street Address:
                            <input
                                name="street"
                                type="text"
                                value={user.address.street}
                                onChange={handleAddressChange}
                                disabled={!editingUser}
                            />
                        </label>
                        <label>
                            City:
                            <input
                                name="city"
                                type="text"
                                value={user.address.city}
                                onChange={handleAddressChange}
                                disabled={!editingUser}
                            />
                        </label>
                        <label>
                            State:
                            <input
                                name="state"
                                type="text"
                                value={user.address.state}
                                onChange={handleAddressChange}
                                disabled={!editingUser}
                            />
                        </label>
                        <label>
                            Postal Code:
                            <input
                                name="postalCode"
                                type="text"
                                value={user.address.postalCode}
                                onChange={handleAddressChange}
                                disabled={!editingUser}
                            />
                        </label>
                    </div>
                </div>

                {/* Licence Card */}
                <div className="licence-card">
                    <div className="licence-header">
                        <h2>Driving Licence</h2>
                        {!editingLicence ? (
                            <button className="profile-edit-btn" onClick={handleLicenceEdit}>Edit</button>
                        ) : (
                            <div>
                                <button className="profile-save-btn" onClick={handleLicenceSave}>Save</button>
                                <button className="profile-cancel-btn" onClick={handleLicenceCancel}>Cancel</button>
                            </div>
                        )}
                    </div>
                    <div className="licence-fields">
                        <label>
                            Licence Image:
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleLicenceImageChange}
                                disabled={!editingLicence}
                            />
                            {licencePreview && (
                                <div className="licence-image-card">
                                    <img
                                        src={licencePreview}
                                        alt="Licence Preview"
                                        className="licence-image-preview"
                                    />
                                </div>
                            )}
                        </label>
                        <label>
                            Licence Number:
                            <input
                                name="number"
                                type="text"
                                value={licence.number}
                                onChange={handleLicenceChange}
                                disabled={!editingLicence}
                            />
                        </label>
                        <label>
                            Expiry Date:
                            <input
                                name="expiry"
                                type="date"
                                value={licence.expiry}
                                onChange={handleLicenceChange}
                                disabled={!editingLicence}
                            />
                        </label>
                    </div>
                </div>

            </div>
        </>
    );
}

export default MyProfilePage;
