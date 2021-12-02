import React, { useState } from 'react'
import { Container, Tabs, Tab } from 'react-bootstrap'
import {
    FileUpload,
    MultipleFilesUpload,
    FolderUpload,
    ImageUpload,
    PdfUpload,
    TextUpload
} from 'react-ipfs-uploader'

export const ExampleTabs = () => {
    const [fileUrl, setFileUrl] = useState('')
    const [multipleFilesUrl, setMultipleFilesUrl] = useState('')
    const [folderUrl, setFolderUrl] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [pdfUrl, setPdfUrl] = useState('')
    const [textUrl, setTextUrl] = useState('')

    return (
        <Container>
            <Tabs defaultActiveKey='FileUpload' className='mb-3'>
                <Tab eventKey='FileUpload' title='FileUpload'>
                    <h5>
                        FileUpload : Displays the Name and Size of the selected
                        File and returns the URL after uploading .
                    </h5>

                    <FileUpload setUrl={setFileUrl} />

                    <h5>
                        FileUrl :{' '}
                        <a
                            href={fileUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {fileUrl}
                        </a>
                    </h5>

                    <hr />

                    <iframe
                        src='https://codesandbox.io/embed/fileupload-81g84?fontsize=14&hidenavigation=1&theme=dark'
                        style={{
                            width: '100%',
                            height: '500px',
                            border: '0',
                            borderRadius: '4px',
                            overflow: 'hidden'
                        }}
                        title='FileUpload'
                        allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
                        sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
                    ></iframe>
                </Tab>

                <Tab eventKey='MultipleFilesUpload' title='MultipleFilesUpload'>
                    <h5>
                        MultipleFilesUpload : Displays a list with Name and Size
                        of every selected File and returns the URL after
                        uploading .
                    </h5>

                    <MultipleFilesUpload setUrl={setMultipleFilesUrl} />

                    <h5>
                        MultipleFilesUpload :{' '}
                        <a
                            href={multipleFilesUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {multipleFilesUrl}
                        </a>
                    </h5>

                    <hr />

                    <iframe
                        src='https://codesandbox.io/embed/multiplefilesupload-uf6yw?fontsize=14&hidenavigation=1&theme=dark'
                        style={{
                            width: '100%',
                            height: '500px',
                            border: '0',
                            borderRadius: '4px',
                            overflow: 'hidden'
                        }}
                        title='MultipleFilesUpload'
                        allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
                        sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
                    ></iframe>
                </Tab>

                <Tab eventKey='FolderUpload' title='FolderUpload'>
                    <h5>
                        FolderUpload : Displays a list with Name and Size of
                        every File in the selected Folder and returns the URL
                        after uploading .
                    </h5>

                    <FolderUpload setUrl={setFolderUrl} />

                    <h5>
                        FolderUrl :{' '}
                        <a
                            href={folderUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {folderUrl}
                        </a>
                    </h5>

                    <hr />

                    <iframe
                        src='https://codesandbox.io/embed/folderupload-y6j2b?fontsize=14&hidenavigation=1&theme=dark'
                        style={{
                            width: '100%',
                            height: '500px',
                            border: '0',
                            borderRadius: '4px',
                            overflow: 'hidden'
                        }}
                        title='FolderUpload'
                        allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
                        sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
                    ></iframe>
                </Tab>

                <Tab eventKey='ImageUpload' title='ImageUpload'>
                    <h5>
                        ImageUpload : Shows the user a preview of the selected
                        Image and returns the URL after uploading .
                    </h5>

                    <ImageUpload setUrl={setImageUrl} />

                    <h5>
                        ImageUrl :{' '}
                        <a
                            href={imageUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {imageUrl}
                        </a>
                    </h5>

                    <hr />

                    <iframe
                        src='https://codesandbox.io/embed/imageupload-65kpl?fontsize=14&hidenavigation=1&theme=dark'
                        style={{
                            width: '100%',
                            height: '500px',
                            border: '0',
                            borderRadius: '4px',
                            overflow: 'hidden'
                        }}
                        title='ImageUpload'
                        allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
                        sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
                    ></iframe>
                </Tab>

                <Tab eventKey='PdfUpload' title='PdfUpload'>
                    <h5>
                        PdfUpload : Shows the user a preview of the selected PDF
                        and returns the URL after uploading .
                    </h5>

                    <PdfUpload setUrl={setPdfUrl} />

                    <h5>
                        PdfUrl :{' '}
                        <a
                            href={pdfUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {pdfUrl}
                        </a>
                    </h5>

                    <hr />

                    <iframe
                        src='https://codesandbox.io/embed/pdfupload-ce4ch?fontsize=14&hidenavigation=1&theme=dark'
                        style={{
                            width: '100%',
                            height: '500px',
                            border: '0',
                            borderRadius: '4px',
                            overflow: 'hidden'
                        }}
                        title='PdfUpload'
                        allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
                        sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
                    ></iframe>
                </Tab>

                <Tab eventKey='TextUpload' title='TextUpload'>
                    <h5>
                        TextUpload : Returns the URL of the Text after uploading
                        .
                    </h5>

                    <TextUpload setUrl={setTextUrl} />

                    <h5>
                        TextUrl :{' '}
                        <a
                            href={textUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {textUrl}
                        </a>
                    </h5>

                    <hr />

                    <iframe
                        src='https://codesandbox.io/embed/textupload-vpcst?fontsize=14&hidenavigation=1&theme=dark'
                        style={{
                            width: '100%',
                            height: '500px',
                            border: '0',
                            borderRadius: '4px',
                            overflow: 'hidden'
                        }}
                        title='TextUpload'
                        allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
                        sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
                    ></iframe>
                </Tab>
            </Tabs>
        </Container>
    )
}
