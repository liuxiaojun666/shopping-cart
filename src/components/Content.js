import apple_img from '../images/apple.png'
import { useRootStore } from '../stores/RootStore';
import { observer } from 'mobx-react-lite';

function Content() {
  const { cartStore } = useRootStore()
  return (
    <div className="content">
      {
        cartStore.cartList.map((cart, index)=>{
          if (!cart.isDone) {
            return (
              <div className="content-box" key={cart.id}>
                <div>
                  <img alt="" src={apple_img} />
                </div>
                <div className="box-content">
                  <div>红苹果 - {cart.sortNum}号</div>
                  <div>{cart.weight}克</div>
                </div>
                <div className="box-button">
                  <button onClick={()=>cartStore.delApple(index)}>吃掉</button>
                </div>
              </div>
            )
          }
          return null
        })
      }
      <div className="content-footer">
        <button onClick={cartStore.addApple}>摘苹果</button>
      </div>
    </div>
  )
}

export default observer(Content);