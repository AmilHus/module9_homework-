const parser = new DOMParser();

const xmlString = `
    <list>
    <student>
        <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
    </list>`
;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const studentNode = xmlDOM.getElementsByTagName("student");
const nameNode = xmlDOM.querySelector("name");
const firstNode = xmlDOM.getElementsByTagName("first");
const secondNode = xmlDOM.getElementsByTagName("second");
const ageNode = xmlDOM.getElementsByTagName("age");
const profNode = xmlDOM.getElementsByTagName("prof");

const langAttrEN = studentNode[0].querySelector("name").getAttribute("lang");
const langAttrRU = studentNode[1].querySelector("name").getAttribute("lang");


 result = {
    list:[
      {
      name:firstNode[0].textContent + " " + secondNode[0].textContent,
      age:Number(ageNode[0].textContent),
      prof:profNode[0].textContent,
      lang:langAttrEN,
      },
      {
      name:firstNode[1].textContent + " " + secondNode[1].textContent,
      age:Number(ageNode[1].textContent),
      prof:profNode[1].textContent,
      lang:langAttrRU,
      },
    ]
}

console.log(result);