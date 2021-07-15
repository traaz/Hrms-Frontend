import React, { useState, useEffect } from 'react'
import { Icon, Label, Menu, Table, Header } from 'semantic-ui-react'
import CandidatesService from '../services/candidatesServise'
export default function CandidatesList() {
    const [candidates, setCandidates] = useState([])
    useEffect(() => {
        let candidatesService = new CandidatesService();
        candidatesService.getCandidates().then(result => setCandidates(result.data.data))
    })





    return (
        <div>
            <Header as="h2">
                <Icon name="list alternate outline" />
                <Header.Content>Candidates List</Header.Content>
            </Header>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>E-mail address</Table.HeaderCell>
                        <Table.HeaderCell>Birth Year</Table.HeaderCell>


                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        candidates.map(candidates => {
                            <Table.Row>
                                <Table.Cell>{candidates.firstName}</Table.Cell>
                                <Table.Cell>{candidates.lastName}</Table.Cell>
                                <Table.Cell>{candidates.mail}</Table.Cell>
                                <Table.Cell>{candidates.birthYear}</Table.Cell>
                            </Table.Row>
                        })
                    }



                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
