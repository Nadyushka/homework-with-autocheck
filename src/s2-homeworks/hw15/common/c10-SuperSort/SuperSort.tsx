import React from 'react'
import topIcon from '../assets/top.svg'
import bottomIcon from '../assets/bottom.svg'
import topBottomIcon from '../assets/top-bottom.svg'

// добавить в проект иконки и импортировать
const downIcon = bottomIcon
const upIcon = topIcon
const noneIcon = topBottomIcon

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort === '' ) {
        return down
    } else  if (sort === down ){
        return up
    }  else {
        return ''
    }
}


const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
                style={{width:'10px'}}
            />

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
