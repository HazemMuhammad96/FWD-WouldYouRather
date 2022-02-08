import React from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { clearSingle, fetchSingleQuestion, selectSingle } from '../questionsSlice';
import { useFetchSelector } from '../../../hooks/reduxHooks';
import QuestionCard from './singleQuestionCard/SingleQuestionCard';
import { updateQuestion } from '../questionsSlice';
import PageSection from '../../common/section/PageSection';
import { NotFoundErrorPage } from '../../errors/ErrorPage';
import { useEffect } from 'react';
export default function SingleQuestionPage() {

    const params = useParams();
    const dispatch = useDispatch();

    const { question, loading } = useFetchSelector(
        selectSingle,
        fetchSingleQuestion,
        params.id,
        [params.id]
    )

    useEffect(() => {
        return () => {
            dispatch(clearSingle());
        }
    },[params.id, dispatch])


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
        <>
            {
                question ?
                    <PageSection
                        header={"Question's Poll"}
                        loading={loading}
                        style={{ maxWidth: "600px" }}
                    >
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
                                    update
                            }
                        />

                    </PageSection>

                    : <NotFoundErrorPage />
            }
        </>

    )
}
