'use client'

import { Fragment, useEffect, useRef, useState } from 'react';

import RatingListItem from './components/RatingListItem';

import { useObserver } from '@/hooks/useObserver';
import { User, dataUsers } from '@/api/data';

import style from './RatingList.module.scss'

export default function RatingList() {

    const [activeItem, setActiveItem] = useState<number | null>(null);
    const [ratingList, setRatingList] = useState<User[] | []>()
    const [fetchParams, setFetchParams] = useState(1)
    const [isLoading, setIsLoading] = useState(false);

    const lastRatingItem = useRef<HTMLElement>(null)

    const renderCount = 50

    useObserver({
        ref: lastRatingItem,
        canLoad: (renderCount * fetchParams) < dataUsers.length,
        isLoading: isLoading,
        callback: () => {
            setFetchParams(fetchParams + 1)
        }
    })

    useEffect(() => {
        setIsLoading(true);
        const fetchList = dataUsers.filter((item, index) => {
            return index >= renderCount * (fetchParams-1) && index < renderCount * fetchParams
        })
        const timer = setTimeout(() => {
            setRatingList(prevRatingList => {
                if (prevRatingList) {
                  return [...prevRatingList, ...fetchList];
                } else {
                  return [...fetchList];
                }
            });
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [fetchParams]);

    useEffect(()=>{
        console.log('ratingList', ratingList)
    }, [ratingList])


    const setItems = () => {
        return ratingList?.map((item, index) => {
            return (
                <Fragment key={index}>
                    {index !== ratingList.length - 1 ? (
                        <RatingListItem
                            key={index}
                            callback={() => activeItem === index ? setActiveItem(null) : setActiveItem(index)}
                            index={index}
                            isActive={activeItem === index}
                            item={item}
                        />
                    ) : (
                        <>
                            <span ref={lastRatingItem}></span>
                            <RatingListItem
                                callback={() => activeItem === index ? setActiveItem(null) : setActiveItem(index)}
                                index={index}
                                isActive={activeItem === index}
                                item={item}
                                key={index}
                            />
                        </>
                    )}
                </Fragment>
            )
        })
    }

    return (
        <ol className={isLoading? `${style['rating']} ${style['rating_loading']}` : style['rating']}>
            {setItems()}
        </ol>
    )
};
