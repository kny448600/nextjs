// ./app/list/page.js
'use client'
import { useState } from "react"

export default function List() {
    let 상품 = ['Tomatoes', 'Pizza','Pasta'];
    let [수량,수량변경] = useState([0,0,0]); 
    // state의 장점 : state가 변경이 되면 연관된 HTML을 재 렌더링

    return (
        <div>
            <h4 className="title">상품 목록</h4>
            {
                상품.map((a,i) => {
                    return (
                        <div className="food" key={i}>
                        <img src={`/food${i}.png`} className="food-img"></img>
                        <h4>{a} 14000원</h4>
                        <span> {수량[i]} </span>
                        <button onClick={() => {
                            let copy = [...수량];
                            copy[i]++;
                            수량변경(copy);
                        }}>+</button>
                        </div>
                    )
                })
            }
        </div>
    )
}