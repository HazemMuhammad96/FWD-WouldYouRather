import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { fetchQuestions, selectList } from '../questionsSlice'
import { useFetchSelector } from '../../../ui/hooks/reduxHooks'
import QuestionCard from './QuestionListCard/QuestionListCard';
import PageSection from '../../common/PageSection/PageSection';
import './QuestionsListPage.css';

export default function QuestionsPage() {

    const { questions, loading } = useFetchSelector(
        selectList,
        fetchQuestions,
        document.user
    )

    const tabs = {
        answered: {
            tabName: "answered",
            filterFunction: (it) => it.answered,
            order: 2,
        },
        unanswered: {
            tabName: "unanswered",
            filterFunction: it => !it.answered,
            order: 1,
        }
    }
    const [tab, setTab] = useState("unanswered");

    const navigate = useNavigate();
    return (
        <PageSection
            header="Questions"
            loading={loading}
            headerExtra={
                <div className="tabs">

                    <div className="tabs">

                    </div>
                    {
                        Object.values(tabs)
                            .sort((a, b) => a.order - b.order)
                            .map(it =>
                                <button key={it.tabName}
                                    className={`chip ${tab == it.tabName ? "active" : ""}`}
                                    onClick={() => setTab(it.tabName)}
                                >
                                   
                                    {it.tabName.replace(/^./, str => str.toUpperCase())}
                                </button>
                            )

                    }
                </div>
            }
        >


            <div className="questionsGrid">
                {
                    !loading && Object.values(questions)
                        .sort((a, b) => b.timestamp - a.timestamp)
                        .map(
                            it => tabs[tab].filterFunction(it) &&
                                <QuestionCard
                                    key={it.id}
                                    question={it}
                                    mode="static"
                                    action={
                                        () => navigate(`/questions/${it.id}`)
                                    }
                                />
                        )
                }
            </div>
        </PageSection>
    )
}
