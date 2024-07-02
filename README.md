# triples-api-client
操作triple-api的客户端

## 安装
`npm i triples-api-client -S`

## 使用

```typescript
const options = {
  host: 'https://10-10-160-92-13001.webvpn.ynu.edu.cn/v1',
  token: 'jwt-token',
}
const rdfType = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type';
const rdfsClass = 'http://www.w3.org/2000/01/rdf-schema#Class';

const resouce = async () => {
  const res = await Resources.get({
    iri: rdfType,
  }, options);
  console.log(res);
}
const classTest = async () => {
  const res = await Classes.instancesOf({ iri: rdfsClass }, options);
  console.log(res[0]);
}
const tripleTest = async () => {
  // const res = await Triples.getById({ id: 183 }, options);
  // const res = await Triples.listByP({ iri: rdfType}, options);
  // const res = await Triples.listBySP({ subject: rdfsClass, predicate: rdfType}, options);
  const res = await Triples.listByPO({ predicate:rdfType, object:rdfsClass}, options);
  console.log(res);
  
}

resouce();
classTest();
tripleTest();
```