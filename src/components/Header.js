import { observer } from 'mobx-react-lite';
import { useRootStore } from '../stores/RootStore';

function Header() {
  const { cartStore } = useRootStore();
  return (
    <div className="header">
      <h4 className="header-title">苹果篮子</h4>
      <div className="header-count">
        <div>当前：{cartStore.curApple.cur_num}个苹果，{cartStore.curApple.cur_weight}克</div>
        <div>已吃掉：{cartStore.doneApple.done_num}个苹果，{cartStore.doneApple.done_weight}克</div>
      </div>
    </div>
  )
}

export default observer(Header);