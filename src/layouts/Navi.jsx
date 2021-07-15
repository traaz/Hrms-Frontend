import React from 'react'
import { Container, Menu } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Menu inverted>
                <Container>
                    <Menu.Item
                        name='HRMS'

                    />
                    <Menu.Item
                        name='Home'

                    />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button.Group>
                                <Button>Sign In</Button>
                                <Button.Or />
                                <Button positive>Sıgn Up</Button>
                            </Button.Group>
                        </Menu.Item>
                        </Menu.Menu>


                </Container>

            </Menu>
</div>
                )
}
