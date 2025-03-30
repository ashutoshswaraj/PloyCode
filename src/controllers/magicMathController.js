const cache ={}

const magicMathResult =(n)=> {
    if(n===0)return 0;
    if(n===1)return 1;

    if(cache[n])return cache[n];
    cache[n] = magicMathResult(n-1) + magicMathResult(n-2) + n;
    return cache[n];
}

exports.magicMath = (req,res)=>{
    const n = parseInt(req.params.n,10);

    if(isNaN(n)||n<0){
        return res.status(400).json({ error: 'Invalid input. N must be a non-negative integer.' });

    }
    const result = magicMathResult(n);
    res.json({ n, magic_math: result });
}