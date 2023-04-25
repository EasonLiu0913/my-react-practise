import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getUsers } from '../api/users';
import UserTable from './UserTable';

const Users = () => {
    const [userSelectObj, setUserSelectObj] = useState([]);

    const queryClient = useQueryClient();
    const {
        isLoading,
        isError,
        error,
        data: users,
    } = useQuery('users', getUsers);

    return (
        <>
            <table className="m-5">
                <tbody>
                    {users &&
                        users.results.map((user) => {
                            return (
                                <UserTable
                                    user={user}
                                    key={user.email}
                                    userSelectObj={userSelectObj}
                                    setUserSelectObj={setUserSelectObj}
                                />
                            );
                        })}
                </tbody>
            </table>
        </>
    );
};

export default Users;
