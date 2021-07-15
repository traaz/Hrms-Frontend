import React from 'react'
import Navi from './Navi'
import Section from './Section'
import { Grid } from 'semantic-ui-react'
import CandidatesList from '../pages/CandidatesList'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Section />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <CandidatesList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>



        </div>
    )
}
