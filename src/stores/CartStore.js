import { makeObservable, observable, computed, action } from 'mobx';

class CartStore {
  cartList = [];
  apple = {
    id: '',
    weight: 0,
    isDone: false
  };
  num = 1;
  constructor () {
    makeObservable(this, {
      cartList: observable,
      apple: observable,
      curApple: computed,
      doneApple: computed,
      addApple: action.bound,
      delApple: action.bound,
      curCart: computed
    })
  }
  get curApple() {
    let cur_num = 0;
    let cur_weight = this.cartList.reduce((total, cart)=>{
      if (!cart.isDone) {
        cur_num += 1;
        return total + cart.weight;
      } else {
        return total
      }
    }, 0);
    return { cur_num, cur_weight }
  }
  get doneApple() {
    let done_num = 0;
    let done_weight = this.cartList.reduce((total, cart)=>{
      if (cart.isDone) {
        done_num += 1;
        return total + cart.weight;
      } else {
        return total
      }
    }, 0);
    return { done_num, done_weight }
  }
  addApple() {
    this.cartList.push({ sortNum: this.num++, id: (new Date()).getTime(), weight: Math.floor(Math.random()*200+200), isDone: false })
  }
  delApple(index) {
    this.cartList[index].isDone = true;
  }
  get curCart() {
    return this.cartList.filter(cart=>!cart.isDone);
  }
}

export default CartStore;