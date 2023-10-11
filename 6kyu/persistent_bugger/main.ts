export const persistence = (num:number):number => {
    if(num<10) return 0 //salida para los números de un dígito
    else {
        const cifras:number[] = separar_num(num,[])
        num=cifras.reduce((previousValue, currentValue) => previousValue*currentValue,1)
        return 1+persistence(num)
    }
}

export const separar_num = (num:number,acc:number[]):number[] => {
    if (num<10){
        acc.push(num)
        return acc
    }
    else{
        const unidad:number = num % 10
        acc.push(unidad)
        return separar_num((num -unidad)/10,acc)
    }
}