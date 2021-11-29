
import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'


function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState([value1,100])

    const onChangeRange = (value: number) => {
        setValue1(value)
        setValue2(value2.map((v, i) => i === 0 ? value : v))
    }

    const onChangeDoubleRange = (value: number | number[]) => {
        setValue2(value as number[])
        setValue1(value2[0])
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>

                <SuperDoubleRange
                value={value2}
                onChangeRange={onChangeDoubleRange}
                />

                <span>{value2[0]}</span>
                <span>{value2[1]}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
