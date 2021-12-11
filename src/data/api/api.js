let users = {
    sarahedo: {
        id: 'sarahedo',
        name: 'Sarah Edo',
        avatarURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA/FBMVEWTZKgKfnVHGxjktpLxyaWWZqxEFwzrwJtqPmKXZ64Af3JCFACVY6nvxqMAfnNAEgBGGhSZYqvrvJeypooAenIzAABKCQa7spY3AAAxAABlOVc+DA1TKDRDFglCExI5AACJW5dfNE1xRW5PJCx/UoZLHyCqgGeEVo7PooKPYKB6TX1iN1OCXE2NZVKbdmFaMChQJSCKZqRFd4Z2a5tYLD5vQ2nDnIC1j3VqRDhSJjFmQDXctJTPqIu0iW6he2W+l3x0TkEoAAB1NmRkc5ZYe492dJwsfXw+foBVfIiKcKByd5RlgIuBcpxwcpcygnuabKdXhIM+e4J/aKBaco/ILPLqAAAJOUlEQVR4nO2d+VfaShTHQ8hEQgIkvNpS2UVUXKuCXXy2vhbXqu/V/v//yxtQkUpm5iYkc4dz5vtLT3sqh8+569xZNAwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLa0FFyGOQ+gfDiHYXyUBETLG6FGNmChUb211pdbtmma31h5sGAtNSW1Fcdo10y2VXLfk+p12blAruXXbN0fybdt121vGojISYy3XcSc4YyTK9PK3p39zzcEiMhJnY8V3Z3DCVfe3Fg2RkK2Oa4PoHuV2WgvF6Kx1XJj1pnx1y8H+2mCRVr8UkW+k0sqiWNFZjWq/J7ntBUHsu7H4qOr9BUAkvU6UBPMasa18LJIWsD4w5OYUR5wXkCIqXhh7/pyAFFHpukj6c8Tgk/wuNgVHZDV2Fp2Sva1uKPaSAKSVf01VP3W25/fRkfyuqoStUiKA1IgDNRHJSjImpKr3sGHCNXehmEjNZEO2kskzY5Va2DghctrJ2dC0lexPEzThqLPBxpnVWqKEdk65dEpyiWXSsVxsoBk5tQTD0FRxjdGrJwpo+n3Fcg1JNgypXMWqPjgMG2BCxdwUGoaNHSiirdrgDdZ1N3aOm0BC01crEIFh2Dw5AROqVfQdWBhWd63CBzChUgth0gGFYbVgLe1VgYT1VZUIWyAnrXy0rKUs1E1tlbYxYE7a+GRRwvIu0Ii+SsmUgL7y8smIMJsF1guVuhrY4rf51RoTlr9VYIQ1dWxIPgPyTOOL9UiYLa8vgwg7yhDCetLm0jMhRYRZERtsItIFmLBybE0Is+XNfQCjMktEJwdYOFX2rClCyni6v1xt8HOOKk0N2QC0pNUd60/CbLm8ebp7tm82K0xMZZoagI9Wv1ivCceQ5XL25HS3wSiQisxqSE1c7KcApwmfQbPrZiijGvsXpC8Owuq+xSMcMe6EJh53AxsPBtj8ZAkIKeNeGKIKXQ3ARSu7lpgwG96tljaw/VR8sKRaPbYghNly2LoRva0RAjYqOwULSHga5qcl1MMnwizaeL9zYr0WizCbDf0MTD912oIkU92f5eMQlsOncPUWGqDo3MWrDCMmXGcURSzCDRHgeiggx0sZy0b7Mw6gaPTU3AsH5BBuMpYbOKf5RGeDGl8YgDEITRdj6NYTpNHK3wkSYiyjnIEgj+6zADmEx0xChO6NCExYZUUhL5eesqeM0vehhIOZ5rcYhLvsFb/07o2IDrA1j2MQ7nM+ULYRhbsUcQizvFG47EgUnrJsfoxMGN55vxixJZVQ1M+Y1a/RCfmbw3I3osQT4MZOdEL+J8p1U8A2xYfIhOx6/yip42HAFL8ZtnDiETJWFlOEUqdSwjg0K8yCyCIUndGQG4jiHd9q+OKQQ8irhiNJHg+LJ2zMQGTFoegAg9zjNYBzCcusQGQRijaGJSdT8Zn1CqvmswhFH+jXFCsXzIoY10v9z3L7NsCGWsRM80ngpnJtaDh9YSBWGIHIIhQdJJLcewPclBWILC89EZxesLclLxGFNmQFYszO27Ql3xQCHJhljGrirQ8RBhk9Ya55H5FQrQUi5CYeI9WwbVje5SHa0memwt60GT4yZRNyERGO8Tlt0TQqfHnBIaTZhhmLJYRz7aJhDWNWwyPkrDAw7iaIzpRWwzef+ISsqTDOmQXBLZlqHBueMYoizuULh7/CiOOl7GENzl43P51Gz6WMIycm3vkv0uURRq6HWXZbg3U4in8vthIKyK2HzPWFjXTLiww4gdg4i0yYZUZhF+lUDVnlZFNGseB2bSwT+h0swi0OYcQVcJY79VbRhiwn5awtOHMMtDjkEDJqRczdNaxcytsKrixFtSF36YRUD3nzKOaBmlizNrTz0JzvxDwUFeWM8IuQ3JQ/yVgO38sPJSx/E03aUG7qibYRw/cQQ0+yi7ZHab1AIRQsEBsN6PnSTfF9PZT7M8LBd8MMQQy5b7EJuKSPcmXW4S4tWIgzhCBA+SPvkUTnE0eaLfyvCcvHoEuzPsarmKDbzcuvT9a8Iix/hV1FREk1sPvbzU9LPMIzIKDpKktoNv5hE5aXwQ+BlDDiEPhey3urwCaEApp1BEICfFSIEhYK8xKivHQCfb5sTFh4poxJiNKYQp+gmxCOFY8Q6fFd0B3u8Ubii5MWynEIsZ7BJmugZ3ea7/7QX1N6B3sFBO+db2cb8sDX28wbljJvAT/vl1YRr+gB7pBSQqaKAMJSdwP1DiLgHvBchLY9QP4VJmRbGItzENbdXA/7JrDhbNUFnhqX0Ha7uR7+Ze7RQ/p91+aJS8j6obrrt9eU+RU7zloul1t5VG5W3/NMwvz3kP8/1mDDcFThM8a/78ghIXKcwHn4cVhkEw7PD4LACfthbCaAPC84uDvM5PNsQOqm+fzF8MgIPA/760aVFxhHwws+3Qtk/vLmwAsWCJJ+2SOR8WYo74dHwWJAUuud/4pC9wxJKYe3huqQY+sVo+NNTJm5ulXZkl5wNIyPN4EcXqvJSDPn7/s8u/RFgby4Uc9bqfkOYwQfi7GY/6mWIT3v/CIR801B5i9vlSmSnnd3n5j5phnvz5WwI+XLpMD3xHiLzxhcXyTrnq8YL68DVD7PuErJfi+MVwaiGYPbTLp8Y8bMLZYZPW+YooNOIeZ/4ljRM9KMwD8ZL/9FYPQO7tP30AniPQaiRMAxomy+4FImIEX8T3K68W5kxeCz8jdy/TSQ6qMjFe+lEnoHsk1IjXgrE9G7k09YvJIZiQFnBpqa8hIBjUC+CSnhuTw39a4xCIu/5Lmp9wODMFOUBmgEvxDCUG42xeCTmU29BxQnpZJGiBOG1E0fJLkpUhhSwh+yCLGcVFa9wAtDWW0NWhhSwiMpborSlD4R/pZC6L3BAswUL6UEIsLacCIpgYixNnwhlBGI3iEmoYxADC7wAOVURMwwzGTepG9D7wiVMH+QPuFvXML0RxlobfcT4TB1Qg8VMFO8SDvVILbdT0rbhoht96PyD2kT4rXdT4RppxrUej8mTLurwa33mVFXky4hcr0fK2VC3Ho/UspdDXqiSX0Bhbi+nxCmO1JETzSU8DBNQhUSTbp9mwKJJuUlIvLC4lGpJlMFEk3KyVSBREMJ79IjVCHRpNuZKpFoMsUUy4USiSbVchFgwz2qmB6hEokmarn4H9jQK/YbwRIbAAAAAElFTkSuQmCC",
        answers: {
            "8xf0y6ziyjabvozdd253nd": 'optionOne',
            "6ni6ok3ym7mf1p33lnez": 'optionTwo',
            "am8ehyc8byjqgar0jgpub9": 'optionTwo',
            "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
    tylermcginnis: {
        id: 'tylermcginnis',
        name: 'Tyler McGinnis',
        avatarURL: "data:image/png;base64,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",
        answers: {
            "vthrdm985a262al8qx3do": 'optionOne',
            "xj352vofupe1dqz9emx13r": 'optionTwo',
        },
        questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
    johndoe: {
        id: 'johndoe',
        name: 'John Doe',
        avatarURL: "data:image/png;base64,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",
        answers: {
            "xj352vofupe1dqz9emx13r": 'optionOne',
            "vthrdm985a262al8qx3do": 'optionTwo',
            "6ni6ok3ym7mf1p33lnez": 'optionTwo'
        },
        questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    }
}

let questions = {
    "8xf0y6ziyjabvozdd253nd": {
        id: '8xf0y6ziyjabvozdd253nd',
        author: 'sarahedo',
        timestamp: 1467166872634,
        optionOne: {
            votes: ['sarahedo'],
            text: 'have horrible short term memory',
        },
        optionTwo: {
            votes: [],
            text: 'have horrible long term memory'
        }
    },
    "6ni6ok3ym7mf1p33lnez": {
        id: '6ni6ok3ym7mf1p33lnez',
        author: 'johndoe',
        timestamp: 1468479767190,
        optionOne: {
            votes: [],
            text: 'become a superhero',
        },
        optionTwo: {
            votes: ['johndoe', 'sarahedo'],
            text: 'become a supervillain'
        }
    },
    "am8ehyc8byjqgar0jgpub9": {
        id: 'am8ehyc8byjqgar0jgpub9',
        author: 'sarahedo',
        timestamp: 1488579767190,
        optionOne: {
            votes: [],
            text: 'be telekinetic',
        },
        optionTwo: {
            votes: ['sarahedo'],
            text: 'be telepathic'
        }
    },
    "loxhs1bqm25b708cmbf3g": {
        id: 'loxhs1bqm25b708cmbf3g',
        author: 'tylermcginnis',
        timestamp: 1482579767190,
        optionOne: {
            votes: [],
            text: 'be a front-end developer',
        },
        optionTwo: {
            votes: ['sarahedo'],
            text: 'be a back-end developer'
        }
    },
    "vthrdm985a262al8qx3do": {
        id: 'vthrdm985a262al8qx3do',
        author: 'tylermcginnis',
        timestamp: 1489579767190,
        optionOne: {
            votes: ['tylermcginnis'],
            text: 'find $50 yourself',
        },
        optionTwo: {
            votes: ['johndoe'],
            text: 'have your best friend find $500'
        }
    },
    "xj352vofupe1dqz9emx13r": {
        id: 'xj352vofupe1dqz9emx13r',
        author: 'johndoe',
        timestamp: 1493579767190,
        optionOne: {
            votes: ['johndoe'],
            text: 'write JavaScript',
        },
        optionTwo: {
            votes: ['tylermcginnis'],
            text: 'write Swift'
        }
    },
}

function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers() {
    return new Promise((res, rej) => {
        setTimeout(() => res({ ...users }), 1000)
    })
}

export function _getQuestions() {
    return new Promise((res, rej) => {
        setTimeout(() => res({ ...questions }), 1000)
    })
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
    return {
        id: generateUID(),
        timestamp: Date.now(),
        author,
        optionOne: {
            votes: [],
            text: optionOneText,
        },
        optionTwo: {
            votes: [],
            text: optionTwoText,
        }
    }
}

export function _saveQuestion(question) {
    return new Promise((res, rej) => {
        const authedUser = question.author;
        const formattedQuestion = formatQuestion(question);

        setTimeout(() => {
            questions = {
                ...questions,
                [formattedQuestion.id]: formattedQuestion
            }

            users = {
                ...users,
                [authedUser]: {
                    ...users[authedUser],
                    questions: users[authedUser].questions.concat([formattedQuestion.id])
                }
            }

            res(formattedQuestion)
        }, 1000)
    })
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            users = {
                ...users,
                [authedUser]: {
                    ...users[authedUser],
                    answers: {
                        ...users[authedUser].answers,
                        [qid]: answer
                    }
                }
            }

            questions = {
                ...questions,
                [qid]: {
                    ...questions[qid],
                    [answer]: {
                        ...questions[qid][answer],
                        votes: questions[qid][answer].votes.concat([authedUser])
                    }
                }
            }

            res()
        }, 500)
    })
}

