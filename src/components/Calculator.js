import React from 'react'


function Elements(props) {

        const buttons = [
            ['seven', '7'], ['eight', '8'], ['nine', '9'], 
            ['clear', 'clear', 'C'], ['four', '4'], ['five', '5'], ['six', '6'],
            ['multiply', '*'], ['divide', '/'], ['equals', '='], ['one', '1'], ['two', '2'],
            ['three', '3'], ['add', '+'], ['zero', '0'], ['decimal', '.'], ['subtract', '-']

        ]
            

        return (
            <React.Fragment>
                <input id="display" className='text-right' type="input" value={props.amount} readOnly></input>
                {
                    buttons.map((b) => 
                        <button id={b[0]} key={b[0]} onClick={props.onClick()} value={b[1]}>
                            {b[1]==='clear'?b[2]:b[1]}
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

        this.state = {
            amount: 0
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) => {

        let input = event.target.value

        if (input === '/' | input === '*' | input === '+' | input === '-' ) {
            if (this.number === '' | this.number === '-') {
                if(input === '-') {
                    this.number = this.number + input
                    this.setState({amount: this.number})
                } else {
                    this.fullInput.splice(-1, 1, input)
                    this.number = ''
                    this.setState({amount: this.numberCp})
                }
            } else {
                this.fullInput.push(this.number)
                if (input === '+' | input === '-' ) {
                    if (this.fullInput.length > 2) {
                        let result = this.getResult(this.fullInput)
                        this.setState({amount: result})
                        this.numberCp = result
                    }
                }
                this.fullInput.push(input)
                this.number = ''
            }
        } else if (input === '=') {
            this.fullInput.push(this.number)
            let result = this.getResult(this.fullInput)
            this.setState({amount: result})
            input = ''
            this.number = ''
            this.fullInput.push(result)
        } else if (input === 'clear') {
            input = ''
            this.number = ''
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
        return input[0]
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