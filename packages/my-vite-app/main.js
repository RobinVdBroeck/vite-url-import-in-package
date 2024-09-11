import { getUrl } from "my-library-with-url";

document.querySelector('#app').innerHTML = `
  <div>
    ${getUrl().toString()}
  </div>
`
