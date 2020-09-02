import React, {useCallback} from 'react';
import { useSelector , useDispatch} from '../qReactRedux'


export default function ReactReduxHookPage(props) {
  const count = useSelector(({ count }) => count)
  const dispatch = useDispatch();
  const add = useCallback(() => {
      dispatch({ type: 'ADD' })
    }, [])
  return (
    <div>
      <h3>ReactReduxHookPage</h3>
      <p>{count}</p>
      <button onClick={add}>add</button>
    </div>
  );
}