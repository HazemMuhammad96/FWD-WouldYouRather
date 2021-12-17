import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addQuestion } from '../../../../data/state/questionsSlice';
import NewQuestionCard from '../../Cards/NewQuestionCard/NewQuestionCard'
import PageSection from '../../PageSection/PageSection'

export default function AddQuestionPage() {

    const { user } = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const [question, setQuestion] = React.useState({
        optionOneText: "",
        optionTwoText: "",
    });

    const navigate = useNavigate();

    return (
        <PageSection
            header={"Ask a Question"}
        >
            <NewQuestionCard
                user={user}
                onChange={(q) => setQuestion(q)}
                onFinish={() => {
                    dispatch(addQuestion({
                        options: question,
                        onFinish: () => {
                            navigate("/");
                        }
                    }));
                }}

            />
        </PageSection>
    )
}
