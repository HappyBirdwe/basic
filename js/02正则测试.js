let  p = '<p>1.这个有免运费的吗？没有</p><p>2.这个有免运费的吗？没有</p><p>3.这个有免运费的吗？没有</p>';
let List = []
let res = []
List = p.replace(/[\r\t\n]/g, "").match(/(\<p\>)(.*?)(\<\/p\>)/g)
for(let item of List) {
    res.push(item.slice(5,-4))
}
console.log(res);

// let a = "1234 5678"
// let reg = /(\d{4}) (\d{4})/
// let result = a.replace(reg, "$2 $1")
// console.log(result)