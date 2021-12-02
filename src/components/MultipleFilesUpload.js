import React, { useState } from 'react'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import {
    Form,
    ListGroup,
    Badge,
    Button,
    ProgressBar,
    Container
} from 'react-bootstrap'
const ipfs = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')
const all = require('it-all')

export const MultipleFilesUpload = ({ setUrl }) => {
    const [files, setFiles] = useState([])
    const [filesUrl, setFilesUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [uploaded, setUploaded] = useState(false)

    const uploadFiles = async () => {
        let fileObjectsArray = Array.from(files).map((file) => {
            return {
                path: file.name,
                content: file
            }
        })

        const results = await all(
            ipfs.addAll(fileObjectsArray, { wrapWithDirectory: true })
        )

        console.log(results)
        return results
    }

    const returnFilesUrl = async (e) => {
        setLoading(true)
        e.preventDefault()

        const results = await uploadFiles(files)
        const length = results.length
        const FilesHash = results[length - 1].cid._baseCache.get('z')
        const FilesUrl = 'https://ipfs.infura.io/ipfs/' + FilesHash
        setUrl(FilesUrl)
        setFilesUrl(FilesUrl)
        setLoading(false)
        setUploaded(true)
    }

    const filesAndUploadButton = () => {
        if (files.length !== 0) {
            if (!loading) {
                return (
                    <div>
                        {uploaded ? (
                            <h5>
                                ✅{' '}
                                <a
                                    href={filesUrl}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Files
                                </a>{' '}
                                Uploaded Successfully ✅
                            </h5>
                        ) : (
                            <div>
                                <Button className='mb-3' type='submit'>
                                    Upload Files
                                </Button>

                                <ListGroup className='mb-3'>
                                    {Array.from(files).map((file) => {
                                        return (
                                            <ListGroup.Item
                                                as='li'
                                                className='d-flex justify-content-between align-items-start'
                                            >
                                                <div className='ms-2 me-auto'>
                                                    {file.name}
                                                </div>
                                                <Badge pill>
                                                    {file.size} kb
                                                </Badge>
                                            </ListGroup.Item>
                                        )
                                    })}
                                </ListGroup>
                            </div>
                        )}
                    </div>
                )
            } else {
                return (
                    <Container>
                        <h4>Uploading Files</h4>
                        <ProgressBar animated now={100} />
                        <h4>Please Wait ...</h4>
                    </Container>
                )
            }
        }
    }

    return (
        <div>
            <Form onSubmit={returnFilesUrl}>
                <Form.Control
                    required
                    type='file'
                    multiple
                    onChange={(e) => setFiles(e.target.files)}
                    className='mb-3'
                />

                {filesAndUploadButton()}
            </Form>
        </div>
    )
}
