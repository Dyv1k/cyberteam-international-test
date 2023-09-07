'use client'

import {dataUsers} from '@/api/data';

import style from './RatingList.module.scss'

type Props = {};

export default function RatingList({ }: Props) {
    
    console.log(dataUsers)
    return (
        <ol className={style['rating']}>
            <li className=""></li>
        </ol>
    )
};
