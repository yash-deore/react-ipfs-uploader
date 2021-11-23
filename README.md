# react-ipfs-uploader

## React Components that enable you to upload file , files or folder to IPFS .

[![NPM](https://img.shields.io/npm/v/react-ipfs-uploader.svg)](https://www.npmjs.com/package/react-ipfs-uploader) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

### npm :

```bash
npm install react-ipfs-uploader
```

### yarn :

```bash
yarn add react-ipfs-uploader
```

## How To Use :

[![Demo Video](https://i.ytimg.com/vi/k9slvgsPqJg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLBCc74AAit2zX9o6pozo-YQkYQ9dg)](https://youtu.be/k9slvgsPqJg)

## Usage

1 . Declare an `useState` hook that can hold a string as its current state . <br/>
2 . Pass the `setFunction` to the component you are using ie. `setUrl={setFunction}` <br/>
3 . As you upload the file , files or folder the url will be returned .

> ### FileUpload : Uploads a Single File and returns the URL

```jsx
// FileUpload Component : Uploads a Single File to IPFS and returns the URL
import React, { useState } from 'react'
import { FileUpload } from 'react-ipfs-uploader'

const YourComponent = () => {
    const [fileUrl, setFileUrl] = useState('')

    return (
        <div>
            <FileUpload setUrl={setFileUrl} />

            {fileUrl}
        </div>
    )
}

export default YourComponent
```

> ### MultipleFilesUpload : Uploads Multiple Files and returns the URL

```jsx
// MultipleFilesUpload Component : Uploads Multiple files to IPFS and returns the URL
import React, { useState } from 'react'
import { MultipleFilesUpload } from 'react-ipfs-uploader'

const YourComponent = () => {
    const [multipleFilesUrl, setMultipleFilesUrl] = useState('')

    return (
        <div>
            <MultipleFilesUpload setUrl={setMultipleFilesUrl} />

            {multipleFilesUrl}
        </div>
    )
}

export default YourComponent
```

> ### FolderUpload : Uploads Folder and returns the URL

```jsx
// FolderUpload Component : Uploads a Folder to IPFS and returns the URL
import React, { useState } from 'react'
import { FolderUpload } from 'react-ipfs-uploader'

const YourComponent = () => {
    const [folderUrl, setFolderUrl] = useState('')

    return (
        <div>
            <FolderUpload setUrl={setFolderUrl} />

            {folderUrl}
        </div>
    )
}

export default YourComponent
```

## License

MIT © [yash-deore](https://github.com/yash-deore)

> ### Made with react , create-react-library , react-bootstrap , ipfs-http-client , it-all
