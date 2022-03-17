

const sumar = ( x, y ) => x + y
const restar = ( x, y ) => x - y

const multiplicar = ( x, y ) => {
    if( y === 1 ) return  x;
    if( y === 0 ) return 0;
    if( y < 0 ) return -multiplicar(x , -y)
    return x + multiplicar( x, restar( y, 1 ) )
}

const dividir = ( x, y ) => {
    if( restar( x, y ) < 0 ) return 0;
    return 1 + dividir( restar(x, y ), y )
}

console.log( multiplicar(5, 5) )
console.log( multiplicar(-5, -3) )
console.log( dividir(10, 2) )
