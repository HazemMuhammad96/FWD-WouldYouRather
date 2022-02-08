import React from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchQuestions } from '../../data/store/questionsSlice';
import { useFetchSelector } from '../../hooks/reduxHooks';
import QuestionCard from './SingleQuestionCard';
import { updateQuestion } from '../../data/store/questionsSlice';
import { Navigate } from 'react-router-dom';
import PageSection from '../common/section/PageSection';
export default function SingleQuestionPage() {

    const params = useParams();
    const { questions, loading } = useFetchSelector(
        state => state.questions,
        fetchQuestions,
    )
    const question = questions[params.id]

    const dispatch = useDispatch();

    function update(option) {

        dispatch(updateQuestion(
            {
                id: question.id,
                option: option,
                user: document.user,
            },
        ));
    }

    return (
        <PageSection
            header={"Question's Poll"}
            loading={loading}
            style={{
                maxWidth: "600px"
            }}
        >
            {question ?

                <QuestionCard
                    author={question.author}
                    style={{ width: "50%" }}
                    question={question}
                    mode={
                        question.answered ?
                            "answered" :
                            "question"
                    }
                    update={
                        question.answered ?
                            () => { } :
                            update}

                />
                :
                <Navigate to="/404" />
            }
        </PageSection>
    )
}
