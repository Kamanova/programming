import React from 'react'
import ReactDOM from 'react-dom'
import Menu from './menu'
import Gallery from './gallery'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      category: 'soups',
      texts: 'dessertDescription',
    }
  }
  render() {
    const gallery = {
      soups: [
        'https://changes.club/image/09/da/09da1112-e52d-405f-b866-f82c2a00c492.jpg',
        'http://kulinarnaya-feya.ru/wp-content/uploads/2015/08/Uha-iz-shhuki.jpg',
        'http://s4.fotokto.ru/photo/full/522/5223229.jpg',
        'http://avocadocook.ru/f/product/65.jpg',
        'https://5gribov.ru/wp-content/uploads/2017/09/gr_syp_opyata_1234567678-1200x750.jpg',
      ],

      desserts: [
        'http://vsetiramisu.ru/wp-content/uploads/2012/11/B568336C2381431B77C28CB7B236E0.jpg',
        'http://ne-dieta.ru/wp-content/uploads/2017/11/final_1200-7.jpg',
        'http://testosam.ru/wp-content/uploads/2015/10/d8b2366e81fdac0fa3855070d6cd3310.jpg',
        'https://100ing.ru/media/uploads/public/recept_1.jpg',
      ],

      snacks: [
        'http://blog.eda.ua/wp-content/uploads/2014/09/syirnaya-tarelka.jpg',
        'https://old.st.zakupka.tv/images/bb/0e/53/49ac5fd0-f674-11e5-9928-bac568a79449.jpg',
        'https://carte.by/source/photos/2017/04/24/tsezar-s-kur.jpg',
      ],
    }
    const descriptions = {
      soupsDescription: [
        'Как у бабушки',
        'Очень вкусный',
        'Капец херовый',
        'Сложный в приготовлении',
        'Необходим опыт в приготовлении',
      ],
      dessertDescription: [
        'Безумно вкусный',
        'Осторожно каллории!',
        'Классика',
        'Дети будут в восторге',
      ],
      snacksDescription: [
        'Всем знакомо',
        'НЕ забудь купить мясо',
        'Приготовит даже ленивый',
      ],
    }

    return (
      <div>
        <Menu onChange={category => this.setState({ category })} />
        <figure>Welcome World Cuisine Recipes</figure>
        <p>
          Globetrotting cooks make the world's best dishes—and now, so can you.
        </p>
        <Gallery photos={gallery[this.state.category]} />
        <Gallery texts={descriptions[this.state.texts]} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
