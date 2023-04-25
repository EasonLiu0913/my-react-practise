import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';

const UserTable = ({ user, updateUsers, userSelectObj, setUserSelectObj }) => {
    const { name, phone, email, picture } = user;
    function handleCheckboxChange(e) {
        setUserSelectObj({ ...userSelectObj, [user.email]: e.target.checked });
    }

    return (
        <tr
            className={
                userSelectObj && userSelectObj[email] ? 'bg-slate-300' : ''
            }
        >
            <td className="border p-5">
                <input type="checkbox" onChange={handleCheckboxChange} />
            </td>
            <td className="border">
                <img className="m-0 p-5" src={picture.thumbnail} />
            </td>
            <td className="border p-5">{name.first}</td>
            <td className="border p-5">{name.last}</td>
            <td className="border p-5">{phone}</td>
            <td className="border p-5">{email}</td>
            <td className="border p-5">
                <FontAwesomeIcon className="text-red-500" icon={faTrash} />
            </td>
        </tr>
    );
};

export default UserTable;
