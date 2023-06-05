const content =  {
    nav: {
        navLinks: [
            {
                name: "Bestsellers",
                to: "#bestsellers"
            },
            {
                name: "New Games",
                to: "#new-games"
            }
        ],

        navImg: {
            url: "https://picsum.photos/200",
            alt: "Bitte alt text hier"
        },

        shoppingCart: {
            svg: (
                <>
                <svg width="36" height="36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                <path d="M20 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                </>
            ),
        }
    },

    cart: {
        removeIcon: (
                <svg width="36" height="36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                <path d="m18 9-6 6"></path>
                <path d="m12 9 6 6"></path>
                </svg>
            )
    },

    slideshow: [
        {
            url: "https://picsum.photos/1980/1080",
            text: "Fortnite",
            alt: "Alt add here"
        },
        {
            url: "https://picsum.photos/1980/1080",
            text: "GTA",
            alt: "Alt add here"
        },
        {
            video: true,
            url: "/SlideshowVid.mp4",
            text: "Minecraft",
            alt: "Alt add here"
        },
    ],

    bestseller: {
        title: "Bestseller",
        cards: [
            {
                name: "Bestseller 1",
                imageUrl: "https://picsum.photos/400/500",
                alt: "Alt Text Here",
                url: "https://www.diesesGame.com"
            },
            {
                name: "Bestseller 2",
                imageUrl: "https://picsum.photos/400/500",
                alt: "Alt Text Here",
                url: "https://www.diesesGame.com"
            },
            {
                name: "Bestseller 3",
                imageUrl: "https://picsum.photos/400/500",
                alt: "Alt Text Here",
                url: "https://www.diesesGame.com"
            },
            {
                name: "Bestseller 4",
                imageUrl: "https://picsum.photos/400/500",
                alt: "Alt Text Here",
                url: "https://www.diesesGame.com"
            },
        ]
    },

    new: {
        title: "New-Games",
        cards: [
            {
                name: "New 1",
                imageUrl: "https://picsum.photos/400/500",
                alt: "Alt Text Here",
                url: "https://www.diesesGame.com"
            },
            {
                name: "New 2",
                imageUrl: "https://picsum.photos/400/500",
                alt: "Alt Text Here",
                url: "https://www.diesesGame.com"
            },
            {
                name: "New 3",
                imageUrl: "https://picsum.photos/400/500",
                alt: "Alt Text Here",
                url: "https://www.diesesGame.com"
            },
            {
                name: "New 4",
                imageUrl: "https://picsum.photos/400/500",
                alt: "Alt Text Here",
                url: "https://www.diesesGame.com"
            },
        ]
    },

    games: [
        {
            name: "Bestseller 1",
            imageUrl: "https://picsum.photos/400/500",
            alt: "Alt Text Here",
            url: "https://www.diesesGame.com",
            type: "bestseller",
            id: 1,
            price: 300
        },
        {
            name: "Bestseller 2",
            imageUrl: "https://picsum.photos/400/500",
            alt: "Alt Text Here",
            url: "https://www.diesesGame.com",
            type: "bestseller",
            id: 2,
            price: 300
        },
        {
            name: "Bestseller 3",
            imageUrl: "https://picsum.photos/400/500",
            alt: "Alt Text Here",
            url: "https://www.diesesGame.com",
            type: "bestseller",
            id: 3,
            price: 300
        },
        {
            name: "Bestseller 4",
            imageUrl: "https://picsum.photos/400/500",
            alt: "Alt Text Here",
            url: "https://www.diesesGame.com",
            type: "bestseller",
            id: 4,
            price: 300
        },
        {
            name: "New 1",
            imageUrl: "https://picsum.photos/400/500",
            alt: "Alt Text Here",
            url: "https://www.diesesGame.com",
            type: "new-games",
            id: 5,
            price: 300
        },
        {
            name: "New 2",
            imageUrl: "https://picsum.photos/400/500",
            alt: "Alt Text Here",
            url: "https://www.diesesGame.com",
            type: "new-games",
            id: 6,
            price: 300
        },
        {
            name: "New 3",
            imageUrl: "https://picsum.photos/400/500",
            alt: "Alt Text Here",
            url: "https://www.diesesGame.com",
            type: "new-games",
            id: 7,
            price: 300
        },
        {
            name: "New 4",
            imageUrl: "https://picsum.photos/400/500",
            alt: "Alt Text Here",
            url: "https://www.diesesGame.com",
            type: "new-games",
            id: 8,
            price: 300
        },
    ],

    gallery: {
        images: [
            {
                smallUrl: "https://picsum.photos/600/400",
                url: "https://picsum.photos/1200/800",
                alt: "Alt goes Here"
            },
            {
                smallUrl: "https://picsum.photos/600/400",
                url: "https://picsum.photos/1200/800",
                alt: "Alt goes Here"
            },
            {
                smallUrl: "https://picsum.photos/600/400",
                url: "https://picsum.photos/1200/800",
                alt: "Alt goes Here"
            },
            {
                smallUrl: "https://picsum.photos/600/400",
                url: "https://picsum.photos/1200/800",
                alt: "Alt goes Here"
            },
            {
                smallUrl: "https://picsum.photos/600/400",
                url: "https://picsum.photos/1200/800",
                alt: "Alt goes Here"
            },
            {
                smallUrl: "https://picsum.photos/600/400",
                url: "https://picsum.photos/1200/800",
                alt: "Alt goes Here"
            },
            {
                smallUrl: "https://picsum.photos/600/400",
                url: "https://picsum.photos/1200/800",
                alt: "Alt goes Here"
            },
            {
                smallUrl: "https://picsum.photos/600/400",
                url: "https://picsum.photos/1200/800",
                alt: "Alt goes Here"
            },
            {
                smallUrl: "https://picsum.photos/600/400",
                url: "https://picsum.photos/1200/800",
                alt: "Alt goes Here"
            },
            {
                smallUrl: "https://picsum.photos/600/400",
                url: "https://picsum.photos/1200/800",
                alt: "Alt goes Here"
            },
            {
                smallUrl: "https://picsum.photos/600/400",
                url: "https://picsum.photos/1200/800",
                alt: "Alt goes Here"
            },
            {
                smallUrl: "https://picsum.photos/600/400",
                url: "https://picsum.photos/1200/800",
                alt: "Alt goes Here"
            },
            {
                smallUrl: "https://picsum.photos/600/400",
                url: "https://picsum.photos/1200/800",
                alt: "Alt goes Here"
            },
            {
                smallUrl: "https://picsum.photos/600/400",
                url: "https://picsum.photos/1200/800",
                alt: "Alt goes Here"
            },
            {
                smallUrl: "https://picsum.photos/600/400",
                url: "https://picsum.photos/1200/800",
                alt: "Alt goes Here"
            },
            {
                smallUrl: "https://picsum.photos/600/400",
                url: "https://picsum.photos/1200/800",
                alt: "Alt goes Here"
            },

        ]
    },

    mailAdress: "myMail@sz-ybbs.ac.at",

    form: {
        subjectPlaceholder: "Subject",
        contentPlaceholder: "Content"
    },

    imprint: {
        firmawortlaut: [
            "Holzprofi OG",
            "Offene Gesellschaft"
        ],
        unternehmensgegenstand: "Tischlerei",
        UIDNr: "ATU12345678",
        firmenbuchnummer: "123456a",
        firmenbuchgericht: "Musterstadt",
        firmensitz: "4711 Musterdorf",
        volleGeographischeAnschrift: "Musterstraße 12 | Austria",
        kontaktdaten: [
            "TEL: +43 676 4982758",
            "Mail: email@server.domain"
        ],
        mitgliedschaftenBeiDerWKO: "Mitglied der WKÖ, WKNÖ, Landesinnung Tischler, Bundesinnung Tischler",
        anwendbareRechtsvorschriften: {
            berufsrecht: {
                gewerbeordnung: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10007517",
            }
        },
        aufsichtsbehörde: "Bezirkshauptmannschaft Musterstadt",
        berufsbezeichnung: "Meisterbetrieb",
        verleihungsstaat: "Meisterprüfung abgelegt in Österreich",
        onlineStreitbeteiligung: {
            text: [
                "Verbraucher haben die Möglichkeit, Beschwerden an die Online- Streitbeilegungsplattform der EU zu richten:",
                false,
                "Sie können allfällige Beschwerde auch an die oben angegebene E-Mail-Adresse richten."
            ],
            link: "http://ec.europa.eu/odr"
        }
    },

    footer: {
        footerText: "Footer Text du Negro"
    }
}

export default content