import React from "react";
import ReactDOM from "react-dom";
import { Grid, Container } from "semantic-ui-react";
import Menu from "./menu";
import Gallery from "./gallery";
import DishesList from "./search";
import PreviewImage from "./previewImage";

import "semantic-ui-css/semantic.min.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      category: "soups",
      texts: "soupsDescription",
      selectedDish: "",
      items: [
        "Борщ",
        "Уха",
        "Рассольник",
        "Том ям",
        "Грибной",
        "Желе",
        "Булка",
        "Кекс",
        "Тирамису",
        "Цезарь",
        "Блинчики с мясом",
        "Сырная тарелка"
      ],
      images: {
        Борщ:
          "https://changes.club/image/09/da/09da1112-e52d-405f-b866-f82c2a00c492.jpg",
        Уха:
          "http://kulinarnaya-feya.ru/wp-content/uploads/2015/08/Uha-iz-shhuki.jpg",
        Рассольник: "http://s4.fotokto.ru/photo/full/522/5223229.jpg",
        "Том ям": "http://avocadocook.ru/f/product/65.jpg",
        Грибной:
          "https://5gribov.ru/wp-content/uploads/2017/09/gr_syp_opyata_1234567678-1200x750.jpg",
        Желе:
          "http://vsetiramisu.ru/wp-content/uploads/2012/11/B568336C2381431B77C28CB7B236E0.jpg",
        Булка: "http://ne-dieta.ru/wp-content/uploads/2017/11/final_1200-7.jpg",
        Кекс:
          "http://testosam.ru/wp-content/uploads/2015/10/d8b2366e81fdac0fa3855070d6cd3310.jpg",
        Тирамису: "https://100ing.ru/media/uploads/public/recept_1.jpg",
        Цезарь:
          "http://blog.eda.ua/wp-content/uploads/2014/09/syirnaya-tarelka.jpg",
        "Блинчики с мясом":
          "https://old.st.zakupka.tv/images/bb/0e/53/49ac5fd0-f674-11e5-9928-bac568a79449.jpg",
        "Сырная тарелка":
          "https://carte.by/source/photos/2017/04/24/tsezar-s-kur.jpg"
      },
      gallery: {
        soups: [
          "https://changes.club/image/09/da/09da1112-e52d-405f-b866-f82c2a00c492.jpg",
          "http://kulinarnaya-feya.ru/wp-content/uploads/2015/08/Uha-iz-shhuki.jpg",
          "http://s4.fotokto.ru/photo/full/522/5223229.jpg",
          "http://avocadocook.ru/f/product/65.jpg",
          "https://5gribov.ru/wp-content/uploads/2017/09/gr_syp_opyata_1234567678-1200x750.jpg"
        ],

        desserts: [
          "http://vsetiramisu.ru/wp-content/uploads/2012/11/B568336C2381431B77C28CB7B236E0.jpg",
          "http://ne-dieta.ru/wp-content/uploads/2017/11/final_1200-7.jpg",
          "http://testosam.ru/wp-content/uploads/2015/10/d8b2366e81fdac0fa3855070d6cd3310.jpg",
          "https://100ing.ru/media/uploads/public/recept_1.jpg"
        ],

        snacks: [
          "http://blog.eda.ua/wp-content/uploads/2014/09/syirnaya-tarelka.jpg",
          "https://old.st.zakupka.tv/images/bb/0e/53/49ac5fd0-f674-11e5-9928-bac568a79449.jpg",
          "https://carte.by/source/photos/2017/04/24/tsezar-s-kur.jpg"
        ]
      },
      descriptions: {
        soupsDescription: ["Борщ", "Уха", "Рассольник", "Том ям", "Грибной"],
        dessertsDescription: ["Желе", "Булка", "Кекс", "Тирамису"],
        snacksDescription: ["Цезарь", "Блинчики с мясом", "Сырная тарелка"]
      }
    };
  }
  render() {
    return (
      <Container>
        <Menu
          onChange={(category, texts) => {
            this.setState({ category, texts });
          }}
        />
        <h2>Welcome World Cuisine Recipes</h2>
        <p>Our cooks make the world's best dishes </p>
        <Grid>
          <Grid.Column width={10}>
            <DishesList
              items={this.state.items}
              onItemClick={dish =>
                this.setState({ selectedDish: this.state.images[dish] })
              }
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <PreviewImage src={this.state.selectedDish} />
            <Gallery
              photos={this.state.gallery[this.state.category]}
              texts={this.state.descriptions[this.state.texts]}
            />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
