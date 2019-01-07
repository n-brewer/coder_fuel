import React from "react";
import Wrapper from "./wrapper";
import Cart from "./cart";
import StoreSection from "./storeSection";
import { URL } from "../utils/constants";

const defaultStore = {
  category: "Empty Store",
  items: []
};

class StoreHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { store: [defaultStore], cart: [] };
  }

  async componentDidMount() {
    try {
      const req = await fetch(URL.JSON_SERVER);
      const res = await req.json();
      if (req.ok) {
        this.setState({ store: res });
      }
    } catch (err) {
      console.log(err);
    }
  }

  addToCart = item => {
    this.setState({ cart: [...this.state.cart, item] });
  };

  storeSection = store => {
    return store.map(section => {
      return (
        <StoreSection
          itemClicked={item => this.addToCart(item)}
          key={section.category}
          section={section}
        />
      );
    });
  };

  handleRemoveItem = item => {
    const newArr = this.state.cart;
    newArr.splice(newArr.indexOf(item), 1);
    this.setState({ cart: newArr });
  };

  render() {
    const { store, cart } = this.state;
    return (
      <Wrapper>
        <h2>My Cart</h2>
        <Cart cart={cart} removeItem={item => this.handleRemoveItem(item)} />
        {this.storeSection(store)}
      </Wrapper>
    );
  }
}

export default StoreHome;
