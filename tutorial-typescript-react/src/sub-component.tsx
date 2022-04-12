import * as React from 'react';
import {useCallback, useState} from "react";

// Propsの型定義
interface IProps {
    name: string;
}

export const SubComponent: React.VFC<IProps> = (props) => {

    const [count, setCount] = useState(0)
    const handleClick = useCallback(() => {
      console.log('クリックされました');
        setCount(count + 1)
    }, [count])

    return (
        <div>
            <h2>{props.name}</h2>
            <div>{count}</div>
            <button onClick={handleClick}>Add +1</button>
        </div>
    );
}
