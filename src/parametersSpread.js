const showInfo = (...data) => {
    console.log(`${data[0]} is ${data[1]} and email: ${data[2]}`);
}

const ArrayDatas = ["Jerson", 22, "jersonmartinezsm@gmail.com"];

showInfo(...ArrayDatas);