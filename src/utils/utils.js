
export function calculation(num1, ope, num2) {
                
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    switch(ope) {
        case '÷':
            return num1 / num2
        case 'X':
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

export function validate(a, c) {
    let str = ''

    if (a === '0' && c === '0') {
        return '0'
    } else if (a === '0' && c !== '.') {
        return c
    } else if (a === '' && c === '.') {
        return '0.'
    } else if (a === '-' && c === '.') {
        return '-0.'
    } else if (c === '.' && a.toString().indexOf('.') !== -1) {
        str = a
    } else if (c === '-' && a.toString().indexOf('-') !== -1) { 
        str = a
    } else if (c === '√' && a.toString().indexOf('√') !== -1) { 
        str = a
    } else {
        str = a + c
    }

    return str  
}