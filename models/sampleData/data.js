const restaurants = [
    {
        id: 1,
        name: 'Sababa 沙巴巴中東美食',
        image:
          'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5635/01.jpg',
        category: '中東料理',
        price: 4.1,
        address: '台北市松山區市民大道四段 185 號',
        phone: '02 2570 1255',
        description: '我們希望帶給您的，不只是啤酒，有美食，還有一份對生活的熱情。 義大利語「Bravo」的原意─「喝采」、「讚揚」， 我想著如果有一個大家都能輕鬆品嚐美酒、享受美食的地方，那就真的是太棒了！ 因為這個念頭，加上一股對比利時啤酒的熱情， 於是「Bravo Beer布娜飛比利時啤酒餐廳」在2006年誕生了...'
    },
    {
        id: 2,
        name: '梅子鰻蒲燒專賣店',
        image:
          'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5628/02.jpg',
        category: '日本料理',
        price: 4.3,
        address: '台北市松山區市民大道四段 185 號',
        phone: '02 2570 1255',
        description: '我們希望帶給您的，不只是啤酒，有美食，還有一份對生活的熱情。 義大利語「Bravo」的原意─「喝采」、「讚揚」， 我想著如果有一個大家都能輕鬆品嚐美酒、享受美食的地方，那就真的是太棒了！ 因為這個念頭，加上一股對比利時啤酒的熱情， 於是「Bravo Beer布娜飛比利時啤酒餐廳」在2006年誕生了...'
    
    },
    {
        id: 3,
        name: 'ZIGA ZIGA',
        image:
          'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5629/03.jpg',
        category: '義式餐廳',
        price: 4.2,
        address: '台北市松山區市民大道四段 185 號',
        phone: '02 2570 1255',
        description: '我們希望帶給您的，不只是啤酒，有美食，還有一份對生活的熱情。 義大利語「Bravo」的原意─「喝采」、「讚揚」， 我想著如果有一個大家都能輕鬆品嚐美酒、享受美食的地方，那就真的是太棒了！ 因為這個念頭，加上一股對比利時啤酒的熱情， 於是「Bravo Beer布娜飛比利時啤酒餐廳」在2006年誕生了...'
    
    },
    {
        id: 4,
        name: '艾朋牛排餐酒館',
        image:
          'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5630/04.jpg',
        category: '美式餐廳',
        price: 4.5,
        address: '台北市松山區市民大道四段 185 號',
        phone: '02 2570 1255',
        description: '我們希望帶給您的，不只是啤酒，有美食，還有一份對生活的熱情。 義大利語「Bravo」的原意─「喝采」、「讚揚」， 我想著如果有一個大家都能輕鬆品嚐美酒、享受美食的地方，那就真的是太棒了！ 因為這個念頭，加上一股對比利時啤酒的熱情， 於是「Bravo Beer布娜飛比利時啤酒餐廳」在2006年誕生了...'
    
    },
    {
        id: 5,
        name: 'Gusto Pizza',
        image:
          'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5631/05.jpg',
        category: '義式餐廳',
        price: 4.7,
        address: '台北市松山區市民大道四段 185 號',
        phone: '02 2570 1255',
        description: '我們希望帶給您的，不只是啤酒，有美食，還有一份對生活的熱情。 義大利語「Bravo」的原意─「喝采」、「讚揚」， 我想著如果有一個大家都能輕鬆品嚐美酒、享受美食的地方，那就真的是太棒了！ 因為這個念頭，加上一股對比利時啤酒的熱情， 於是「Bravo Beer布娜飛比利時啤酒餐廳」在2006年誕生了...'
    
    },
    {
        id: 6,
        name: 'WXYZ Bar',
        image:
          'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5632/06.jpg',
        category: '酒吧',
        price: 4.3,
        address: '台北市松山區市民大道四段 185 號',
        phone: '02 2570 1255',
        description: '我們希望帶給您的，不只是啤酒，有美食，還有一份對生活的熱情。 義大利語「Bravo」的原意─「喝采」、「讚揚」， 我想著如果有一個大家都能輕鬆品嚐美酒、享受美食的地方，那就真的是太棒了！ 因為這個念頭，加上一股對比利時啤酒的熱情， 於是「Bravo Beer布娜飛比利時啤酒餐廳」在2006年誕生了...'
    
    },
    {
        id: 7,
        name: 'Fika Fika Cafe',
        image:
          'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5633/07.jpg',
        category: '咖啡',
        price: 4.5,
        address: '台北市松山區市民大道四段 185 號',
        phone: '02 2570 1255',
        description: '我們希望帶給您的，不只是啤酒，有美食，還有一份對生活的熱情。 義大利語「Bravo」的原意─「喝采」、「讚揚」， 我想著如果有一個大家都能輕鬆品嚐美酒、享受美食的地方，那就真的是太棒了！ 因為這個念頭，加上一股對比利時啤酒的熱情， 於是「Bravo Beer布娜飛比利時啤酒餐廳」在2006年誕生了...'
    
    },
    {
        id: 8,
        name: '布娜飛比利時啤酒餐廳',
        image:
          'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5634/08.jpg',
        category: '義式餐廳',
        price: 4.7,
        address: '台北市松山區市民大道四段 185 號',
        phone: '02 2570 1255',
        description: '我們希望帶給您的，不只是啤酒，有美食，還有一份對生活的熱情。 義大利語「Bravo」的原意─「喝采」、「讚揚」， 我想著如果有一個大家都能輕鬆品嚐美酒、享受美食的地方，那就真的是太棒了！ 因為這個念頭，加上一股對比利時啤酒的熱情， 於是「Bravo Beer布娜飛比利時啤酒餐廳」在2006年誕生了...'
    }


]

module.exports = { restaurants }