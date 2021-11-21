# react-ipfs-uploader

## React Components that enable you to upload file , files or folder to IPFS .

[![NPM](https://img.shields.io/npm/v/react-ipfs-uploader.svg)](https://www.npmjs.com/package/react-ipfs-uploader) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install react-ipfs-uploader
```

```bash
yarn add react-ipfs-uploader
```

## Usage

1 . Declare an `useState` hook that can hold a string as its current state . <br/>
2 . Pass the `setFunction` to the components you are using ie. `setUrl={setFunction}` <br/>
3 . As you upload the file , files or folder the url will be returned .

> ### FileUpload : Uploads a Single File and returns the URL

```jsx
// FileUpload Component : Uploads a Single File to IPFS and returns the URL
import React, { useState } from 'react'
import { FileUpload } from 'react-ipfs-uploader'

const App = () => {
    const [fileUrl, setFileUrl] = useState('')

    return (
        <div>
            <FileUpload setUrl={setFileUrl} />

            {fileUrl}
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
    const [multipleFilesUrl, setMultipleFilesUrl] = useState('')

    return (
        <div>
            <MultipleFilesUpload setUrl={setMultipleFilesUrl} />

            {multipleFilesUrl}
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
    const [folderUrl, setFolderUrl] = useState('')

    return (
        <div>
            <FolderUpload setUrl={setFolderUrl} />

            {folderUrl}
        </div>
    )
}

export default App
```

## License

MIT © [yash-deore](https://github.com/yash-deore)

> ### Made with reactjs , create-react-library , react-bootstrap , ipfs-http-client , it-all
