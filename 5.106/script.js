try {
    console.log('hi');
    console.log(a);
    console.log('result')
} catch (error) {
    console.log('error');
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally{
    console.log('finally');
}

console.log('after')