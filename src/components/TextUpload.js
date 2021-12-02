import React, { useState } from 'react'
import { Form, Button, ProgressBar, Container } from 'react-bootstrap'
import { create as ipfsHttpClient } from 'ipfs-http-client'
const ipfs = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

export const TextUpload = ({ setUrl }) => {
    const [text, setText] = useState('')
    const [loading, setLoading] = useState(false)
    const [uploaded, setUploaded] = useState(false)
    const [textUrl, setTextUrl] = useState('')

    const uploadText = async (e) => {
        setLoading(true)
        e.preventDefault()

        try {
            const added = await ipfs.add(text)
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            setTextUrl(url)
            setUrl(url)
            setUploaded(true)
        } catch (err) {
            console.log('Error uploading the file : ', err)
        }
        setLoading(false)
    }

    const uploadButtonLoading = () => {
        if (text === '') return

        if (uploaded) {
            return (
                <h5>
                    ✅{' '}
                    <a href={textUrl} target='_blank' rel='noopener noreferrer'>
                        Text
                    </a>{' '}
                    Uploaded Successfully ✅
                </h5>
            )
        } else {
            if (loading) {
                return (
                    <Container>
                        <h4>Uploading Text</h4>
                        <ProgressBar animated now={100} />
                        <h4>Please Wait ...</h4>
                    </Container>
                )
            } else {
                return <Button type='submit'>Upload Text</Button>
            }
        }
    }

    const textForm = () => {
        if (loading || uploaded) {
            return (
                <Form>
                    <Form.Group className='mb-3'>
                        <Form.Label>Enter the Text :</Form.Label>

                        <Form.Control
                            onChange={(e) => setText(e.target.value)}
                            readOnly
                            as='textarea'
                            rows={3}
                        />
                    </Form.Group>

                    {uploadButtonLoading()}
                </Form>
            )
        } else {
            return (
                <Form onSubmit={uploadText}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Enter the Text :</Form.Label>

                        <Form.Control
                            onChange={(e) => setText(e.target.value)}
                            required
                            as='textarea'
                            rows={3}
                        />
                    </Form.Group>

                    {uploadButtonLoading()}
                </Form>
            )
        }
    }

    return <div>{textForm()}</div>
}
