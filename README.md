# react-ipfs-uploader

## React Components that enable you to upload file , files or folder to IPFS .

[![NPM](https://img.shields.io/npm/v/react-ipfs-uploader.svg)](https://www.npmjs.com/package/react-ipfs-uploader)
![downloads](https://img.shields.io/npm/dt/react-ipfs-uploader.svg)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

### npm :

```bash
npm install react-ipfs-uploader
```

### yarn :

```bash
yarn add react-ipfs-uploader
```

## Complete Demo :

[![Demo Video](https://i.ytimg.com/vi/k9slvgsPqJg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLBCc74AAit2zX9o6pozo-YQkYQ9dg)](https://youtu.be/k9slvgsPqJg)

## Usage

1 . Declare an `useState` hook that can hold a string as its current state . <br/>
2 . Pass the `setFunction` to the component you are using ie. `setUrl={setFunction}` <br/>
3 . As you upload the file , files or folder the url will be returned .

> ### FileUpload : Uploads a Single File and returns the URL after uploading the file .

> Example : https://codesandbox.io/s/fileupload-81g84

```jsx
// FileUpload Component : Uploads a Single File to IPFS and returns the URL
import React, { useState } from 'react'
import { FileUpload } from 'react-ipfs-uploader'

const YourComponent = () => {
    const [fileUrl, setFileUrl] = useState('')

    return (
        <div>
            <FileUpload setUrl={setFileUrl} />
            FileUrl : <a
                href={fileUrl}
                target='_blank'
                rel='noopener noreferrer'
            >
                {fileUrl}
            </a>
        </div>
    )
}

export default YourComponent
```

> ### MultipleFilesUpload : Uploads Multiple Files and returns the URL after uploading the files .

> Example : https://codesandbox.io/s/multiplefilesupload-uf6yw

```jsx
// MultipleFilesUpload Component : Uploads Multiple files to IPFS and returns the URL
import React, { useState } from 'react'
import { MultipleFilesUpload } from 'react-ipfs-uploader'

const YourComponent = () => {
    const [multipleFilesUrl, setMultipleFilesUrl] = useState('')

    return (
        <div>
            <MultipleFilesUpload setUrl={setMultipleFilesUrl} />
            MultipleFilesUrl : <a
                href={multipleFilesUrl}
                target='_blank'
                rel='noopener noreferrer'
            >
                {multipleFilesUrl}
            </a>
        </div>
    )
}

export default YourComponent
```

> ### FolderUpload : Uploads Folder and returns the URL after uploading the folder .

> Example : https://codesandbox.io/s/folderupload-y6j2b

```jsx
// FolderUpload Component : Uploads a Folder to IPFS and returns the URL
import React, { useState } from 'react'
import { FolderUpload } from 'react-ipfs-uploader'

const YourComponent = () => {
    const [folderUrl, setFolderUrl] = useState('')

    return (
        <div>
            <FolderUpload setUrl={setFolderUrl} />
            FolderUrl : <a
                href={folderUrl}
                target='_blank'
                rel='noopener noreferrer'
            >
                {folderUrl}
            </a>
        </div>
    )
}

export default YourComponent
```

> ### ImageUpload : ImageUpload : Shows the user a preview of the selected Image and returns the URL after uploading .

> Example : https://codesandbox.io/s/imageupload-65kpl

```jsx
// ImageUpload : ImageUpload : Shows the user a preview of the selected Image and returns the URL after uploading .
import React, { useState } from 'react'
import { ImageUpload } from 'react-ipfs-uploader'

const YourComponent = () => {
    const [imageUrl, setImageUrl] = useState('')

    return (
        <div>
            <ImageUpload setUrl={setImageUrl} />
            ImageUrl : <a
                href={imageUrl}
                target='_blank'
                rel='noopener noreferrer'
            >
                {imageUrl}
            </a>
        </div>
    )
}

export default YourComponent
```

> ### PdfUpload : PdfUpload : Shows the user a preview of the selected PDF and returns the URL after uploading .

> Example : https://codesandbox.io/s/pdfupload-ce4ch

```jsx
// PdfUpload : PdfUpload : Shows the user a preview of the selected PDF and returns the URL after uploading .
import React, { useState } from 'react'
import { PdfUpload } from 'react-ipfs-uploader'

const YourComponent = () => {
    const [pdfUrl, setPdfUrl] = useState('')

    return (
        <div>
            <PdfUpload setUrl={setPdfUrl} />
            Pdfurl : <a href={pdfUrl} target='_blank' rel='noopener noreferrer'>
                {pdfUrl}
            </a>
        </div>
    )
}

export default YourComponent
```

## Links

Developer Chat : https://discord.gg/bgY4TZecVu <br/>
Demo Website : https://yash-deore.github.io/react-ipfs-uploader/ <br/>
CodeSandBox : https://codesandbox.io/u/yash-deore <br/>
NPM Package : https://www.npmjs.com/package/react-ipfs-uploader <br/>
GitHub Repository : https://github.com/yash-deore/react-ipfs-uploader <br/>

## License

MIT © [yash-deore](https://github.com/yash-deore)

> ### Made with react , create-react-library , react-bootstrap , ipfs-http-client , it-all
