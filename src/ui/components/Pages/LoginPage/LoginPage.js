import React from 'react'
import { add, fetchUsers } from '../../../../data/state/usersSlice';
import { useFetchSelector } from '../../../hooks/reduxHooks';
import ImagedSelect from "../../Selects/ImagedSelect";
import ImagedOption from "../../Selects/ImagedOption";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { login } from "../../../../data/state/authSlice";


export default function LoginPage() {

    const { users, loading } = useFetchSelector(
        state => state.users,
        fetchUsers,
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();


    return (
        <div>
            <ImagedSelect value={
                loading ?
                    "Loading"
                    :
                    "Select a User"
            } onChange={(e) => {

                console.log(users[e.target.value]);
                dispatch(login(users[e.target.value]));
                navigate("/")
            }}>

                {
                    loading ?
                        <option disabled>
                            Loading
                        </option>
                        :
                        <>
                            <option disabled>Select a User</option>
                            {
                                Object.values(users).map(user =>
                                    <ImagedOption key={user.id} value={user} />
                                )
                            }
                        </>
                }
            </ImagedSelect>
        </div>
    )
}
