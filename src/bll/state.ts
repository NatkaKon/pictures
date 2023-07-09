export type StateType = {
    cardsData: CardType[]
}

export type CardType = {
    id: number
    title: string
    cardPhoto: string
    cardDescription: string
    color: string
}

export const state: StateType = {
    cardsData: [
        {
            id: 1,
            title: "Color parrot",
            cardPhoto: "https://images.pexels.com/photos/1427447/pexels-photo-1427447.jpeg?auto=compress&cs=tinysrgb&w=600",
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'parrot'
        },
        {
            id: 2,
            title: "Red parrot",
            cardPhoto: "https://images.pexels.com/photos/532440/pexels-photo-532440.jpeg?auto=compress&cs=tinysrgb&w=600",
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'parrot'
        },
        {
            id: 3,
            title: "Blue eggs",
            cardPhoto: "https://images.pexels.com/photos/158734/bird-nest-eggs-blue-158734.jpeg?auto=compress&cs=tinysrgb&w=600",
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'eggs'
        },
        {
            id: 4,
            title: "Blue bird",
            cardPhoto: 'https://images.pexels.com/photos/45851/bird-blue-cristata-cyanocitta-45851.jpeg?auto=compress&cs=tinysrgb&w=600',
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'bird'
        },
        {
            id: 5,
            title: "Yellow parrot",
            cardPhoto: 'https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=600',
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'parrot'
        },
        {
            id: 6,
            title: "Green parrot",
            cardPhoto: 'https://images.pexels.com/photos/97533/pexels-photo-97533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'parrot'
        },
        {
            id: 7,
            title: "Green parrot",
            cardPhoto: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'parrot'
        },
        {
            id: 8,
            title: "Yellow frog",
            cardPhoto: 'https://images.pexels.com/photos/674318/pexels-photo-674318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'frog'
        },
        {
            id: 9,
            title: "Butterflies",
            cardPhoto: 'https://images.pexels.com/photos/1321524/pexels-photo-1321524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'butterflies'
        },
        {
            id: 10,
            title: "Flamingos",
            cardPhoto: 'https://images.pexels.com/photos/12598146/pexels-photo-12598146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'flamingos'
        },
        {
            id: 11,
            title: "Orange parrot",
            cardPhoto: 'https://images.pexels.com/photos/1059823/pexels-photo-1059823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'parrot'
        },
        {
            id: 12,
            title: "Monkey",
            cardPhoto: 'https://images.pexels.com/photos/38280/monkey-mandril-africa-baboon-38280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
                '                Cupiditate earum ipsum repudiandae! Accusamus, atque dolores ea enim esse \n' +
                '                fuga itaque iusto minima necessitatibus, quo sunt, totam velit vero vitae voluptatem.',
            color: 'monkey'
        },
    ]
}
