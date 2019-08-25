import React from 'react'


function Elements(props) {

    const buttons = [
        ['seven', '7'], ['eight', '8'], ['nine', '9'],  ['percent', '%'], ['clear', 'clear', 'C'],
        ['four', '4'], ['five', '5'], ['six', '6'], ['multiply', '*'], ['divide', '/'],
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

        this.state = {
            amount: 0
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) => {

        let input = event.target.value

        if (input === '%') {
            let num1 = this.fullInput[this.fullInput.length - 2]
            if (num1 === undefined) {
                num1 = 1
            }
            let percent = num1 * this.number * 0.01   
            this.setState({amount: percent})
            this.number = percent
        } else if (input === '/' | input === '*' | input === '+' | input === '-' ) {
            console.log('fullinput ', this.fullInput)
            if ((this.number === '' | this.number === '-') & (!this.equals)) {
                if(input === '-') {
                    this.number = this.validate(this.number, input)
                    this.setState({amount: this.number})
                } else {
                    console.log('plus sign and number is empty', this.number)
                    this.fullInput.splice(-1, 1, input)
                    this.number = ''
                    this.setState({amount: this.numberCp})
                    console.log(this.fullInput)
                }
            } else {
                if (this.number.toString().indexOf('√') !== -1) {
                    this.number = Math.sqrt(this.number.slice(1))
                }
                this.fullInput.push(this.number)
                let sign = this.fullInput[this.fullInput.length - 2]

                if (((input === '+' | input === '-' ) & (this.fullInput.length > 2))
                    |  (sign === '*' | sign === '/')) {
                    let result = this.getResult(this.fullInput)
                    this.setState({amount: result})
                    this.numberCp = result
                }
                this.fullInput.push(input)
                this.number = ''
            }
            this.equals = false
        } else if (input === '=') {
            let result = ''
            let last = this.fullInput[this.fullInput.length - 2]
            this.equals = true

            if (this.number === '') {
                this.number = last
            }

            if (this.number.toString().indexOf('√') !== -1) {
                this.number = Math.sqrt(this.number.slice(1))
            }

            this.fullInput.push(this.number)

            if (this.number !== '') {
                result = this.getResult(this.fullInput)


                this.fullInput.push(result)




                this.setState({amount: result})
                this.numberCp = result
                input = ''
                this.number = ''
                console.log('after equals ', this.fullInput)
            } 
        } else if (input === 'clear') {
            input = ''
            this.number = ''
            this.numberCp = ''
            this.fullInput = []
            this.setState({amount: 0})
        } else {   
            this.number = this.validate(this.number, input)
            this.numberCp = this.number
            this.setState({amount: this.number})
        }
    }

    validate = (a, c) => {
        let str= ''

        if (a === '0' && c === '0') {
            return '0'
        } else if (a === '' && c === '.') {
            return '0.'
        } else if (c === '.' && a.toString().indexOf('.') !== -1) {
            str = a
        } else if (c === '-' && a.toString().indexOf('-') !== -1) { 
            str = a
        } else {
            str = a + c
        }

        return str  
    }

    calculation = (num1, ope, num2) => {
                
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)

        switch(ope) {
            case '/':
                return num1 / num2
            case '*':
                return num1 * num2
            case '+':
                return num1 + num2
            case '-':
                return num1 - num2
            case '√':
                return Math.sqrt(num1)
            default:
                return ''
        }
    }

    getResult = (input) => {
        const symbols = [['/', '*'], ['+', '-']]
        const inputCp = input.slice(0)

        for(let i=0; i<symbols.length; i++) {
            inputCp.forEach((e) => {
                if (symbols[i][0] === e | symbols[i][1] === e) {
                    let idx = input.indexOf(e)
                    let res = this.calculation(input[idx-1], e, input[idx+1])
                    input.splice(idx-1, 3, res)
                }
            })
        }
        let result = input[0]

        return isNaN(result)?'Error':result.toString().length>10?result.toString().slice(0,10):result
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