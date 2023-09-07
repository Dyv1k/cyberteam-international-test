import RatingListItemImg from "./RatingListItemImg";

import formatMilliseconds from "@/interface/formatMilliseconds";
import { User, Color } from "@/api/data";

import style from '../RatingList.module.scss'

type Props = {
    callback: () => void,
    item: User,
    index: number,
    isActive: boolean,
};

export default function RatingListItem({callback, item, index, isActive }: Props) {
    return (
        <li
            onClick={callback}
            className={
                isActive?
                `${style['rating-item']} ${style['rating-item_active']}`
                : style['rating-item']
            }
        >
            <span className={style['rating-item__index']}>{index + 1}</span>
            <RatingListItemImg
                color={item.color === Color.RED ? 'red' : item.color === Color.GREEN ? 'green' : 'blue'}
            />
            <div className={style['rating-item__info']}>
                <h3 className={style['rating-item__info__title']}>{item.name}</h3>
                <p className={style['rating-item__info__stats']}>
                    <span>{formatMilliseconds(item.time)}</span> | <span>{item.speed} км/ч</span>
                </p>
            </div>
        </li>
    );
}
