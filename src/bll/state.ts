export type StateType = {
    cardsData: CardType[]
}

export type CardType = {
    id: string
    title: string
    cardPhoto: string
    cardDescription: string
    color: string
}

export const state: StateType = {
    cardsData: [
        {
            id: '001',
            title: "Color parrot",
            cardPhoto: "https://images.pexels.com/photos/1427447/pexels-photo-1427447.jpeg?auto=compress&cs=tinysrgb&w=600",
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'red'
        },
        {
            id: '002',
            title: "Red parrot",
            cardPhoto: "https://images.pexels.com/photos/532440/pexels-photo-532440.jpeg?auto=compress&cs=tinysrgb&w=600",
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'red'
        },
        {
            id: '003',
            title: "Blue eggs",
            cardPhoto: "https://images.pexels.com/photos/158734/bird-nest-eggs-blue-158734.jpeg?auto=compress&cs=tinysrgb&w=600",
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'blue'
        },
        {
            id: '004',
            title: "Blue bird",
            cardPhoto: 'https://images.pexels.com/photos/45851/bird-blue-cristata-cyanocitta-45851.jpeg?auto=compress&cs=tinysrgb&w=600',
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'blue'
        },
        {
            id: '005',
            title: "Yellow parrot",
            cardPhoto: 'https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=600',
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'yellow'
        },
        {
            id: '006',
            title: "Green parrot",
            cardPhoto: 'https://images.pexels.com/photos/97533/pexels-photo-97533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'green'
        },
        {
            id: '007',
            title: "Green parrot",
            cardPhoto: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'green'
        },
        {
            id: '008',
            title: "Yellow frog",
            cardPhoto: 'https://images.pexels.com/photos/674318/pexels-photo-674318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'yellow'
        },
        {
            id: '009',
            title: "Butterflies",
            cardPhoto: 'https://images.pexels.com/photos/1321524/pexels-photo-1321524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'green'
        },
        {
            id: '010',
            title: "Flamingos",
            cardPhoto: 'https://images.pexels.com/photos/12598146/pexels-photo-12598146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'pink'
        },
        {
            id: '011',
            title: "Orange parrot",
            cardPhoto: 'https://images.pexels.com/photos/1059823/pexels-photo-1059823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'orange'
        },
        {
            id: '012',
            title: "Monkey",
            cardPhoto: 'https://images.pexels.com/photos/38280/monkey-mandril-africa-baboon-38280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'brown'
        },
    ]
}
