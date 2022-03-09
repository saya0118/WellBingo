import { createStore } from 'redux';

export const store = createStore(() => ({
    cardsList: [
        [
            {
                id: 0,
                text: "drink 1L water",
                flipped: false
            },
            {
                id: 1,
                text: "tell someone of your gratitude",
                flipped: false
            },
            {
                id: 2,
                text: "go for a walk",
                flipped: false
            }
        ],
        [
            {
                id: 3,
                text: "soak in sunshine",
                flipped: false
            },
            {
                id: 4,
                text: "read a book",
                flipped: false
            },
            {
                id: 5,
                text: "admire a friend",
                flipped: false
            }
        ],
        [
            {
                id: 6,
                text: "study 30min",
                flipped: false
            },
            {
                id: 7,
                text: "meet new people",
                flipped: false
            },
            {
                id: 8,
                text: "do yoga",
                flipped: false
            }
        ]
    ]
}))