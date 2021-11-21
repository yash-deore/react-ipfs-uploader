# react-ipfs-uploader

## React Components that enable you to upload file , files or folder to IPFS .

[![NPM](https://img.shields.io/npm/v/react-ipfs-uploader.svg)](https://www.npmjs.com/package/react-ipfs-uploader) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-ipfs-uploader
```

## Usage

1 . Declare an `useState` hook that can hold a string as its current state . <br/>
2 . Pass the `Set Function` ( In the below example `setUrl` ) to the components you are using . <br/>
3 . As you upload the file , files or folder the url will be returned ( In the below example `url`)

> ### FileUpload : Uploads a Single File and returns the URL

```jsx
// FileUpload Component : Uploads a Single File to IPFS and returns the URL
import React, { useState } from 'react'
import { FileUpload } from 'react-ipfs-uploader'

const App = () => {
    const [url, setUrl] = useState('')

    return (
        <div>
            <FileUpload setUrl={setUrl} />

            {url}
        </div>
    )
}

export default App
```

> ### MultipleFilesUpload : Uploads Multiple Files and returns the URL

```jsx
// MultipleFilesUpload Component : Uploads Multiple files to IPFS and returns the URL
import React, { useState } from 'react'
import { MultipleFilesUpload } from 'react-ipfs-uploader'

const App = () => {
    const [url, setUrl] = useState('')

    return (
        <div>
            <MultipleFilesUpload setUrl={setUrl} />

            {url}
        </div>
    )
}

export default App
```

> ### FolderUpload : Uploads Folder and returns the URL

```jsx
// FolderUpload Component : Uploads a Folder to IPFS and returns the URL
import React, { useState } from 'react'
import { FolderUpload } from 'react-ipfs-uploader'

const App = () => {
    const [url, setUrl] = useState('')

    return (
        <div>
            <FolderUpload setUrl={setUrl} />

            {url}
        </div>
    )
}

export default App
```

## License

MIT © [yash-deore](https://github.com/yash-deore)

> ### Made with react , create-react-library , react-bootstrap
