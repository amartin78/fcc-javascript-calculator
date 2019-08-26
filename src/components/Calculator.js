import React from 'react'
import { calculation, validate } from '../utils/utils'


function Elements(props) {

    const buttons = [
        ['seven', '7'], ['eight', '8'], ['nine', '9'],  ['percent', '%'], ['clear', 'clear', 'C'],
        ['four', '4'], ['five', '5'], ['six', '6'], ['multiply', 'X'], ['divide', '÷'],
        ['one', '1'], ['two', '2'], ['three', '3'], ['add', '+'],['subtract', '-'],
        ['zero', '0'], ['decimal', '.'],  ['square-root', '√', '√'], ['equals', '='],
    ]

    return (
        <React.Fragment>
            <input id="display" className='text-right' type="input" value={props.amount} readOnly></input>
            {
                buttons.map((b) => 
                    <button id={b[0]} key={b[0]} onClick={props.onClick()} value={b[1]}>
                        {b[1]==='clear' | b[1]==='square-root'?b[2]:b[1]}
                    </button>
                )
            }
        </React.Fragment>
    )
}

export default class Calculator extends React.Component {

    constructor() {
        super()

        this.fullInput = []
        this.number = ''
        this.numberCp = ''
        this.equals = false
        this.lastExpression = []

        this.state = {
            amount: 0
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) => {

        let input = event.target.value

        if (this.state.amount.length >= 10 & (/[0-9|.]+/).test(input) & this.number !== '') {
            return 
        }

        if (input === '%') {
            this.percent(input)

        } else if (input === '÷' | input === 'X' | input === '+' | input === '-' ) {

            if (this.number === '' & this.state.amount === 0 & input !== '-') {
                return 0
            } 
            // if two or more operators are entered consecutively, the operation performed should be 
            // the last operator entered
            else if ((this.number === '' | this.number === '-' | this.number === '√') ){
                this.consecutiveOpe(input)
                
            } else { // if an operator is pressed after a number is entered
                this.normalOpe(input)

            }
            this.equals = false
        } else if (input === '=') {
            this.result(input)

        } else if (input === 'clear') {
            this.clear(input)
        } else {
            this.storeNumber(this.number, input)
        }
    }

    storeNumber = (a, b) => {
        this.number = validate(a, b)
        this.numberCp = this.number
        this.setState({amount: this.number})
    }

    clear = (input) => {
        input = ''
        this.number = ''
        this.numberCp = ''
        this.lastExpression = []
        this.fullInput = []
        this.equals = false
        this.setState({amount: 0})
    }

    percent = (input) => {
        let num1 = this.fullInput[this.fullInput.length - 2]

        if (this.number === '') {
            return 0
        }
        if (num1 === undefined) {
            num1 = 1
        }
        let percent = num1 * this.number * 0.01   
        this.setState({amount: percent})
        this.number = percent
    }

    result = (input) => {
        let result = ''
        let lastOne = this.fullInput[this.fullInput.length - 1]
        let lastTwo = this.fullInput[this.fullInput.length - 2]
        this.equals = true
        
        if (this.state.amount === 0) {
            return 0
        } else if (typeof lastOne === 'number') {
            this.fullInput.splice(-1, 1, this.lastExpression[0])
            this.number = this.lastExpression[1]
        } else if (this.number === '') {
            this.number = lastTwo
        } else if (this.number.toString().indexOf('√') !== -1) {
            if (this.number[0] === '-') {
                this.number = -Math.sqrt(this.number.slice(2))
            } else {
                this.number = Math.sqrt(this.number.slice(1))
            }
        }

        if (this.number !== '') {
            // add number to array
            this.fullInput.push(this.number)
            this.lastExpression.push(this.number)
        }
        if (this.number !== '') {
            result = this.getResult(this.fullInput)
            this.fullInput.push(result)
            this.setState({amount: result})
            this.numberCp = result
            input = ''
            this.number = ''
        } 
    }

    consecutiveOpe = (input) => {
        if (input === '-' & !this.equals) { // - operator
            this.number = validate(this.number, input)
            this.setState({amount: this.number})
        } else {  // + or * or / operator
            this.fullInput.splice(-1, 1, input)
            this.number = ''
            this.setState({amount: this.numberCp})
        }
    }

    normalOpe = (input) => {
        if (this.number.toString().indexOf('√') !== -1) {
            if (this.number[0] === '-') {
                this.number = -Math.sqrt(this.number.slice(2))
            } else {
                this.number = Math.sqrt(this.number.slice(1))
            }
        }

        if (this.number !== '') {
            // add number to array
            this.fullInput.push(this.number)
        }

        let sign = this.fullInput[this.fullInput.length - 2]
        if (((input === '+' | input === '-' ) & (this.fullInput.length > 2))
            |  (sign === 'X' | sign === '÷')) {
            let result = this.getResult(this.fullInput)
            this.setState({amount: result})
            this.numberCp = result
        }

        this.lastExpression.push(input)
        // add operator to array and set number to empty value
        this.fullInput.push(input)
        this.number = ''
    }

    getResult = (input) => {
        const symbols = [['÷', 'X'], ['+', '-']]
        const inputCp = input.slice(0)

        for(let i=0; i<symbols.length; i++) {
            inputCp.forEach((e) => {
                if (symbols[i][0] === e | symbols[i][1] === e) {
                    let idx = input.indexOf(e)
                    let res = calculation(input[idx-1], e, input[idx+1])
                    input.splice(idx-1, 3, res)
                }
            })
        }
        let result = input[0]

        if (isNaN(result)) {
            return 'Error'
        } else if (result.toString().length > 10) {
            return result.toString().slice(0,11)
        } else {
            return result
        }

    }

    render() {
        return (
            <div className='container grid'>
                <Elements 
                    amount={this.state.amount}
                    onClick={() => this.handleChange}
                />
            </div>
        )
    }
}



