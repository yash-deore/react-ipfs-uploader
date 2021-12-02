import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

export const Navigation = () => {
    return (
        <div>
            <Navbar bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand
                        href='https://www.npmjs.com/package/react-ipfs-uploader'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        react-ipfs-uploader
                    </Navbar.Brand>

                    <Nav>
                        <Nav.Link
                            href='https://www.npmjs.com/package/react-ipfs-uploader'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            NPM Package
                        </Nav.Link>

                        <Nav.Link
                            href='https://discord.gg/bgY4TZecVu'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Developer Chat
                        </Nav.Link>

                        <Nav.Link
                            href='https://github.com/yash-deore/react-ipfs-uploader'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Github Repository
                        </Nav.Link>

                        <Nav.Link
                            href='https://github.com/yash-deore'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            My GitHub
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
