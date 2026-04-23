function sum2(a,b)
{
setTimeout(()=>(
    console.log(a+b),3000))
}
sum2(90,sum2(2,5))


function ten_no()
{
    for(let i=0;i<=10; i++)
        console.log(i)
}
ten_no()