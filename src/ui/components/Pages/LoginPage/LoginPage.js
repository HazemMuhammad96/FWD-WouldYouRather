import React from 'react'
import { fetchUsers } from '../../../../data/store/usersSlice';
import { useFetchSelector } from '../../../hooks/reduxHooks';
import ImagedSelect from "../../Selects/ImagedSelect";
import ImagedOption from "../../Selects/ImagedOption";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { login } from "../../../../data/store/authSlice";
import PageSection from "../../PageSection/PageSection";
import "./LoginPage.css"


export default function LoginPage() {

    const { users, loading } = useFetchSelector(
        state => state.users,
        fetchUsers,
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();


    return (
        <PageSection
            header="Login"
        >
            <div className='loginPage'>

                <h2>Welcome To
                    <span style={{
                        color: 'var(--colorPrimary)'
                    }}>
                        {" Would You Rather "}
                    </span>
                    Game.
                </h2>

                <ImagedSelect value={
                    loading ?
                        "Loading"
                        :
                        "Who are you?"
                } onChange={(e) => {

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
                                <option disabled>Who are you?</option>
                                {
                                    Object.values(users).map(user =>
                                        <ImagedOption key={user.id} value={user} />
                                    )
                                }
                            </>
                    }
                </ImagedSelect>

            </div>
        </PageSection>
    )
}
