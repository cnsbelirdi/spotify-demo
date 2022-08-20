import React from 'react';
import Section from 'components/Section';

function Home(){

    const items = [
        {
            id: 1,
            name: 'Castle In The Snow',
            artist: 'The Avener, Kadebostany',
            image: 'https://i.scdn.co/image/ab67616d00001e02f239d3948dbbc14346a4b2bd',
            type: 'album',
            src: 'https://www.mp3indirdur.info/mp3/indirdurArsiv333/NR1/NR1-Dance-Hits-2015/NR1-Castle-In-The-Snow-feat-Kadebostany.mp3'
        },
        {
            id: 2,
            name: 'Way down We Go',
            artist: 'KALEO',
            image: 'https://i.scdn.co/image/ab67616d00001e02ff24db4bc917e09a986edf2b',
            type:'album',
            src:'https://www.mp3indirdur.info/mp3/indirdurArsiv333/Kaleo/Way-Down-We-Go/Kaleo-Way-Down-We-Go.mp3'
        },
        {
            id: 3,
            name: 'Bi\' Tek Ben Anlarım',
            artist: 'KÖFN',
            image: 'https://i.scdn.co/image/ab67616d00001e02d7189564e1333a8d60b07921',
            type: 'album',
            src: 'https://www.mp3indirdur.info/mp3/indirdurArsiv333/KOFN/Bi-Tek-Ben-Anlarim/KOFN-Bi-Tek-Ben-Anlarim.mp3'
        },
        {
            id: 4,
            name: 'Olmazlara İnat',
            artist: 'Berkay Altunay',
            image: 'https://i.scdn.co/image/ab67616d00001e021517812b9193bc8bc20a1f66',
            type: 'album',
            src: 'https://www.mp3indirdur.info/mp3/indirdurArsiv333/Berkay-Altunyay/Anlasana/Berkay-Altunyay-Olmazlara-Inat.mp3'
        },
        {
            id: 5,
            name: 'Bir Bildiğin Vardır',
            artist: 'Dolu Kadehi Ters Tut',
            image: 'https://i.scdn.co/image/ab67616d00001e026fe95571c6f69edac303e786',
            type: 'album',
            src: 'https://www.mp3indirdur.info/mp3/indirdurArsiv333/Dolu-Kadehi-Ters-Tut/Oylece-Durdun/Dolu-Kadehi-Ters-Tut-Bir-Bildigin-Vardir.mp3'
        },
        {
            id: 6,
            name: 'Gökyüzünü Tutamam',
            artist: 'Can Koç',
            image: 'https://i.scdn.co/image/ab67616d00001e02183337eef9318285b10d6164',
            type: 'album',
            src: 'https://www.mp3indirdur.info/mp3/indirdurArsiv333/Can-Koc/Senin-Gibi/Can-Koc-Gokyuzunu-Tutamam.mp3'
        },
    ]
    const items2 = [
        {
            id: 7,
            name: 'Türkçe Rock',
            artist: 'Gitar ve Davulu konuşturanlar',
            image: 'https://i.scdn.co/image/ab67706f0000000327b6666b04ab3c43052506be',
            type: 'playlist',
            src: ''
        },
        {
            id: 8,
            name: 'Karanlık',
            artist: 'Dolu Kadehi Ters Tut',
            image: 'https://i.scdn.co/image/ab67616d00001e0261d6750a0251c9499570e586',
            type:'album',
            src: 'https://www.mp3indirdur.info/mp3/indirdurArsiv333/Dolu-Kadehi-Ters-Tut/Karanlik/Dolu-Kadehi-Ters-Tut-Karanlik.mp3'
        },
        {
            id: 9,
            name: 'Mor Ve Ötesi',
            artist: '',
            image: 'https://i.scdn.co/image/ab67616d00001e02c749522e6390ff6cfe941033',
            type: 'artist',
            src: ''
        },
        {
            id: 10,
            name: 'Hot Hits Türkiye',
            artist: 'Dinlemekten vazgeçemediklerin',
            image: 'https://i.scdn.co/image/ab67706f00000002eddd8a9a4f34a27ac5cb19a4',
            type: 'playlist',
            src: ''
        },
        {
            id: 11,
            name: 'As It Was',
            artist: 'Harry Styles',
            image: 'https://i.scdn.co/image/ab67616d00001e02b46f74097655d7f353caab14',
            type: 'album',
            src: 'https://www.mp3indirdur.info/mp3/indirdurArsiv333/Harry-Styles/Adore-You/Harry-Styles-As-It-Was.mp3'
        },
        {
            id: 12,
            name: 'MIDDLE OF THE NIGHT',
            artist: 'Elley Duhé',
            image: 'https://i.scdn.co/image/ab67616d00001e0253a2e11c1bde700722fecd2e',
            type: 'album',
            src: 'https://www.mp3indirdur.info/mp3/indirdurArsiv333/Elley-Duhe/Middle-Of-The-Night/Elley-Duhe-Middle-Of-The-Night.mp3'
        },
    ]
    return (
        <div className='grid gap-y-4'>
            <Section 
                title="Yakınlarda Çalınanlar"
                more="/blabla"
                items={items}
            />
            <Section 
                title="Bugünün En Çok Dinlenenleri"
                more="/blabla"
                items={items2}
            />
            <Section 
                title="Yakınlarda Çalınanlar"
                more="/blabla"
                items={items}
            />
            <Section 
                title="Bugünün En Çok Dinlenenleri"
                more="/blabla"
                items={items2}
            />
        </div>
    )
}

export default Home;