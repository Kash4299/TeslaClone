import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Footer from './Footer'

function Home() {
    return (
        <Container>
            <Section
                title='Model S'
                description = "Our Online for Touchless Delivery"
                backgroundImage = "model-s.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
            <Section
                title='Model Y'
                description = "Our Online for Touchless Delivery"
                backgroundImage = "model-y.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
            <Section
                title='Model 3'
                description = "Our Online for Touchless Delivery"
                backgroundImage = "model-3.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
            <Section
                title='Model X'
                description = "Our Online for Touchless Delivery"
                backgroundImage = "model-x.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
            <Section
                title='Lowest Cost Solar Panels in America'
                description = "Money-back guarantee"
                backgroundImage = "solar-panel.jpg"
                leftBtnText = "Order now"
                rightBtnText = "Learn more"
            />
            <Section
                title='Solar for New Roofs'
                description = "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImage = "solar-roof.jpg"
                leftBtnText = "Order now"
                rightBtnText = "Learn more"
            />
            <Footer
                title='Accsessories'
                description = ""
                backgroundImage = "accessories.jpg"
                leftBtnText = "Shop now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    overflow-x: hidden;
`
