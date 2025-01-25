import React from 'react';
import style from '../../styles/SpecialBody.module.css';

function Menu() {  // Corrected function declaration
  const menuData = [
    {
      category: '커피☕',
      items: [
        { name: '에스프레소', hot: 3.0, ice: null },
        { name: '아메리카노⭐', hot: 3.0, ice: 3.5 },
        { name: '카페라떼', hot: 4.0, ice: 4.5 },
        { name: '바닐라라떼', hot: 4.0, ice: 4.5 },
        { name: '카푸치노', hot: 4.0, ice: 4.5 },
        { name: '카라멜마끼야또', hot: 4.5, ice: 5.0 },
        { name: '카페모카', hot: 4.5, ice: 5.0 },
      ],
    },
    {
      category: '차🍵',
      items: [
        { name: '수제 대추차⭐', hot: 4.0, ice: null },
        { name: '모과차', hot: 3.5, ice: null },
        { name: '유자차', hot: 3.5, ice: null },
        { name: '생강차', hot: 3.5, ice: null },
        { name: '카모마일', hot: 3.0, ice: 3.5 },
        { name: '페퍼민트', hot: 3.0, ice: 3.5 },
        { name: '얼그레이', hot: 3.0, ice: 3.5 },
        { name: '레몬그라스', hot: 3.0, ice: 3.5 },
      ],
    },
    {
      category: '라떼🥛',
      items: [
        { name: '핫초코⭐', hot: 4.0, ice: 4.5 },
        { name: '녹차라떼', hot: 4.0, ice: 4.0 },
        { name: '고구마라떼', hot: 4.0, ice: 4.5 },
      ],
    },
    {
      category: '에이드🍹',
      items: [
        { name: '레몬에이드', hot: null, ice: 4.0 },
        { name: '블루레몬에이드', hot: null, ice: 4.0 },
        { name: '자몽에이드', hot: null, ice: 4.0 },
        { name: '청포도에이드', hot: null, ice: 4.0 },
      ],
    },
    {
      category: '프레도🧁',
      items: [
        { name: '모카프레도', hot: null, ice: 5.0 },
        { name: '그린티프레도', hot: null, ice: 5.0 },
        { name: '요거트프레도', hot: null, ice: 5.0 },
        { name: '딸기프레도', hot: null, ice: 5.0 },
      ],
    },
    {
      category: '쥬스🧃',
      items: [
        { name: '딸기', hot: null, ice: 5.0 },
        { name: '바나나⭐', hot: null, ice: 4.5 },
        { name: '딸기바나나', hot: null, ice: 5.0 },
      ],
    },
  ];

  return (
    <div className={style.menu}>
      {menuData.map((categoryData) => (
        <div className={style.menuCategory} key={categoryData.category}>
          <h2 className={style.categoryTitle}>{categoryData.category}</h2>
          <table className={style.menuTable}>
            <thead>
              <tr>
                <th> </th>
                <th>HOT</th>
                <th>ICE</th>
              </tr>
            </thead>
            <tbody>
              {categoryData.items.map((item) => (
                <tr key={item.name}>
                  <td className={style.itemName}>{item.name}</td>
                  <td className={style.itemHot}>
                    {item.hot !== null ? item.hot.toFixed(1) : "-"}
                  </td>
                  <td className={style.itemIce}>
                    {item.ice !== null ? item.ice.toFixed(1) : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Menu;
